import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "ZundaLink Docs",
  description: "俊达工坊安装教程、使用指南和 API 文档",
  
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c3c3c' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '安装', link: '/install/' },
      { text: '使用', link: '/guide/' },
      { text: 'API 文档', link: '/api/' },
      { text: '捐赠', link: '/donate' },
    ],

    sidebar: {
      '/install/': [
        {
          text: '安装',
          items: [
            { text: '安装概述', link: '/install/' },
            { text: '提交审核表单', link: '/install/submit-form' },
            { text: '连接路由器安装', link: '/install/router' },
            { text: '使用U盘安装', link: '/install/usb' },
            { text: '使用已 Root 的 Android 手机安装（高级）', link: '/install/android-root' },
          ]
        }
      ],
      '/guide/': [
        {
          text: '使用',
          items: [
            { text: '快速开始', link: '/guide/' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 文档',
          items: [
            { text: 'API 概述', link: '/api/' },
            { text: '认证相关', link: '/api/auth' },
            { text: 'Token 管理', link: '/api/token' },
            { text: 'AimeDB 管理', link: '/api/aimedb' },
            { text: '转发调料', link: '/api/forward' },
            { text: '相片管理', link: '/api/photo' },
            { text: '缓存管理', link: '/api/cache' },
            { text: '上传缓存', link: '/api/upload-cache' },
            { text: '使用统计', link: '/api/usage' },
            { text: '工坊控制', link: '/api/m2lctl' },
            { text: '工坊查卡', link: '/api/player-queue' },
            { text: '健康检查', link: '/api/health' },
            { text: '地区统计', link: '/api/region' },
            { text: '游玩记录', link: '/api/playlog' },
            { text: 'M2L ID 管理', link: '/api/m2l-id' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZundaLink' }
    ],

    footer: {
      message: 'Released under the CC BY-NC-SA 4.0 License.',
      copyright: 'Copyright © 2025-2026 ZundaLink'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 可以在这里添加 markdown-it 插件
    }
  },

  ignoreDeadLinks: [
    // 忽略这些链接的检查，因为它们可能指向尚未创建的页面
    './faq',
    './settings',
    './security',
    './features',
    './changelog',
    './user'
  ]
})
