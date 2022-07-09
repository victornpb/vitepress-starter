import nav from './nav.js';
import sidebar from './sidebar.js';

export default {
  title: 'VitePress',
  description: 'Just playing around.',
  
  base: '/vitepress-starter/', // The base URL the site will be deployed at (https://vitepress.vuejs.org/config/app-configs.html#base)

  lastUpdated: true, // Use git commit to get the timestamp. This option enables the default theme to display the page's last updated time.

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      { icon: 'discord', link: '...' },
    ],
  }
};
