export default function Footer(){
  return (
    <footer className="mt-20 py-10 text-sm text-gray-400">
      <div className="container">
        <div className="flex justify-between">
          <div>© {new Date().getFullYear()} Summit — All rights reserved.</div>
          <div className="space-x-4">Terms · Privacy · Contact</div>
        </div>
      </div>
    </footer>
  )
}
