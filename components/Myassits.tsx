import {
  BarChart2,
  CheckCircle,
  Code2,
  DollarSign,
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
    name: "تاج النور",
    progress: "10%",
    description: "تجارة مع اللة لا تبور",
    tech: "Next.js, React, Prisma, MongoDB",
    value: 0,
    link: "",
    highlights: [
      {
        title: "الفكرة العامة",
        description: "منصة تشبة instgram ولكن لحفظة القران الكرم",
        stuts: "تحسن وتطوير"
      },
      {
        title: "الفائدة",
        description: "اجر عظيم دنيا واخرة",
        stuts: "طور الفكرة"
      },
      {
        title: "التشجيع",
        description: "التشجيع علي حفظ القران الكريم",
        stuts: "تحسن وتطوير"
      },
      {
        title: "تقديم الهدايا والجوائز",
        description: "اهل الخير كثير لرعاية حفظة القران وتقديم الهدايا",
        stuts: "بعد الانهاء من الاجراات الحكومية "
      },



      {
        title: "المزيد",
        description: "وغيرها الكثير ....",
        stuts: "مخطط له"
      }
    ],
    stuts: "تحت التطوير"
  },
  {
    name: "منصة التجارة الإلكترونية",
    progress: "78%",
    description: "SaaS لتجارة إلكترونية احترافية",
    tech: "Next.js, React, Prisma, MongoDB",
    value: 150000,
    link: "https://www-ecommerce-com.vercel.app",
    highlights: [
      {
        title: "إدارة المتاجر",
        description: "نظام متكامل لإدارة المتاجر الإلكترونية",
        stuts: "تحسن وتطوير"
      },
      {
        title: "لوحة التحكم",
        description: "لوحة تحكم متقدمة مع تحليلات مبيعات",
        stuts: "مكتمل"
      },
      {
        title: "التكاملات",
        description: "تكامل مع أنظمة الدفع والشحن",
        stuts: "بعد الانهاء من الاجراات الحكومية"
      },
      {
        title: "العمليات",
        description: "إدارة جميع الطلبات والمنتجات والفواتير عبر لوحة تحكم موحدة مع مزامنة تلقائية تضمن لك سهولة واحترافية.",
        stuts: "بعد الانهاء من الاجراات الحكومية "
      },
      {
        title: "المدفوعات",
        description: "نظام مدفوعات آمن",
        stuts: "بعد الانهاء من الاجراات الحكومية"
      },
      {
        title: "التحليلات",
        description: "إحصائيات وتقديرات ذكية للمبيعات والعملاء",
        stuts: "منتهية ولكن تحتاج مراجعة"
      },
      {
        title: "SEO بالذكاء الاصطناعي",
        description: "تحسين محركات البحث بطريقة احترافية وسهلة مما يوفر على العميل تكاليف إدارة SEO مع دمج الذكاء الصناعي",
        stuts: "تحت الدراسة"
      },
      {
        title: "المزيد",
        description: "وغيرها الكثير ....",
        stuts: "مخطط له"
      }
    ],
    stuts: "تحت التطوير"
  },
  {
    name: "AutoCare.sa",
    progress: "65%",
    description:
      "منصة رقمية مبتكرة تهدف إلى ربط أصحاب السيارات بورش صيانة موثوقة ومعتمدة بناءً على تقييمات العملاء، مع تقديم حلول تمويل مرنة لصيانة المركبات، وخدمات إضافية مثل السحب، الطوارئ، والتأمين.",
    tech: "React, Node.js, MongoDB",
    value: 200000,
    link: "https://dc.dreamto.app/",
    highlights: [
      {
        title: "مشكلة حقيقية",
        description: "يعاني ملايين السائقين من صعوبة اختيار ورشة موثوقة، غياب الشفافية، وتعدد الأسعار والخدمات.",
        stuts: "سر نجاح المشروع"
      },
      {
        title: "حل متكامل",
        description: "نمنح العميل تجربة رقمية من اختيار الورشة حتى استلام السيارة، مدعومة بتمويل داخلي بدون أطراف ثالثة.",
        stuts: "من اسرار النجاح"
      },
      {
        title: "إدارة الصيانة",
        description: "نظام شامل لإدارة عمليات الصيانة للورش والعملاء",
        stuts: "مراجعة"
      },
      {
        title: "المواعيد",
        description: "نظام حجز مواعيد متكامل مع العملاء",
        stuts: "مراجعه"
      },
      {
        title: "التكامل مع محلات قطع الغيار",
        description: "تتبع قطع الغيار والمخزون - ",
        stuts: "مصدر دخل إضافي"
      },
      {
        title: "حجم السوق",
        description: "سوق بمليارات الريالات في السعودية غير مستغل رقمياً",
        stuts: "فرصة"
      },
      {
        title: "التوسع",
        description: "قابل للتوسع خليجياً بنفس الفكرة التقنية",
        stuts: "مخطط له"
      }
    ],
    stuts: "قيد التطوير"
  },
  {
    name: "Workshop360",
    progress: "88%",
    description:
      "نظام متكامل لإدارة ورش صيانة السيارات، يغطّي الدورة الكاملة من لحظة دخول السيارة وحتى تسليمها، مع إدارة فنية، إدارية، ومالية دقيقة، بالإضافة إلى ملف شخصي للعميل لمتابعة مركبته وخدمات الورشة.",
    tech: "Next.js, Node.js, MongoDB",
    value: 80000,
    link: "https://aws.dreamto.app/",
    highlights: [
      {
        title: "إدارة كاملة لدورة الصيانة",
        description: "متابعة السيارة من لحظة الدخول وحتى التسليم، مع تسجيل كل الإجراءات والمهام.",
        stuts: "جوهر النظام"
      },
      {
        title: "ملف شخصي متكامل للعميل",
        description: "عرض سجل الصيانة، الفواتير، المواعيد، الإشعارات، وكل ما يتعلق بمركبة العميل.",
        stuts: "تجربة مميزة"
      },
      {
        title: "نظام مالي متقدم",
        description: "إدارة الفواتير، المدفوعات، الحسابات، والتقارير المالية بدقة وشفافية.",
        stuts: "تشغيلي"
      },
      {
        title: "إدارة فنية للورشة",
        description: "إدارة الفنيين، المهام اليومية، قطع الغيار، وجدولة أعمال الصيانة.",
        stuts: "تنظيم داخلي"
      },
      {
        title: "لوحات تحكم وتقارير",
        description: "إحصائيات لحظية وتقارير أداء شاملة تساعد في اتخاذ القرار.",
        stuts: "تحليل وإدارة"
      },
      {
        title: "قابل للتخصيص",
        description: "النظام مرن وقابل للتخصيص حسب نوع الورشة (ميكانيكا، كهرباء، سمكرة، ...).",
        stuts: "مرونة"
      },
      {
        title: "جاهز للتوسع",
        description: "تصميم يسمح بتوسيع النظام ليخدم أكثر من فرع أو شبكة ورش.",
        stuts: "نمو مستقبلي"
      }
    ],
    stuts: "جاهز للاختبار"
  },
  {
    name: "Ajerly – أجرلي",
    progress: "20%",
    description:
      "منصة ذكية تستهدف الاستراحات والشاليهات وتعيد إحياء الفترات الميتة من خلال الحصول على أيام مجانية من المالك مقابل تواجده في المنصة والتسويق له، مع تقديم دخل إضافي عبر باقات خدمات مساندة مثل تجهيز المناسبات، الصيانة، والتنظيف.",
    tech: "Next.js, Node.js, MongoDB",
    value: 0,
    // link: "https://ap.dreamto.app/ajerly",
    highlights: [
      {
        title: "فكرة مبتكرة",
        description: "نأخذ من المالك أيامًا مجانية من الفترات الميتة مقابل إدراجه في المنصة والتسويق له.",
        stuts: "نموذج فريد"
      },
      {
        title: "منفعة للطرفين",
        description: "المالك يستفيد من التسويق والخدمات، والمنصة تستفيد من الأيام المجانية التي يعاد بيعها بأسعار رمزية.",
        stuts: "توازن ربحي"
      },
      {
        title: "منصة شبيهة بـ Booking",
        description: "واجهة حجز ذكية للعملاء مع نظام تقييم، تقويم متاح، ودفع إلكتروني.",
        stuts: "سهولة استخدام"
      },
      {
        title: "دخل إضافي من الخدمات المساندة",
        description: "نقدّم خدمات لأصحاب الاستراحات مثل صيانة المسابح، تجهيز الأفراح، النظافة، وغيرها عبر اشتراكات شهرية أو عمولات.",
        stuts: "تنويع الدخل"
      },
      {
        title: "زيادة الإشغال",
        description: "تحويل الفترات الميتة إلى مصدر دخل بدل أن تبقى غير مستغلة.",
        stuts: "رفع الكفاءة"
      },
      {
        title: "قابلية التوسع",
        description: "نموذج سهل التكرار في كل مدن السعودية وحتى الخليج.",
        stuts: "نمو مستقبلي"
      },
      {
        title: "شبكة موردين موثوقين",
        description: "منصة تربط أصحاب الاستراحات بمقدّمي خدمات معتمدين بضمان الجودة.",
        stuts: "قيمة مضافة"
      }
    ],
    stuts: "قيد التطوير"
  },
  {
    name: "أشكيك لمين؟",
    progress: "30%",
    description:
      "منصة تواصل مباشرة تربط العملاء بأصحاب المشاريع أو وكلائهم الموثوقين، لحل الشكاوى بسرعة وكفاءة بعيدًا عن تعقيدات الإدارة اليومية أو تجاهل الموظفين، مما يعزز رضا العملاء ويحمي سمعة المستثمر.",
    tech: "Next.js, Node.js, MongoDB",
    value: 120000,
    // link: "https://ap.dreamto.app/ashkeek",
    highlights: [
      {
        title: "مشكلة حقيقية",
        description: "كثير من شكاوى العملاء لا تصل إلى صاحب المشروع بسبب تجاهل أو تقصير الإدارة الوسطى.",
        stuts: "ثغرة إدارية"
      },
      {
        title: "حلقة وصل مباشرة",
        description: "منصة تربط العميل بالمالك مباشرة أو الوكيل المعتمد لضمان تصعيد الشكوى وحلها بسرعة.",
        stuts: "جوهر الفكرة"
      },
      {
        title: "ردع الموظف غير المتعاون",
        description: "مجرد علم الموظف بإمكانية وصول العميل للمالك مباشرة يجعله أكثر التزامًا واحترامًا للعملاء.",
        stuts: "تأثير مباشر"
      },
      {
        title: "تعزيز رضا العملاء",
        description: "الاستجابة السريعة للشكاوى تبني ولاء العملاء وتعزز من سمعة المشروع.",
        stuts: "قيمة مضافة"
      },
      {
        title: "سهل التفعيل",
        description: "QR Code في المحل يفتح قناة تواصل فورية وآمنة بين العميل والمالك.",
        stuts: "بسيط وفعال"
      },
      {
        title: "إحصائيات وتحليل",
        description: "لوحة تحكم تعرض نوع الشكاوى، تكرارها، وتحليل أداء الفروع أو الموظفين.",
        stuts: "أداة رقابية"
      },
      {
        title: "قابل للتخصيص",
        description: "يمكن تخصيصه لأي قطاع: كوفيهات، مطاعم، صالونات، عيادات، وغيرها.",
        stuts: "مرونة في السوق"
      }
    ],
    stuts: "قيد التطوير"
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

                <div className="grid grid-cols-1 gap-3">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border ${highlight.description.includes("مصدر دخل")
                        ? "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 shadow-sm"
                        : "bg-white border-gray-200"
                        }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <div className="flex items-start gap-2">
                            {highlight.description.includes("مصدر دخل") ? (
                              <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            )}

                            <div>
                              <h4 className="font-bold text-gray-800 mb-1">
                                {highlight.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Status indicator */}
                        {highlight.stuts && (
                          <span className="text-xs font-medium text-gray-500 border border-gray-200 px-2 py-1 rounded-full">
                            {highlight.stuts}
                          </span>
                        )}
                      </div>

                      {highlight.description.includes("مصدر دخل") && (
                        <div className="mt-2 flex items-center gap-1 text-xs text-green-700 font-medium">
                          <DollarSign className="w-4 h-4" />
                          <span>ميزة ربحية إضافية تعزز نموذج الأعمال</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-200">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold"
                >
                  معاينة المشروع مباشرة
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}

              {item.stuts && (
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <span className="bg-green-300 px-3 py-1 rounded-full">
                    {item.stuts}
                  </span>
                </div>
              )}
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
                desc: "توفير 50% من تكاليف التطوير",
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
                  { label: "اشتراكات الورش", value: "100,000 ريال/شهر", desc: "500 ورشة × 200 ريال" },
                  { label: "خدمات التمويل", value: "50,000 ريال/شهر", desc: "عمولة على تمويل الصيانة" },
                  { label: "خدمات إضافية", value: "20,000 ريال/شهر", desc: "تأمين، سحب، طوارئ" },
                  { label: "مصادر دخل إضافية", value: "25,000 ريال/شهر", desc: "بيع قطع غيار، خدمات مميزة", highlight: true },
                  { label: "إجمالي متوقع", value: "195,000 ريال/شهر", desc: "2,340,000 ريال سنوياً", highlight: true }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center p-4 rounded-xl ${item.highlight
                      ? "bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 shadow"
                      : "bg-gray-50"
                      }`}
                  >
                    <div>
                      <div className={`font-bold ${item.highlight ? "text-emerald-800" : "text-gray-800"}`}>
                        {item.label}
                      </div>
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
                  "قابلية التوسع إلى الخليج والشرق الأوسط",
                  "مصادر دخل متعددة ومتنوعة"
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
              "عقد نقل ملكية للكود المصدري موثق بعد التأسيس",

              "توثيق كامل لحقوق الملكية الفكرية",
              "ضمان الجودة الفنية للمنتج",
              "تنازل رسمي موثق للشركة",
              "تحميل الكود للمستودعات التقنية الخاصة بالشركة",

              " نقل كافة الحقوق والتراخيص للشركة"
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