---
title: defineProperty vs Proxy
categories:
  - 技术文档
tags:
  - javascript
  - es6
date: 2023-09-05 14:45:04
---

## defineProperty

`defineProperty`是ES6之前一种定义对象属性的语法，具体语法为`Object.defineProperty(obj, prop, descriptor)`

- 操作的粒度是对象的属性，在原有的对象上进行修改
- 无法通过set监听数组的length变化，因为数组length属性的Configurable是false
- vue2.0通过defineProperty进行对象的改造和监听，实现响应式：  
  1. 需要遍历对象的属性，对比vue3.0的proxy效率和性能低；  
  2. 无法监听数组的length属性和具体的某个index值变化，需要改造原生的数组方法；
  3. 无法动态的添加响应式的属性，需要用vue提供的set方法；
  4. 无法监听子对象的属性，需要深度遍历。

## Proxy

`Proxy`是ES6新增的，用于代理一个对象属性和操作的语法，具体语法为`new Proxy(target, handler)`

- 操作的粒度是整个对象，无需修改原有的对象属性
- 可以更方便，高效的拦截到对象的操作，包括数组的length属性和某个index的变化

## 联系我

- [E-mail](mailto:chenqy9@foxmail.com)
- [个人博客](https://chenqy9.github.io)

