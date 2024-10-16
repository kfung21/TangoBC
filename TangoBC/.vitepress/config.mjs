import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tango Lessons",
  description: "Tango Instructors in SF",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'Influences', link: '/influences' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'FB', link: 'https://www.facebook.com/Bchan23' }
    ]
  }
})
