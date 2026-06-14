export default function Footer(){
  return (
    <footer className="mt-20 glass border-white/10 py-10 text-sm text-slate-300/80">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Summit — All rights reserved.</div>
          <div className="flex flex-wrap gap-4 text-slate-400/90">
            <span className="hover:text-white transition">Terms</span>
            <span className="hover:text-white transition">Privacy</span>
            <span className="hover:text-white transition">Contact</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
