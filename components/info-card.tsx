import type React from "react"
import type { LucideIcon } from "lucide-react"

interface InfoCardProps {
  title: string
  icon: LucideIcon
  content: React.ReactNode
}

export default function InfoCard({ title, icon: Icon, content }: InfoCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-t-blue-600">
      <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
        <div className="bg-blue-50 w-9 h-9 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-blue-600" />
        </div>
        {title}
      </h4>
      <div className="text-gray-700 text-sm leading-relaxed">{content}</div>
    </div>
  )
}
