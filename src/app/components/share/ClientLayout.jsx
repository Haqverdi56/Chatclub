"use client";

import { NextIntlClientProvider } from "next-intl";
import ReduxProvider from "@/redux/ReduxProvider";
import { SessionProvider } from "next-auth/react";

import en from "@/app/locales/en/common.json";
import az from "@/app/locales/az/common.json";

const messagesMap = {
  az,
  en,
};

export default function ClientLayout({ children, locale }) {
  const messages = messagesMap[locale] || messagesMap.en;

  return (
    <SessionProvider>
      <ReduxProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
