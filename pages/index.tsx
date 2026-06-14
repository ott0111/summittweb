import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Summit — Gaming Performance Optimization</title>
        <meta name="description" content="Summit optimizes your PC for peak gaming performance: FPS gains, input delay reduction, network optimization." />
      </Head>
      <Header />
      <main className="container">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <p className="text-sm uppercase text-[#a855f7] font-bold">Summit</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4">Unlock the performance your PC was meant to have.</h1>
            <p className="text-gray-300 mt-6 max-w-xl">Summit is the enterprise-grade gaming optimization platform that improves FPS, reduces input delay, and tunes your PC automatically for the best gaming experience — safely and reliably.</p>
            <div className="flex gap-4 mt-8">
              <a href="/download" className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] font-bold">Download</a>
              <a href="/pricing" className="px-6 py-3 rounded-lg border border-white/10">Buy Now</a>
            </div>
            <div className="mt-6 text-sm text-gray-400">Trusted by gamers worldwide • <strong>+22% avg FPS</strong> • 30-day money-back guarantee</div>
            <div className="mt-8 flex gap-6 text-sm text-gray-400">
              <div><strong className="text-white">3M+</strong><div>Downloads</div></div>
              <div><strong className="text-white">+22%</strong><div>Avg FPS</div></div>
              <div><strong className="text-white">4.9</strong><div>Average rating</div></div>
            </div>
          </div>
          <div className="glass p-6">
            <div className="h-64 bg-gradient-to-br from-[#0f172a] to-[#071127] rounded-xl flex items-center justify-center text-gray-400">Animated dashboard preview (Framer Motion)</div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">What Summit fixes</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="glass p-6"> <h3 className="font-bold">FPS & Stability</h3><p className="text-gray-400 mt-2">Reduce frame drops and increase sustained framerate.</p></div>
            <div className="glass p-6"> <h3 className="font-bold">Input Delay</h3><p className="text-gray-400 mt-2">Lower system and network latency for snappier control.</p></div>
            <div className="glass p-6"> <h3 className="font-bold">Network</h3><p className="text-gray-400 mt-2">Optimized routes and packet handling for competitive play.</p></div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Summit vs Generic Tweaks</h2>
          <div className="mt-6 glass p-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr><th></th><th>Summit</th><th>Generic Tweaks</th></tr>
              </thead>
              <tbody>
                <tr><td>Performance</td><td className="text-white">Enterprise-tested</td><td>Unreliable</td></tr>
                <tr><td>Safety</td><td className="text-white">Reversible changes</td><td>System risk</td></tr>
                <tr><td>Support</td><td className="text-white">Priority support</td><td>None</td></tr>
                <tr><td>Ease of use</td><td className="text-white">One-click profiles</td><td>Manual</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="glass p-4"> <strong>Is Summit safe?</strong><p className="text-gray-400">Yes — all changes are logged and reversible.</p></div>
            <div className="glass p-4"> <strong>Will it work on my PC?</strong><p className="text-gray-400">Works across modern Windows 10/11 hardware; run the scanner to confirm.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
