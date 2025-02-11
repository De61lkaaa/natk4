"use client";

import React from "react";
import AuthForm from "../components/AuthForm";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (login, password) => {
    if (login === "Admin" && password === "pswrd") {
      router.push("/main");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
      </div>
      <div className="fixed inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="relative z-10 bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-2xl">
        <AuthForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
