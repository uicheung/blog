const { getPath } = require('./utils')

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/guide/')]: getGuideSidebar()
}

function getGuideSidebar () {
  return [
    {
      text: '指南',
      children: [
        {
          text: '文档1',
          link: '/guide/button'
        },
        {
          text: '文档2',
          link: '/guide/modal'
        }
      ]
    },
    {
      text: '教程',
      children: [
        {
          text: '教你玩',
          link: '/guide/course'
        }
      ]
    }
  ]
}