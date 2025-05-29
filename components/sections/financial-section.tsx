import {
  Calculator,
  Calendar,
  Coins,
  DollarSign,
  PieChart,
  Wallet,
} from 'lucide-react';

import DataTable from '../data-table';
import MetricCard from '../metric-card';
import SectionHeader from '../section-header';

// Helper to format numbers
const formatNumber = (number: number) =>
  new Intl.NumberFormat('en-US').format(number);

// Helper to format currency
const formatCurrency = (number: number, perMonth?: boolean) =>
  `${formatNumber(number)} SR${perMonth ? '/Mnth' : ''}`;

// --- STARTUP COSTS (One-time initial expenses) ---
const startupCosts = [
  { item: 'رسوم التأسيس والتراخيص', description: 'سجل تجاري، تراخيص، اشتراكات', cost: 20000 },
  { item: 'تجهيز المكتب (أثاث، أجهزة)', description: 'أجهزة حاسوب، أثاث مكتبي، طابعات', cost: 40000 },
  { item: 'إيجار المكتب (3 أشهر مقدماً)', description: 'دفعة أولى للإيجار', cost: 15000 },
  { item: 'رأس مال عامل للطوارئ', description: 'سيولة احتياطية للطوارئ (مثلاً 3 أشهر مصاريف تشغيلية)', cost: 30000 }, // This needs to be calculated based on operational expenses
];

// --- ANNUAL OPERATIONAL EXPENSES ---
const annualOperationalExpenses = [
  { item: 'رواتب الموظفين', description: 'رواتب أساسية + بدلات', cost: 744000 },
  { item: 'بدلات ومزايا الموظفين', description: 'سفر - مكافآت - تأمين صحي ..غيره', cost: 120000 },
  { item: 'اشتراك إنترنت وسيرفرات', description: 'سيرفرات وتخزين سحابي', cost: 24000 },
  { item: 'اشتراك أدوات البرمجة', description: 'GitHub - Jira - Slack', cost: 10000 },
  { item: 'اشتراك ذكاء اصطناعي', description: 'Cursor IDE - Claude وغيرها', cost: 15000 },
  { item: 'تسويق وإعلان', description: 'حملات جوجل، وسائل التواصل', cost: 60000 },
  { item: 'مصاريف حكومية', description: 'رخص، سجل تجاري، تأمين (سنوية)', cost: 10000 },
];

// Revenue sources
const revenues = [
  {
    source: 'منتج E-Commerce SaaS',
    clients: 5000,
    unitRevenue: 150, // Per month
    isRecurring: true,
  },
  {
    source: 'منتج Car Doctor',
    clients: 500,
    unitRevenue: 150, // Per month
    isRecurring: true,
  },
  {
    source: 'عمولة تمويل Car Doctor',
    clients: 1,
    unitRevenue: 100000, // Assuming this is an annual recurring commission
    isRecurring: true, // Changed from isProject to isRecurring for clarity
  },
  {
    source: 'منصة خاصة للاستراحات',
    clients: 500,
    unitRevenue: 100, // Per month
    isRecurring: true,
  },
  {
    source: 'تصميم تطبيقات تفاعلية',
    clients: 20,
    unitRevenue: 15000, // Per project
    isRecurring: false, // Explicitly not recurring
  },
  {
    source: 'ادارة حملات تسويقية',
    clients: 100,
    unitRevenue: 600, // Per project/contract, assuming these are one-off or not monthly retainer type
    isRecurring: false, // Explicitly not recurring
  },
  {
    source: 'تطبيقات جوال مخصصة',
    clients: 15,
    unitRevenue: 30000, // Per project
    isRecurring: false, // Explicitly not recurring
  },
];

export default function FinancialSection() {
  const totalStartupCosts = startupCosts.reduce((sum, e) => sum + e.cost, 0);
  const totalAnnualOperationalExpenses = annualOperationalExpenses.reduce((sum, e) => sum + e.cost, 0);

  // Total initial capital required = Startup Costs + first year's operational expenses
  const totalCapitalRequired = totalStartupCosts + totalAnnualOperationalExpenses;

  const revenueRows = revenues.map((r) => {
    const annualRevenue = r.isRecurring
      ? r.clients * r.unitRevenue * 12 // For recurring revenue, multiply by 12 months
      : r.clients * r.unitRevenue; // For project-based revenue, it's just clients * unitRevenue
    return {
      ...r,
      annualRevenue,
    };
  });

  const totalAnnualRevenue = revenueRows.reduce((sum, r) => sum + r.annualRevenue, 0);
  const netProfit = totalAnnualRevenue - totalAnnualOperationalExpenses;

  // Calculate ROI: Net Profit / Total Capital Required
  const roi = totalCapitalRequired > 0 ? (netProfit / totalCapitalRequired) * 100 : 0;

  // Calculate Payback Period: Total Capital Required / Annual Net Profit
  // Add a check for positive net profit to avoid division by zero or negative results
  const paybackPeriod = netProfit > 0 ? totalCapitalRequired / netProfit : Infinity; // In years

  const metrics = [
    {
      title: 'رأس المال المطلوب',
      value: formatCurrency(totalCapitalRequired),
      description: 'لتغطية التأسيس والمصاريف التشغيلية للسنة الأولى',
      icon: Wallet,
    },
    {
      title: 'العائد على الاستثمار (ROI)',
      value: `${roi.toFixed(1)}% سنويًا`,
      description: 'عائد تنافسي ومضمون على الاستثمار الكلي',
      icon: Coins,
      growth: roi > 0, // Indicate growth if ROI is positive
    },
    {
      title: 'فترة استرداد رأس المال',
      value: paybackPeriod === Infinity ? 'أكثر من سنة' : `${paybackPeriod.toFixed(2)} سنة`,
      description: 'مع توقع نمو الأرباح بنسبة 80% في السنة الثانية',
      icon: Calendar,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <SectionHeader title="الجدوى المالية والاقتصادية" icon={Calculator} />

      {/* Startup Costs */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-blue-600" /> {/* Changed color for differentiation */}
          تكاليف التأسيس الأولية (غير متكررة)
        </h3>
        <DataTable
          headers={['البند', 'الوصف', 'التكلفة']}
          data={startupCosts.map((e) => [e.item, e.description, formatCurrency(e.cost)])}
          highlightLastRow
          totalRow={['المجموع', '', formatCurrency(totalStartupCosts)]}
        />
      </div>

      {/* Annual Operational Expenses */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-red-600" /> {/* Changed color for differentiation */}
          المصاريف التشغيلية السنوية (متكررة)
        </h3>
        <DataTable
          headers={['البند', 'الوصف', 'التكلفة السنوية']}
          data={annualOperationalExpenses.map((e) => [e.item, e.description, formatCurrency(e.cost)])}
          highlightLastRow
          totalRow={['المجموع', '', formatCurrency(totalAnnualOperationalExpenses)]}
        />
      </div>

      {/* Revenues */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-green-600" />
          توقعات الإيرادات والأرباح السنوية
        </h3>
        <DataTable
          headers={['مصدر الدخل', 'عدد العملاء', 'متوسط الإيراد', 'الدخل السنوي']}
          data={revenueRows.map((r) => [
            r.source,
            formatNumber(r.clients),
            formatCurrency(r.unitRevenue, r.isRecurring), // Pass isRecurring to formatter
            formatCurrency(r.annualRevenue),
          ])}
          summaryRows={[
            ['الإجمالي المتوقع', '', '', formatCurrency(totalAnnualRevenue)],
            ['المصاريف التشغيلية السنوية', '', '', formatCurrency(totalAnnualOperationalExpenses)],
            ['صافي الربح المتوقع', '', '', formatCurrency(netProfit)],
          ]}
        />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}