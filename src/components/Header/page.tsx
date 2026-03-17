import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b w-full bg-white fixed top-0 left-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          EngApp
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">
          <Link href="/courses">Khóa học</Link>
          <Link href="/pricing">...</Link>
          <Link href="/pricing">...</Link>
        </nav>

        {/* Auth */}
        <div className="flex gap-2">
          <Link href="/login">
            <Button variant="outline">Đăng nhập</Button>
          </Link>

          <Link href="/register">
            <Button>Đăng kí</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
