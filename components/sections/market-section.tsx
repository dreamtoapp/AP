import React, { useState } from 'react';

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import {
  Bar,
  Doughnut,
  Line,
} from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const SaudiSoftwareMarket = () => {
  const [activeTab, setActiveTab] = useState('cloudSaaS');

  // Chart data
  const marketGrowthData = {
    labels: ['إيرادات 2024', 'الإيرادات المتوقعة 2030'],
    datasets: [{
      label: 'إجمالي الإيرادات (مليار دولار)',
      data: [10.07, 22.75],
      backgroundColor: ['#38bdf8', '#10b981'],
      borderColor: ['#0ea5e9', '#059669'],
      borderWidth: 1
    }]
  };

  const applicationSoftwareData = {
    labels: ['البرمجيات التطبيقية', 'قطاعات أخرى'],
    datasets: [{
      label: 'حصة السوق 2024',
      data: [53.17, 46.83],
      backgroundColor: ['#10b981', '#e5e7eb'],
    }]
  };

  const cloudSaasGrowthData = {
    labels: ['2024/2025', '2030/2033'],
    datasets: [
      {
        label: 'سوق الخدمات السحابية (مليار دولار)',
        data: [4.72, 10.28],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        fill: true,
        tension: 0.1
      },
      {
        label: 'سوق SaaS (مليار دولار)',
        data: [2.91, 9.47],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.1
      }
    ]
  };

  const overallMarketProjectionData = {
    labels: ['2024', '2030'],
    datasets: [{
      label: 'الإيرادات المتوقعة (مليار دولار)',
      data: [10.07, 22.75],
      backgroundColor: ['#60a5fa', '#34d399'],
      borderColor: ['#3b82f6', '#10b981'],
      borderWidth: 1
    }]
  };

  return (
    <div className="font-sans-arabic bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-600">سوق البرمجيات السعودي</h1>
          <div className="flex flex-wrap space-x-4 space-x-reverse mt-2 sm:mt-0">
            {['overview', 'market-snapshot', 'deep-dive', 'driving-forces', 'growth-projections', 'challenges', 'conclusion', 'sources'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-slate-600 hover:text-sky-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(link);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {({
                  'overview': 'نظرة عامة',
                  'market-snapshot': 'لمحة عن السوق',
                  'deep-dive': 'قطاعات رئيسية',
                  'driving-forces': 'القوى الدافعة',
                  'growth-projections': 'توقعات النمو',
                  'challenges': 'التحديات',
                  'conclusion': 'الخلاصة',
                  'sources': 'المصادر'
                })[link]}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Overview Section */}
        <section id="overview" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-2 text-sky-700">نظرة شاملة على سوق البرمجيات في المملكة العربية السعودية</h2>
          <p className="text-center text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            يشهد سوق البرمجيات في المملكة العربية السعودية نموًا هائلاً، مدفوعًا برؤية 2030 والاستثمارات الكبيرة في التحول الرقمي. هذا النمو يعكس تحولًا اقتصاديًا جوهريًا نحو مستقبل متنوع قائم على التكنولوجيا.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">إيرادات 2024</h3>
              <p className="text-4xl font-bold text-slate-800">10.07 <span className="text-2xl">مليار دولار</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">النمو السنوي المركب (25-30)</h3>
              <p className="text-4xl font-bold text-slate-800">14.4%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">الإيرادات المتوقعة 2030</h3>
              <p className="text-4xl font-bold text-slate-800">22.75 <span className="text-2xl">مليار دولار</span></p>
            </div>
          </div>
        </section>

        {/* Market Snapshot */}
        <section id="market-snapshot" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">📊 لمحة عن السوق والمنافسة</h2>
          <p className="text-center text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            يتميز السوق السعودي بديناميكية عالية وفرص واعدة. البرمجيات التطبيقية تستحوذ على الحصة الأكبر، مع تزايد الطلب على الحلول المتخصصة والمحلية.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3 flex items-center"><span className="text-2xl mr-2 ml-2">📈</span>حجم السوق ونموه</h3>
              <div className="text-2xl font-bold text-emerald-600 mb-2">14.4% نمو سنوي مركب</div>
              <p className="text-sm text-slate-600">من المتوقع أن يصل إلى 22.75 مليار دولار بحلول 2030. البرمجيات التطبيقية هي الأكبر (53.17% في 2024).</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3 flex items-center"><span className="text-2xl mr-2 ml-2">🎯</span>العملاء المستهدفون</h3>
              <p className="text-sm text-slate-600">الشركات الصغيرة والمتوسطة، المتاجر الإلكترونية، ورش صيانة السيارات، الشركات الناشئة، ومرافق الضيافة، بالإضافة إلى القطاع الحكومي.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl">
              <h3 className="text-xl font-semibold text-sky-600 mb-3 flex items-center"><span className="text-2xl mr-2 ml-2">🏆</span>الميزة التنافسية </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                <li>أسعار تنافسية</li>
                <li>حلول متخصصة في قطاعات محددة</li>
                <li>دعم فني مميز باللغة العربية</li>
                <li>تكامل مع أنظمة الدفع السعودية</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">نمو إجمالي إيرادات سوق البرمجيات</h3>
              <div className="h-80">
                <Bar
                  data={marketGrowthData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: 'top' },
                      title: { display: false }
                    }
                  }}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">حصة البرمجيات التطبيقية (2024)</h3>
              <div className="h-80">
                <Doughnut
                  data={applicationSoftwareData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: 'right' },
                      title: { display: false }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive */}
        <section id="deep-dive" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">🔎 تعمق في قطاعات البرمجيات الرئيسية</h2>
          <p className="text-center text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            استكشف القطاعات الحيوية مثل الخدمات السحابية، التجارة الإلكترونية، والبرمجيات المتخصصة التي تشكل مستقبل السوق.
          </p>

          <div className="mb-8">
            <div className="flex justify-center space-x-2 space-x-reverse border-b border-slate-300 mb-6">
              {[
                { id: 'cloudSaaS', label: 'السحابة و SaaS' },
                { id: 'ecommerce', label: 'التجارة الإلكترونية' },
                { id: 'niche', label: 'الصناعات المتخصصة' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 border-b-2 transition-all ${activeTab === tab.id
                    ? 'border-sky-500 text-sky-500 font-bold'
                    : 'border-transparent text-slate-600 hover:text-sky-500'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                {activeTab === 'cloudSaaS' && (
                  <>
                    <h3 className="text-2xl font-semibold text-sky-600 mb-4">الخدمات السحابية والبرمجيات كخدمة (SaaS)</h3>
                    <p className="text-slate-600 mb-4">
                      يُعد هذا القطاع من الأسرع نموًا، مدفوعًا بسياسة "السحابة أولاً" ومبادرات التحول الرقمي.
                      من المتوقع أن يصل سوق الخدمات السحابية إلى 10.28 مليار دولار بحلول 2030 (CAGR 16.85%)، وسوق SaaS إلى 9.47 مليار دولار بحلول 2033 (CAGR 13.02%).
                      القطاعات المالية والرعاية الصحية هي المحركات الرئيسية.
                    </p>
                    <div className="h-80">
                      <Line
                        data={cloudSaasGrowthData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: { position: 'top' },
                            title: { display: false }
                          }
                        }}
                      />
                    </div>
                  </>
                )}

                {activeTab === 'ecommerce' && (
                  <>
                    <h3 className="text-2xl font-semibold text-sky-600 mb-4">منصات التجارة الإلكترونية وبرمجيات الأعمال</h3>
                    <p className="text-slate-600 mb-4">
                      يشهد قطاع التجارة الإلكترونية ازدهارًا كبيرًا (+10% مبيعات في الربع الرابع 2024). سوق برمجيات إدارة سلسلة التوريد (SCM) سينمو إلى 503.3 مليون دولار بحلول 2033 (CAGR 10.3%).
                      منصات مثل "سلّة" و "زِد" توفر حلولاً محلية قوية.
                    </p>

                    <h4 className="text-lg font-semibold text-slate-700 mt-6 mb-3">مقارنة تسعيرية تقديرية (للتجارة الإلكترونية SaaS):</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-slate-300 rounded-md">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="py-2 px-4 border-b text-right font-semibold text-slate-700">الخدمة</th>
                            <th className="py-2 px-4 border-b text-right font-semibold text-slate-700">سعرنا (افتراضي)</th>
                            <th className="py-2 px-4 border-b text-right font-semibold text-slate-700">سعر المنافس (سلّة)</th>
                            <th className="py-2 px-4 border-b text-right font-semibold text-slate-700">سعر المنافس (زِد)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-4 border-b text-slate-600">اشتراك أساسي</td>
                            <td className="py-2 px-4 border-b text-slate-600">150 ريال/شهرياً</td>
                            <td className="py-2 px-4 border-b text-slate-600">99 ريال/شهرياً (متقدمة)</td>
                            <td className="py-2 px-4 border-b text-slate-600">99 ريال/شهرياً (Lite)</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-2 px-4 border-b text-slate-600">اشتراك متقدم</td>
                            <td className="py-2 px-4 border-b text-slate-600">400 ريال/شهرياً</td>
                            <td className="py-2 px-4 border-b text-slate-600">650 ريال/شهرياً (احترافية)</td>
                            <td className="py-2 px-4 border-b text-slate-600">333 ريال/شهرياً (Growth)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">ملاحظة: أسعار المنافسين مأخوذة من التقرير وقد تختلف باقاتهم عن "سعرنا" الافتراضي.</p>
                  </>
                )}

                {activeTab === 'niche' && (
                  <>
                    <h3 className="text-2xl font-semibold text-sky-600 mb-4">برمجيات الصناعات المتخصصة (صيانة السيارات والضيافة)</h3>
                    <p className="text-slate-600 mb-2"><strong>صيانة السيارات:</strong> حلول مثل "جراج ماستر" تعالج تحديات التتبع اليدوي ودعم اللغة العربية والفواتير المتوافقة مع ضريبة القيمة المضافة.</p>
                    <p className="text-slate-600"><strong>الضيافة:</strong> حلول مثل "زائر" تدمج أنظمة الحجز مع القنوات العالمية والأنظمة المالية، وتدعم إدارة الطاقة والأمن الذكي.</p>
                    <p className="text-slate-600 mt-4">يُظهر الطلب على هذه الحلول الحاجة الماسة لبرمجيات خاصة بالصناعة وذات صلة ثقافيًا في المملكة.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Driving Forces */}
        <section id="driving-forces" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">🚀 القوى الدافعة والفرص المتاحة</h2>
          <p className="text-center text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            رؤية 2030، الذكاء الاصطناعي، التوطين، واحتياجات الشركات الصغيرة والمتوسطة تشكل مجتمعةً مشهدًا مليئًا بالفرص.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">الذكاء الاصطناعي والتقنيات الناشئة</h3>
              <p className="text-sm text-slate-600">استثمارات كبيرة (مثل 1.5 مليار دولار في Groq) وتدريب 30,000 مواطن في الذكاء الاصطناعي. دمج الذكاء الاصطناعي في SaaS يعزز التحليلات والأتمتة.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">أهمية التوطين ودعم اللغة العربية</h3>
              <p className="text-sm text-slate-600">اللغة العربية هي خامس أكثر اللغات تحدثًا عالميًا. حلول مثل "سلّة" و "جراج ماستر" تنجح بدعمها القوي للغة العربية. مركز الذكاء الاصطناعي لمعالجة اللغة العربية يدفع الابتكار.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">احتياجات الشركات الصغيرة والمتوسطة</h3>
              <p className="text-sm text-slate-600">تشكل أكثر من 99% من القطاع الخاص. تحتاج إلى أنظمة فوترة إلكترونية (إلزامية)، محاسبة، CRM، و ERP. الامتثال التنظيمي محرك رئيسي للتبني.</p>
            </div>
          </div>
        </section>

        {/* Growth Projections */}
        <section id="growth-projections" className="py-12 scroll-mt-20">

          <p className="text-center text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            توقعات واعدة لنمو سوق البرمجيات بشكل عام، مدفوعة بالاستثمارات المستمرة والتحول الرقمي المتسارع.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">توقعات إيرادات سوق البرمجيات الكلي في السعودية</h3>
            <div className="h-80">
              <Bar
                data={overallMarketProjectionData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    title: { display: false }
                  }
                }}
              />
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">
              يُتوقع أن تصل إيرادات السوق إلى حوالي 22.75 مليار دولار أمريكي بحلول عام 2030، محققة معدل نمو سنوي مركب يبلغ 14.4% بين عامي 2025 و 2030.
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section id="challenges" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">🚧 التحديات الرئيسية</h2>
          <p className="text-center text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            رغم الفرص الكبيرة، يواجه السوق تحديات تنظيمية، ونقص في المواهب المحلية المتخصصة، وحاجة مستمرة للتكيف مع المتطلبات المحلية.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:border-l-4 hover:border-red-500">
              <h4 className="text-lg font-semibold text-red-600 mb-2">نقص المواهب والخبرات المحلية</h4>
              <p className="text-sm text-slate-600">نقص في القوى العاملة الوطنية ذات الخبرة في تكنولوجيا المعلومات، مما يؤدي للاعتماد على العمالة الأجنبية ويزيد التكاليف.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:border-l-4 hover:border-red-500">
              <h4 className="text-lg font-semibold text-red-600 mb-2">الأمن السيبراني</h4>
              <p className="text-sm text-slate-600">تزايد تهديدات الجرائم الإلكترونية، ومخاطر تتعلق بالبنية التحتية غير الآمنة للدفع عبر الإنترنت.</p>
            </div>

          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">🏁 الخلاصة والتوجهات المستقبلية</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto transform transition-all hover:shadow-xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              يُظهر سوق البرمجيات في المملكة العربية السعودية نموًا استثنائيًا وفرصًا هائلة، مدفوعًا برؤية 2030 والتحول الرقمي. النجاح يتطلب حلولاً مُكيفة محليًا، آمنة، وتستفيد من التقنيات الناشئة. يُعد التوطين ودعم اللغة العربية، إلى جانب تلبية احتياجات الشركات الصغيرة والمتوسطة، عناصر حاسمة للاستفادة من هذا الزخم. على الرغم من التحديات، فإن المستقبل واعد للابتكار والنمو في هذا القطاع الحيوي.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-700">📚 المصادر</h2>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="text-slate-600 mb-4">تستند المعلومات الواردة في هذا التطبيق إلى تقرير مفصل حول سوق البرمجيات في المملكة العربية السعودية. الأرقام والاقتباسات مُشار إليها في التقرير الأصلي. قائمة المصادر المذكورة في التقرير:</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {[...Array(35)].map((_, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-sky-500 hover:underline ml-2">المصدر [{i + 1}]</span>
                  <span>وصف تفصيلي لمصدر البيانات والتفاصيل المرتبطة به.</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">ملاحظة: الروابط أعلاه هي روابط صورية للإشارة إلى المصادر المذكورة في التقرير الأصلي.</p>
          </div>
        </section>
      </main>


    </div>
  );
};

export default SaudiSoftwareMarket;