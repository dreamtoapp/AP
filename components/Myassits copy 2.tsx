import {
  BarChart2,
  CheckCircle,
  Code,
  Code2,
  ExternalLink,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const contributions = [
  {
    name: "منصة التجارة الإلكترونية",
    progress: "78%",
    description: "SaaS لتجارة إلكترونية احترافية",
    tech: "Next.js, React, Prisma, MongoDB",
    value: 150000,
    link: "https://ap.dreamto.app/ecommerce",
    highlights: [
      "نظام متكامل لإدارة المتاجر الإلكترونية",
      "لوحة تحكم متقدمة مع تحليلات مبيعات",
      "تكامل مع أنظمة الدفع والشحن",
      "دارة جميع الطلبات والمنتجات والفواتير عبر لوحة تحكم وحدة مع مزامنة تلقائية تضمن لك سهولة واحترافية.", "نظام مدفوعات آمن",
      "إحصائيات وتقديرات",
      "تحسين محركات البحث بطريقة احبرافيةو سهله مما يوفر علي العميل تكاليف ادارة تحسين محركات البحث مع دمج الذكاء الصناعي", "وغيرها الكثير ...."

    ]
    ,
    stuts: "تحت التطوير"
  },
  {
    name: "AutoCare.sa",
    progress: "65%",
    description: "منصة رقمية مبتكرة تهدف إلى ربط أصحاب السيارات بورش صيانة موثوقة ومعتمدة بناءً على تقييمات العملاء، مع تقديم حلول تمويل مرنة لصيانة المركبات، وخدمات إضافية مثل السحب، الطوارئ، والتأمين.",
    tech: "React, Node.js, MongoDB",
    value: 200000,
    link: "https://ap.dreamto.app/car-doctor",
    highlights: [
      " نقطة ألم حقيقية: يعاني ملايين السائقين من صعوبة اختيار ورشة موثوقة، غياب الشفافية، وتعدد الأسعار والخدمات.",
      "حل ذكي ومتكامل: نمنح العميل تجربة رقمية من اختيار الورشة حتى استلام السيارة، مدعومة بتمويل وتقسيط داخلي بدون أطراف ثالثة. -- مصدر دخل اضافي قوي جدا",

      "إدارة كاملة لعمليات الصيانة",
      "نظام مواعيد متكامل مع العملاء",
      "تتبع قطع الغيار والمخزون - مصدر دخل اضافي",
      "سوق ضخم وغير مستغل رقمياً: سوق صيانة السيارات في المملكة يقدّر بـمليارات الريالات سنويًا، ولا توجد منصات قيادية حتى الآن.",
      " إمكانية التوسع خليجيًا بسهولة: نفس المشكلة، نفس الاحتياج، وقابلية التوسع التقنية متاحة.",

    ]
  }
];

export default function SourceCodeContribution() {
  const total = contributions.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full mb-6">
          <Code2 className="w-6 h-6" />
          <h1 className="text-2xl font-bold">المساهمة التقنية العينية</h1>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-900 mb-4">
          أصول برمجية جاهزة لتحقيق عوائد استثمارية فورية
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          شيفرة مصدرية عالية الجودة تُسجل كأصول غير نقدية في رأس المال التأسيسي
        </p>
      </div>

      {/* Value Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 text-center">
          <div className="text-4xl font-black text-blue-700 mb-2">
            {total.toLocaleString("ar-EG")}
          </div>
          <div className="text-blue-900 font-bold">ريال سعودي</div>
          <p className="text-gray-600 mt-2">القيمة الإجمالية للمساهمات</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 text-center">
          <div className="text-4xl font-black text-green-700 mb-2">85%</div>
          <div className="text-green-900 font-bold">جاهزية المشاريع</div>
          <p className="text-gray-600 mt-2">جاهزة للتنفيذ الفوري</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 text-center">
          <div className="text-4xl font-black text-amber-700 mb-2">2</div>
          <div className="text-amber-900 font-bold">منصات SaaS</div>
          <p className="text-gray-600 mt-2">قابلة للتطوير والتوسع</p>
        </div>
      </div>

      {/* Contribution Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {contributions.map((item, index) => (
          <Card
            key={index}
            className={`border-0 rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0
              ? "bg-gradient-to-br from-blue-50 to-indigo-50"
              : "bg-gradient-to-br from-green-50 to-emerald-50"
              }`}
          >
            <CardHeader className="pb-0">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {item.name}
                </CardTitle>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.value.toLocaleString("ar-EG")} ريال
                </span>
              </div>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </CardHeader>

            <CardContent className="mt-4">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">نسبة الإنجاز</span>
                  <span className="text-sm font-bold text-green-700">{item.progress}</span>
                </div>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                    style={{ width: item.progress }}
                  />
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  التقنيات المستخدمة
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tech.split(', ').map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white text-blue-700 text-sm rounded-lg shadow-sm border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  المميزات الرئيسية
                </h3>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-200">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold"
              >
                معاينة المشروع مباشرة
                <ExternalLink className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-2 text-green-700 font-bold">
                <Code className="w-5 h-5" />
                تحت التطوير
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Value Proposition */}
      <Card className="border-0 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 mb-16">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-2 rounded-lg">
              <BarChart2 className="text-white w-6 h-6" />
            </div>
            القيمة الاستراتيجية للمساهمة
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "تسريع وقت السوق",
                desc: "تجاوز مراحل التطوير الأولية",
                icon: <TrendingUp className="w-8 h-8 text-green-600" />
              },
              {
                title: "خفض التكاليف",
                desc: "توفير 70% من تكاليف التطوير",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
                </svg>
              },
              {
                title: "ميزة تنافسية",
                desc: "حلول جاهزة قبل المنافسين",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                </svg>
              },
              {
                title: "عائد استثمار سريع",
                desc: "إيرادات فورية بعد التنفيذ",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 16h5v5" />
                </svg>
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm text-center">
                <div className="flex justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AutoCare Investment Opportunity */}
      <Card className="border-0 rounded-2xl overflow-hidden shadow-xl mb-16">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white">
          <CardHeader className="!pb-0">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <BarChart2 className="w-6 h-6" />
              فرصة الاستثمار في AutoCare.sa
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-2">
            <p className="text-lg max-w-3xl">
              منصة متكاملة لتحويل قطاع صيانة السيارات في السعودية باستخدام أحدث التقنيات
            </p>
          </CardContent>
        </div>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl text-emerald-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                الإيرادات المتوقعة
              </h3>

              <div className="space-y-4">
                {[
                  { label: "اشتراكات الورش", value: "50,000 ريال/شهر", desc: "100 ورشة × 500 ريال" },
                  { label: "خدمات التمويل", value: "10,000 ريال/شهر", desc: "عمولة على تمويل الصيانة" },
                  { label: "خدمات إضافية", value: "15,000 ريال/شهر", desc: "تأمين، سحب، طوارئ" },
                  { label: "إجمالي متوقع", value: "75,000 ريال/شهر", desc: "900,000 ريال سنوياً", highlight: true }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center p-4 rounded-xl ${item.highlight
                      ? "bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 shadow"
                      : "bg-gray-50"
                      }`}
                  >
                    <div>
                      <div className="font-bold text-gray-800">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                    <div className={`font-bold ${item.highlight ? "text-emerald-700 text-lg" : "text-gray-700"
                      }`}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl text-emerald-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                مزايا تنافسية
              </h3>

              <div className="space-y-4">
                {[
                  "سوق يصل حجمه إلى 20 مليار ريال سنوياً في صيانة السيارات",
                  "قلة المنافسة الرقمية في القطاع",
                  "نموذج اشتراك شهري ثابت مع عوائد إضافية",
                  "تكامل مع أنظمة الدفع والتمويل",
                  "قابلية التوسع إلى الخليج والشرق الأوسط"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="bg-emerald-100 p-2 rounded-full mt-0.5">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="text-gray-800">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-gradient-to-r from-emerald-700 to-green-800 p-6 text-white">
          <div className="text-center w-full">
            <p className="text-xl font-bold">✨ الاستثمار في AutoCare.sa هو استثمار في مستقبل الخدمات الذكية للسيارات</p>
            <p className="mt-2 text-emerald-100">
              نمو حقيقي + احتياج فعلي + نموذج ربحي واضح = فرصة استثمارية ذهبية
            </p>
          </div>
        </CardFooter>
      </Card>

      {/* Legal Assurance */}
      <Card className="border-0 rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-2 rounded-lg">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            الضمانات القانونية والفنية
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "عقد نقل ملكية موثق بعد التأسيس",
              "شهادة أصالة الكود المصدري",
              "توثيق كامل لحقوق الملكية الفكرية",
              "ضمان الجودة الفنية للمنتج",
              "خبرة تقنية معتمدة من مؤسس المنصة",
              "نقل كافة الحقوق والتراخيص للشركة"
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-3 shadow-sm"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-gray-800">{item}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}