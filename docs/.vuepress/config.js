const { description } = require("../../package");

module.exports = {
  base: "/New-blog/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "无痕的新博客",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Github",
        link: "https://github.com/13189449986",
      },
      {
        text: "掘金",
        link: "https://juejin.im/user/5a409238f265da431c708919",
      },
      {
        text: "简书",
        link: "https://www.jianshu.com/u/31bf1bae3a66",
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: "[分享] VSCode配置与团队ESLint和TSLint配置",
          path: "[分享] VSCode配置与团队ESLint和TSLint配置",
        },
        {
          title: "[分享] [New]Vue项目使用vw实现移动端适配教程",
          path: "[分享] [New]Vue项目使用vw实现移动端适配教程",
        },
        {
          title: "[分享] 移动端适配iPhoneX方案",
          path: "[分享] 移动端适配iPhoneX方案",
        },
        {
          title: "[周分享] JavaScript 执行上下文  ·  变量对象",
          path: "[周分享] JavaScript 执行上下文  ·  变量对象",
        },
        {
          title:
            "[周分享] 前端周分享-Redux、JavaScript、纯函数、Async的错误处理技巧",
          path:
            "[周分享] 前端周分享-Redux、JavaScript、纯函数、Async的错误处理技巧",
        },
        { title: "[周分享] 浏览器 缓存机制", path: "[周分享] 浏览器 缓存机制" },
        {
          title: "[月分享] TypeScript -  常用内置类型与使用技巧",
          path: "[月分享] TypeScript -  常用内置类型与使用技巧",
        },
        {
          title: "[月分享] 我对移动端适配的了解",
          path: "[月分享] 我对移动端适配的了解",
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/",
      },
    },
  },
};
