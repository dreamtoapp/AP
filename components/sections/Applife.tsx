import React, { useState } from 'react';

const DevelopmentTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: "research",
      title: "البحث والتحليل",
      icon: "🔍",
      description: "فهم احتياجات العملاء والأهداف التجارية",
      importance: "هذه المرحلة تحدد اتجاه المشروع كاملاً وتضمن أن الحل النهائي سيلبي احتياجات المستخدمين والأعمال",
      details: [
        "إجراء مقابلات مع أصحاب المصلحة",
        "تحليل المنافسين",
        "دراسة جمهور المستهدف",
        "تحديد المتطلبات الوظيفية وغير الوظيفية",
        "إنشاء خطة المشروع الأولية"
      ],
      deliverables: ["وثيقة متطلبات المشروع", "تحليل المنافسين", "شخصيات المستخدمين (User Personas)"],
      color: "from-blue-500 to-blue-700"
    },
    {
      id: "planning",
      title: "التخطيط",
      icon: "📝",
      description: "تحديد نطاق العمل وهيكلته",
      importance: "التخطيط الجيد يمنع المبالغة في تقدير الوقت والتكاليف ويضمن استمرارية المشروع",
      details: [
        "تحديد هيكل تقسيم العمل (WBS)",
        "تخطيط الموارد والجدول الزمني",
        "تحديد منهجية العمل (Agile, Waterfall)",
        "تخطيط إدارة المخاطر",
        "إنشاء خطة التواصل"
      ],
      deliverables: ["خطة المشروع", "هيكل تقسيم العمل", "خريطة الطريق"],
      color: "from-purple-500 to-purple-700"
    },
    {
      id: "design",
      title: "التصميم",
      icon: "🎨",
      description: "تخطيط تجربة المستخدم وتصميم الواجهات",
      importance: "التصميم الجيد يضمن سهولة الاستخدام ورضا العملاء ويقلل من التعديلات أثناء التطوير",
      details: [
        "إنشاء سير المستخدم (User Flow)",
        "تصميم واجهات المستخدم الأولية (Wireframes)",
        "تصميم النماذج التفاعلية (Prototypes)",
        "تطوير دليل النمط التصميمي (Design System)",
        "اختبار قابلية الاستخدام (Usability Testing)"
      ],
      deliverables: ["Wireframes", "Prototypes", "دليل التصميم", "نماذج قابلية الاستخدام"],
      color: "from-pink-500 to-pink-700"
    },
    {
      id: "development",
      title: "التطوير",
      icon: "💻",
      description: "بناء التطبيق أو الموقع باستخدام التقنيات المناسبة",
      importance: "هذه المرحلة تحول التصاميم إلى منتج حقيقي وتشكل قلب العملية التقنية",
      details: [
        "إعداد البيئة التقنية والبنية التحتية",
        "تطوير الواجهة الأمامية (Frontend)",
        "تطوير الواجهة الخلفية (Backend)",
        "تكامل واجهات برمجة التطبيقات (API Integration)",
        "كتابة اختبارات الوحدة (Unit Tests)"
      ],
      deliverables: ["التطبيق/الموقع جاهز للتجربة", "كود مصدري منظم", "وثائق تقنية"],
      color: "from-green-500 to-green-700"
    },
    {
      id: "testing",
      title: "الاختبار والتحقق",
      icon: "🧪",
      description: "ضمان جودة المنتج وخلوه من الأخطاء",
      importance: "الاختبار الشامل يضمن جودة المنتج وثباته ويقلل من المشكلات بعد الإطلاق",
      details: [
        "اختبار الوظائف (Functional Testing)",
        "اختبار الأداء (Performance Testing)",
        "اختبار الأمان (Security Testing)",
        "اختبار التوافق (Compatibility Testing)",
        "اختبار قابلية الاستخدام (Usability Testing)"
      ],
      deliverables: ["تقرير الأخطاء", "تقرير جودة المنتج", "توصيات التحسين"],
      color: "from-yellow-500 to-yellow-700"
    },
    {
      id: "deployment",
      title: "النشر والإطلاق",
      icon: "🚀",
      description: "تحضير المنتج للإطلاق وإتاحته للمستخدمين",
      importance: "الإطلاق الناجح يضمن انتقال سلس من التطوير إلى التشغيل ويقلل من وقت التوقف",
      details: [
        "تهيئة بيئة الإنتاج",
        "نشر التطبيق/الموقع",
        "إعداد نطاق DNS وشهادات SSL",
        "تنفيذ خطة النسخ الاحتياطي",
        "مراقبة الأداء بعد النشر"
      ],
      deliverables: ["المنتج النهائي", "وثائق التشغيل", "خطة الصيانة"],
      color: "from-red-500 to-red-700"
    },
    {
      id: "maintenance",
      title: "الصيانة والتطوير",
      icon: "🔧",
      description: "تحسين المنتج المستمر واستجابة لملاحظات المستخدمين",
      importance: "الصيانة المستمرة تضمن بقاء المنتج حديثاً وآمناً وملبياً لاحتياجات المستخدمين المتغيرة",
      details: [
        "إصلاح الأخطاء والمشكلات",
        "تطوير ميزات جديدة",
        "تحسين الأداء والأمان",
        "تحليل ملاحظات المستخدمين",
        "تحديث الوثائق الفنية"
      ],
      deliverables: ["تحديثات دورية", "تقارير الأداء", "خطط التطوير المستقبلية"],
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const currentPhase = phases[activePhase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            خط زمني تفاعلي لمراحل تطوير التطبيقات والمواقع
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف المراحل الأساسية لتطوير أي تطبيق أو موقع إلكتروني، وفهم أهمية كل مرحلة في نجاح المشروع
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">مراحل التطوير</h2>

              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(index)}
                    className={`flex items-center w-full p-4 rounded-xl transition-all duration-300 ${activePhase === index
                      ? `bg-gradient-to-r ${phase.color} text-white shadow-lg transform scale-105`
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                  >
                    <span className="text-2xl mr-3">{phase.icon}</span>
                    <div className="text-right flex-1">
                      <h3 className="font-bold text-lg">{phase.title}</h3>
                      <p className="text-sm mt-1">{phase.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">مدة المشروع</h3>
                <p className="text-gray-700">
                  تختلف مدة كل مرحلة حسب حجم المشروع وتعقيده. المشاريع الصغيرة قد تستغرق أسابيع قليلة،
                  بينما المشاريع الكبيرة قد تستغرق عدة أشهر أو سنوات.
                </p>
              </div>
            </div>
          </div>

          {/* Phase Details */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className={`p-8 bg-gradient-to-r ${currentPhase.color} text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl mb-2">{currentPhase.icon}</span>
                    <h2 className="text-3xl font-bold">{currentPhase.title}</h2>
                    <p className="text-xl mt-2">{currentPhase.description}</p>
                  </div>
                  <div className="text-5xl opacity-20">{currentPhase.icon}</div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3">
                        !
                      </span>
                      أهمية هذه المرحلة
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {currentPhase.importance}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      المخرجات المتوقعة
                    </h3>
                    <ul className="space-y-2">
                      {currentPhase.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3">
                      ⚙️
                    </span>
                    الأنشطة التفصيلية
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentPhase.details.map((detail, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex gap-4 items-center "
                      >
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex-shrink-0 mr-4 flex items-center justify-center" >

                          <h4 className="font-medium text-gray-800 text-2xl">  {index + 1}
                          </h4>


                        </div>


                        <p className="text-gray-600 mt-1">{detail}</p>

                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">نصائح عملية</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">1</span>
                      <p className="text-gray-700">
                        استثمر وقتاً كافياً في مرحلة البحث والتحليل لتجنب التغييرات الكبيرة لاحقاً
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">2</span>
                      <p className="text-gray-700">
                        اختر منهجية العمل المناسبة لحجم المشروع وطبيعة الفريق (Agile للمشاريع الديناميكية، Waterfall للمشاريع الواضحة)
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">3</span>
                      <p className="text-gray-700">
                        أشرك المستخدمين الحقيقيين في مراحل التصميم والاختبار للحصول على ملاحظات قيمة
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">4</span>
                      <p className="text-gray-700">
                        خطط لمرحلة الصيانة والتطوير المستمر منذ البداية، فالتطبيقات الناجحة تتطور باستمرار
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-200 w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">خارطة المراحل</h3>
              <div className="relative">
                {/* Graphical Timeline */}
                <div className="flex overflow-x-auto pb-4 scrollbar-hide">
                  <div className="flex space-x-4 min-w-max">
                    {phases.map((phase, index) => (
                      <div
                        key={phase.id}
                        className={`flex flex-col items-center w-40 flex-shrink-0 cursor-pointer transition-transform ${activePhase === index ? "transform scale-110" : ""
                          }`}
                        onClick={() => setActivePhase(index)}
                      >
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 ${activePhase === index
                            ? `bg-gradient-to-r ${phase.color} text-white shadow-lg`
                            : "bg-gray-200 text-gray-700"
                            }`}
                        >
                          {phase.icon}
                        </div>
                        <h4 className={`font-medium text-center ${activePhase === index ? "text-gray-800 font-bold" : "text-gray-600"
                          }`}>
                          {phase.title}
                        </h4>
                        <div className={`w-full h-2 mt-2 rounded-full ${index < activePhase
                          ? `bg-gradient-to-r ${phases[index].color}`
                          : "bg-gray-200"
                          }`}></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-center text-sm text-gray-500">
                  انقر على أي مرحلة لعرض تفاصيلها
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DevelopmentTimeline;