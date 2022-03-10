import React from 'react'
import { CardElement, Elements } from '@stripe/react-stripe-js'
import getStripe from '../utils/stripe'

export default function PaymentJes() {
  return (
    <Elements stripe={getStripe()}>
      <form>
        <CardElement />
        <button>Pay</button>
      </form>
    </Elements>
  )
}
