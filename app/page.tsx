"use client"

import { useState } from "react"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import OverviewSection from "@/components/sections/overview-section"
import FinancialSection from "@/components/sections/financial-section"
import MarketSection from "@/components/sections/market-section"
import PlanSection from "@/components/sections/plan-section"
import InvestmentSection from "@/components/sections/investment-section"
import Footer from "@/components/footer"

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const renderActiveSection = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewSection />
      case "financial":
        return <FinancialSection />
      case "market":
        return <MarketSection />
      case "plan":
        return <PlanSection />
      case "investment":
        return <InvestmentSection />
      default:
        return <OverviewSection />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-5" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <Header />
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="animate-in fade-in duration-500">{renderActiveSection()}</div>
        <Footer />
      </div>
    </div>
  )
}
