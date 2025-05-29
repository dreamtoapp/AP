import { type LucideIcon, TrendingUp } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  growth?: boolean
}

export default function MetricCard({ title, value, description, icon: Icon, growth }: MetricCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-blue-600">
      <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
        <div className="bg-blue-50 w-9 h-9 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-blue-600" />
        </div>
        {title}
      </h4>
      <div className="text-2xl font-bold text-blue-600 mb-2">{value}</div>
      {growth && (
        <div className="text-green-600 font-semibold flex items-center gap-1 mb-2">
          <TrendingUp className="w-4 h-4" />
          عائد تنافسي ومضمون
        </div>
      )}
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
