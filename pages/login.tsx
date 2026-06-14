import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useState, FormEvent } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      setMessage('Signed in successfully')
    } catch (err: unknown) {
      if (err instanceof Error) setMessage(err.message)
      else setMessage('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Head><title>Login — Summit</title></Head>
      <Header />
      <main className="container py-12 max-w-lg">
        <h1 className="text-2xl font-bold">Sign in to Summit</h1>
        <form onSubmit={handleSubmit} className="glass p-6 mt-6 grid gap-4">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="p-3 bg-transparent border border-white/10 rounded" />
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="p-3 bg-transparent border border-white/10 rounded" />
          <button disabled={loading} className="px-4 py-2 rounded bg-gradient-to-r from-[#7c3aed] to-[#a855f7] font-bold">{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
        {message && <div className="mt-4 text-sm text-gray-300">{message}</div>}
        <p className="text-sm text-gray-400 mt-4">Don’t have an account? <Link href="/register" className="text-white">Create one</Link></p>
      </main>
      <Footer />
    </div>
  )
}
