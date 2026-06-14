import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simple webhook placeholder — for production use, verify the signature and use raw request body
  try {
    const event = req.body
    // TODO: verify Stripe signature using STRIPE_WEBHOOK_SECRET and raw body
    console.log('Received webhook:', event.type || event)
    // Handle subscription events (checkout.session.completed, invoice.paid, etc.)
    return res.status(200).json({ received: true })
  } catch (err: any) {
    console.error('Webhook handler error', err)
    return res.status(400).send(`Webhook error: ${err.message || err}`)
  }
}
