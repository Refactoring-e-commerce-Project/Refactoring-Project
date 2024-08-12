// routes/checkout.js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51PmGTfGJLYc4RI3yLAfbrcUe6u0gIo2l4lEcA0NstyDHwyIHv3yW4xbOM0MvNmg5c7GfdtUJssgouHfoQx4BddtS00hEPmhSzZ');
const { Cart, Payment } = require('../database/index');
const addPayment = ( async (req, res) => {
    try {
      const { userId, cartIds, amount } = req.body;
  
      // Create a payment intent with Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Amount in cents
        currency: 'usd',
      });
  
      // Create a payment record in your database
      const payment = await Payment.create({
        userId,
        stripePaymentIntentId: paymentIntent.id,
        amount,
        status: 'pending',
      });
  
      // Update cart items to link them with the payment
      await Cart.update(
        { paymentId: payment.id },
        { where: { id: cartIds } }
      );
     //Destroy the card
      await Cart.destroy({
        where: {
          id: cartIds
        }
      });
  
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error during checkout:', error);
      res.status(500).send('Internal Server Error');
    }
  })
  



module.exports = {addPayment};
