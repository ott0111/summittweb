import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

export default function About(){
  return (
    <div>
      <Head><title>About — Summit</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">About Summit</h1>
        <p className="text-gray-400 mt-4">Summit was built by gamers and systems engineers to make competitive play more reliable. We combine safe system engineering with modern UX to deliver measurable results.</p>
        <section className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="glass p-6"><h3 className="font-bold">Mission</h3><p className="text-gray-400">Increase performance while preserving system stability.</p></div>
          <div className="glass p-6"><h3 className="font-bold">Team</h3><p className="text-gray-400">Engineers, esports players, and network specialists.</p></div>
          <div className="glass p-6"><h3 className="font-bold">Security</h3><p className="text-gray-400">We follow best practices and keep reversible logs.</p></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
