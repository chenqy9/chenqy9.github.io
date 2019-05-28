---
title: SCSS/SASS核心快速入门
date: 2019-05-28 10:25:29
categories:
 - 前端技术
tags:
 - scss
 - sass
---

本文介绍SASS的核心概念及开发规范。

## 变量

### 定义变量

变量使用`$`符号开始，中划线`-`作为连词符：

``` scss
$color-error: red; // 定义错误颜色变量
```

### 引用变量

直接通过变量名引用变量。

## 嵌套

## 导入

`@import` _开始文件不会编译单独文件

## 混合

`@mixin`参数，参数默认值，带名称传参，不确定参数...，`@content`传递样式片段

## 继承

## 注释

/* */  
/*! This comment will be included even in compressed mode. */

## 总结

`@mixin` 展示性样式的重用 `@extend` 用于语义化样式的重用，由于gzip压缩，使用`@mixin`
