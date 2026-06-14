import Head from 'next/head'
import Link from 'next/link'
import FPSWidget from '../../components/dashboard/FPSWidget'
import SystemHealthWidget from '../../components/dashboard/SystemHealthWidget'
import OptimizationScoreWidget from '../../components/dashboard/OptimizationScoreWidget'
import PCSpecsWidget from '../../components/dashboard/PCSpecsWidget'
import RecentOptimizationsWidget from '../../components/dashboard/RecentOptimizationsWidget'
import RecommendedActionsWidget from '../../components/dashboard/RecommendedActionsWidget'

export default function Dashboard(){
  return (
    <div className="min-h-screen bg-[#06060a] text-white">
      <Head><title>Dashboard — Summit</title></Head>
      <div className="flex">
        <aside className="w-64 p-6 glass min-h-screen">
          <h2 className="font-bold text-xl">Summit</h2>
          <nav className="mt-6 flex flex-col gap-3">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/optimizations">Optimizations</Link>
            <Link href="/dashboard/scanner">Performance Scanner</Link>
            <Link href="/dashboard/profiles">Game Profiles</Link>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <FPSWidget />
            <SystemHealthWidget />
            <OptimizationScoreWidget />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <PCSpecsWidget />
            <RecentOptimizationsWidget />
            <RecommendedActionsWidget />
          </div>
        </main>
      </div>
    </div>
  )
}
