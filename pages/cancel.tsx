import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cancel(){
  return (
    <div>
      <Head><title>Checkout cancelled — Summit</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-4xl font-bold">Checkout cancelled</h1>
        <p className="text-gray-400 mt-4">No changes have been made. If you need help completing your purchase, contact support.</p>
        <div className="mt-6">
          <a href="/pricing" className="px-4 py-2 rounded border border-white/10">Back to Pricing</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
