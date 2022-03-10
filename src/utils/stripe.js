import { loadStripe } from '@stripe/stripe-js/pure'

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.GATSBY_STRIPE_PUBLISHABLE_KEY
    ) //not let otherd know your key
  }
  return stripePromise
}

export default getStripe