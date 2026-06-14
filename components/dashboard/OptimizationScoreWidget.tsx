export default function OptimizationScoreWidget(){
  const score = 86
  return (
    <div className="glass p-4">
      <h4 className="font-bold">Optimization Score</h4>
      <div className="mt-3 text-3xl font-extrabold">{score}</div>
      <div className="mt-2 text-sm text-gray-400">Higher is better — run the scanner to improve your score.</div>
    </div>
  )
}
