import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const features = [
  {title: 'FPS Optimization', desc: 'Stabilize framerate and reduce stuttering.'},
  {title: 'Input Delay Reduction', desc: 'Lower latency for more responsive controls.'},
  {title: 'Network Optimization', desc: 'Reduce packet loss and jitter.'},
  {title: 'Registry & Windows Tweaks', desc: 'Safe, reversible system improvements.'},
  {title: 'Game Profiles', desc: 'Per-game presets tuned by expert engineers.'},
  {title: 'Automatic Scans', desc: 'One-click performance diagnostics.'}
]

export default function Features(){
  return (
    <div>
      <Head><title>Features — Summit</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-4xl font-extrabold">Features</h1>
        <p className="text-gray-400 mt-2">Everything you need to squeeze more performance out of your PC.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {features.map(f=> (
            <div key={f.title} className="glass p-6">
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-gray-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
