import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Docs(){
  return (
    <div>
      <Head><title>Docs — Summit</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-gray-400 mt-4">Setup guides, activation, and troubleshooting.</p>
        <section className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="glass p-6"> <h3 className="font-bold">Installation</h3><p className="text-gray-400">Step-by-step installation instructions.</p></div>
          <div className="glass p-6"> <h3 className="font-bold">Activation</h3><p className="text-gray-400">How to activate your license.</p></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
