"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    console.log("Token:", token);
    console.log("New password:", password);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-6 gap-5">
      <h1 className="text-2xl font-bold pt-20">Đặt lại mật khẩu</h1>

      <Card className="w-full max-w-md p-4 flex flex-col gap-3">
        <Input
          placeholder="Mật khẩu mới"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          placeholder="Xác nhận mật khẩu"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button onClick={handleResetPassword}>Đặt lại mật khẩu</Button>
      </Card>
    </div>
  );
}
