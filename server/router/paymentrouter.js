
const express = require('express');
const router = express.Router();
const paymentcontroller = require('../controller/paymentcontroller'); // Adjust the path to your categories controller

// Add a new category
router.post('/checkout', paymentcontroller.addPayment);



module.exports = router;
