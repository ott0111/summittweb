export default function RecommendedActionsWidget(){
  const recs = [
    'Run performance scanner',
    'Apply Pro game profile for Valorant',
    'Enable network optimizer'
  ]
  return (
    <div className="glass p-4">
      <h4 className="font-bold">Recommended Actions</h4>
      <ol className="mt-3 text-sm text-gray-300 list-decimal list-inside">
        {recs.map(r=> <li key={r} className="py-1">{r}</li>)}
      </ol>
    </div>
  )
}
