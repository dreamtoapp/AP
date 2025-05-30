"use client"

import {
  BarChart3,
  BookOpenText,
  HandCoins,
  LayoutDashboard,
  LineChart,
  ListTodo,
  Users,
  Workflow,
} from 'lucide-react';

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: "overview", label: "نظرة عامة", icon: LayoutDashboard },
    { id: "financial", label: "الجدوى المالية", icon: LineChart },
    { id: "market", label: "دراسة السوق", icon: BarChart3 },
    { id: "plan", label: "خطة التنفيذ", icon: ListTodo },
    { id: "investment", label: "فرصة الاستثمار", icon: HandCoins },
    { id: "other", label: "مصطلحات وتعريفات", icon: BookOpenText },
    { id: "JObs", label: "المهام الوظيفية", icon: Users },
    { id: "Applife", label: "مراحل التطوير", icon: Workflow },
    { id: "Myassits", label: "الاصول", icon: Workflow },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 p-4 font-medium transition-all duration-300 border-b-3 ${activeTab === tab.id
                ? "border-blue-600 text-blue-600 bg-blue-50"
                : "border-transparent text-gray-600 hover:bg-gray-50"
                }`}
            >
              <Icon className="w-4 h-4" />
              <span className="inline text-sm">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
