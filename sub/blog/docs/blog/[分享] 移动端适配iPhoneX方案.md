**对页面进行 iPhoneX 适配处理教程**

- **在 viewport 中添加 viewport-fit=cover 属性**
  ``
  <meta name="viewport" content="width=device-width,initial-scale=1.0, viewport-fit=cover">
  ``
- **安全区设置**
  iOS 11 中包含了一个新的 CSS 函数 env()，以及一组四个预定义的常量：`safe-area-inset-left`, `safe-area-inset-right`, `safe-area-inset-top`和  `safe-area-inset-bottom`

```
body {
  padding-bottom: env(safe-area-inset-bottom);
}
```

![image](http://upload-images.jianshu.io/upload_images/4985324-3c315c9bdb8b3e0b..png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
一般我们只希望 iPhoneX 适配样式，可以配合 [@supports](https://www.w3cplus.com/css3/css3-supports.html) 进行 css 条件判断使用样式：

```
@supports (bottom: constant(safe-area-inset-bottom)) {
  div {
    margin-bottom: constant(safe-area-inset-bottom);
  }
}
```

---

拓展阅读
[iPhone X 的 Web 设计](https://www.w3cplus.com/mobile/designing-websites-for-iphone-x.html)
[这里总结了大家 iOS 11，iPhone X 适配问题](https://github.com/2877025939/iOS11)
