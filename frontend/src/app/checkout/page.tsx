"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { ShieldCheck, Lock } from 'lucide-react';
import Script from 'next/script';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getCartTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'razorpay'
  });

  useEffect(() => {
    setMounted(true);
    if (items.length === 0) {
      router.push('/shop');
    }
  }, [items, router]);

  if (!mounted || items.length === 0) return null;

  const total = getCartTotal();
  const shipping = total > 1000 ? 0 : 50; // Free shipping over 1000
  const finalTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData.paymentMethod === 'cod') {
        // Simulate COD Order API Call
        console.log("Placing COD Order:", formData, items);
        setTimeout(() => {
          clearCart();
          alert("Order Placed Successfully! (COD)");
          router.push('/dashboard'); // Or success page
        }, 1500);
      } else {
        // Simulate Razorpay Payment Flow
        // In reality, you'd call backend to create an order, then open Razorpay options
        console.log("Initiating Razorpay Payment for:", finalTotal);
        
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_mock", 
          amount: finalTotal * 100, 
          currency: "INR",
          name: "Guntur Mirchi Kaaram",
          description: "Authentic Andhra Spices Purchase",
          handler: function (response: any) {
             console.log(response.razorpay_payment_id);
             clearCart();
             alert("Payment Successful! Order Placed.");
             router.push('/dashboard');
          },
          prefill: {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              contact: formData.phone
          },
          theme: {
              color: "#c1121f" // brand red
          }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any){
           alert("Payment Failed. Please try again.");
           setLoading(false);
        });
        rzp.open();
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-brand-dark mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Checkout Form */}
          <div className="w-full lg:w-2/3">
            <form id="checkout-form" onSubmit={handlePayment} className="space-y-8">
              
              {/* Contact Info */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center">
                  <span className="bg-brand-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center">
                  <span className="bg-brand-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Shipping Address
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                    <input required type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="House number and street name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <select required name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow">
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Maharashtra">Maharashtra</option>
                        {/* Add more states */}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
                      <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none transition-shadow" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center">
                  <span className="bg-brand-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  <label className={`block flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${formData.paymentMethod === 'razorpay' ? 'border-brand-red bg-brand-yellow/10' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input type="radio" name="paymentMethod" value="razorpay" checked={formData.paymentMethod === 'razorpay'} onChange={handleInputChange} className="h-5 w-5 text-brand-red focus:ring-brand-red" />
                    <span className="ml-3 font-medium text-brand-dark">Pay Online (Cards, UPI, NetBanking)</span>
                  </label>
                  
                  <label className={`block flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-brand-red bg-brand-yellow/10' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleInputChange} className="h-5 w-5 text-brand-red focus:ring-brand-red" />
                    <span className="ml-3 font-medium text-brand-dark">Cash on Delivery (COD)</span>
                  </label>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex-1 pr-4">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-gray-500 block text-xs">Qty: {item.quantity} x ₹{item.price}</span>
                    </div>
                    <span className="font-medium text-gray-800">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 border-t border-gray-100 pt-6 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xl font-bold text-brand-dark">
                  <span>Total</span>
                  <span className="text-brand-red">₹{finalTotal}</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                form="checkout-form" 
                disabled={loading}
                className={`w-full bg-brand-red hover:bg-brand-dark-red text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors shadow-md ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing...' : `Pay ₹${finalTotal}`}
              </button>
              
              <div className="mt-6 flex flex-col items-center justify-center text-sm text-gray-500 space-y-2">
                <div className="flex items-center">
                  <Lock size={16} className="mr-1" /> Secure 256-bit SSL Encryption
                </div>
                <div className="flex items-center">
                  <ShieldCheck size={16} className="mr-1" /> 100% Authentic Product Guarantee
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
