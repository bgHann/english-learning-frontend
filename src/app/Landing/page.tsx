"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Giả sử bạn có component Badge từ shadcn
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  BookOpen,
  Trophy,
  Zap,
} from "lucide-react"; // Import icon để nhìn chuyên nghiệp hơn

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 selection:bg-blue-100 font-sans">
      {/* 🌈 Nghệ thuật hóa Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-200/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/40 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 flex flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1 rounded-full bg-white/80 border-blue-100 text-blue-600 animate-fade-in"
          >
            🏆EngApp
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] max-w-4xl">
            Làm chủ tiếng Anh <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
              Không cần nỗ lực quá sức.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl font-medium opacity-90">
            Ứng dụng phương pháp phản xạ tự nhiên giúp bạn ghi nhớ 2,000+ từ
            vựng thông dụng và giao tiếp tự tin chỉ sau 3 tháng học tập mỗi
            ngày.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button className="h-14 px-8 text-lg rounded-full shadow-2xl shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group">
              Bắt đầu miễn phí
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 text-lg rounded-full border-zinc-200 bg-white/50 backdrop-blur-sm text-zinc-700 hover:bg-zinc-50 transition-all"
            >
              Xem lộ trình học
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-zinc-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 shadow-sm"
                />
              ))}
            </div>
            <span>Được tin dùng bởi hơn 10,000 học viên toàn cầu</span>
          </div>
        </section>

        {/* --- gioithiue --- */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="text-blue-500" />,
              title: "Từ vựng thông minh",
              desc: "Học qua hình ảnh và ngữ cảnh thực tế, giúp nhớ lâu hơn gấp 3 lần phương pháp truyền thống.",
            },
            {
              icon: <Zap className="text-yellow-500" />,
              title: "Lộ trình cá nhân hóa",
              desc: "AI tự động điều chỉnh độ khó dựa trên tốc độ tiếp thu của riêng bạn.",
            },
            {
              icon: <Headphones className="text-purple-500" />,
              title: "Luyện nghe chủ động",
              desc: "Hàng ngàn mẩu hội thoại từ người bản xứ với đa dạng chủ đề đời sống.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="group p-8 border-none bg-white/70 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </section>

        {/* --- card --- */}
        <section className="py-12">
          <Card className="relative overflow-hidden border-none bg-zinc-900 p-12 text-center rounded-[2.5rem] shadow-2xl">
            <div className="absolute bottom-0 right-0 p-4 opacity-10">
              <Trophy className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                "Cách tốt nhất để dự đoán tương lai là tạo ra nó"
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl italic">
                Bắt đầu hành trình chinh phục ngôn ngữ mới và mở ra cánh cửa sự
                nghiệp quốc tế ngay hôm nay.
              </p>
              <div className="mt-4 flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white font-semibold">
                4.9/5 điểm đánh giá từ người dùng App Store
              </p>
            </div>
          </Card>
        </section>

        {/* --- roadmap --- */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Lộ trình chuẩn khung Châu Âu (CEFR)
            </h2>
            <p className="text-zinc-500 mt-4">
              Từng bước chinh phục từ cơ bản đến thành thạo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { lv: "A1", label: "Cơ bản", color: "bg-green-500" },
              { lv: "A2", label: "Sơ cấp", color: "bg-blue-500" },
              { lv: "B1", label: "Trung cấp", color: "bg-purple-500" },
              { lv: "B2", label: "Cao cấp", color: "bg-orange-500" },
            ].map((item, index) => (
              <Card
                key={index}
                className="group relative p-10 text-center border-zinc-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-500 cursor-pointer rounded-3xl"
              >
                <div
                  className={`w-2 h-2 rounded-full ${item.color} mx-auto mb-4 shadow-lg`}
                />
                <p className="text-4xl font-black text-zinc-900 mb-1">
                  {item.lv}
                </p>
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest leading-none">
                  {item.label}
                </p>
                <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="text-blue-600 w-6 h-6" />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
