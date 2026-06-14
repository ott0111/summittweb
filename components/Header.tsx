import Link from 'next/link'

export default function Header(){
  return (
    <header className="glass border-white/10 px-6 py-5 mb-8 backdrop-blur-xl">
      <div className="container flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent" style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }}>
          Summit
        </Link>
        <nav className="hidden lg:flex gap-6 items-center text-sm text-slate-200/85">
          <Link href="/features" className="transition hover:text-white">Features</Link>
          <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
          <Link href="/docs" className="transition hover:text-white">Docs</Link>
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/blog" className="transition hover:text-white">Blog</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </nav>
        <div className="flex gap-3">
          <Link href="/download" className="btn-primary">Download</Link>
          <Link href="/pricing" className="btn-secondary">Pricing</Link>
        </div>
      </div>
    </header>
  )
}
