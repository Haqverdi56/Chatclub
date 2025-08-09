import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Desteklenen diller
  locales: ['az', 'en', 'tr', 'ru'],

  // Varsayılan dil
  defaultLocale: 'az',

  // Otomatik tarayıcı dili algılama
  localeDetection: true
});
