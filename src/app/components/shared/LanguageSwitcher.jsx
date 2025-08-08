// components/shared/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchTo = locale === "az" ? "en" : "az";
  const newPath = "/" + switchTo + pathname.slice(3);

  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => router.push(newPath)}
    >
      {switchTo.toUpperCase()}
    </button>
  );
}
