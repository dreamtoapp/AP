"use client"

import { useState } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import SourceCodeContribution from '@/components/Myassits';
import Navigation from '@/components/navigation';
import DevelopmentTimeline from '@/components/sections/Applife';
import FinancialSection from '@/components/sections/financial-section';
import InvestmentSection from '@/components/sections/investment-section';
import JobRolesDashboard from '@/components/sections/JobsDefinietion';
import MarketSection from '@/components/sections/market-section';
import Other from '@/components/sections/Other';
import OverviewSection from '@/components/sections/overview-section';
import PlanSection from '@/components/sections/plan-section';

export default function BusinessPlanPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "khalidnadish"; // Change this to your desired password

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
      setPassword("");
    }
  }
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
      case "other":
        return <Other />
      case "JObs":
        return <JobRolesDashboard />
      case "Applife":
        return <DevelopmentTimeline />
      case "Myassits":
        return <SourceCodeContribution />
      default:
        return <OverviewSection />
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 p-5" dir="rtl">
        <form onSubmit={handlePasswordSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full">
          <h2 className="mb-4 text-xl font-bold text-center">Protected Page</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    );
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
  );
}
