---
title: scss/sass基础
date: 2019-05-24 17:01:30
categories:
- 技术文档
tags:
- scss
- sass
---

## 预处理

CSS本身可以很有趣，但样式表变得更大，更复杂，更难维护。这是预处理器可以提供帮助的地方。 Sass允许你使用CSS中不存在的功能，比如变量，嵌套，混合，继承和其他漂亮的好东西，这些都让CSS再次变得有趣。  

一旦你开始修改Sass，它将采用你预处理的Sass文件并将其保存为你可以在你的网站中使用的普通CSS文件。  

实现这一目标的最直接方法是在您的终端。安装Sass后，您可以使用sass命令将Sass编译为CSS。您需要告诉Sass要构建哪个文件，以及将CSS输出到何处。例如，从终端运行sass input.scss output.css将获取单个Sass文件input.scss，并将该文件编译为output.css。  

您还可以使用--watch标志查看单个文件或目录。 watch标志告诉Sass观察源文件的更改，并在每次保存Sass时重新编译CSS。如果您想观看（而不是手动构建）input.scss文件，您只需将watch标志添加到命令中，如下所示：  

``` bash
sass --watch input.scss output.css
```

您可以使用文件夹路径作为输入和输出来查看和输出到目录，并使用冒号分隔它们。在这个例子中：  

``` bash
sass --watch app/sass:public/stylesheets
```

Sass会在app / sass文件夹中查看所有文件以进行更改，并将CSS编译到public / stylesheets文件夹。  

---

## 变量

将变量视为存储要在整个样式表中重用的信息的一种方法。您可以存储颜色，字体堆栈或您认为要重用的任何CSS值等内容。 Sass使用$符号来创建变量。这是一个例子：  
***scss***

``` scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

***css***

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

处理Sass时，它采用我们为$ font-stack和$ primary-color定义的变量，并输出普通的CSS，并将我们的变量值放在CSS中。在使用品牌颜色并在整个网站中保持一致时，这可能非常强大。

---

## 嵌套

在编写HTML时，您可能已经注意到它具有清晰的嵌套和可视层次结构。另一方面，CSS没有。 Sass将允许您以符合HTML相同视觉层次结构的方式嵌套CSS选择器。请注意，过度嵌套的规则将导致过度合格的CSS，这些CSS可能难以维护，通常被认为是不好的做法。 考虑到这一点，这里是网站导航的一些典型样式的示例：  
***scss***

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

***css***

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

您会注意到ul，li和选择器嵌套在导航选择器中。这是组织CSS并使其更具可读性的好方法。

---

## 划分文件

您可以创建包含很少CSS片段的部分Sass文件，您可以将这些片段包含在其他Sass文件中。这是模块化CSS并帮助维护事物更容易的好方法。 partial只是一个以前导下划线命名的Sass文件。您可以将其命名为_partial.scss。下划线让Sass知道该文件只是一个部分文件，不应该生成CSS文件。 Sass文件与`@import`指令一起使用。  

---

## 导入

CSS有一个导入选项，可以将CSS拆分为更小，更易维护的部分。唯一的缺点是每次在CSS中使用`@import`时都会创建另一个HTTP请求。 Sass建立在当前CSS `@import`之上，但不需要HTTP请求，Sass将获取您要导入的文件并将其与您导入的文件合并，以便您可以将单个CSS文件提供给Web浏览器。  

假设您有几个Sass文件，_reset.scss和base.scss。我们想将_reset.scss导入base.scss。  
***scss***

```scss
// _reset.scss
html,
body,
ul,
ol {
  margin:  0;
  padding: 0;
}
```

```scss
// base.scss
@import 'reset';
body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

***css***

```css
html,
body,
ul,
ol {
  margin:  0;
  padding: 0;
}
body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

注意我们正在使用`@import'reset';`在base.scss文件中。导入文件时，不需要包含文件扩展名.scss。 Sass很聪明，会为你解决问题。

---

## 混入

CSS中的一些东西写起来有点乏味，特别是CSS3和存在的许多供应商前缀。 mixin允许您创建要在整个站点中重用的CSS声明组。您甚至可以传入值以使您的mixin更灵活。 mixin的良好用途是供应商前缀。这是变换的一个例子。  
***scss***

```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(30deg)); }
```

***css***

``` css
.box {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
```

要创建mixin，请使用`@mixin`指令并为其命名。我们已经命名了我们的mixin变换。我们还在括号内使用变量`$property`，这样我们就可以传递任何我们想要的变换。在创建mixin之后，您可以将其用作CSS声明，以`@include`开头，后跟mixin的名称。

---

## 扩展/继承

这是Sass最有用的功能之一。使用`@extend`可以将一组CSS属性从一个选择器共享到另一个选择器。它有助于保持你的Sass非常干燥。在我们的示例中，我们将使用另一个与扩展，占位符类同时进行的功能，为错误，警告和成功创建一系列简单的消息。占位符类是一种特殊类型的类，只在扩展时才会打印，并且可以帮助保持编译后的CSS整洁干净。  
***scss***

```scss
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

***css***

```css
/* This CSS will print because %message-shared is extended. */
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

上面的代码所做的是告诉`.message`，`.success`，`.error`和`.warning`，就像`％message-shared`一样。这意味着`％message-shared`显示的任何地方，`.message`，`.success`，`.error`和`.warning`也会出现。神奇的事情发生在生成的CSS中，其中每个类都将获得与％message-shared相同的CSS属性。这有助于您避免在HTML元素上编写多个类名。  

除了Sass中的占位符类之外，您还可以扩展大多数简单的CSS选择器，但使用占位符是确保您不扩展嵌套在样式中其他位置的类的最简单方法，这可能会导致CSS中出现意外的选择器。

请注意，不会生成`%equal-heights`的CSS，因为永远不会扩展 `%equal-heights`。

---

## 运算符

在CSS中进行数学运算非常有帮助。 Sass有一些标准的数学运算符，如`+`， `-` ，`*`，`/`和`％`。在我们的例子中，我们将做一些简单的数学运算来计算旁边和文章的宽度。  
***scss***

```scss
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

***css***

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complementary"] {
  float: right;
  width: 31.25%;
}
```

我们基于960px创建了一个非常简单的流体网格。 Sass中的操作让我们做一些事情，比如获取像素值并将它们转换为百分比而不会有太多麻烦。