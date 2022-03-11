import { Elements } from '@stripe/react-stripe-js'
import getStripe from './src/utils/stripe'
export const wrapRootElement = ({ element }) => {
  return <Elements stripe={getStripe()}>{element}</Elements>
}
