module.exports = {
  title: 'Usool.in.th',
  description: 'เว็บไซต์์ Usool.in.th',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit' }],
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://unpkg.com/purecss@1.0.1/build/pure-min.css', 
      integrity: 'sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47',
      crossorigin: 'anonymous',
    }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@1.0.1/build/grids-responsive-min.css' }],
  ],
  plugins: [
    '@vuepress/plugin-last-updated',
    require('./plugins/plugin-add-dir-auto'),
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    },
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'หน้าแรก', link: '/' },
      { text: 'ปัญหาเห็นต่าง', link: '/kilaf/' },
    ],
    sidebar: [
      {
        title: 'ปัญหาเห็นต่าง',
        collapsable: false,
        children: [
          {
            title: 'อารัมภบท',
            path: '/kilaf/',
          },
          {
            title: 'กุนูตซุบฮ์ปัญหาที่ต้องอาศัยการวินิจฉัย',
            path: '/kilaf/qunoot/',
          },
        ],
      },
    ],
  },
}
