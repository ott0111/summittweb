import {useState} from 'react'

export default function PricingToggle(){
  const [yearly, setYearly] = useState(true)
  return (
    <div className="flex items-center gap-4">
      <div className="text-sm text-gray-400">Monthly</div>
      <button onClick={()=>setYearly(!yearly)} className="px-3 py-1 rounded-full bg-white/6">
        {yearly ? 'Yearly (save 20%)' : 'Monthly'}
      </button>
      <div className="text-sm text-gray-400">Yearly</div>
    </div>
  )
}
