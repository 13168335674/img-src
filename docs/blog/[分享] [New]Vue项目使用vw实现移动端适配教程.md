![268223-106.jpg](http://upload-images.jianshu.io/upload_images/4985324-d67caf6cfcbad697.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2018 年 1 月 25 日 11:58:01 最新的大漠老师移动端适配方案,
使用这套方案可以取代[`flexible.js`](https://github.com/amfe/lib-flexible)
首先建议读者先去学习大漠老师的这篇文章,看完能有大大的收获
[如何在 Vue 项目中使用 vw 实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

---

####正文开始
**使用 vue-cli 新建项目**

```
vue init webpack vue-demo
cd vue-demo
npm run dev
```

**安装依赖**

- 复制以下代码：

```
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano cssnano-preset-advanced --S
```

- 复制进行 postcssrc.js 配置
  **.postcssrc.js 配置**

```
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { utf8: false },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
```

###各插件的功能：

---

**postcss-px-to-viewport : 将项目中的 px 转化为 vw**

```
"postcss-px-to-viewport": {
    viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
    viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
    selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    mediaQuery: false // 允许在媒体查询中转换`px`
}
```

- 容器适配，可以使用 vw
- 文本的适配，可以使用 vw
- 大于 1px 的边框、圆角、阴影都可以使用 vw
- 内距和外距，可以使用 vw

[postcss-px-to-viewport 文档]('https://github.com/evrone/postcss-px-to-viewport')

---

**postcss-write-svg 实现 Retina 屏 1 像素边框**
首先记得在 heade 头加入

<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
######实例不成功，换插件实现吧
方式一:
```
```

方式二:

```

```

---

**最重要的 降级处理**
使用 [Viewport Units Buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill) 插件
在 vue 项目的 index.html 文件 head 标签添加引用
`<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>`
在 Index.html 文件 body 标签后添加以下代码

```
<script>
  // vw兼容性处理viewport-units-buggyfill
    window.onload = function () {
      window.viewportUnitsBuggyfill.init({ hacks: window.viewportUnitsBuggyfillHacks });
      //以下代码用户测试
      // var winDPI = window.devicePixelRatio;
      // var uAgent = window.navigator.userAgent;
      // var screenHeight = window.screen.height;
      // var screenWidth = window.screen.width;
      // var winWidth = window.innerWidth;
      // var winHeight = window.innerHeight;
      // console.log("Windows DPI:" + winDPI + ";\ruAgent:" + uAgent + ";\rScreen Width:" +
      //   screenWidth + ";\rScreen Height:" + screenHeight + ";\rWindow Width:" + winWidth +
      //   ";\rWindow Height:" + winHeight)
    }
  </script>
```

最后做个对 img 兼容处理，在全局添加(在 main.js 用 Import '@/common/index.css')

```
img {
  content: normal !important;
}
```

#####这样就可以用 vw 进行移动端项目开发啦!

---
