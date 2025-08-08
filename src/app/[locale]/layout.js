// app/[locale]/layout.tsx

import ClientLayout from "@/app/components/share/ClientLayout";

export function generateStaticParams() {
  return [{ locale: "az" }, { locale: "en" }];
}

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <ClientLayout locale={locale}>{children}</ClientLayout>
      </body>
    </html>
  );
}
