import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  title: string
  icon: LucideIcon
}

export default function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-4 border-b-2 border-gray-200 flex items-center gap-3">
      <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      {title}
    </h2>
  )
}
