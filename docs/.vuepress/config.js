module.exports = {
  title: 'Usool.in.th',
  description: 'อุศูล',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit' }],
  ],
  plugins: [
    '@vuepress/plugin-last-updated',
    require('./plugins/plugin-add-dir-auto'),
  ],
}
