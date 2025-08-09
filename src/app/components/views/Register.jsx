"use client";

import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function validate() {
    if (!name.trim() || !email.trim() || !password) {
      return "Bütün xananı doldurun.";
    }
    // sadə email yoxlaması
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return "Düzgün email daxil edin.";
    }
    if (password.length < 6) {
      return "Şifrə ən az 6 simvol olmalıdır.";
    }
    if (password !== confirm) {
      return "Şifrələr uyğun gəlmir.";
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      // Bu hissəni öz backend endpoint-inizə uyğun dəyişin
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Qeydiyyat uğursuz oldu");
      }

      setSuccess("Qeydiyyat uğurla tamamlandı. Xoş gəlmisiniz!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch (err) {
      setError(err.message || "Xəta baş verdi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Qeydiyyat</h2>

      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 text-sm text-green-800 bg-green-100 p-3 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Ad, Soyad</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 p-2"
            placeholder="Məs: Ali Asadzade"
            type="text"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 p-2"
            placeholder="example@mail.com"
            type="email"
            required
          />
        </label>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Şifrə</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 p-2"
              placeholder="Şifrəniz"
              type={showPassword ? "text" : "password"}
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Şifrəni təsdiq et</span>
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 p-2"
              placeholder="Şifrəni yenidən daxil edin"
              type={showPassword ? "text" : "password"}
              required
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input
            id="showPw"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword((s) => !s)}
            className="h-4 w-4"
          />
          <label htmlFor="showPw" className="text-sm">
            Şifrəni göstər
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-full bg-indigo-600 text-white font-medium disabled:opacity-60"
        >
          {loading ? "Gözləyin..." : "Qeydiyyatdan keç"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Artıq hesabın var?{" "}
        <a href="/login" className="text-indigo-600 hover:underline">
          Daxil ol
        </a>
      </p>
    </div>
  );
}
