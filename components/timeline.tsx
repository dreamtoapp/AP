interface TimelineItem {
  date: string
  title: string
  description: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute top-0 right-5 h-full w-1 bg-gray-200"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pr-12">
            {/* Timeline dot */}
            <div className="absolute top-2 right-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

            {/* Content */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-r-4 border-r-blue-600">
              <div className="font-bold text-blue-600 mb-2">{item.date}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
              <div className="text-gray-600 text-sm leading-relaxed">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
