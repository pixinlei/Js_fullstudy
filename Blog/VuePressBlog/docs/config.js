module.exports = {
  title: '皮新雷的博客',
  description: '皮新雷的博客',
  dest: './dist',
  port: '8000',
  head: [
      ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
      nav: [{
          text: '指南', link: '/guide/'
      }],
      sidebar: {'/front_end/':[
          {
                title:'新手指南',
                collapsable: true,
                children:[
                  '/front_end/test/test',
                ]
              },
          ]
      },
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "有新的内容.",
              buttonText: '更新'
          }
      },
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页 ！'
  }
}

