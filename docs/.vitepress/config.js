const base = process.env.BASE || '/'
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
  // 网站标题
  title: 'QIF 前端文档系统',
  // 网站描述
  description: 'Life is short, Keep it simple.',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  base: base,
  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav,
    sidebar,

    // page meta
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  }
}
