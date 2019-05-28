---
title: Sass官方文档
date: 2019-05-28 15:01:32
categories:
 - 前端文档
tags:
 - sass
 - 文档
---

## 语法

### 概述

Sass支持两种不同的语法。每个人都可以导入另一个，因此您和您的团队可以选择哪一个。

#### SCSS

SCSS语法使用文件扩展名.scss。除了一些小的例外，它是CSS的超集，这意味着基本上所有有效的CSS也是有效的SCSS。由于它与CSS的相似性，它是最容易习惯和最流行的语法。  

SCSS看起来像这样：

``` scss
@mixin button-base() {
  @include typography(button);
  @include ripple-surface;
  @include ripple-radius-bounded;

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover { cursor: pointer; }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
    cursor: default;
    pointer-events: none;
  }
}
```

#### 缩进语法

缩进语法是Sass的原始语法，因此它使用文件扩展名.sass。由于这种扩展，它有时被称为“Sass”。缩进语法支持与SCSS相同的所有功能，但它使用缩进而不是花括号和分号来描述文档的格式。  

通常，只要您在CSS或SCSS中编写花括号，就可以在缩进语法中更深入地缩进一级。一旦一行结束，就算作分号。在整个参考文献中注明的缩进语法中还有一些其他差异。  

缩进语法如下所示：

``` scss
@mixin button-base()
  @include typography(button)
  @include ripple-surface
  @include ripple-radius-bounded

  display: inline-flex
  position: relative
  height: $button-height
  border: none
  vertical-align: middle

  &:hover
    cursor: pointer

  &:disabled
    color: $mdc-button-disabled-ink-color
    cursor: default
    pointer-events: none
```

### 解析样式表

从一系列Unicode代码点解析Sass样式表。它是直接解析的，无需先转换为令牌流。

#### 输入编码

通常情况下，文档最初只能作为字节序列使用，必须将其解码为Unicode。 Sass执行此解码如下：  

* 如果字节序列以U + FEFF BYTE ORDER MARK的UTF-8或UTF-16编码开始，则使用相应的编码。

* 如果字节序列以纯ASCII字符串@charset开头，则Sass使用CSS算法的步骤2确定编码以确定回退编码。

* 否则，使用UTF-8。

#### 解析错误

当Sass在样式表中遇到无效语法时，解析将失败，并且将向用户显示错误，其中包含有关无效语法的位置及其无效原因的信息。  

请注意，这与CSS不同，后者指定如何从大多数错误中恢复而不是立即失败。这是SCSS不是CSS的超集的少数情况之一。但是，Sass用户立即查看错误更有用，而不是将它们传递给CSS输出。  

可以通过特定于实现的API访问解析错误的位置。例如，在Dart Sass中，您可以访问SassException.span，在Node Sass和Dart Sass的JS API中，您可以访问文件，行和列属性。

### 样式表的结构

就像CSS一样，大多数Sass样式表主要由包含属性声明的样式规则组成。但Sass样式表还有更多可以与这些功能一起存在的功能。  

#### 语句

Sass样式表由一系列语句组成，这些语句被评估以构建生成的CSS。某些语句可能包含使用`{`和`}`定义的块，其中包含其他语句。例如，样式规则是带有块的语句。该块包含其他语句，例如属性声明。  

在SCSS中，语句由分号分隔（如果语句使用块，则为分号）。在缩进语法中，它们仅由换行符分隔。  

#### 通用语句

这些类型的语句可以在Sass样式表中的任何位置使用：

* 变量声明，如`$var: value`。

* 流量控制规则，如`@if`和`@each`。

* `@error`，`@warn`和`@debug`规则。

#### CSS语句

这些类型的语句可以在Sass样式表中的任何位置使用：  

* 样式规则，如`h1 {/ * ... * /}`。

* CSS at-rules，如`@media`和`@font-face`。

* Mixin使用`@include`。

* `@at-root`规则。