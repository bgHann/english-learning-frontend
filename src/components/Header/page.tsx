"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, User, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    if (!confirm("Bạn có chắc muốn đăng xuất không?")) return;
    await logout();
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 z-[100] w-full border-b border-white/20 bg-white/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">
            <span className="text-white text-2xl font-[900]">E</span>
          </div>
          <span className="text-xl font-black text-zinc-800">
            ENGAPP<span className="text-pink-500">.</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/courses"
            className="flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-pink-600"
          >
            <BookOpen className="w-4 h-4" /> Khóa học
          </Link>

          <Link
            href="/learn/dashboard"
            className="flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-pink-600"
          >
            <GraduationCap className="w-4 h-4" /> Lộ trình
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {loading ? (
            <div className="w-20 h-10 bg-zinc-100 animate-pulse rounded-full" />
          ) : user ? (
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                  {user.email?.[0].toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-zinc-700 hidden md:inline">
                  {user.email?.split("@")[0]}
                </span>
              </div>

              {/* Logout */}
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="hidden sm:flex items-center gap-2 font-bold text-zinc-600"
                >
                  <User className="w-4 h-4" /> Đăng nhập
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-zinc-900 text-white font-bold rounded-full px-6">
                  Đăng ký
                </Button>
              </Link>
            </>
          )}

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-zinc-600"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white/90 backdrop-blur-xl">
          <Link href="/courses" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-2 py-2 text-zinc-700">
              <BookOpen className="w-4 h-4" /> Khóa học
            </div>
          </Link>

          <Link href="/roadmap" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-2 py-2 text-zinc-700">
              <GraduationCap className="w-4 h-4" /> Lộ trình
            </div>
          </Link>

          {!user && (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>
                <div className="py-2">Đăng nhập</div>
              </Link>

              <Link href="/register" onClick={() => setOpen(false)}>
                <div className="py-2 font-bold text-pink-600">
                  Bắt đầu miễn phí
                </div>
              </Link>
            </>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="text-left py-2 text-red-500"
            >
              Đăng xuất
            </button>
          )}
        </div>
      )}
    </header>
  );
}
