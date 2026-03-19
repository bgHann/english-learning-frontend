"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  // Kiểm tra bảo mật: Nếu chưa login thì đá về /login
  useEffect(() => {
    // CHỈ chuyển hướng khi đã load xong (loading === false)
    // mà vẫn không tìm thấy user
    if (!loading && !user) {
      console.log("Không tìm thấy user, đang đá về login...");
      router.push("/login");
    }
  }, [user, loading, router]);

  // CHẶN HIỂN THỊ: Nếu đang load hoặc chưa có user, không cho render giao diện chính
  if (loading) {
    return <div className="p-10 text-center">Đang kiểm tra đăng nhập...</div>;
  }

  if (!user) {
    return null; // Trả về null để tránh nháy giao diện dashboard trước khi bị đá đi
  }
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold">Chào mừng, {user.email}!</h1>
      </div>

      {/* Streak Card */}
      <Card className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔥</span>
          <div>
            <h3 className="font-bold">Streak học tập</h3>
            <p className="text-sm text-gray-500">Bạn đã học 5 ngày liên tiếp</p>
          </div>
        </div>
        <div className="text-3xl font-bold">
          5 <span className="text-sm font-normal">days</span>
        </div>
      </Card>

      {/* Tiến độ học */}
      <Card className="p-4 space-y-3">
        <h3 className="font-bold flex items-center gap-2">📊 Tiến độ học</h3>
        <Progress value={60} className="h-2" />
        <p className="text-sm text-gray-500">
          60% hoàn thành (12 / 20 bài học)
        </p>
      </Card>

      {/* Ôn tập hôm nay */}
      <Card className="p-4 space-y-4">
        <h3 className="font-bold flex items-center gap-2">🧠 Ôn tập hôm nay</h3>
        <p className="text-sm">Bạn có 15 thẻ cần ôn</p>
        <Button onClick={() => router.push("/learn/flashcards")}>
          Bắt đầu ôn tập
        </Button>
      </Card>

      {/* Badge mới */}
      <Card className="p-4 space-y-4">
        <h3 className="font-bold flex items-center gap-2">🏅 Badge mới</h3>
        <div className="flex items-center gap-4 border p-3 rounded-lg w-fit">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
            ⭐
          </div>
          <div>
            <p className="font-bold text-sm">Streak 5 ngày</p>
            <p className="text-xs text-gray-500">Bạn vừa mở khóa badge này</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
