"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log("Send reset link to:", email);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-6 gap-5">
      <h1 className="text-2xl font-bold pt-20">Quên mật khẩu</h1>

      <p className="text-sm text-gray-500">
        Nhập email để nhận link đặt lại mật khẩu
      </p>

      <Card className="w-full max-w-md p-4 flex flex-col gap-3">
        <Input
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={handleReset}>Gửi </Button>
      </Card>
      <p className="text-sm text-gray-500">
        <a href="/login">Quay lại đăng nhập</a>
      </p>
    </div>
  );
}
