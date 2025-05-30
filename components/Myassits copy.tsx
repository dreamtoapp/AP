import {
  CheckCircle,
  Code2,
  ExternalLink,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const contributions = [
  {
    name: "منصة التجارة الإلكترونية",
    progress: "85%",
    description: "SaaS لتجارة إلكترونية احترافية",
    tech: "Next.js, React, Prisma, MongoDB",
    value: 250000,
    link: "https://ap.dreamto.app/ecommerce",
  },
  {
    name: "AutoCare.sa",
    progress: "85%",
    description: "SaaS لإدارة ورش صيانة السيارات",
    tech: "React, Node.js, MongoDB",
    value: 200000,
    link: "https://ap.dreamto.app/car-doctor",
  },
];

export default function SourceCodeContribution() {
  const total = contributions.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className="max-w-6xl mx-auto p-8 rounded-3xl shadow-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl font-extrabold text-blue-800">
          <Code2 className="text-blue-500 w-6 h-6" />
          مساهمة تقنية عينية (Source Code كأصل)
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 text-right">
        <p className="text-base text-gray-600 leading-relaxed">
          يقدم المؤسس الفني مساهمة تقنية عينية على شكل كود مصدري لمشروعين جاهزين بنسبة كبيرة، تُسجل كأصول غير نقدية في رأس المال التأسيسي.
        </p>

        <div className="overflow-x-auto rounded-xl shadow-inner">
          <table className="w-full text-sm text-right border border-gray-200">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="p-4">المشروع</th>
                <th className="p-4">نسبة الإنجاز</th>
                <th className="p-4">الوصف</th>
                <th className="p-4">التقنيات</th>
                <th className="p-4">القيمة التقديرية</th>
                <th className="p-4">رابط</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map((item, idx) => (
                <tr className="border-t border-gray-200 hover:bg-blue-50/40 transition-colors" key={idx}>
                  <td className="p-4 font-semibold text-gray-800">{item.name}</td>
                  <td className="p-4 text-blue-700 font-medium">{item.progress}</td>
                  <td className="p-4 text-gray-700">{item.description}</td>
                  <td className="p-4 text-gray-500 italic">{item.tech}</td>
                  <td className="p-4 font-bold text-green-700">
                    {item.value.toLocaleString("ar-EG")} ريال
                  </td>
                  <td className="p-4 text-blue-600 font-medium">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      معاينة
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))}
              <tr className="border-t bg-green-50 font-bold">
                <td className="p-4 text-center" colSpan={5}>
                  الإجمالي
                </td>
                <td className="p-4 text-green-800">
                  {total.toLocaleString("ar-EG")} ريال
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
          <li>يشمل الكود: الشيفرة، قواعد بيانات تجريبية، وثائق، تصميمات.</li>
          <li>يتم نقل الملكية إلى الشركة بعد التأسيس بعقد موثق.</li>
          <li>يحصل المؤسس الفني على حصة تعادل القيمة المقدرة للمساهمة.</li>
          <li>في حال عدم التأسيس، تبقى الحقوق محفوظة للمؤسس.</li>
        </ul>

        <div className="flex items-center gap-2 text-sm font-semibold text-green-700 mt-6">
          <CheckCircle className="w-5 h-5 text-green-600" />
          تم تقييم المساهمة العينية كمصدر موثوق وقابل للتسليم الفوري.
        </div>

        <div className="mt-10 space-y-6 bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-extrabold text-blue-900">📊 تقييم شامل وتحليل جدوى مشروع AutoCare.sa</h3>

          <div className="space-y-2">
            <h4 className="font-semibold text-green-800">📌 نسبة النجاح المتوقعة</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>نسبة نجاح متوقعة: <span className="font-bold text-green-700">80% - 90%</span> عند التنفيذ الاحترافي.</li>
              <li>احتياج حقيقي في السوق السعودي من أصحاب السيارات لخدمة موثوقة وعصرية.</li>
              <li>قلة المنافسين الرقميين تعزز من فرصة اكتساب حصة سوقية بسرعة.</li>
              <li>سوق ضخم بمليارات الريالات سنويًا في قطاع صيانة المركبات.</li>
            </ul>
          </div>

          <div className="space-y-2 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-green-800">💡 تحليل الجدوى والعوائد المتوقعة</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>اشتراك 100 ورشة × 500 ريال = <span className="font-bold text-green-700">50,000 ريال شهريًا</span></li>
              <li>أرباح من خدمات التمويل والتقسيط: <span className="text-green-700 font-medium">+5,000 – 15,000 ريال شهريًا</span></li>
              <li>عوائد محتملة من الخدمات الإضافية: سحب، تأمين، طوارئ</li>
              <li>توسع جغرافي ممكن إلى الخليج وأسواق أخرى بسهولة</li>
              <li>نموذج أعمال مستدام ومرن يجمع بين العمولة، الاشتراكات، والتمويل</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 text-green-900 rounded-xl shadow-sm">
            <p className="font-semibold text-lg">✨ الاستثمار في AutoCare.sa هو استثمار في مستقبل الخدمات الذكية للسيارات.</p>
            <p className="text-sm mt-1">نمو حقيقي + احتياج فعلي + نموذج ربحي واضح = فرصة استثمارية ذهبية.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
