export default function SystemHealthWidget(){
  const health = 92
  return (
    <div className="glass p-4">
      <h4 className="font-bold">System Health</h4>
      <div className="mt-3 text-3xl font-extrabold">{health}%</div>
      <div className="mt-2 text-sm text-gray-400">CPU: 23% • GPU: 41% • RAM: 47%</div>
    </div>
  )
}
