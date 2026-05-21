import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Kirpi Dokümantasyon',
  tagline: 'Kirpi ürün ailesi kullanım kılavuzları ve bilgi merkezi',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.kirpinetwork.com',
  baseUrl: '/',

  organizationName: 'kirpinetwork',
  projectName: 'kirpi-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Kirpi Dokümantasyon',

      logo: {
        alt: 'Kirpi Logo',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokümantasyon',
        },

        {
          href: 'https://kirpinetwork.com',
          label: 'Web Sitesi',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Dokümantasyon',
          items: [
            {
              label: 'Başlangıç',
              to: '/docs/intro',
            },
          ],
        },

        {
          title: 'Bağlantılar',
          items: [
            {
              label: 'Kirpi Network',
              href: 'https://kirpinetwork.com',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Kirpi Network`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;