import React, {
  ReactNode,
  useEffect,
  useState,
} from 'react';

// Type definitions for type safety
type TabId = 'mobile' | 'uiux' | 'frontend' | 'backend' | 'management' | 'saas' | 'ecomm';

interface Tab {
  id: TabId;
  title: string;
  icon: string;
  color: string;
}

interface ContentSection {
  title: string;
  content: ReactNode;
}

interface TabContent {
  title: string;
  description: string;
  sections: ContentSection[];
}

const tabs: Tab[] = [
  { id: 'mobile', title: 'تطبيقات الموبايل', icon: '📱', color: 'border-blue-500' },
  { id: 'uiux', title: 'تصميم واجهات المستخدم', icon: '🎨', color: 'border-purple-500' },
  { id: 'frontend', title: 'تطوير الواجهة الأمامية', icon: '💻', color: 'border-green-500' },
  { id: 'backend', title: 'تطوير الواجهة الخلفية', icon: '⚙️', color: 'border-indigo-500' },
  { id: 'management', title: 'الإدارة الرقمية', icon: '📊', color: 'border-amber-500' },
  { id: 'saas', title: 'برمجيات كخدمة (SaaS)', icon: '☁️', color: 'border-cyan-500' },
  { id: 'ecomm', title: 'التجارة الإلكترونية', icon: '🛒', color: 'border-red-500' },
];

const contentData: Record<TabId, TabContent> = {
  mobile: {
    title: "تطوير تطبيقات الموبايل",
    description: "عملية إنشاء برامج تعمل على الأجهزة المحمولة مثل الهواتف الذكية والأجهزة اللوحية",
    sections: [
      {
        title: "أنواع التطبيقات",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              {
                title: "تطبيقات أصلية",
                description: "مبنية خصيصًا لنظام تشغيل معين (iOS أو Android)",
                icon: "📱",
                features: ["أداء عالي", "وصول كامل لميزات الجهاز", "تجربة مستخدم مميزة"]
              },
              {
                title: "تطبيقات الويب",
                description: "تطبيقات تعمل عبر المتصفح دون تثبيت",
                icon: "🌐",
                features: ["لا تتطلب تثبيت", "متاحة على جميع الأنظمة", "سهلة التحديث"]
              },
              {
                title: "تطبيقات هجينة",
                description: "تجمع بين التطبيقات الأصلية وتطبيقات الويب",
                icon: "🔀",
                features: ["تكلفة تطوير أقل", "نشر أسرع", "قابلة للتشغيل على منصات متعددة"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-blue-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2 text-blue-400">{item.icon}</span>
                  <h3 className="font-bold text-blue-300">{item.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="text-green-400 mr-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "أدوات التطوير",
        content: (
          <div className="mt-5 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Flutter", type: "هجين", icon: "🟣" },
                { name: "React Native", type: "هجين", icon: "⚛️" },
                { name: "Swift", type: "iOS", icon: "🍎" },
                { name: "Kotlin", type: "Android", icon: "🤖" },
                { name: "Xamarin", type: "هجين", icon: "🟣" },
                { name: "Ionic", type: "ويب", icon: "🌐" },
                { name: "Java", type: "Android", icon: "☕" },
                { name: "Objective-C", type: "iOS", icon: "🍏" },
              ].map((tool, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg border border-gray-700 flex items-center">
                  <span className="text-2xl mr-3 text-blue-400">{tool.icon}</span>
                  <div>
                    <div className="font-medium text-gray-100">{tool.name}</div>
                    <div className="text-xs text-gray-400">{tool.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ]
  },
  uiux: {
    title: "تصميم واجهات المستخدم (UI/UX)",
    description: "علم تصميم تجارب المستخدم وتطوير واجهات تفاعلية تركز على احتياجات المستخدم",
    sections: [
      {
        title: "مبادئ التصميم الأساسية",
        content: (
          <div className="space-y-4 mt-4">
            {[
              {
                principle: "التسلسل الهرمي البصري",
                description: "ترتيب العناصر حسب الأهمية لتوجيه المستخدم",
                icon: "📐"
              },
              {
                principle: "التناسق والاتساق",
                description: "الحفاظ على نمط موحد عبر التصميم",
                icon: "🔄"
              },
              {
                principle: "سهولة الاستخدام",
                description: "ضمان وضوح التصميم وسهولة التنقل",
                icon: "👍"
              },
              {
                principle: "التغذية الراجعة",
                description: "إظهار ردود فعل فورية لأفعال المستخدم",
                icon: "💬"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-800 rounded-lg border border-purple-500/30">
                <span className="text-2xl mr-3 text-purple-400">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-purple-300">{item.principle}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "أدوات التصميم الشائعة",
        content: (
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Figma", icon: "🟣", category: "تصميم وبروتوتايب" },
              { name: "Adobe XD", icon: "🎨", category: "تصميم وبروتوتايب" },
              { name: "Sketch", icon: "✏️", category: "تصميم واجهات" },
              { name: "InVision", icon: "🔄", category: "بروتوتايب تفاعلي" },
              { name: "Balsamiq", icon: "📝", category: "وايرفريم" },
              { name: "Axure", icon: "📊", category: "بروتوتايب متقدم" },
              { name: "Miro", icon: "🧠", category: "تخطيط وتصميم" },
              { name: "Zeplin", icon: "🎯", category: "تسليم التصاميم" },
            ].map((tool, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex flex-col items-center text-center">
                <span className="text-3xl mb-2 text-purple-400">{tool.icon}</span>
                <div className="font-medium text-gray-100">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-1">{tool.category}</div>
              </div>
            ))}
          </div>
        )
      }
    ]
  },
  frontend: {
    title: "تطوير الواجهة الأمامية",
    description: "تطوير الجزء المرئي من التطبيق الذي يتفاعل معه المستخدمون مباشرة",
    sections: [
      {
        title: "تقنيات أساسية",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              {
                title: "HTML5",
                description: "هيكل الصفحة والمحتوى",
                icon: "📄",
                features: ["سيمانتيك", "إمكانية الوصول", "هيكلة المحتوى"]
              },
              {
                title: "CSS3",
                description: "تنسيق وتصميم العناصر",
                icon: "🎨",
                features: ["Flexbox", "Grid", "Animations", "Responsive"]
              },
              {
                title: "JavaScript",
                description: "الوظائف والتفاعلات",
                icon: "⚡",
                features: ["ES6+", "DOM Manipulation", "Events", "APIs"]
              }
            ].map((tech, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-green-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2 text-green-400">{tech.icon}</span>
                  <h3 className="font-bold text-green-300">{tech.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{tech.description}</p>
                <ul className="space-y-1">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="text-green-400 mr-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "أطر العمل الحديثة",
        content: (
          <div className="mt-5 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex flex-wrap gap-3">
              {[
                { name: "React", icon: "⚛️", color: "bg-blue-900/50" },
                { name: "Vue.js", icon: "🟢", color: "bg-green-900/50" },
                { name: "Angular", icon: "🅰️", color: "bg-red-900/50" },
                { name: "Svelte", icon: "✨", color: "bg-orange-900/50" },
                { name: "Next.js", icon: "⏭️", color: "bg-gray-800" },
                { name: "Nuxt.js", icon: "🟢", color: "bg-green-900/50" },
              ].map((framework, index) => (
                <div key={index} className={`flex items-center p-3 rounded-lg ${framework.color} border border-gray-700`}>
                  <span className="text-2xl mr-2 text-green-400">{framework.icon}</span>
                  <span className="font-medium text-gray-100">{framework.name}</span>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ]
  },
  backend: {
    title: "تطوير الواجهة الخلفية",
    description: "تطوير الجزء غير المرئي من التطبيق الذي يدعم العمليات المنطقية وقواعد البيانات",
    sections: [
      {
        title: "مكونات الخلفية الأساسية",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "قواعد البيانات",
                description: "تخزين وإدارة البيانات",
                icon: "💾",
                examples: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
              },
              {
                title: "الخوادم",
                description: "معالجة الطلبات وتنفيذ العمليات",
                icon: "🖥️",
                examples: ["Node.js", "Django", "Ruby on Rails", "Spring Boot"]
              },
              {
                title: "واجهات برمجة التطبيقات (API)",
                description: "التواصل بين المكونات المختلفة",
                icon: "🔌",
                examples: ["REST", "GraphQL", "SOAP", "gRPC"]
              },
              {
                title: "الأمان",
                description: "حماية البيانات والأنظمة",
                icon: "🔒",
                examples: ["Authentication", "Authorization", "Encryption", "Firewalls"]
              }
            ].map((component, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-indigo-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2 text-indigo-400">{component.icon}</span>
                  <h3 className="font-bold text-indigo-300">{component.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{component.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-gray-400">أمثلة:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {component.examples.map((example, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-200 border border-gray-600">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    ]
  },
  management: {
    title: "الإدارة الرقمية",
    description: "إدارة جميع الجوانب المرتبطة بالأصول الرقمية والاستراتيجيات عبر الإنترنت",
    sections: [
      {
        title: "عناصر الإدارة الرقمية",
        content: (
          <div className="space-y-4 mt-4">
            {[
              {
                element: "تحليل البيانات",
                description: "تتبع وتحليل أداء الحملات الرقمية",
                icon: "📈",
                tools: ["Google Analytics", "Adobe Analytics", "Hotjar"]
              },
              {
                element: "إدارة المحتوى",
                description: "إنشاء وتنظيم ونشر المحتوى الرقمي",
                icon: "✍️",
                tools: ["WordPress", "Contentful", "HubSpot"]
              },
              {
                element: "التسويق الرقمي",
                description: "استراتيجيات التسويق عبر القنوات الرقمية",
                icon: "📣",
                tools: ["SEO", "SEM", "Email Marketing", "Social Media"]
              },
              {
                element: "تجربة المستخدم",
                description: "تحسين رحلة العميل عبر القنوات الرقمية",
                icon: "👥",
                tools: ["User Testing", "Journey Mapping", "Feedback Analysis"]
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-800 rounded-xl border border-amber-500/30">
                <span className="text-2xl mr-3 text-amber-400">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-amber-300">{item.element}</h4>
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span key={i} className="bg-amber-900/30 text-amber-200 px-2 py-1 rounded text-xs border border-amber-700/50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "منهجيات الإدارة",
        content: (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "إدارة المشاريع الرقمية",
                description: "تخطيط وتنفيذ المشاريع الرقمية باستخدام منهجيات حديثة",
                icon: "🗓️",
                methods: ["Agile", "Scrum", "Kanban"]
              },
              {
                title: "قياس الأداء",
                description: "تتبع وتحسين مؤشرات الأداء الرئيسية الرقمية",
                icon: "📊",
                metrics: ["KPI", "ROI", "Conversion Rates", "Engagement"]
              }
            ].map((method, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-amber-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2 text-amber-400">{method.icon}</span>
                  <h3 className="font-bold text-amber-300">{method.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{method.description}</p>
                <div>
                  <span className="text-xs font-medium text-gray-400">الأدوات والمنهجيات:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {method.methods?.map((m, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-200 border border-gray-600">
                        {m}
                      </span>
                    ))}
                    {method.metrics?.map((m, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-200 border border-gray-600">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    ]
  },
  saas: {
    title: "برمجيات كخدمة (SaaS)",
    description: "نموذج لتقديم البرمجيات عبر الإنترنت حيث يتم استضافة التطبيقات على خوادم مزود الخدمة",
    sections: [
      {
        title: "مميزات SaaS",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              {
                title: "اقتصادية",
                description: "لا تحتاج إلى استثمارات مسبقة في البنية التحتية",
                icon: "💰",
                features: ["اشتراك شهري/سنوي", "لا تكاليف صيانة", "قابلية التوسع حسب الحاجة"]
              },
              {
                title: "سهولة الوصول",
                description: "يمكن الوصول للتطبيقات من أي مكان",
                icon: "🌍",
                features: ["من أي جهاز متصل بالإنترنت", "لا حاجة للتثبيت", "عمل جماعي سهل"]
              },
              {
                title: "التحديثات التلقائية",
                description: "تحديثات مستمرة دون تدخل المستخدم",
                icon: "🔄",
                features: ["أحدث الميزات دائماً", "تحسينات مستمرة", "لا توقف للعمل"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-cyan-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2 text-cyan-400">{item.icon}</span>
                  <h3 className="font-bold text-cyan-300">{item.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="text-green-400 mr-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "منصات SaaS رائدة",
        content: (
          <div className="mt-5 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Salesforce", category: "CRM", icon: "📊" },
                { name: "Slack", category: "التواصل", icon: "💬" },
                { name: "Zoom", category: "مؤتمرات", icon: "🎥" },
                { name: "Dropbox", category: "تخزين", icon: "📁" },
                { name: "Shopify", category: "تجارة", icon: "🛍️" },
                { name: "Canva", category: "تصميم", icon: "🎨" },
                { name: "HubSpot", category: "تسويق", icon: "📣" },
                { name: "Zendesk", category: "دعم", icon: "🛟" },
              ].map((platform, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg border border-gray-700 flex flex-col items-center text-center">
                  <span className="text-2xl mb-2 text-cyan-400">{platform.icon}</span>
                  <div>
                    <div className="font-medium text-gray-100">{platform.name}</div>
                    <div className="text-xs text-gray-400">{platform.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        title: "نموذج العمل",
        content: (
          <div className="mt-5 p-4 bg-gray-800 rounded-xl border border-cyan-500/30">
            <div className="space-y-4">
              <div className="flex">
                <div className="bg-cyan-900/30 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-cyan-300">الاشتراك</h4>
                  <p className="text-gray-300">يدفع العملاء رسومًا دورية (شهرية/سنوية) مقابل استخدام الخدمة</p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-cyan-900/30 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-cyan-300">الاستضافة السحابية</h4>
                  <p className="text-gray-300">يتم استضافة التطبيق على خوادم المزود مع إدارة كاملة للبنية التحتية</p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-cyan-900/30 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-xl">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-cyan-300">التحديث المستمر</h4>
                  <p className="text-gray-300">يتم إطلاق تحديثات وتحسينات بشكل دوري لجميع المستخدمين</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  ecomm: {
    title: "التجارة الإلكترونية",
    description: "شراء وبيع السلع والخدمات عبر الإنترنت، بما في ذلك نقل الأموال والبيانات لإتمام الصفقات",
    sections: [
      {
        title: "أنماط التجارة الإلكترونية",
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "B2C (شركة لمستهلك)",
                description: "بيع المنتجات مباشرة للمستهلكين النهائيين",
                icon: "👤",
                examples: ["Amazon", "Noon", "Shein"]
              },
              {
                title: "B2B (شركة لشركة)",
                description: "بيع المنتجات بين الشركات",
                icon: "🏢",
                examples: ["Alibaba", "TradeKey", "ThomasNet"]
              },
              {
                title: "C2C (مستهلك لمستهلك)",
                description: "بيع المنتجات بين المستهلكين",
                icon: "🤝",
                examples: ["eBay", "OpenSooq", "Facebook Marketplace"]
              },
              {
                title: "C2B (مستهلك لشركة)",
                description: "بيع الخدمات من مستقلين للشركات",
                icon: "💼",
                examples: ["Upwork", "Fiverr", "Khamsat"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-red-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2 text-red-400">{item.icon}</span>
                  <h3 className="font-bold text-red-300">{item.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-gray-400">أمثلة:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.examples.map((example, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-200 border border-gray-600">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "مكونات أساسية",
        content: (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "منصة المتجر",
                description: "النظام الأساسي لإدارة المتجر",
                icon: "🛒",
                tools: ["Shopify", "WooCommerce", "Magento"]
              },
              {
                title: "بوابة الدفع",
                description: "معالجة المدفوعات الإلكترونية",
                icon: "💳",
                tools: ["PayPal", "Stripe", "Tamara"]
              },
              {
                title: "إدارة المخزون",
                description: "تتبع المنتجات والمستودعات",
                icon: "📦",
                tools: ["TradeGecko", "Zoho Inventory", "Cin7"]
              }
            ].map((component, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border border-red-500/30">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2 text-red-400">{component.icon}</span>
                  <h3 className="font-bold text-red-300">{component.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{component.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-gray-400">أدوات شائعة:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {component.tools.map((tool, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-200 border border-gray-600">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      },
      {
        title: "اتجاهات حديثة",
        content: (
          <div className="mt-5 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="space-y-3">
              {[
                {
                  trend: "التجارة عبر الهاتف المحمول",
                  description: "زيادة المبيعات عبر تطبيقات الموبايل",
                  icon: "📱"
                },
                {
                  trend: "الذكاء الاصطناعي",
                  description: "تخصيص التجربة وتوقع سلوك العملاء",
                  icon: "🤖"
                },
                {
                  trend: "التسوق الاجتماعي",
                  description: "دمج التسوق مع منصات التواصل الاجتماعي",
                  icon: "📱💬"
                },
                {
                  trend: "التجارة الصوتية",
                  description: "الشراء باستخدام الأوامر الصوتية",
                  icon: "🎤"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start p-3 bg-gray-800 rounded-lg border border-gray-700">
                  <span className="text-2xl mr-3 text-red-400">{item.icon}</span>
                  <div>
                    <h4 className="font-medium text-red-300">{item.trend}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ]
  }
};

const DigitalTerminologyDashboard = () => {
  const [activeTab, setActiveTab] = useState<TabId>('mobile');
  const [isScrolled, setIsScrolled] = useState(false);

  const activeContent = contentData[activeTab];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col  md:items-center md:justify-between">
            <div className='flex items-center justify-between w-full mb-3'>
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                قاموس المصطلحات الرقمية
              </h1>
              <p className="text-gray-400 text-sm mt-1 hidden md:block">
                دليل شامل لمفاهيم التكنولوجيا الرقمية الحديثة والتطورات التقنية
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex justify-center">
              <div className="bg-gray-800 rounded-xl p-1 flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg transition-all flex flex-col items-center ${activeTab === tab.id
                      ? `bg-gradient-to-r from-blue-700 to-blue-900 text-white`
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <span className="text-xl mr-2">{tab.icon}</span>
                    <span className="hidden sm:inline txt-sm">{tab.title}</span>
                    <span className="sm:hidden">{tab.icon}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-42 pb-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <span className="text-4xl bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full">
              {tabs.find(t => t.id === activeTab)?.icon}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {activeContent.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {activeContent.description}
          </p>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl border border-gray-700 p-6 md:p-8">
          <div className="space-y-10">
            {activeContent.sections.map((section, index) => (
              <div key={index} className="scroll-mt-24" id={`section-${index}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-xl mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Navigation
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gray-800 rounded-full p-2 shadow-xl border border-gray-700">
          <div className="flex flex-col items-center">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 rounded-full my-1 transition-all ${activeTab === tab.id
                  ? `bg-gradient-to-r from-blue-600 to-blue-800 text-white`
                  : 'text-gray-400 hover:text-white'
                  }`}
                title={tab.title}
              >
                <span className="text-xl">{tab.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default DigitalTerminologyDashboard;