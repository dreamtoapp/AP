import { Globe, BarChart, Target, Trophy, TrendingUp } from "lucide-react"
import SectionHeader from "../section-header"
import InfoCard from "../info-card"
import DataTable from "../data-table"

export default function MarketSection() {
  const marketCards = [
    {
      title: "حجم السوق",
      icon: BarChart,
      content: (
        <div>
          <div className="text-2xl font-bold text-blue-600 mb-2">16.6% نمو سنوي</div>
          <p className="text-sm">سوق البرمجيات السعودي من أسرع الأسواق نموًا في المنطقة</p>
        </div>
      ),
    },
    {
      title: "العملاء المستهدفين",
      icon: Target,
      content:
        "الشركات الصغيرة والمتوسطة - المتاجر الإلكترونية - ورش صيانة السيارات - الشركات الناشئة - الاستراحات ومرافق الضيافة",
    },
    {
      title: "الميزة التنافسية",
      icon: Trophy,
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>أسعار أقل 10-15% من المنافسين</li>
          <li>حلول متخصصة في قطاعات محددة</li>
          <li>دعم فني مميز باللغة العربية</li>
          <li>تكامل مع أنظمة الدفع السعودية</li>
        </ul>
      ),
    },
  ]

  const pricingData = [
    ["اشتراك SaaS للتجارة الإلكترونية (الأساسي)", "299 ريال/شهرياً", "300 ريال/شهرياً", "295 ريال/شهرياً"],
    ["اشتراك SaaS للتجارة الإلكترونية (المتقدم)", "999 ريال/شهرياً", "1,050 ريال/شهرياً", "980 ريال/شهرياً"],
    ["اشتراك Car Doctor", "399 ريال/شهرياً", "450 ريال/شهرياً", "420 ريال/شهرياً"],
    ["تطبيق جوال أساسي", "15,000 ريال", "18,000 ريال", "16,500 ريال"],
    ["منصة استراحات (تقديري)", "499 ريال/شهرياً", "غير متاح", "غير متاح"],
  ]

  const growthData = [
    ["2025", "2.69 مليون ريال", "1,382,400 ريال", "-"],
    ["2026", "4.84 مليون ريال", "2.49 مليون ريال", "80%"],
    ["2027", "9.30 مليون ريال", "4.78 مليون ريال", "92%"],
  ]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <SectionHeader title="دراسة السوق والمنافسة" icon={Globe} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {marketCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-600" />
          مقارنة تسعيرية مع المنافسين
        </h3>
        <DataTable headers={["الخدمة", "سعرنا", "سعر المنافس (سلة)", "سعر المنافس (زاد)"]} data={pricingData} />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          توقعات النمو
        </h3>
        <DataTable headers={["العام", "الإيرادات المتوقعة", "صافي الربح", "معدل النمو"]} data={growthData} />
      </div>
    </div>
  )
}
