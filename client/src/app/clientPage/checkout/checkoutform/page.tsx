'use client'
import { useState, useEffect } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../../context';
import { useRouter } from "next/navigation";
import axios from'axios'
// Load your publishable key from Stripe

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const {cartIds,totalAmount } = useCart();
  const userId: number = JSON.parse(localStorage.getItem("user") || '{}').id;
  const [clientSecret, setClientSecret] = useState<string | null>(null);


  console.log('cards',cartIds)
  console.log('amount',totalAmount)
  console.log('user',userId)



  useEffect(()=>{
    console.log('this is',totalAmount);
    
    const payObj = {
        amount: totalAmount,
        cartIds:cartIds,
        userId:userId
    }
    axios.post('http://localhost:3000/payment/checkout',payObj)
    .then((response)=>{
        console.log(response)
        setClientSecret(response.data.clientSecret);
        console.log('paid')
    })
    .catch((err)=>{console.log(err);
    })
  },[userId,totalAmount,cartIds])

console.log(clientSecret);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } else if (paymentIntent?.status === 'succeeded') {
      router.push("/clientPage/checkout/succeed/")      // You might want to handle success, like redirecting or updating UI
    }
  };

  return (
    // onSubmit={handleSubmit}
    <form style={{
        width: '669px',
        marginLeft: '30%',
        marginTop: '12%',
        backgroundColor:'#f5f5f5'
    }}  >
      <h1>Checkout</h1>
      <div className="InputContainer">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: 'black',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="visaCard">
          <svg viewBox="0 0 48 48" height="23" width="23" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg" className="logo">
            <path d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path>
            <path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path>
            <path d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" fill="#ff3d00"></path>
          </svg>
        </div>
      </div>
      <button onClick={handleSubmit} type="submit" disabled={!stripe} style={{position:'absolute' , backgroundColor:'#db4444',color:'#f5f5f5', borderRadius:'7px',width:'175px',fontSize:'x-large', marginTop:'8%',marginLeft:'13%'}}>Pay</button>
    </form>
  );
};



export default CheckoutForm;
