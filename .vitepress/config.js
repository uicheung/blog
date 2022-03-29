// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 * 
 * 
 */

//  const argv = require('minimist')(process.argv.slice(2))
//  const build = argv.build || false
//  const baseBuild = build ? '/blog/' : '/'

module.exports = {
  // base: baseBuild,
  base: '/',
  title: '跟太阳说早安',
  lang: 'zh-CN',
  description: '兴趣使然的博客',
  head: createHead(),
  themeConfig: {
    repo: 'hema/admin',
    docsRepo: 'hema/admin-doc',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  }
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead () {
  return [
    ['meta', { name: 'author', content: '' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vitejs, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'admin docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav () {
  return [
    {
      text: '📗 笔记',
      link: '/record/',
      items: [
        {
          text: '🦄 Web前端',
          link: '/record/web',
        },
        {
          text: '🐢 NodeJS',
          link: '/record/node',
        },
        {
          text: '🐘 数据库',
          link: '/record/db',
        },
        {
          text: '🐧 Linux',
          link: '/record/linux',
        },
        {
          text: '🚀 探索',
          link: '/record/expross',
        }
      ],
    },
    {
      text: '💡 作品',
      link: '/works/',
      items: [
        {
          text: '介绍',
          link: '/components/introduction',
        },
        {
          text: '全局组件',
          link: '/components/glob/Icon',
        },
      ],
    },
    {
      text: '🧲 收藏集',
      link: '/components/',
      items: [
        {
          text: '介绍',
          link: '/components/introduction',
        },
        {
          text: '全局组件',
          link: '/components/glob/Icon',
        },
      ],
    },
    {
      text: '📆 随笔',
      link: '/essay/',
      items: [
        {
          text: '介绍',
          link: '/essay/introduction',
        },
        {
          text: '随一笔',
          link: '/essay/content',
        },
        {
          text: '随便拍',
          link: '/essay/photo',
        },
      ],
    },
  ];
}

function createSidebar () {
  return {
    '/components/': [
      {
        text: '组件',
        children: [
          {
            text: '前言',
            link: '/components/introduction',
          },
        ],
      },
      {
        text: '全局组件',
        children: [
          {
            text: 'Icon',
            link: '/components/glob/Icon',
          },
        ],
      },
    ],
  };
}

