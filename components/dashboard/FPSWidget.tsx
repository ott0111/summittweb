export default function FPSWidget(){
  // mock values
  const before = 78
  const after = 95
  const gain = Math.round(((after - before)/before)*100)
  return (
    <div className="glass p-4">
      <h4 className="font-bold">FPS Improvement</h4>
      <div className="mt-3 text-3xl font-extrabold">{after} <span className="text-sm font-normal text-gray-400">avg FPS</span></div>
      <div className="mt-2 text-sm text-gray-400">Estimated gain: <strong className="text-white">+{gain}%</strong></div>
    </div>
  )
}
