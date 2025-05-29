interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex flex-col">
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-85">{label}</div>
    </div>
  )
}
