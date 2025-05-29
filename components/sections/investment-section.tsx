import {
  CreditCard,
  Crown,
  FileText,
  HandHeart,
  Handshake,
  PieChart,
  Shield,
} from 'lucide-react';

import DataTable from '../data-table';
import InfoCard from '../info-card';
import SectionHeader from '../section-header';

export default function InvestmentSection() {
  const investmentCards = [
    {
      title: "تفاصيل الاستثمار",
      icon: CreditCard,
      content: (
        <div className="space-y-3 text-sm">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <p className="font-bold text-blue-800 mb-2">المبلغ المطلوب:</p>
            <p className="text-2xl font-bold text-blue-600">1,088,000 ريال سعودي</p>
          </div>
          <div className="space-y-2">
            <p>
              <strong>نوع الاستثمار:</strong> عقد مضاربة حيث يوفّر الممول رأس المال، ويتولى المضارب إدارة وتنفيذ المشروع، ويتم تقاسم الأرباح حسب الاتفاق بين الطرفين.
            </p>

            <p>
              <strong>حصة الطرف الأول المستثمر (الأستاذ محمد الشهري):</strong> حسب الاتفاق بعد الموافقة.
            </p>
            <p>
              <strong>حصة الطرف الثاني المضارب (المهندس خالد نديش):</strong> حسب الاتفاق بعد الموافقة.
            </p>
            <p>
              <strong>العائد المتوقع:</strong> 172.8% سنوياً
            </p>
            <p>
              <strong>فترة الاستثمار:</strong> 3-5 سنوات
            </p>
          </div>

        </div>
      ),
    },
    {
      title: "توزيع رأس المال",
      icon: PieChart,
      content: (
        <div className="space-y-3 text-sm">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                تطوير المنتجات
              </span>
              <span className="font-bold">50%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                التسويق والمبيعات
              </span>
              <span className="font-bold">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                التشغيل والإدارة
              </span>
              <span className="font-bold">20%</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg mt-3">
            <p className="text-xs text-gray-600">توزيع مدروس يضمن التوازن بين التطوير والنمو والاستدامة</p>
          </div>
        </div>
      ),
    },
    {
      title: "شروط الاستثمار",
      icon: FileText,
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>مشاركة في اتخاذ القرارات الاستراتيجية</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>تقارير مالية شهرية مفصلة</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>حق الاطلاع الكامل على سير العمل</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>خيار الخروج المرن بعد 3 سنوات</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>ضمانات قانونية شاملة</span>
          </div>
        </div>
      ),
    },
  ]

  const guaranteeData = [
    ["عقود قانونية محكمة", "عقود استثمار موثقة من وزارة التجارة والاستثمار"],
    ["شفافية مالية كاملة", "وصول مباشر للبيانات المالية والتقارير التشغيلية"],
    ["خيار الخروج المرن", "إمكانية بيع الحصة بعد 3 سنوات بسعر السوق العادل"],
    ["توزيع أرباح منتظم", "توزيع  حسب الاتفاق% من الأرباح الصافية كل ربع سنة"],
    ["تأمين شامل", "تأمين على المشروع والأصول ضد جميع المخاطر"],
    ["ضمان الأداء", "التزام بتحقيق 80% من الأهداف المالية كحد أدنى"],
  ]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <SectionHeader title="فرصة الاستثمار المميزة" icon={HandHeart} />

      {/* Special Message for Investor */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">رسالة خاصة للمستثمر المحترم</h3>
            <p className="text-orange-700 font-semibold">الأستاذ سعد محمد الشهري (أبو سلطان)</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-yellow-300">
          <p className="text-gray-700 leading-relaxed">
            يسعدني أن أقدم لسيادتكم هذه الفرصة الاستثمارية الواعدة، المصممة بعناية واستناداً إلى دراسات دقيقة للسوق ومتطلبات التحول الرقمي في المملكة العربية السعودية.
            أنا على ثقة بأن هذا المشروع سيحقق — بمشيئة الله — عوائد مالية مستدامة ونمواً متصاعداً خلال السنوات القادمة، مدعوماً برؤية واضحة، وتنفيذ احترافي، وفريق تقني مؤهل.

            أتطلع إلى بناء شراكة استراتيجية مثمرة تحت قيادتكم وتوجيهاتكم، وأعاهدكم ببذل أقصى الجهود لتحقيق أعلى درجات النجاح والربحية، بما يفوق التوقعات ويعكس ثقتكم الغالية.
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-orange-700">
            <Handshake className="w-4 h-4" />
            <span className="font-semibold">اتشرف بثقتكم واتعهد بتحقيق توقعاتكم</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {investmentCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-600" />
          ضمانات حماية المستثمر الشاملة
        </h3>
        <DataTable headers={["نوع الضمان", "التفاصيل والشروط"]} data={guaranteeData} />
      </div>

      {/* Investment Benefits */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 mb-8 border border-blue-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">مزايا الاستثمار </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">172%</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">عائد سنوي متوقع</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">18</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">أشهر لنقطة التعادل</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">؟- %</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">حصة في الشركة</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">3-5</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">سنوات استثمار مرن</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">اتطلع إلى شراكة ناجحة معكم</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          ان مستعد لتقديم أي توضيحات إضافية أو الإجابة على استفسار  في أي وقت. .
        </p>
      </div>
    </div>
  )
}
