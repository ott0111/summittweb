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
        <section className="grid md:grid-cols-2 gap-10 items-center py-14">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#c7d2fe] shadow-[0_16px_50px_rgba(124,58,237,0.12)]">
              <span className="h-2 w-2 rounded-full bg-[#7c3aed]" /> Summit
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-[-0.04em] text-white">
              Unlock the performance your PC was meant to have.
            </h1>
            <p className="max-w-xl text-slate-300 text-lg leading-8">
              Summit is the premium gaming optimization suite that boosts FPS, reduces input lag, and tunes your system automatically with one click.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/download" className="button-primary">Download Summit</a>
              <a href="/pricing" className="button-secondary">View pricing</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="card-glow p-5 rounded-3xl border border-white/10">
                <p className="text-3xl font-bold text-white">3M+</p>
                <p className="text-sm text-slate-400">Downloads</p>
              </div>
              <div className="card-glow p-5 rounded-3xl border border-white/10">
                <p className="text-3xl font-bold text-white">+22%</p>
                <p className="text-sm text-slate-400">Avg FPS gain</p>
              </div>
              <div className="card-glow p-5 rounded-3xl border border-white/10">
                <p className="text-3xl font-bold text-white">4.9</p>
                <p className="text-sm text-slate-400">Average rating</p>
              </div>
            </div>
          </div>

          <div className="glass card-glow p-6 overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/15 to-transparent blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#071127]/90 p-6 shadow-[inset_0_0_80px_rgba(124,58,237,0.12)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#818cf8]">Performance</p>
                  <h2 className="mt-3 text-2xl font-bold text-white">Real-time optimization panel</h2>
                </div>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Live</span>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-[#0f172a]/95 p-5 border border-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.3)]">
                  <p className="text-sm text-slate-400">FPS boost</p>
                  <p className="mt-3 text-3xl font-semibold text-white">+18%</p>
                </div>
                <div className="rounded-3xl bg-[#0f172a]/95 p-5 border border-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.3)]">
                  <p className="text-sm text-slate-400">Input latency</p>
                  <p className="mt-3 text-3xl font-semibold text-white">-24ms</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">CPU</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">GPU</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Network</span>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white">What Summit fixes</h2>
          <div className="grid gap-6 mt-8 md:grid-cols-3">
            <div className="card-glow p-8 rounded-[2rem]">
              <h3 className="text-xl font-semibold text-white">FPS & Stability</h3>
              <p className="mt-3 text-slate-400">Reduce frame drops, smooth out performance, and sustain higher framerates for every title.</p>
            </div>
            <div className="card-glow p-8 rounded-[2rem]">
              <h3 className="text-xl font-semibold text-white">Input Delay</h3>
              <p className="mt-3 text-slate-400">Lower system and network latency so your controls feel more immediate.</p>
            </div>
            <div className="card-glow p-8 rounded-[2rem]">
              <h3 className="text-xl font-semibold text-white">Network Optimization</h3>
              <p className="mt-3 text-slate-400">Optimize routing and packet handling for the smoothest competitive experience.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white">Summit vs Generic Tweaks</h2>
          <div className="mt-8 glass p-8 rounded-[2rem] border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="pb-4"></th>
                    <th className="pb-4 text-white">Summit</th>
                    <th className="pb-4">Generic Tweaks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-4">Performance</td>
                    <td className="py-4 text-white">Enterprise-tested</td>
                    <td className="py-4">Unreliable</td>
                  </tr>
                  <tr>
                    <td className="py-4">Safety</td>
                    <td className="py-4 text-white">Reversible changes</td>
                    <td className="py-4">System risk</td>
                  </tr>
                  <tr>
                    <td className="py-4">Support</td>
                    <td className="py-4 text-white">Priority support</td>
                    <td className="py-4">None</td>
                  </tr>
                  <tr>
                    <td className="py-4">Ease of use</td>
                    <td className="py-4 text-white">One-click profiles</td>
                    <td className="py-4">Manual</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-16 mb-20">
          <h2 className="text-3xl font-bold text-white">FAQ</h2>
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <div className="card-glow p-6 rounded-[2rem]">
              <strong className="text-white">Is Summit safe?</strong>
              <p className="mt-3 text-slate-400">Yes — all changes are logged, reversible, and built for trusted gamers and pros.</p>
            </div>
            <div className="card-glow p-6 rounded-[2rem]">
              <strong className="text-white">Will it work on my PC?</strong>
              <p className="mt-3 text-slate-400">Works across modern Windows 10/11 hardware; run Summit's scanner to confirm compatibility.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
