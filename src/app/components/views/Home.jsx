"use client";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="p-6">
      <h1 className="text-2xl">{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );
}
