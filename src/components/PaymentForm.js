import React from 'react'
import {CardElement} from '@stripe/react-stripe-js'

export default function PaymentForm () {
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('yoyoyo');
    } 
    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS}/>
            <button>Pay</button>
        </form>
    )
}
