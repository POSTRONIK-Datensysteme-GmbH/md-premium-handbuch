// @ts-check
// https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'POStronik Handbuch',
  tagline: 'Dokumentation für MD-Premium Warenwirtschaft und zugehörige Produkte (Kassa, MDE, Erweiterungen)',
  favicon: 'img/favicon.ico', // Eigenes Favicon nach Belieben in static/img/ legen
  url: 'https://postronik-datensysteme-gmbh.github.io',
  baseUrl: '/md-premium-handbuch/',
  organizationName: 'POSTRONIK-Datensysteme-GmbH',
  projectName: 'md-premium-handbuch',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es', 'sr', 'tr', 'fa'],
    path: 'i18n',
    localeConfigs: {
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-AT',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es',
      },
      sr: {
        label: 'Srpski / Hrvatski / Bosanski',
        direction: 'ltr',
        htmlLang: 'sr-Latn',
      },
      tr: {
        label: 'Türkçe',
        direction: 'ltr',
        htmlLang: 'tr',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa',
      },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'ignore',
    },
  },
  clientModules: [require.resolve('./src/clientModule.js')],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ['de', 'en', 'es', 'tr'],
        maxSearchResults: 10,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Handbuch',
        logo: {
          alt: 'POStronik',
          src: 'logo.jpg',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              { label: 'Einstieg', to: '/docs/intro' },
              { label: 'Support', href: 'https://support.postronik.at' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} POStronik Datensysteme`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
