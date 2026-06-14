import type { NextApiRequest, NextApiResponse } from 'next'

const PAYPAL_API = process.env.PAYPAL_MODE === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com'

async function getAccessToken() {
  const client = process.env.PAYPAL_CLIENT_ID || ''
  const secret = process.env.PAYPAL_CLIENT_SECRET || ''
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  })
  if (!res.ok) throw new Error('Failed to get PayPal access token')
  const data = await res.json()
  return data.access_token
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')
  try {
    const { amount, currency = 'USD' } = req.body
    if (!amount) return res.status(400).json({ error: 'Missing amount' })

    const token = await getAccessToken()
    const orderRes = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{ amount: { currency_code: currency, value: String(amount) } }]
      })
    })

    if (!orderRes.ok) {
      const text = await orderRes.text()
      console.error('Create order failed', text)
      return res.status(500).json({ error: 'Failed creating order' })
    }

    const order = await orderRes.json()
    return res.status(200).json(order)
  } catch (err: any) {
    console.error('Create order error', err)
    return res.status(500).json({ error: err.message || 'Internal error' })
  }
}
