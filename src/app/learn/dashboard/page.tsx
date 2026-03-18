"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  // nếu chưa login → về login
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  // chưa có user thì đợi
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
