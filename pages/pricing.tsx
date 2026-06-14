import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PricingToggle from '../components/PricingToggle'
import { useState, useEffect } from 'react'

export default function Pricing(){
  const [loading, setLoading] = useState(false)

  const handleCheckout = async (priceId?: string) => {
    setLoading(true)
    try {
      // For PayPal flow we will call create-order API with an amount
      // priceId is not used here; instead use predefined amounts
      const amount = priceId || process.env.NEXT_PUBLIC_PRICE_PRO_VALUE || '9.99'
      const resp = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
      })
      const data = await resp.json()
      if (!data?.id) throw new Error('No order id returned')
      // Client can render PayPal Buttons or redirect — we will open PayPal approval in a new window
      // Return approval link if available
      const approval = data.links?.find((l: any) => l.rel === 'approve')?.href
      if (approval) window.location.href = approval
    } catch (err) {
      console.error('Checkout error', err)
      alert('Unable to start checkout. Check console for details.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    // Dynamically load PayPal SDK for client-side buttons
    const existing = document.getElementById('paypal-sdk')
    if (!existing) {
      const script = document.createElement('script')
      script.id = 'paypal-sdk'
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`
      script.async = true
      document.body.appendChild(script)
      script.onload = () => renderButtons()
    } else {
      // If SDK is already present, render immediately
      renderButtons()
    }
  }, [])

  // declare global paypal type for TypeScript
  function renderButtons(){
    try{
      // @ts-ignore
      if (!window.paypal) return
      // remove any existing buttons
      const container = document.getElementById('paypal-buttons-container')
      if (!container) return
      // @ts-ignore
      window.paypal.Buttons({
        createOrder: async (_data: any, actions: any) => {
          const amount = (currentAmount && String(currentAmount)) || String(process.env.NEXT_PUBLIC_PRICE_PRO_VALUE || '9.99')
          const res = await fetch('/api/paypal/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
          })
          const data = await res.json()
          return data.id
        },
        onApprove: async (_data: any, actions: any) => {
          try {
            const orderID = _data.orderID || _data.orderID
            const resp = await fetch('/api/paypal/capture-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ orderID })
            })
            const capture = await resp.json()
            // TODO: record order in DB, provision subscription
            window.location.href = '/success'
          } catch (err) {
            console.error('Capture error', err)
            window.location.href = '/cancel'
          }
        },
        onCancel: () => { window.location.href = '/cancel' },
        onError: (err: any) => { console.error('PayPal Buttons error', err); alert('Payment error') }
      }).render('#paypal-buttons-container')
    }catch(e){console.error(e)}
  }

  // local state to allow passing amount when creating order
  const [currentAmount, setCurrentAmount] = useState<string | null>(null)

  return (
    <div>
      <Head>
        <title>Pricing — Summit</title>
      </Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-4xl font-extrabold">Plans that scale with your game</h1>
        <p className="text-gray-400 mt-4 max-w-2xl">Flexible billing, enterprise-grade support, and profiles optimized for every title.</p>
        <div className="mt-8"><PricingToggle /></div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="glass p-6">
            <h3 className="font-bold">Starter</h3>
            <p className="text-gray-400 mt-2">Basic optimization for casual players.</p>
            <div className="mt-4">
              <button onClick={()=>{ setCurrentAmount(process.env.NEXT_PUBLIC_PRICE_STARTER_VALUE || '3.99'); renderButtons(); document.getElementById('paypal-buttons-container')?.scrollIntoView({behavior:'smooth'}) }} className="px-4 py-2 rounded bg-white/6">Get Starter</button>
            </div>
          </div>
          <div className="glass p-6 border-2 border-indigo-600">
            <h3 className="font-bold">Pro</h3>
            <p className="text-gray-400 mt-2">Advanced tuning, profiles, and priority support.</p>
            <div className="mt-4">
              <button onClick={()=>{ setCurrentAmount(process.env.NEXT_PUBLIC_PRICE_PRO_VALUE || '9.99'); renderButtons(); document.getElementById('paypal-buttons-container')?.scrollIntoView({behavior:'smooth'}) }} className="px-4 py-2 rounded bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold">Buy Pro {loading ? '...' : ''}</button>
            </div>
          </div>
          <div className="glass p-6">
            <h3 className="font-bold">Elite</h3>
            <p className="text-gray-400 mt-2">Team and enterprise features with SLAs and analytics.</p>
            <div className="mt-4">
              <button onClick={()=>{ setCurrentAmount(process.env.NEXT_PUBLIC_PRICE_ELITE_VALUE || '29.99'); renderButtons(); document.getElementById('paypal-buttons-container')?.scrollIntoView({behavior:'smooth'}) }} className="px-4 py-2 rounded bg-white/6">Contact Sales</button>
            </div>
          </div>
        </div>
        <div className="mt-8 glass p-6">
          <h3 className="font-bold">Complete purchase</h3>
          <p className="text-gray-400 mt-2">Use PayPal to complete your purchase securely.</p>
          <div id="paypal-buttons-container" className="mt-4"></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
