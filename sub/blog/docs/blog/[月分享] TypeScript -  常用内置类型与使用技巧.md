![](https://upload-images.jianshu.io/upload_images/4985324-62685fc656a8f4ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/4985324-8a3c9480e66a82a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

![](https://upload-images.jianshu.io/upload_images/4985324-568d61f2555a49f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/4985324-34b3694d825cdfdd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
/**
 * keyof<T>
 *  keyof 与 Object.keys 略有相似，只不过 keyof 取 interface 的键。
 */
() => {
  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type K1 = keyof Person; // "name" | "age" | "location"
  type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
  type K3 = keyof { [x: string]: Person }; // string

  // 获取对象的属性
  function pluck<T, K extends keyof T>(o: T, names: K): T[K] {
    return o[names];
  }
};
(_tip: "keyof 只会返回不为 null undefined never 的类型") => {
  interface EnumType {
    a: never;
    b: undefined;
    c: null;
    d: number;
    e: object;
  }
  type TypeEnumType = keyof EnumType; // a | b | c | d | e
  type TypeEnumType1 = EnumType[keyof EnumType]; // number | object 去除了了3种假类型

  type ReadonlyType<T> = {
    readonly [P in keyof T]?: T[P];
  };
  let readOnly: ReadonlyType<EnumType> = {}; // 将 EnumType 所有类型都变为了了 只读
};

/**
 * Pick<T, K>
 *  从对象类型 T 挑选一些属性 K，比如对象拥有 5 个 key，
 *  只需要将 K 设置为 "name" | "age" 就可以生成仅支持这两个 key 的新对象类型。
 */
() => {
  interface IObj {
    a: string;
    b: number;
    c: boolean;
  }
  type FilterObj = Pick<IObj, "a" | "b">;
  const test: FilterObj = {
    a: "str",
    b: 1,
  };
};

/**
 * Extract<T, U>
 *  Extract 是 Pick 的底层 API，直到 2.8 版本才内置进来，
 *  可以认为 Pick 是挑选对象的某些 key，Extract 是挑选 key 中的 key。
 */
() => {
  interface IObj {
    a: string;
    b: number;
    c: boolean;
  }
  type FilterKey = Extract<keyof IObj, "a">;
  const test: FilterKey = "a";
};

/**
 * Exclude<T, U>
 *  将 T 中的 U 类型排除，和 Extract 功能相反。
 */
() => {
  interface IObj {
    a: string;
    b: number;
    c: boolean;
  }
  type FilterKey = Exclude<keyof IObj, "a" | "b">;
  const test: FilterKey = "c";
};

/**
 * Record<K, U>
 *  ts文档上对Record的介绍不多，但却经常用到，Record是一个很好用的工具类型。
 *  他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
 */
(_tip: "源码") => {
  // 将K中的所有属性值都转换为T类型，并将返回的新类型返回给proxyKType，K可以是联合类型、对象、枚举
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
};
(_tip: "Demo") => {
  interface AnimalsInfo {
    dog: {
      name: string;
      age: number;
    };
    cat: {
      name: string;
      age: number;
    };
  }
  const animalsInfo: AnimalsInfo = {
    dog: {
      name: "dogName",
      age: 2,
    },
    cat: {
      name: "catName",
      age: 3,
    },
  };
};
(_tip: "Demo1") => {
  type petsGroup = "dog" | "cat";
  interface IPetInfo {
    name: string;
    age: number;
  }
  type IPets = Record<petsGroup, IPetInfo>;
  const animalsInfo = {
    dog: {
      name: "dogName",
      age: 2,
    },
    cat: {
      name: "catName",
      age: 3,
    },
  };
};
(_tip: "Demo2") => {
  type petsGroup = "dog" | "cat";
  interface IPetInfo {
    name: string;
    age: number;
  }
  type IPets = Record<petsGroup | "otherAnamial", IPetInfo>;
  const animalsInfo: IPets = {
    dog: {
      name: "dogName",
      age: 2,
    },
    cat: {
      name: "catName",
      age: 3,
    },
    otherAnamial: {
      name: "otherAnamialName",
      age: 10,
    },
  };
};
```

---

![](https://upload-images.jianshu.io/upload_images/4985324-a2836f0f1fbd07c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
/**
 * 技巧
 *  数组类型明文确认长度
 */
before => {
  const data = [
    [1, 5.5],
    [2, 3.7],
    [3, 2.0],
    [4, 5.9],
    [5, 3.9],
  ];
};
after => {
  interface CharData extends Array<number> {
    0: number;
    1: number;
    length: 2;
  }
  const data2: CharData[] = [
    [1, 5.5],
    [2, 3.7],
    [3, 2.0],
    [4, 5.9],
    [5, 3.9],
  ];
};

/**
 * 技巧
 *  巧用查找类型
 */
before => {
  interface Person {
    addr: {
      city: string;
      street: string;
      num: number;
    };
  }
  interface Address {
    city: string;
    street: string;
    num: number;
  }
  const Addr: Address = {
    city: "city",
    street: "street",
    num: 0,
  };
};
after => {
  interface Person {
    addr: {
      city: string;
      street: string;
      num: number;
    };
  }
  const Addr: Person["addr"] = {
    city: "city",
    street: "street",
    num: 0,
  };
};

/**
 * 技巧
 *  找到 Object rest 类型
 */
//
before => {
  interface XYZ {
    x: number;
    y: number;
    z: number;
  }
  const restObj: XYZ = { x: 1, y: 2, z: 3 };
  const { x, y, z, ...rest } = restObj;
  function dropXYZ(restObj: XYZ, ...rest) {
    return rest;
  }
};
// after (Pick , Exclude)
after => {
  interface XYZ {
    x: number;
    y: number;
    z: number;
  }

  type DropXYZ<T> = Pick<T, Exclude<keyof T, keyof XYZ>>;

  function _dropXYZ<T extends XYZ>(
    restObj: XYZ,
    ...rest: Array<DropXYZ<T>>
  ): Array<DropXYZ<T>> {
    return rest;
  }
};

```

![](https://upload-images.jianshu.io/upload_images/4985324-8e97623ba3097059.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 👍 推荐指数：

  - 🌟🌟🌟: 强烈推荐
  - 🌟🌟 : 值得一看
  - 🌟 : 思维独特

- 🌈 好的阅读资料：

  - [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/typings/discrominatedUnion.html) 🌟🌟🌟
  - [精读《Typescript v2/v3 新特性》](http://github.com/dt-fe/weekly/blob/master/58.%E7%B2%BE%E8%AF%BB%E3%80%8ATypescript2.0%20-%202.9%E3%80%8B.md) 🌟🌟🌟
  - [TypeScript 重构 Axios 经验分享](https://juejin.im/post/5bf7f1c0e51d455ed74f625c) 🌟🌟
  - [TypeScript 中高级类型 Record](https://blog.csdn.net/weixin_38080573/article/details/92838045) 🌟🌟
  - [超实用 Typescript 内置类型与自定义类型](https://github.com/SunshowerC/blog/issues/15) 🌟🌟
  - [TypeScript 高级技巧](https://shanyue.tech/post/ts-tips.html) 🌟🌟
  - [巧用 Typescript](https://zhuanlan.zhihu.com/p/39620591) 🌟🌟
  - [typescript 难点梳理](https://segmentfault.com/a/1190000020300143) 🌟🌟

- 🙋‍♂️ 有意思的讨论：

  - interface 与 type 的区别是什么？
    - [Github 上的讨论](https://github.com/SunshowerC/blog/issues/7) 🌟
    - [Stackoverflow 上的讨论](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)
    - [TypeScript 重构 Axios 经验分享](https://zhuanlan.zhihu.com/p/50859466) 🌟
    - [TypeScript 会成为 ES 的标准吗?](https://www.zhihu.com/question/338484877)
    - [TypeScript 中的 never 类型具体有什么用？](https://www.zhihu.com/question/354601204/answer/888551021) 🌟

- 🌼 官网资料

  - [中文文档](https://www.tslang.cn/docs/release-notes/typescript-3.1.html)
  - [英文文档](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)
  - [在线 TypeScript 测试平台](https://typescript-play.js.org/)

- 🔮 彩蛋
  - [掌握甩锅技术: Typescript 运行时数据校验](https://github.com/SunshowerC/blog/issues/13)

---

![](https://upload-images.jianshu.io/upload_images/4985324-b24bb0438fb657bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

### 结束了？

...

# 还有个小彩蛋~

这里有个关于 Promise 的小题目：

```lang='js'

  const p1 = new Promise((resolve,reject) => {
    console.log('Promise 1');
    resolve();
  }).then(() => {
    console.log('then 11');
    const p2 = new Promise((resolve,reject) => {
      console.log('Promise 2');
      resolve();
    }).then(() => {
      console.log('then 21');
    }).then(() => {
      console.log('then 22');
    })
  }).then(() => {
    console.log('then 12')
  })
```
