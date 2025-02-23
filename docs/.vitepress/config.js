import { defineConfig } from 'vitepress'

const jhc = 'jameshcooper.com'

export default defineConfig({
  title: jhc,
  titleTemplate: jhc,
  description: 'A space for my endeavors and creative pursuits.',
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-01SET1G315',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-01SET1G315');`,
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  appearance: 'force-auto',
  themeConfig: {
    lastUpdated: true,
    lastUpdatedText: 'Updated',
  },
})
