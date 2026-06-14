import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Contact(){
  return (
    <div>
      <Head><title>Contact — Summit</title></Head>
      <Header />
      <main className="container py-12 max-w-2xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-gray-400 mt-4">Need help? Reach out and our support team will get back within one business day.</p>
        <form className="glass p-6 mt-6 grid gap-4">
          <input placeholder="Your name" className="p-3 bg-transparent border border-white/10 rounded" />
          <input placeholder="Email" className="p-3 bg-transparent border border-white/10 rounded" />
          <textarea placeholder="Message" className="p-3 bg-transparent border border-white/10 rounded h-32"></textarea>
          <button className="px-4 py-2 rounded bg-gradient-to-r from-[#7c3aed] to-[#a855f7] font-bold">Send message</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
