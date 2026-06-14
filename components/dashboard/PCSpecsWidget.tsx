export default function PCSpecsWidget(){
  const specs = [
    ['CPU','Intel Core i7-12700K'],
    ['GPU','NVIDIA RTX 3080'],
    ['RAM','32GB DDR5'],
    ['OS','Windows 11 Pro']
  ]
  return (
    <div className="glass p-4">
      <h4 className="font-bold">PC Specs</h4>
      <ul className="mt-3 text-sm text-gray-300">
        {specs.map(s=> (
          <li key={s[0]} className="py-1"><strong className="text-white">{s[0]}:</strong> {s[1]}</li>
        ))}
      </ul>
    </div>
  )
}
