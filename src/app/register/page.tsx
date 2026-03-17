"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (password.length < 6) {
      alert("Mật khẩu phải ít nhất 6 ký tự");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    console.log("Register:", email, password);

    // sau này gọi API register ở đây
  };
  return (
    <div className="flex min-h-screen flex-col items-center p-6 gap-5">
      <h1 className="text-2xl font-bold pt-20">Đăng ký</h1>

      <Card className="w-full max-w-md p-4 flex flex-col gap-3">
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

        <Input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button onClick={handleRegister}>Tạo tài khoản</Button>
      </Card>
      <p>
        <a href="/login">Đã có tài khoản? Đăng nhập ngay</a>
      </p>
    </div>
  );
}
