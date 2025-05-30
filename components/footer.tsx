import {
  Heart,
  Shield,
  Star,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mt-12 border border-gray-200">
      <div className="text-center space-y-6">
        {/* Appreciation Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold text-gray-800">شكر وتقدير</h3>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Investor Appreciation */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-gray-800">للمستثمر المحترم</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                نتقدم بجزيل الشكر والامتنان للأستاذ{" "}
                <span className="font-bold text-orange-700"> (أبو سلطان)</span>
                على ثقته الغالية واهتمامه بهذه الفرصة الاستثمارية الواعدة
              </p>
            </div>

            {/* Provider Info */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-gray-800">التزام وضمان</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">

                أُقدّم التزامي الكامل بتنفيذ هذه المبادرة  و تقديم أفضل الخدمات الممكنة، والعمل بكل جدية واحتراف لتحقيق النتائج المرجوة – بمشيئة الله
                <span className="font-bold text-blue-700"> المهندس خالد علي نديش</span>
              </p>
            </div>
          </div>
        </div>

        {/* Document Info */}
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <p className="font-semibold">هذه الوثيقة سرية ومخصصة لأغراض الاستثمار فقط</p>
          </div>
          <p>© 2025 خطة تأسيس مكتب تطوير برمجيات - المملكة العربية السعودية</p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
              مُعد بواسطة: المهندس خالد علي نديش
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              مُقدم إلى: الأستاذ (ابو سلطان)
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6">
          <h4 className="font-bold text-lg mb-3">للتواصل والاستفسار</h4>
          <p className="text-blue-100 text-sm leading-relaxed">
            انا في خدمتك للإجابة على جميع استفساراتكم وتقديم أي توضيحات إضافية حول هذه الفرصة الاستثمارية المميزة
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">جوال:0502699023</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">ايميل :  devnadish@gmail.com</span>

          </div>
        </div>
      </div>
    </footer>
  )
}
