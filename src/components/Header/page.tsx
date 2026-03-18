"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, GraduationCap, Zap, User } from "lucide-react"; // Icon giúp menu chuyên nghiệp hơn

export default function Header() {
  return (
    // 🌫️ Hiệu ứng kính mờ (Glassmorphism) giúp Header trông sang trọng khi cuộn trang
    <header className="fixed top-0 left-0 z-[100] w-full border-b border-white/20 bg-white/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/*  LOGO  */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          {/* Khối biểu tượng (Icon Box) */}
          <div className="relative w-11 h-11 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ease-out overflow-hidden">
            {/* Hiệu ứng ánh sáng quét qua khi hover (Glow effect) */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="text-white text-2xl font-[900] tracking-tighter leading-none select-none drop-shadow-md">
              E
            </span>
          </div>

          {/* Tên  */}
          <div className="flex flex-col justify-center">
            <span className="text-xl font-black tracking-tighter text-zinc-800 leading-none">
              ENGAPP<span className="text-pink-500">.</span>
            </span>
            <span className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase leading-tight mt-1">
              Nhóm hihi
            </span>
          </div>
        </Link>

        {/* MENU ĐIỀU HƯỚNG */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            {
              name: "Khóa học",
              href: "/courses",
              icon: <BookOpen className="w-4 h-4" />,
            },
            {
              name: "Lộ trình",
              href: "/roadmap",
              icon: <GraduationCap className="w-4 h-4" />,
            },
            {
              name: "Ưu đãi",
              href: "/pricing",
              icon: <Zap className="w-4 h-4 text-yellow-500" />,
            },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-zinc-600 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-200"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Nút bấm bo tròn  */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="hidden sm:flex items-center gap-2 font-bold text-zinc-600 hover:text-zinc-900 rounded-full px-6 transition-colors"
            >
              <User className="w-4 h-4" />
              Đăng nhập
            </Button>
          </Link>

          <Link href="/register">
            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full px-8 py-6 shadow-xl shadow-zinc-200 hover:-translate-y-0.5 active:scale-95 transition-all">
              Bắt đầu miễn phí
            </Button>
          </Link>

          {/* Menu Mobile */}
          <button className="md:hidden p-2 text-zinc-600">
            <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full" />
            <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full" />
            <div className="w-4 h-0.5 bg-current rounded-full ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
}
