---
title: Javascript中的this与函数上下文
categories:
  - 技术文档
date: 2023-09-19 17:18:19
tags:
  - javascript
  - this
  - 作用域
---

Javascript中函数运行时的this和上下文是一个重要的知识点，而且很多文章也做了详细的解析。本文不展开原理进行阐述，只总结结论。

## this

- 用`function`定义的函数，运行时的this由调用对象决定，即`this`指向`obj.fn()`中的`obj`，如果无具体的调用方，则为在非严格模式下为global对象，严格模式下为undefined。可通`bind`，`call`，`apply`来绑定运行时的`this`;
  
- 用`() => {}`定义的箭头函数，无内部的`this`，由定义时的外部`this`决定，不可用`bind`，`call`，`apply`来绑定运行时的`this`;

``` javascript
function testFn() {
  console.log(this);
}

const testNarrowFn = () => {
  console.log(this);
}

const a = { name: 'a' };

const b = { name: 'b' };

a.testFn = testFn;

b.testFn = a.testFn;
b.testNarrowFn = testNarrowFn;

a.testNarrowFn = b.testNarrowFn;

console.log(this); // window(web)/undefined(node)

testFn(); // window(web)/undefined(node)

testNarrowFn(); // window(web)/undefined(node)

a.testFn(); // {name: 'a', testFn: ƒ, testNarrowFn: ƒ}

b.testFn(); // {name: 'b', testFn: ƒ, testNarrowFn: ƒ}

b.testNarrowFn(); // window(web)/undefined(node)

a.testNarrowFn(); // window(web)/undefined(node)
```

## 作用域

函数运行时的作用域由定义时所在的作用域决定，和调用的位置无关。Javascript中有三个作用域：全局作用域，块级作用域(`{}`)，函数作用域。函数运行的作用域层级为：自身作用域 --> 块级作用域（如有）--> 函数作用域（父级函数）--> 全局作用域。

``` javascript
const fnArr = [];

function outerFn() {
  let outer = 0;
  for (let i = 0; i < 3; i += 1) {
    outer += 1;
    function innerFun() {
      console.log(i, outer);
    }
    fnArr[i] = innerFun;
  }
}

outerFn();

fnArr[0](); // 0 3
fnArr[1](); // 1 3
fnArr[2](); // 2 3
```

## 参考

- [Object methods, "this"](https://javascript.info/object-methods)
- [Variable scope, closure](https://javascript.info/closure)



