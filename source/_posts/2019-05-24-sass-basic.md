---
title: scss/sass基础
date: 2019-05-24
categories:
  - 技术文档
tags:
  - scss
  - sass
---

## 预处理

CSS 本身可以很有趣，但样式表变得更大，更复杂，更难维护。这是预处理器可以提供帮助的地方。 Sass 允许你使用 CSS 中不存在的功能，比如变量，嵌套，混合，继承和其他漂亮的好东西，这些都让 CSS 再次变得有趣。

一旦你开始修改 Sass，它将采用你预处理的 Sass 文件并将其保存为你可以在你的网站中使用的普通 CSS 文件。

实现这一目标的最直接方法是在您的终端。安装 Sass 后，您可以使用 sass 命令将 Sass 编译为 CSS。您需要告诉 Sass 要构建哪个文件，以及将 CSS 输出到何处。例如，从终端运行 sass input.scss output.css 将获取单个 Sass 文件 input.scss，并将该文件编译为 output.css。

您还可以使用--watch 标志查看单个文件或目录。 watch 标志告诉 Sass 观察源文件的更改，并在每次保存 Sass 时重新编译 CSS。如果您想观看（而不是手动构建）input.scss 文件，您只需将 watch 标志添加到命令中，如下所示：

```bash
sass --watch input.scss output.css
```

您可以使用文件夹路径作为输入和输出来查看和输出到目录，并使用冒号分隔它们。在这个例子中：

```bash
sass --watch app/sass:public/stylesheets
```

Sass 会在 app / sass 文件夹中查看所有文件以进行更改，并将 CSS 编译到 public / stylesheets 文件夹。

---

## 变量

将变量视为存储要在整个样式表中重用的信息的一种方法。您可以存储颜色，字体堆栈或您认为要重用的任何 CSS 值等内容。 Sass 使用$符号来创建变量。这是一个例子：  
**_scss_**

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

**_css_**

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

处理 Sass 时，它采用我们为$ font-stack 和$ primary-color 定义的变量，并输出普通的 CSS，并将我们的变量值放在 CSS 中。在使用品牌颜色并在整个网站中保持一致时，这可能非常强大。

---

## 嵌套

在编写 HTML 时，您可能已经注意到它具有清晰的嵌套和可视层次结构。另一方面，CSS 没有。 Sass 将允许您以符合 HTML 相同视觉层次结构的方式嵌套 CSS 选择器。请注意，过度嵌套的规则将导致过度合格的 CSS，这些 CSS 可能难以维护，通常被认为是不好的做法。 考虑到这一点，这里是网站导航的一些典型样式的示例：  
**_scss_**

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

**_css_**

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

您会注意到 ul，li 和选择器嵌套在导航选择器中。这是组织 CSS 并使其更具可读性的好方法。

---

## 划分文件

您可以创建包含很少 CSS 片段的部分 Sass 文件，您可以将这些片段包含在其他 Sass 文件中。这是模块化 CSS 并帮助维护事物更容易的好方法。 partial 只是一个以前导下划线命名的 Sass 文件。您可以将其命名为\_partial.scss。下划线让 Sass 知道该文件只是一个部分文件，不应该生成 CSS 文件。 Sass 文件与`@import`指令一起使用。

---

## 导入

CSS 有一个导入选项，可以将 CSS 拆分为更小，更易维护的部分。唯一的缺点是每次在 CSS 中使用`@import`时都会创建另一个 HTTP 请求。 Sass 建立在当前 CSS `@import`之上，但不需要 HTTP 请求，Sass 将获取您要导入的文件并将其与您导入的文件合并，以便您可以将单个 CSS 文件提供给 Web 浏览器。

假设您有几个 Sass 文件，\_reset.scss 和 base.scss。我们想将\_reset.scss 导入 base.scss。  
**_scss_**

```scss
// _reset.scss
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
```

```scss
// base.scss
@import "reset";
body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

**_css_**

```css
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

注意我们正在使用`@import'reset';`在 base.scss 文件中。导入文件时，不需要包含文件扩展名.scss。 Sass 很聪明，会为你解决问题。

---

## 混入

CSS 中的一些东西写起来有点乏味，特别是 CSS3 和存在的许多供应商前缀。 mixin 允许您创建要在整个站点中重用的 CSS 声明组。您甚至可以传入值以使您的 mixin 更灵活。 mixin 的良好用途是供应商前缀。这是变换的一个例子。  
**_scss_**

```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box {
  @include transform(rotate(30deg));
}
```

**_css_**

```css
.box {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
```

要创建 mixin，请使用`@mixin`指令并为其命名。我们已经命名了我们的 mixin 变换。我们还在括号内使用变量`$property`，这样我们就可以传递任何我们想要的变换。在创建 mixin 之后，您可以将其用作 CSS 声明，以`@include`开头，后跟 mixin 的名称。

---

## 扩展/继承

这是 Sass 最有用的功能之一。使用`@extend`可以将一组 CSS 属性从一个选择器共享到另一个选择器。它有助于保持你的 Sass 非常干燥。在我们的示例中，我们将使用另一个与扩展，占位符类同时进行的功能，为错误，警告和成功创建一系列简单的消息。占位符类是一种特殊类型的类，只在扩展时才会打印，并且可以帮助保持编译后的 CSS 整洁干净。  
**_scss_**

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

**_css_**

```css
/* This CSS will print because %message-shared is extended. */
.message,
.success,
.error,
.warning {
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

上面的代码所做的是告诉`.message`，`.success`，`.error`和`.warning`，就像`％message-shared`一样。这意味着`％message-shared`显示的任何地方，`.message`，`.success`，`.error`和`.warning`也会出现。神奇的事情发生在生成的 CSS 中，其中每个类都将获得与％message-shared 相同的 CSS 属性。这有助于您避免在 HTML 元素上编写多个类名。

除了 Sass 中的占位符类之外，您还可以扩展大多数简单的 CSS 选择器，但使用占位符是确保您不扩展嵌套在样式中其他位置的类的最简单方法，这可能会导致 CSS 中出现意外的选择器。

请注意，不会生成`%equal-heights`的 CSS，因为永远不会扩展 `%equal-heights`。

---

## 运算符

在 CSS 中进行数学运算非常有帮助。 Sass 有一些标准的数学运算符，如`+`， `-` ，`*`，`/`和`％`。在我们的例子中，我们将做一些简单的数学运算来计算旁边和文章的宽度。  
**_scss_**

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

**_css_**

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

我们基于 960px 创建了一个非常简单的流体网格。 Sass 中的操作让我们做一些事情，比如获取像素值并将它们转换为百分比而不会有太多麻烦。
