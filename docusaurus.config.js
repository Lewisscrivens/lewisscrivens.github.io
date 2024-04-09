// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lewis Scrivens',
  favicon: '/img/favicon.ico',
  url: 'https://lewisscrivens.com/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'lewisscrivens',
  projectName: 'lewisscrivens.github.io',
  deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'log',

  tagline: 'Portfolio of Lewis Scrivens and resources. Senior Gameplay Developer.',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
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
          title: 'Lewis Scrivens',
          items: [
            {
              label: 'Projects',
              to: 'projects',
              position: 'left',
            },
            /*{
              type: 'docSidebar',
              sidebarId: 'resourcesSidebar',
              label: 'Resources',
              position: 'left',
            },*/
            {
              href: 'pathname://CV.pdf',
              position: 'right',
              label: 'CV',
            },
            {
              href: 'https://gamedevforge.net/blog',
              position: 'right',
              label: 'Blog',
            },
            {
              label: 'Contact',
              position: 'right',
              type: 'dropdown',
              items: [
                {
                  href: 'https://www.linkedin.com/in/lewisscrivens/',
                  label: 'LinkedIn',
                },
                {
                  href: 'https://github.com/Lewisscrivens',
                  label: 'GitHub',
                },
                {
                  href: 'https://twitter.com/lewisscrivens',
                  label: 'Twitter',
                },
              ],
            },
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} Lewis Scrivens`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
          additionalLanguages: ['powershell', 'java'],
          magicComments: [
            {
              className: 'theme-code-block-highlighted-line',
              line: 'Highlight',
              block: { start: 'Highlight Start', end: 'Highlight End' },
            },
            {
              className: 'code-block-error-line',
              line: 'Error',
            },
          ],
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
      }),

  customFields: {
    WelcomeMsg: 'Welcome!',
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en"],
        searchBarShortcut: false,
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-F5RY9JSRJP',
        anonymizeIP: true,
      },
    ]
  ],
};

export default config;
