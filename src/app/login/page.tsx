"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { loginAPI } from "@/services/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { login } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Nhập đầy đủ");
      return;
    }

    try {
      login(email, password);

      alert("Đăng nhập thành công");
      router.push("frontend\src\app\login\page.tsx");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  return (
    <div className="flex min-h-screen flex-col gap-5 items-center p-6">
      <h1 className="text-2xl font-bold pt-20">Đăng nhập</h1>

      <p className="text-sm text-gray-500">
        Đăng nhập để tiếp tục học tiếng Anh
      </p>

      <Card className="p-4 flex flex-col gap-3 w-full max-w-md">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link
          href="/forgot-password"
          className="text-sm text-gray-500 text-right"
        >
          Quên mật khẩu?
        </Link>

        <Button onClick={handleLogin}>Đăng nhập</Button>
      </Card>

      <p className="text-sm text-gray-500">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="text-blue-500">
          Đăng ký ngay
        </Link>
      </p>

      <Button variant="outline" onClick={handleGoogleLogin}>
        Đăng nhập với Google
      </Button>
    </div>
  );
}
