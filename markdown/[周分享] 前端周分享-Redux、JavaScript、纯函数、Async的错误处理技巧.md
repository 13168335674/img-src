![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab84fcb95575?w=1240&h=689&f=png&s=75972)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab84fd01030f?w=1240&h=695&f=png&s=33617)
![https://zhuanlan.zhihu.com/p/53599723
](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab850839522d?w=1240&h=700&f=png&s=70453)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab8506f4644f?w=1240&h=696&f=png&s=270478)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab84fe8e84ef?w=1240&h=696&f=png&s=198463)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab8505b59f47?w=1240&h=693&f=png&s=226017)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab853094f771?w=1240&h=698&f=png&s=60825)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab8531721b42?w=1240&h=689&f=png&s=66697)
![foo 函数不是一个纯函数，因为它返回的结果依赖于外部变量 a，我们在不知道 a 的值的情况下，并不能保证 foo(2) 的返回值是 3。
](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab854170ffb5?w=1240&h=689&f=png&s=63765)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab853d6d8a87?w=1240&h=697&f=png&s=98377)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab8550cf9e3a?w=1240&h=697&f=png&s=163626)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab8559dfbde8?w=1240&h=694&f=png&s=134451)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab856daeeb19?w=1240&h=695&f=png&s=23206)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab856dfd88d6?w=1240&h=695&f=png&s=127948)

```
function test() {
 let arr = [3, 2, 1]
 arr.forEach(async item => {
  const res = await fetch(item)
  console.log(res)
 })
 console.log('end')
}

function fetch(x) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve(x)
  }, 500 * x)
 })
}

test()
```

![https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill
](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab8598a850e2?w=1240&h=693&f=png&s=76835)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab85ad0d8a48?w=1240&h=693&f=png&s=130702)

![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab85876a8244?w=1240&h=692&f=png&s=33478)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab85a0e774d1?w=1240&h=698&f=png&s=166899)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab85b1ee396a?w=1240&h=697&f=png&s=123612)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab85b38c5460?w=1240&h=700&f=png&s=134504)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab85c0b9e3bf?w=1240&h=696&f=png&s=120624)
![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab85e24e9e5b?w=1240&h=696&f=png&s=130003)
