import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Download(){
  return (
    <div>
      <Head><title>Download — Summit</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-4xl font-extrabold">Download Summit</h1>
        <p className="text-gray-400 mt-2">Download the trusted installer for Windows. All changes are reversible.</p>
        <div className="mt-6">
          <a href="/YZYToolkit.exe" className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] font-bold" download>Download YZYToolkit.exe</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
