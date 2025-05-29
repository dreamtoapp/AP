import React, { useState } from 'react';

// تعريف أنواع TypeScript
interface JobRole {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  responsibilities: string[];
  skills: string[];
  deliverables: string[];
  tools: string[];
}

const JobRolesDashboard = () => {
  const [activeRole, setActiveRole] = useState<JobRole | null>(null);

  const jobRoles: JobRole[] = [
    {
      id: "project-manager",
      title: "مدير المشروع",
      icon: "📊",
      description: "القائد المسؤول عن تخطيط وتنفيذ وتسليم المشاريع التقنية بنجاح",
      color: "from-blue-500 to-blue-700",
      responsibilities: [
        "تخطيط نطاق المشروع وجدولته الزمنية والميزانية",
        "توزيع المهام وتنسيق جهود الفريق",
        "إدارة المخاطر وحل المشكلات",
        "التواصل مع أصحاب المصلحة والاداؤات الغليا",
        "ضمان تسليم المشروع بجودة عالية وفي الوقت المحدد"
      ],
      skills: [
        "إدارة المشاريع الاحترافية (PMP)",
        "منهجيات Agile وScrum",
        "مهارات قيادية وتواصل ممتازة",
        "إتقان أدوات مثل Jira وTrello",
        "فهم أساسيات التطوير والتصميم"
      ],
      deliverables: [
        "خطة المشروع الشاملة",

        "وثائق تسليم المشروع",
        "تحليل ما بعد التنفيذ",
        "خطط تحسين العمليات"
      ],
      tools: ["Jira", "Trello", "Microsoft Project", "Asana", "Confluence"]
    },
    {
      id: "backend-dev",
      title: "مطوّر Backend",
      icon: "⚙️",
      description: "مسؤول عن تطوير البنية التحتية للخادم وقواعد البيانات والوظائف الأساسية للتطبيقات",
      color: "from-green-500 to-green-700",
      responsibilities: [
        "تطوير واجهات برمجة التطبيقات (APIs)",
        "إدارة قواعد البيانات وتصميمها",
        "تنفيذ الخوارزميات والمنطق المعقد",
        "ضمان الأمان وحماية البيانات",
        "تحسين أداء الخادم وقابلية التوسع"
      ],
      skills: [
        "لغات البرمجة (Python, Java, Node.js, PHP)",
        "أطر العمل (Django, Spring, Express, Laravel)",
        "قواعد البيانات (SQL, MongoDB, PostgreSQL)",
        "معمارية الخدمات الصغيرة (Microservices)",
        "إدارة الخوادم والحاويات"
      ],
      deliverables: [
        "واجهات برمجة التطبيقات موثقة",
        "نظام إدارة قاعدة بيانات فعال",
        "نظام مصادقة آمن",
        "حلول معالجة البيانات",
        "نظام نسخ احتياطي واستعادة"
      ],
      tools: ["Docker", "Kubernetes", "Postman", "Swagger", "Redis"]
    },
    {
      id: "frontend-dev",
      title: "مطوّر Frontend",
      icon: "💻",
      description: "متخصص في تطوير الواجهات المرئية وتجربة المستخدم للتطبيقات والمواقع",
      color: "from-purple-500 to-purple-700",
      responsibilities: [
        "تحويل التصاميم إلى واجهات تفاعلية",
        "تطوير مكونات واجهة المستخدم الديناميكية",
        "تحسين أداء التحميل وسرعة الاستجابة",
        "ضمان التوافق مع المتصفحات والأجهزة المختلفة",
        "التكامل مع واجهات برمجة التطبيقات الخلفية"
      ],
      skills: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "أطر العمل (React, Angular, Vue.js)",
        "التصميم سريع الاستجابة (Responsive Design)",
        "إدارة الحالة (State Management)",
        "أدوات البناء (Webpack, Babel)"
      ],
      deliverables: [
        "واجهات مستخدم تفاعلية وسريعة",
        "تجربة مستخدم متسقة عبر الأجهزة",
        "مكونات قابلة لإعادة الاستخدام",
        "واجهات متوافقة مع معايير الوصول",
        "اختبارات واجهة المستخدم"
      ],
      tools: ["React", "Vue.js", "SASS", "Redux", "Jest"]
    },
    {
      id: "uiux-designer",
      title: "مصمم UI/UX",
      icon: "🎨",
      description: "خبير في تصميم تجارب المستخدم والواجهات المرئية الجذابة والوظيفية",
      color: "from-pink-500 to-pink-700",
      responsibilities: [
        "إجراء أبحاث المستخدم وتحليل المنافسين",
        "تصميم مسارات المستخدم وتدفقات العمل",
        "إنشاء نماذج أولية وواجهات تفاعلية",
        "إجراء اختبارات قابلية الاستخدام",
        "تطوير أنظمة التصميم ودلائل النمط"
      ],
      skills: [
        "تصميم واجهات المستخدم وتجربة المستخدم",
        "أدوات التصميم (Figma, Sketch, Adobe XD)",
        "مبادئ التصميم المرئي والتفاعلي",
        "التفكير التصميمي (Design Thinking)",
        "اختبار المستخدم وتحليل البيانات"
      ],
      deliverables: [
        "شخصيات المستخدم (User Personas)",
        "خرائط تدفق المستخدم",
        "نماذج أولية تفاعلية",
        "دلائل النمط التصميمي",
        "تقارير اختبار قابلية الاستخدام"
      ],
      tools: ["Figma", "Sketch", "Adobe XD", "InVision", "Miro"]
    },
    {
      id: "digital-marketer",
      title: "أخصائي تسويق رقمي",
      icon: "📱",
      description: "متخصص في تطوير وتنفيذ استراتيجيات التسويق الرقمي لزيادة الوعي والتحويلات",
      color: "from-yellow-500 to-yellow-700",
      responsibilities: [
        "تطوير خطط التسويق الرقمي الشاملة",
        "إدارة الحملات الإعلانية على منصات التواصل",
        "تحسين محركات البحث (SEO) والمحتوى",
        "تحليل البيانات وأداء الحملات",
        "إدارة العلامة التجارية عبر القنوات الرقمية"
      ],
      skills: [
        "التسويق عبر محركات البحث (SEM)",
        "تحليلات الويب (Google Analytics)",
        "التسويق عبر وسائل التواصل الاجتماعي",
        "تسويق المحتوى وإدارة المدونات",
        "أتمتة التسويق وتحويل العملاء"
      ],
      deliverables: [
        "خطط تسويق رقمية استراتيجية",
        "تقارير أداء الحملات",
        "تحليلات تحسين محركات البحث",
        "استراتيجيات توليد العملاء المحتملين",
        "محتوى تسويقي جذاب"
      ],
      tools: ["Google Analytics", "SEMrush", "Hootsuite", "Mailchimp", "HubSpot"]
    },
    {
      id: "tech-support",
      title: "دعم فني وعمليات",
      icon: "🔧",
      description: "مسؤول عن ضمان التشغيل السلس للأنظمة وتقديم الدعم للمستخدمين",
      color: "from-orange-500 to-orange-700",
      responsibilities: [
        "مراقبة أداء الأنظمة والخدمات",
        "الاستجابة لحوادث النظام وحلها",
        "توفير الدعم الفني للمستخدمين",
        "إدارة عمليات النشر والتحديثات",
        "توثيق العمليات وإجراءات الدعم"
      ],
      skills: [
        "إدارة أنظمة التشغيل والخوادم",
        "معرفة شبكات الحاسوب والأمان",
        "مهارات حل المشكلات التقنية",
        "إدارة قواعد البيانات الأساسية",
        "أتمتة العمليات والنصوص البرمجية"
      ],
      deliverables: [
        "تقارير حالة النظام",
        "وثائق إجراءات التشغيل",
        "أدلة المستخدم والتدريب",
        "نظام تذاكر الدعم الفني",
        "خطط التعافي من الكوارث"
      ],
      tools: ["Zendesk", "Jira Service Desk", "Nagios", "Splunk", "Ansible"]
    }
  ];

  const handleRoleClick = (role: JobRole) => {
    setActiveRole(role);
  };

  const handleCloseDetails = () => {
    setActiveRole(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            فريق التطوير التقني: أدوار ومسؤوليات
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف الأدوار الأساسية في فريق التطوير التقني ومسؤوليات كل وظيفة ومهاراتها المطلوبة
          </p>
        </div>

        {!activeRole ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobRoles.map((role) => (
              <div
                key={role.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200`}
                onClick={() => handleRoleClick(role)}
              >
                <div className={`h-3 bg-gradient-to-r ${role.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{role.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{role.title}</h2>
                      <p className="text-gray-600 mt-2">{role.description}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold text-gray-700 mb-2">المسؤوليات الرئيسية:</h3>
                    <ul className="space-y-1">
                      {role.responsibilities.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                      <li className="text-blue-500 font-medium mt-2">+ {role.responsibilities.length - 3} مسؤوليات أخرى</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {role.tools.slice(0, 3).map((tool, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                        >
                          {tool}
                        </span>
                      ))}
                      {role.tools.length > 3 && (
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                          +{role.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="mt-6 w-full py-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg text-gray-700 font-medium hover:from-gray-300 hover:to-gray-400 transition-all">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className={`p-8 bg-gradient-to-r ${activeRole.color} text-white`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <span className="text-5xl mr-4">{activeRole.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold">{activeRole.title}</h2>
                      <p className="text-xl mt-2">{activeRole.description}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCloseDetails}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3">
                      ✓
                    </span>
                    المسؤوليات والمهام
                  </h3>
                  <ul className="space-y-3">
                    {activeRole.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3">
                      ⚡
                    </span>
                    المهارات المطلوبة
                  </h3>
                  <div className="space-y-3">
                    {activeRole.skills.map((skill, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3">
                      🛠️
                    </span>
                    الأدوات والتقنيات
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeRole.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mr-3">
                      📦
                    </span>
                    المخرجات المتوقعة
                  </h3>
                  <ul className="space-y-3">
                    {activeRole.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">نصائح للنجاح في هذه الوظيفة</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">حافظ على تحديث مهاراتك باستمرار مع تطور التقنيات</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">طور مهارات التواصل والتعاون مع فرق العمل</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">كن حلاً للمشكلات بدلاً من مجرد منفذ للمهام</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">تعلم من الأخطاء واعتبر كل تحدٍ فرصة للنمو</span>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleCloseDetails}
                  className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg font-medium hover:from-gray-800 hover:to-gray-950 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  العودة إلى لوحة الوظائف
                </button>
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default JobRolesDashboard;