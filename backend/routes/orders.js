const express = require('express');
const {
  createOrder,
  verifyPaymentAndSaveOrder,
  createCODOrder,
  getUserOrders
} = require('../controllers/orderController');

const router = express.Router();

// Payment routes
router.post('/create-order', createOrder);
router.post('/verify-payment', verifyPaymentAndSaveOrder);

// COD route
router.post('/cod', createCODOrder);

// User routes
router.get('/user/:uid', getUserOrders);

module.exports = router;
