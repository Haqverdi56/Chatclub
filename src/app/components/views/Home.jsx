'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations();

	return (
		<div className='p-6'>
			<h1 className='text-2xl'>{t('welcome')}</h1>
			<p>{t('welcome')}</p>
		</div>
	);
}
