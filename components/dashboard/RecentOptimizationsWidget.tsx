export default function RecentOptimizationsWidget(){
  const items = [
    {title:'FPS profile applied', time:'2h ago'},
    {title:'Network route optimized', time:'1d ago'},
    {title:'Registry cleanup', time:'3d ago'}
  ]
  return (
    <div className="glass p-4">
      <h4 className="font-bold">Recent Optimizations</h4>
      <ul className="mt-3 text-sm text-gray-300">
        {items.map(it=> (
          <li key={it.title} className="py-2 border-b border-white/6">{it.title} <div className="text-xs text-gray-500">{it.time}</div></li>
        ))}
      </ul>
    </div>
  )
}
