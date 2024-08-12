'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../checkout/checkoutform/page'
// Load your publishable key from Stripe
const stripePromise = loadStripe("pk_test_51PmGTfGJLYc4RI3yEmoa6WocOdegHedL8dieT9wRkIHVUYqyn4IfD6HqB16NRdFZLpebmkaoBYUU9D2LzuquxyVM00jGs1YuSx"); // Replace with your Stripe publishable key

const CheckoutPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default CheckoutPage;
