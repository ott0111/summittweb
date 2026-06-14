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
    const { orderID } = req.body
    if (!orderID) return res.status(400).json({ error: 'Missing orderID' })

    const token = await getAccessToken()
    const captureRes = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (!captureRes.ok) {
      const txt = await captureRes.text()
      console.error('Capture failed', txt)
      return res.status(500).json({ error: 'Capture failed' })
    }

    const data = await captureRes.json()
    return res.status(200).json(data)
  } catch (err: any) {
    console.error('Capture order error', err)
    return res.status(500).json({ error: err.message || 'Internal error' })
  }
}
