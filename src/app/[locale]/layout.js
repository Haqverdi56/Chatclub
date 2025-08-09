import "../globals.css";

import ClientLayout from "@/app/components/share/ClientLayout";

export function generateStaticParams() {
  return [{ locale: "az" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  const messages = await import(`@/app/locales/${locale}/common.json`).then(
    (mod) => mod.default
  );
  return (
    <html lang={locale}>
      <ClientLayout locale={locale} messages={messages}>
        {children}
      </ClientLayout>
    </html>
  );
}
