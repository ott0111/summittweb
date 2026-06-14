import Head from 'next/head'
import Link from 'next/link'

export default function Admin(){
  return (
    <div className="min-h-screen bg-[#07070b] text-white">
      <Head><title>Admin — Summit</title></Head>
      <div className="container py-12">
        <h1 className="text-2xl font-bold">Admin Panel (Skeleton)</h1>
        <p className="text-gray-400 mt-2">User management, analytics, and content tools will appear here.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="glass p-4">User Management</div>
          <div className="glass p-4">Analytics</div>
          <div className="glass p-4">Coupons & Promotions</div>
        </div>
        <div className="mt-6">
          <Link href="/dashboard" className="px-4 py-2 rounded border border-white/10">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
