"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Kiểm tra login khi vừa mở App
  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    if (data) setUser(JSON.parse(data));
    setLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    const data = localStorage.getItem("registered_user");
    if (!data) throw new Error("Tài khoản chưa tồn tại!");
    const savedUser = JSON.parse(data);

    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(savedUser));
      setUser(savedUser); // ✅ Dòng này sẽ thông báo cho Header đổi giao diện NGAY LẬP TỨC
    } else {
      throw new Error("Sai email hoặc mật khẩu!");
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
