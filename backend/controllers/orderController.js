const { db } = require('../config/firebase');
const razorpay = require('../config/razorpay');
const crypto = require('crypto');

// Create a new Razorpay Order
const createOrder = async (req, res) => {
  try {
    const { amount, currency, receipt, notes } = req.body;

    const options = {
      amount: amount * 100, // amount in the smallest currency unit (paise)
      currency: currency || "INR",
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {}
    };

    const order = await razorpay.orders.create(options);
    
    if (!order) {
      return res.status(500).json({ message: "Failed to create Razorpay order" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

// Verify payment and save order
const verifyPaymentAndSaveOrder = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      orderDetails
    } = req.body;

    // Verify signature
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');

    if (generated_signature !== razorpay_signature) {
       return res.status(400).json({ message: "Payment verification failed" });
    }

    // Save order to Firestore
    const newOrder = {
      ...orderDetails,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      paymentStatus: 'Paid',
      status: 'Placed',
      createdAt: new Date().toISOString()
    };

    const docRef = await db.collection('orders').add(newOrder);

    // TODO: Trigger Email/SMS/WhatsApp notifications here

    res.status(200).json({ message: 'Order placed successfully', id: docRef.id });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error saving order', error: error.message });
  }
};

// Create COD Order
const createCODOrder = async (req, res) => {
  try {
    const { orderDetails } = req.body;

    const newOrder = {
      ...orderDetails,
      paymentMethod: 'COD',
      paymentStatus: 'Pending',
      status: 'Placed',
      createdAt: new Date().toISOString()
    };

    const docRef = await db.collection('orders').add(newOrder);

    // TODO: Trigger Email/SMS/WhatsApp notifications here

    res.status(200).json({ message: 'COD Order placed successfully', id: docRef.id });
  } catch (error) {
    console.error('Error creating COD order:', error);
    res.status(500).json({ message: 'Error creating COD order', error: error.message });
  }
};


// Get User Orders
const getUserOrders = async (req, res) => {
  try {
    const { uid } = req.params;
    const ordersRef = db.collection('orders').where('userId', '==', uid);
    const snapshot = await ordersRef.get();

    if (snapshot.empty) {
      return res.status(200).json([]);
    }

    const orders = [];
    snapshot.forEach(doc => {
      orders.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};

module.exports = {
  createOrder,
  verifyPaymentAndSaveOrder,
  createCODOrder,
  getUserOrders
};
