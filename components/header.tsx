import {
  Crown,
  User,
} from 'lucide-react';
import Image from 'next/image';

import StatCard from './stat-card';

export default function Header() {
  const stats = [
    { value: "92.15%", label: "هامش الربح المتوقع" },
    { value: "11,527,000 SR مليون+", label: "إيرادات متوقعة سنوياً" },
    { value: "60%", label: "نمو متوقع في السنة الثانية" },
    { value: "384.23%", label: "عائد سنوي للمستثمر" },
  ]

  return (
    <header className="bg-gradient-to-l from-blue-900 via-blue-800 to-blue-700 text-white p-8 rounded-2xl mb-8 shadow-2xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-20 -left-8 w-36 h-36 bg-white/8 rounded-full"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full"></div>

      <div className="relative z-10">
        {/* Investor and Provider Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4">
          {/* Investor Info */}
          <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center gap-3 min-w-fit">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs opacity-80 mb-1">
                الأستاذ الفاضل - (الطرف الأول)

              </p>

              <p className="font-bold text-lg">سعد محمد الشهري</p>
              <p className="text-sm opacity-90">(أبو سلطان)</p>
            </div>
          </div>



          <div className=" flex-col bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center gap-3 min-w-fit">
            <div className='relative w-24 h-28'>
              <Image
                src={"logo.webp"}
                alt={"dreattoapp"}
                fill
                priority
              />
            </div>

            <p className="text-lg ">
              Where Dream Take Off
            </p>


          </div>




          {/* Provider Info */}
          <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center gap-3 min-w-fit">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs opacity-80 mb-1">
                مقدم الخطة - (الطرف الثاني)
              </p>
              <p className="font-bold text-lg">المهندس خالد علي نديش</p>
              <p className="text-sm opacity-90">مؤسس ومدير المشروع</p>
            </div>
          </div>
        </div>

        {/* Main Title Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            WWW.DREAMTO.APP
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            خطة تأسيس مكتب تطوير برمجيات
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl opacity-95 leading-relaxed">
              فرصة استثمارية واعدة في المملكة العربية السعودية
            </p>
            <p className="text-base md:text-lg opacity-90 mt-2">
              توقعات أرباح تصل إلى <span className="font-bold text-yellow-300">20,000,000 ريال</span> بعد 3 سنوات
            </p>

          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Decorative Bottom Border */}
        <div className="mt-6 pt-4 border-t border-white/20 text-center">
          <p className="text-sm opacity-75">خطة عمل شاملة ومدروسة • تحليل مالي دقيق • فرصة استثمارية مضمونة</p>
        </div>
      </div>
    </header>
  )
}
