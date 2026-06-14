import { loadStripe } from '@stripe/stripe-js'

// This returns a promise that resolves to a Stripe instance in the browser.
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
