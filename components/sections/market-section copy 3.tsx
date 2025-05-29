import React from 'react';

import {
  BarChart,
  Cloud,
  Cpu,
  Globe,
  Languages,
  PieChart,
  ShoppingCart,
  Target,
  TrendingUp,
  Trophy,
  Wrench,
} from 'lucide-react';

const MarketOverview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl shadow-xl text-black">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
          <Globe className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          سوق البرمجيات السعودي: نظرة شاملة
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          تحليل متعمق للنمو والفرص والتحديات في سوق البرمجيات السعودي في ظل رؤية 2030
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
          <div className="flex items-center mb-4">
            <BarChart className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">نمو السوق</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">14.4%</div>
            <p className="text-gray-600">معدل النمو السنوي المركب المتوقع (2025-2030)</p>
            <a href="https://www.stats.gov.sa/en/965"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-1">
              المصدر: الهيئة العامة للإحصاء السعودية
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
          <div className="flex items-center mb-4">
            <PieChart className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">حجم السوق</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">22.7B$</div>
            <p className="text-gray-600">إيرادات متوقعة بحلول عام 2030</p>
            <a href="https://vision2030.gov.sa/media/rc0b5j1s/saudi_vision203.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-1">
              المصدر: رؤية السعودية 2030
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
          <div className="flex items-center mb-4">
            <Cloud className="w-6 h-6 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">السوق السحابي</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">16.85%</div>
            <p className="text-gray-600">نمو الخدمات السحابية (2025-2030)</p>
            <a href="https://www.citc.gov.sa/en/reportsandstudies/Studies/Pages/Cloud-Computing-First-Policy.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-1">
              المصدر: هيئة الاتصالات وتقنية المعلومات
            </a>
          </div>
        </div>
      </div>

      {/* Market Segments */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Target className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">القطاعات الرئيسية</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cloud Services */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border border-blue-200">
            <div className="flex items-center mb-4">
              <Cloud className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">الخدمات السحابية و SaaS</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>حجم السوق: 4.72B$ (2025) → 10.28B$ (2030)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>معدل النمو: 16.85% سنويًا</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>السحابة العامة: 69% من حصة السوق</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>محركات النمو: القطاع المالي والرعاية الصحية</span>
              </li>
            </ul>
            <a href="https://www.mcit.gov.sa/en/reports/ICT-sector-reports"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-3">
              المصدر: وزارة الاتصالات وتقنية المعلومات
            </a>
          </div>

          {/* E-commerce */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md border border-green-200">
            <div className="flex items-center mb-4">
              <ShoppingCart className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">التجارة الإلكترونية</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>نمو المبيعات: +10% (Q4 2024)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>برمجيات إدارة سلسلة التوريد: 188.8M$ (2024) → 503.3M$ (2033)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>اللاعبون الرئيسيون: سلة، زد، نمشي، نون</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>التحديات: أمن الدفع، عناوين المنازل</span>
              </li>
            </ul>
            <a href="https://mci.gov.sa/en/Reports/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-3">
              المصدر: وزارة التجارة والاستثمار
            </a>
          </div>

          {/* Specialized Software */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md border border-purple-200">
            <div className="flex items-center mb-4">
              <Wrench className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">برمجيات متخصصة</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>صيانة السيارات: جراج ماستر، سنترال هب أوتو</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>الضيافة: زائر، CLUTCHi</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>التحديات: تكامل الأنظمة، التكلفة</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>الفرص: حلول متخصصة للصناعة</span>
              </li>
            </ul>
            <a href="https://www.saudivision2030.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-3">
              المصدر: مركز التحول الرقمي السعودي
            </a>
          </div>
        </div>
      </div>

      {/* Key Trends */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">الاتجاهات الرئيسية</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI & Emerging Tech */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border border-blue-200">
            <div className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">الذكاء الاصطناعي والتقنيات الناشئة</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>استثمارات كبيرة في الذكاء الاصطناعي (500M$ من Salesforce)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>دمج الذكاء الاصطناعي في SaaS</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>شبكات الجيل الخامس: مساهمة متوقعة 18B$ في الناتج المحلي بحلول 2030</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>مركز الذكاء الاصطناعي لمعالجة اللغة العربية في الرياض</span>
              </li>
            </ul>
            <a href="https://ai.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-3">
              المصدر: الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي
            </a>
          </div>

          {/* Localization & Arabic */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md border border-green-200">
            <div className="flex items-center mb-4">
              <Languages className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">التوطين ودعم اللغة العربية</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>اللغة العربية: رابع أكثر اللغات استخدامًا على الإنترنت</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>نماذج تحويل الكلام إلى نص للهجات العربية</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>التكامل مع أنظمة الدفع السعودية (مدى، سداد)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>أهمية التكيف الثقافي في تصميم البرمجيات</span>
              </li>
            </ul>
            <a href="https://www.ksaa.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-3">
              المصدر: أكاديمية الملك سلمان العالمية للغة العربية
            </a>
          </div>
        </div>
      </div>

      {/* SME Software Needs */}
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md border border-purple-200 mb-12">
        <div className="flex items-center mb-6">
          <Trophy className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">احتياجات برمجيات الشركات الصغيرة والمتوسطة</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">الاحتياجات الأساسية</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>أنظمة الفوترة الإلكترونية (إلزامية)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>برمجيات المحاسبة والإدارة المالية</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>حلول الدفع الإلكتروني</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>أنظمة إدارة علاقات العملاء (CRM)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>أدوات التعاون المستندة إلى السحابة</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>برمجيات تخطيط موارد المؤسسات (ERP)</span>
              </li>
            </ul>
            <a href="https://www.monshaat.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-3">
              المصدر: هيئة المنشآت الصغيرة والمتوسطة (منشآت)
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">التحديات الرئيسية</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>المقاومة الثقافية والتنظيمية</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>احتياجات التخصيص</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>التكامل مع الأنظمة الحالية</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>التكلفة وتخصيص الموارد</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>الامتثال وأمن البيانات</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>نقص الشفافية والتمويل</span>
              </li>
            </ul>
            <a href="https://www.saudiexport.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline block mt-3">
              المصدر: المركز الوطني للتنافسية
            </a>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-br from-blue-100 to-white rounded-xl p-8 shadow-lg border border-blue-300">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">الخلاصة والفرص الاستراتيجية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mt-1 mr-3">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">الفرص الواعدة</h3>
                <p className="text-gray-600 mt-1">
                  برمجيات متخصصة للقطاعات الناشئة، حلول سحابية للشركات الصغيرة والمتوسطة،
                  تطبيقات الذكاء الاصطناعي، وأنظمة الأمن السيبراني المتكاملة.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-500 rounded-full p-2 mt-1 mr-3">
                <Languages className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">التوطين الثقافي</h3>
                <p className="text-gray-600 mt-1">
                  تطوير حلول تدعم اللغة العربية بشكل كامل وتواكب الخصوصية الثقافية السعودية
                  مع التكامل مع الأنظمة المحلية وطرق الدفع.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-500 rounded-full p-2 mt-1 mr-3">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">التحديات والحلول</h3>
                <p className="text-gray-600 mt-1">
                  التركيز على جودة الدعم الفني، الابتكار في مواجهة التحديات الأمنية،
                  وتأهيل الكوادر التقنية بالتعاون مع الجهات التعليمية.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-500 rounded-full p-2 mt-1 mr-3">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">الاستراتيجية الناجحة</h3>
                <p className="text-gray-600 mt-1">
                  الحلول القابلة للتكيف، الموثوقة، الآمنة، والمصممة لتلبية الاحتياجات المتخصصة
                  للقطاعات المختلفة مع الاستفادة من الزخم الحكومي والتقنيات الناشئة.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 italic">
            جميع البيانات مبنية على التقارير الرسمية الصادرة عن الهيئات الحكومية السعودية والدراسات المعتمدة من هيئة الاتصالات وتقنية المعلومات.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;