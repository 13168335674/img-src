![](https://github.com/13189449986/img-src/16f5ab84fcb95575?raw=true)
![](https://github.com/13189449986/img-src/16f5ab84fd01030f?raw=true)
![https://zhuanlan.zhihu.com/p/53599723
](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab850839522d?w=1240&h=700&f=png&s=70453)
![](https://github.com/13189449986/img-src/16f5ab8506f4644f?raw=true)
![](https://github.com/13189449986/img-src/16f5ab84fe8e84ef?raw=true)
![](https://github.com/13189449986/img-src/16f5ab8505b59f47?raw=true)
![](https://github.com/13189449986/img-src/16f5ab853094f771?raw=true)
![](https://github.com/13189449986/img-src/16f5ab8531721b42?raw=true)
![foo 函数不是一个纯函数，因为它返回的结果依赖于外部变量 a，我们在不知道 a 的值的情况下，并不能保证 foo(2) 的返回值是 3。
](https://user-gold-cdn.xitu.io/2019/12/31/16f5ab854170ffb5?w=1240&h=689&f=png&s=63765)
![](https://github.com/13189449986/img-src/16f5ab853d6d8a87?raw=true)
![](https://github.com/13189449986/img-src/16f5ab8550cf9e3a?raw=true)
![](https://github.com/13189449986/img-src/16f5ab8559dfbde8?raw=true)
![](https://github.com/13189449986/img-src/16f5ab856daeeb19?raw=true)
![](https://github.com/13189449986/img-src/16f5ab856dfd88d6?raw=true)

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
![](https://github.com/13189449986/img-src/16f5ab85ad0d8a48?raw=true)

![](https://github.com/13189449986/img-src/16f5ab85876a8244?raw=true)
![](https://github.com/13189449986/img-src/16f5ab85a0e774d1?raw=true)
![](https://github.com/13189449986/img-src/16f5ab85b1ee396a?raw=true)
![](https://github.com/13189449986/img-src/16f5ab85b38c5460?raw=true)
![](https://github.com/13189449986/img-src/16f5ab85c0b9e3bf?raw=true)
![](https://github.com/13189449986/img-src/16f5ab85e24e9e5b?raw=true)
