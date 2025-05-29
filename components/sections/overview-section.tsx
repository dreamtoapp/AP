import {
  Lightbulb,
  TrendingUp,
  Users,
} from 'lucide-react';

import DataTable from '../data-table';
import InfoCard from '../info-card';
import SectionHeader from '../section-header';
import Resorcs from './Resorcs';

export default function OverviewSection() {
  const visionCards = [
    {
      title: "الرؤية",
      icon: Lightbulb,
      content:
        "أن نصبح أحد المكاتب الرائدة في السعودية لتطوير حلول إدارة المشاريع والأنظمة المخصصة، مع التركيز على قطاعات التجارة الإلكترونية وورش الصيانة.",
    },
    {
      title: "المهمة",
      icon: Users,
      content:
        "تقديم حلول برمجية مبتكرة وذات جودة عالية للشركات والمتاجر الإلكترونية وورش الصيانة، مع توفير دعم فني مميز وخدمات متكاملة.",
    },
    {
      title: "المنتجات الأساسية",
      icon: TrendingUp,
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>منصة SaaS للتجارة الإلكترونية</li>
          <li>نظام Car Doctor لإدارة ورش السيارات</li>
          <li>منصة خاصة للاستراحات وملحقاتها</li>
          <li>حلول التسويق الإلكتروني المتكاملة</li>
          <li>تطبيقات الجوال والمواقع المخصصة</li>
        </ul>
      ),
    },
  ]

  const teamData = [
    ["مدير المشروع", "1", "التخطيط الاستراتيجي، قيادة وتنسيق الفريق، إدارة الموارد", "25,000 ريال", "300,000 ريال"],
    ["مطوّر Backend", "2", "برمجة قواعد البيانات والخدمات الخلفية", "7,000 ريال", "168,000 ريال"],
    ["مطوّر Frontend", "2", "تصميم الواجهات وتجربة المستخدم", "6,000 ريال", "72,000 ريال"],
    ["مصمم UI/UX", "1", "تصميم واجهات مرئية وتجربة مستخدم جذابة", "5,000 ريال", "60,000 ريال"],
    ["أخصائي تسويق رقمي", "1", "ترويج الخدمات وإدارة الحملات الإعلانية", "5,500 ريال", "66,000 ريال"],
    ["دعم فني وعمليات", "1", "متابعة التشغيل اليومي والدعم الفني", "6,500 ريال", "78,000 ريال"],
  ]

  const teamHeaders = ["الوظيفة", "عدد الأفراد", "المهام الأساسية", "الراتب الشهري", "الراتب السنوي"]

  const salaryComparisonData = [
    ["مدير المشروع", "25,000", "18,000 - 28,000", "-"],
    ["مطوّر Backend", "7,000", "8,000 - 15,000", "1,125 - 2,250"],
    ["مطوّر Frontend", "10,000", "8,000 - 14,000", "1,125 - 2,250"],
    ["مصمم UI/UX", "8,000", "6,000 - 12,000", "750 - 1,875"],
    ["أخصائي تسويق رقمي", "7,500", "6,000 - 10,000", "750 - 1,500"],
    ["دعم فني وعمليات", "6,500", "5,000 - 9,000", "450 - 1,125"],
  ]

  const salaryHeaders = ["الوظيفة", "الراتب المقترح (ريال)", "متوسط السعودية (ريال)", "متوسط مصر (ريال)"]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <SectionHeader title="نظرة عامة عن المشروع" icon={Lightbulb} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visionCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-green-600" />
          الهيكل الإداري والفريق
        </h3>
        <DataTable headers={teamHeaders} data={teamData} highlightLastRow totalRow={["المجموع", calculateTotalSalary(teamData)]} />
      </div>

      <Resorcs />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          مقارنة الرواتب بمتوسطات السوق
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          لضمان التنافسية وجذب أفضل الكفاءات في السوق السعودي، قمنا بمراجعة الرواتب بناءً على متوسطات السوق الحالية.
        </p>
        <DataTable headers={salaryHeaders} data={salaryComparisonData} />
      </div>
    </div>
  )
}

function calculateTotalSalary(data: string[][]): string {
  let total = 0;
  for (const row of data) {
    const salary = parseFloat(row[4].replace(/[^0-9.-]+/g, ""));
    if (!isNaN(salary)) {
      total += salary;
    }
  }
  return "ريال " + total.toLocaleString('en-US');
}
