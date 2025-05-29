import {
  AlertTriangle,
  Building,
  CheckCircle,
  FileText,
  Gift,
  Key,
  MapPin,
  Phone,
  Shield,
  Target,
  Users,
  Zap,
} from 'lucide-react';

import DataTable from '../data-table';
import InfoCard from '../info-card';
import SectionHeader from '../section-header';
import Timeline from '../timeline';

export default function PlanSection() {
  const riskData = [
    ["تأخر في التوظيف", "متوسط", "شراكة مع شركات توظيف متخصصة + رواتب تنافسية", "مدير الموارد البشرية"],
    ["منافسة شديدة في السوق", "عالي", "التركيز على التخصص والجودة + أسعار تنافسية", "مدير التسويق"],
    ["تأخر في تطوير المنتجات", "متوسط", "استخدام منهجيات Agile + فريق تطوير متمرس", "مدير التطوير"],
    ["صعوبة في اكتساب العملاء", "متوسط", "استراتيجية تسويق متدرجة + عروض تجريبية مجانية", "مدير المبيعات"],
    ["تقلبات في التدفق النقدي", "عالي", "احتياطي نقدي 6 أشهر + تنويع مصادر الدخل", "المدير المالي"],
    ["تغيرات تقنية سريعة", "متوسط", "استثمار مستمر في التدريب + مراقبة اتجاهات السوق", "مدير التقنية"],
    ["فقدان موظفين رئيسيين", "متوسط", "برامج احتفاظ + توثيق العمليات + تدريب متقاطع", "مدير الموارد البشرية"],
  ]

  const hiringData = [
    ["الشهر 1-2", "مدير المشروع + مطور Backend رئيسي", "فوري لبدء التطوير",],
    ["الشهر 3-4", "مطور Frontend + مصمم UI/UX", "فوري لبدء التطوير",],
    ["الشهر 5-6", "أخصائي تسويق رقمي + دعم فني", "بعد إطلاق النسخة التجريبية",],
    ["الشهر 7-9", "مطور Backend إضافي", "عند الوصول لـ 100 عميل",],
    ["الشهر 10-12", "مطور Frontend إضافي", "عند الوصول لـ 200 عميل",],
    ["السنة الثانية", "مدير مبيعات + محاسب", "للتوسع والنمو",],
  ]

  const customerAcquisitionCards = [
    {
      title: "التسويق الرقمي المدفوع",
      icon: Target,
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>الميزانية:</strong> 30,000 ريال/شهر
          </div>
          <div>
            <strong>القنوات:</strong> جوجل أدز، فيسبوك، لينكد إن
          </div>
          <div>
            <strong>الهدف:</strong> 30 عميل جديد/شهر
          </div>
          <div>
            <strong>التكلفة المتوقعة:</strong> 1,000 ريال/عميل
          </div>
        </div>
      ),
    },
    {
      title: "الشراكات الاستراتيجية",
      icon: Users,
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>شركات الاستضافة:</strong> عمولة 20% لكل إحالة
          </div>
          <div>
            <strong>مكاتب المحاسبة:</strong> خصم 15% للعملاء المحالين
          </div>
          <div>
            <strong>المطورين المستقلين:</strong> برنامج شراكة تقنية
          </div>
          <div>
            <strong>الهدف:</strong> 10 عملاء/شهر من الشراكات
          </div>
        </div>
      ),
    },
    {
      title: "المبيعات المباشرة",
      icon: Phone,
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>فريق المبيعات:</strong> مدير مبيعات + مندوب
          </div>
          <div>
            <strong>المعارض التقنية:</strong> 4 معارض سنوياً
          </div>
          <div>
            <strong>العروض التقديمية:</strong> 20 عرض/شهر
          </div>
          <div>
            <strong>الهدف:</strong> 8 عملاء/شهر من المبيعات المباشرة
          </div>
        </div>
      ),
    },
    {
      title: "برنامج الإحالة والولاء",
      icon: Gift,
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>مكافأة الإحالة:</strong> شهر مجاني للمحيل
          </div>
          <div>
            <strong>خصم العميل الجديد:</strong> 25% لأول 3 أشهر
          </div>
          <div>
            <strong>برنامج الولاء:</strong> خصومات تدريجية حسب المدة
          </div>
          <div>
            <strong>الهدف:</strong> 5 عملاء/شهر من الإحالات
          </div>
        </div>
      ),
    },
  ]

  const cashFlowData = [
    ["الشهر 1", "0 ريال", "150,000 ريال", "-150,000 ريال", "650,000 ريال"],
    ["الشهر 2", "25,000 ريال", "120,000 ريال", "-95,000 ريال", "555,000 ريال"],
    ["الشهر 3", "75,000 ريال", "130,000 ريال", "-55,000 ريال", "500,000 ريال"],
    ["الشهر 4", "120,000 ريال", "135,000 ريال", "-15,000 ريال", "485,000 ريال"],
    ["الشهر 5", "165,000 ريال", "140,000 ريال", "25,000 ريال", "510,000 ريال"],
    ["الشهر 6", "210,000 ريال", "145,000 ريال", "65,000 ريال", "575,000 ريال"],
    ["الشهر 9", "285,000 ريال", "150,000 ريال", "135,000 ريال", "750,000 ريال"],
    ["الشهر 12", "380,000 ريال", "155,000 ريال", "225,000 ريال", "1,200,000 ريال"],
  ]

  const milestonesData = [
    ["إطلاق النسخة التجريبية", "الشهر 4", "منتج SaaS أساسي ", "10 عملاء تجريبيين + معدل رضا 80%+"],
    ["أول 50 عميل مدفوع", "الشهر 6", "إيرادات شهرية 150,000 ريال", "معدل احتفاظ 85%+ + NPS > 50"],
    ["نقطة التعادل التشغيلي", "الشهر 9", "تغطية جميع المصروفات الشهرية", "صافي ربح شهري إيجابي"],
    ["100 عميل نشط", "الشهر 10", "إيرادات شهرية 300,000 ريال", "نمو شهري 15%+"],
    ["التوسع في المنتجات", "الشهر 12", "إطلاق منصة الاستراحات", "500 عميل نشط إجمالي"],
    ["التوسع الإقليمي", "السنة الثانية", "دخول دول الخليج", "1000 عميل نشط"],
  ]

  const scenariosData = [
    ["السيناريو المتحفظ (70%)", "1.88 مليون ريال", "الشهر 12", "120% سنوياً", "نمو بطيء في اكتساب العملاء"],
    ["السيناريو المتوقع (100%)", "2.69 مليون ريال", "الشهر 9", "172.8% سنوياً", "تحقيق الأهداف المخططة"],
    ["السيناريو المتفائل (130%)", "3.50 مليون ريال", "الشهر 7", "225% سنوياً", "نمو سريع + شراكات ناجحة"],
  ]

  const complianceData = [
    ["السجل التجاري", "مكتمل", "الشهر 1", "5,000 ريال", "ساري لمدة سنة"],
    ["رخصة البلدية", "قيد الإنجاز", "الشهر 1", "2,000 ريال", "تجديد سنوي"],
    ["تسجيل ضريبة القيمة المضافة", "مطلوب", "الشهر 2", "0 ريال", "عند تجاوز 375,000 ريال سنوياً"],
    ["تأمين المسؤولية المهنية", "مطلوب", "الشهر 2", "8,000 ريال سنوياً", "تغطية حتى 5 مليون ريال"],
    ["حماية البيانات (PDPL)", "قيد التطوير", "الشهر 4", "15,000 ريال", "امتثال للقانون السعودي"],
    ["شهادة ISO 27001", "مخطط", "الشهر 18", "25,000 ريال", "لتعزيز الثقة مع العملاء الكبار"],
    ["رخصة التجارة الإلكترونية", "مطلوب", "الشهر 3", "1,000 ريال", "من وزارة التجارة"],
  ]

  const technologyRoadmapCards = [
    {
      title: "البنية التقنية الأساسية",
      icon: Building,
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>السحابة:</strong> AWS/Azure مع CDN عالمي
          </div>
          <div>
            <strong>قواعد البيانات:</strong> PostgreSQL + Redis للتخزين المؤقت
          </div>
          <div>
            <strong>الأمان:</strong> SSL، تشفير البيانات، مصادقة ثنائية
          </div>
          <div>
            <strong>المراقبة:</strong> نظام مراقبة 24/7 مع تنبيهات فورية
          </div>
        </div>
      ),
    },
    {
      title: "خطة التطوير التقني",
      icon: Zap,
      content: (
        <div className="space-y-2 text-sm">
          <div>
            <strong>المرحلة 1:</strong> MVP للمنتجات الأساسية (3 أشهر)
          </div>
          <div>
            <strong>المرحلة 2:</strong> ميزات متقدمة + تطبيق جوال (6 أشهر)
          </div>
          <div>
            <strong>المرحلة 3:</strong> ذكاء اصطناعي + تحليلات متقدمة (12 شهر)
          </div>
          <div>
            <strong>المرحلة 4:</strong> توسع إقليمي + تعدد اللغات (18 شهر)
          </div>
        </div>
      ),
    },
  ]

  const competitiveResponseData = [
    ["خفض الأسعار من المنافسين", "تركيز على القيمة المضافة + حزم خدمات شاملة", "مدير التسويق"],
    ["إطلاق منتجات مشابهة", "تسريع التطوير + ميزات حصرية", "مدير التطوير"],
    ["حملات تسويقية مكثفة", "تعزيز العلاقات مع العملاء + برامج ولاء", "مدير المبيعات"],
    ["استحواذ على منافسين صغار", "تقوية الشراكات + تحسين الخدمة", "الإدارة العليا"],
  ]

  const investorReportingData = [
    ["التقارير المالية الشهرية", "تقرير مفصل عن الإيرادات والمصروفات", "خلال 5 أيام من نهاية الشهر"],
    ["تقارير العملاء الربع سنوية", "إحصائيات العملاء ومعدلات الرضا", "خلال 10 أيام من نهاية الربع"],
    ["اجتماعات مجلس الإدارة", "مراجعة الأداء واتخاذ القرارات الاستراتيجية", "شهرياً - الأسبوع الأول"],
    ["تقرير سنوي شامل", "مراجعة شاملة للأداء والخطط المستقبلية", "خلال 30 يوم من نهاية السنة"],
  ]

  const timelineItems = [
    {
      date: "الربع الأول 2025",
      title: "التأسيس والبدء",
      description: (
        <div className="text-gray-600 text-sm leading-relaxed">
          <div className="mb-2">• إكمال الإجراءات القانونية (سجل تجاري، رخصة بلدية)</div>
          <div className="mb-2">• تجهيز المكتب الأساسي وتركيب البنية التحتية التقنية</div>
          <div className="mb-2">• توظيف الفريق الأساسي (مدير المشروع + مطور رئيسي)</div>
          <div className="mb-2">• توظيف مطور Frontend + مصمم UI/UXالأساسية</div>
          <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <span className="font-semibold text-yellow-700">تخفيف المخاطر:</span>
            <div className="mt-1">• تخصيص 30 يوم كفترة عازلة للإجراءات القانونية</div>
            <div>• استخدام مساحات العمل المشتركة لتقليل التكاليف الأولية</div>
          </div>
        </div>
      )
    },
    {
      date: "الربع الثاني 2025",
      title: "التطوير والاختبار",
      description: (
        <div className="text-gray-600 text-sm leading-relaxed">
          <div className="mb-2">• تطوير النسخة التجريبية (Beta) مع مجموعة محددة من العملاء</div>
          <div className="mb-2">• تنفيذ اختبارات الأمان والاختراق الأساسية</div>
          {/* <div className="mb-2">• توظيف مطور Frontend + مصمم UI/UX</div> */}
          <div className="mb-2">• بدء التسويق الأولي وبناء قائمة الانتظار</div>
          <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <span className="font-semibold text-yellow-700">تخفيف المخاطر:</span>
            <div className="mt-1">• اختبارات المستخدم مع 20 عميل محتمل قبل الإطلاق الرسمي</div>
            <div>• تطوير خطة احتياطية لتأخر التوظيف بالشراكة مع فرق خارجية</div>
          </div>
        </div>
      )
    },
    {
      date: "الربع الثالث 2025",
      title: "الإطلاق والتحسين",
      description: (
        <div className="text-gray-600 text-sm leading-relaxed">
          <div className="mb-2">• الإطلاق الرسمي لمنتجات SaaS الأساسية</div>
          <div className="mb-2">• بدء حملات التسويق الرقمي المدفوعة</div>
          <div className="mb-2">• توظيف أخصائي تسويق رقمي + دعم فني</div>
          <div className="mb-2">• تطوير نظام احتياطي للبيانات واستعادة الكوارث</div>
          <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <span className="font-semibold text-yellow-700">تخفيف المخاطر:</span>
            <div className="mt-1">• تشغيل خادمين احتياطيين في مناطق جغرافية مختلفة</div>
            <div>• تخصيص ميزانية طوارئ بنسبة 15% للتسويق غير المتوقع</div>
          </div>
        </div>
      )
    },
    {
      date: "الربع الرابع 2025",
      title: "الاستقرار والتوسع",
      description: (
        <div className="text-gray-600 text-sm leading-relaxed">
          <div className="mb-2">• تحليل أداء الربع الثاني بعد الإطلاق</div>
          <div className="mb-2">• تطوير تطبيقات الجوال وإطلاق منصة الاستراحات</div>
          <div className="mb-2">• تطبيق برامج ولاء العملاء وزيادة الاحتفاظ</div>
          <div className="mb-2">• البدء في التخطيط للتوسع الإقليمي</div>
          <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <span className="font-semibold text-yellow-700">تخفيف المخاطر:</span>
            <div className="mt-1">• تنويع مصادر الدخل عبر منتجات إضافية</div>
            <div>• إنشاء صندوق احتياطي نقدي لستة أشهر من التشغيل</div>
          </div>
        </div>
      )
    },
    {
      date: "الربع الأول 2026",
      title: "النضوج والنمو",
      description: (
        <div className="text-gray-600 text-sm leading-relaxed">
          <div className="mb-2">• دخول أسواق دول الخليج المستهدفة</div>
          <div className="mb-2">• الحصول على شهادة ISO 27001 للأمان</div>
          <div className="mb-2">• تطوير نظام ذكاء اصطناعي للتنبؤ بالطلب</div>
          <div className="mb-2">• تقييم فرص التوسع في منتجات جديدة</div>
          <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <span className="font-semibold text-yellow-700">تخفيف المخاطر:</span>
            <div className="mt-1">• تطبيق خطة استمرارية الأعمال (BCP)</div>
            <div>• تأمين ضد المسؤولية المهنية يغطي 5 مليون ريال</div>
          </div>
        </div>
      )
    }
  ]

  const kpiData = [
    ["معدل اكتساب العملاء الشهري", "30 عميل/شهر", "نظام CRM متقدم + تتبع المصادر"],
    ["تكلفة اكتساب العميل (CAC)", "≤ 500 ريال", "تحليل الإنفاق التسويقي لكل قناة"],
    ["معدل احتفاظ العملاء", "≥ 85%", "تتبع تجديد الاشتراكات + استطلاعات دورية"],
    ["القيمة الدائمة للعميل (LTV)", "≥ 5,000 ريال", "تحليل سلوك العملاء طويل المدى"],
    ["معدل النمو الشهري (MRR)", "≥ 15%", "تتبع الإيرادات المتكررة الشهرية"],
    ["صافي نقاط الترويج (NPS)", "≥ 50", "استطلاعات رضا العملاء الربع سنوية"],
    ["معدل التحويل من التجربة للدفع", "≥ 25%", "تحليل قمع المبيعات"],
    ["عائد الاستثمار التسويقي (ROAS)", "≥ 4:1", "مقارنة الإنفاق التسويقي بالإيرادات المحققة"],
  ]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <SectionHeader title="خطة التنفيذ الشاملة والجدول الزمني" icon={MapPin} />

      <div className="mb-8">
        <Timeline items={timelineItems} />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-600" />
          إدارة المخاطر واستراتيجيات التخفيف
        </h3>
        <DataTable headers={["المخاطر المحتملة", "مستوى الخطر", "استراتيجية التخفيف", "المسؤول"]} data={riskData} />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          خطة التوظيف التفصيلية والتدرجية
        </h3>
        <DataTable
          headers={["المرحلة الزمنية", "الوظائف المطلوبة", "المبرر والتوقيت",]}
          data={hiringData}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-600" />
          استراتيجية اكتساب العملاء المفصلة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customerAcquisitionCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>

      {/* <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          التدفق النقدي الشهري المفصل
        </h3>
        <DataTable
          headers={["الفترة", "الإيرادات", "المصروفات", "صافي التدفق", "الرصيد التراكمي"]}
          data={cashFlowData}
        />
      </div> */}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-purple-600" />
          معالم المشروع والمخرجات القابلة للقياس
        </h3>
        <DataTable
          headers={["المعلم الرئيسي", "التاريخ المستهدف", "المخرجات المتوقعة", "معايير النجاح"]}
          data={milestonesData}
        />
      </div>

      {/* <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart className="w-5 h-5 text-orange-600" />
          سيناريوهات الأداء المالي وتحليل الحساسية
        </h3>
        <DataTable
          headers={["السيناريو", "الإيرادات السنة الأولى", "نقطة التعادل", "العائد للمستثمر", "الافتراضات"]}
          data={scenariosData}
        />
      </div> */}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Building className="w-5 h-5 text-indigo-600" />
          خارطة الطريق التقنية والبنية التحتية
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologyRoadmapCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-teal-600" />
          الامتثال القانوني والتنظيمي
        </h3>
        <DataTable
          headers={["المتطلب القانوني", "الحالة", "التاريخ المستهدف", "التكلفة", "ملاحظات"]}
          data={complianceData}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          استراتيجية الاستجابة للمنافسة
        </h3>
        <DataTable
          headers={["سيناريو المنافسة", "استراتيجية الاستجابة", "المسؤول عن التنفيذ"]}
          data={competitiveResponseData}
        />
      </div>

      {/* <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-pink-600" />
          نظام التقارير للمستثمرين والحوكمة
        </h3>
        <DataTable headers={["نوع التقرير", "المحتوى", "التوقيت"]} data={investorReportingData} />
      </div> */}

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Key className="w-5 h-5 text-green-600" />
          مؤشرات الأداء الرئيسية المفصلة (KPIs)
        </h3>
        <DataTable headers={["المؤشر", "الهدف المحدد", "طريقة القياس والتتبع"]} data={kpiData} />
      </div>
    </div>
  )
}