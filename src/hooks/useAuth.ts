"use client";

import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // load user khi mở app
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
    setLoading(false);
  }, []);

  //  ĐĂNG KÝ
  const register = (email: string, password: string) => {
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  //  ĐĂNG NHẬP
  const login = (email: string, password: string) => {
    const data = localStorage.getItem("user");

    if (!data) throw new Error("Chưa có tài khoản");

    const savedUser = JSON.parse(data);

    if (savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
    } else {
      throw new Error("Sai tài khoản hoặc mật khẩu");
    }
  };

  // ĐĂNG XUẤT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, loading, login, register, logout };
};
