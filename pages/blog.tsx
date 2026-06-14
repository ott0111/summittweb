import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Blog(){
  return (
    <div>
      <Head><title>Blog — Summit</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-gray-400 mt-4">Updates, performance tips, and engineering deep-dives.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="glass p-6"> <h3 className="font-bold">How we measure FPS improvements</h3><p className="text-gray-400">Short excerpt...</p></div>
          <div className="glass p-6"> <h3 className="font-bold">Network tuning for competitive play</h3><p className="text-gray-400">Short excerpt...</p></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
