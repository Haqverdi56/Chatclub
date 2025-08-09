'use client';

import { NextIntlClientProvider } from 'next-intl';

export default function ClientLayout({ children, locale, messages }) {
	return (
		// <SessionProvider>
		// <ReduxProvider>
		<body>
			<NextIntlClientProvider locale={locale} messages={messages} timeZone='UTC'>
				{children}
			</NextIntlClientProvider>
		</body>
		// </ReduxProvider>
		// </SessionProvider>
	);
}
