import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Success(){
  return (
    <div>
      <Head><title>Success — Summit</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-4xl font-bold">Payment successful</h1>
        <p className="text-gray-400 mt-4">Thank you — your purchase is complete. Check your email for confirmation and next steps.</p>
        <div className="mt-6">
          <a href="/dashboard" className="px-4 py-2 rounded bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white">Go to Dashboard</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
