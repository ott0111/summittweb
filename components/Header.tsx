import Link from 'next/link'

export default function Header(){
  return (
    <header className="glass p-4 mb-8">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl bg-clip-text text-transparent" style={{background: 'linear-gradient(90deg,#7c3aed,#a855f7)'}}>Summit</Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/download" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold">Download</Link>
        </nav>
      </div>
    </header>
  )
}
