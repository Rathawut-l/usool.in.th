module.exports = {
  title: 'Usool.in.th',
  description: 'เว็บไซต์์ Usool.in.th',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit' }],
  ],
  plugins: [
    '@vuepress/plugin-last-updated',
    require('./plugins/plugin-add-dir-auto'),
  ],
  themeConfig: {
    nav: [
      { text: 'หน้าแรก', link: '/' },
      { text: 'ปัญหาเห็นต่าง', link: '/kilaf/' },
    ],
    sidebar: [
      {
        title: 'ปัญหาเห็นต่าง',
        path: '/kilaf/',
        collapsable: false,
        children: [
          {
            title: 'กุนูตซุบฮ์',
            children: [
              '/kilaf/qunoot/',
            ],
          },
        ],
      },
    ],
  },
}
