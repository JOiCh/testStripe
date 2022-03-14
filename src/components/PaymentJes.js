import React from 'react'
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
// import StatusMessages, {useMessages} from './../StatusMessages'

export default function PaymentJes() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const card = elements.getElement(CardElement)
    if(!stripe || !elements){
      return
    }

    console.log("card ele",card);
    console.log('stripe', stripe);

    // 製造支付 on server
    const { clientSecret } = await fetch('/create-payment-intent', {
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        paymentMethodType:'card',
        currency:'usd',
      }).then(res => res.json())
    })
    alert('payment intent created')

    // 客戶端確認支付
    const { paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,{
        payment_method:{
          card: elements.getElement(CardElement),
        }
      }
    )
    console.log(paymentIntent.id,':',paymentIntent.status);
  }
  return (
    // <Elements stripe={getStripe()}>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        onClick={() => {
          console.log('stripe', stripe)
        }}
      >
        Pay
      </button>
    </form>
    // </Elements>
  )
}
