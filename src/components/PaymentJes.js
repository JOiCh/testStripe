import React from 'react'
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import getStripe from '../utils/stripe'

export default function PaymentJes() {
  const stripe = useStripe()
  return (
    // <Elements stripe={getStripe()}>
    <form>
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
