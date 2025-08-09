"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const locale = useLocale();
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-sky-100 to-white">
      {/* Header */}
      <header className="w-full bg-yellow-400 py-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/murclub-logo.png"
            alt="Murclub Logo"
            width={40}
            height={40}
          />
          <h1 className="text-white text-2xl font-bold">murclub</h1>
        </div>
      </header>

      {/* Title */}
      <h2 className="mt-10 text-3xl font-semibold text-gray-800">Нас рать!</h2>

      {/* Avatars */}
      <div className="flex items-center gap-3 mt-6">
        <Image src="/avatars.png" alt="Avatars" width={500} height={200} />
      </div>

      {/* Links */}
      <div className="flex flex-col items-center gap-3 mt-8">
        <Link
          href={`/${locale}/register`}
          className="text-sky-500 hover:underline text-lg"
        >
          Регистироваться
        </Link>
        <Link
          href={`/${locale}/login`}
          className="text-sky-500 hover:underline text-lg"
        >
          Войти
        </Link>
        <Link
          href={`/${locale}/forgot-password`}
          className="text-sky-400 hover:underline text-sm"
        >
          Забыли пароль?
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-auto w-full bg-yellow-400 py-3 text-center text-white text-sm">
        2025 Hakı və Əli
      </footer>
    </div>
  );
}
