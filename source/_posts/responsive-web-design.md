---
title: 响应式网页设计
date: 2019-05-24
categories:
  - 文章教程
tags:
  - html5
  - css3
  - 响应式设计
---

## 一、介绍

**什么是响应式网页设计？**

- 响应式网页设计使您的网页在所有设备上都很好看。
- 响应式网页设计仅使用 HTML 和 CSS。
- 响应式网页设计不是程序或 JavaScript。

**为所有用户设计最佳体验**  
可以使用许多不同的设备查看网页：台式机，平板电脑和手机。无论设备如何，您的网页都应该看起来不错，并且易于使用。  
网页不应该遗漏信息以适应较小的设备，而是调整其内容以适应任何设备：
![桌面](/images/responsive-web-design/rwd_desktop.png "桌面")  
桌面  
![平板](/images/responsive-web-design/rwd_tablet.png "平板")  
平板  
![手机](/images/responsive-web-design/rwd_phone.png "手机")  
手机

当您使用 CSS 和 HTML 调整大小，隐藏，缩小，放大或移动内容以使其在任何屏幕上看起来都很好时，它被称为响应式网页设计。

## 二、视窗

**什么是视窗？**  
视窗是用户在网页上的可见区域。 视窗因设备而异，并且在手机上比在计算机屏幕上小。 在平板电脑和移动电话之前，网页仅针对计算机屏幕设计，并且网页通常具有静态设计和固定大小。 然后，当我们开始使用平板电脑和手机上网时，固定大小的网页太大而无法适应视窗。为了解决这个问题，这些设备上的浏览器按比例缩小整个网页以适应屏幕。 这不完美!!只是快速修复。

**设置视窗**  
HTML5 引入了一种方法，让网页设计师通过`<meta>`标签控制视窗。 您应该在所有网页中包含以下`<meta>`viewport 元素：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta />
```

viewport 元素为浏览器提供有关如何控制页面尺寸和缩放的说明。 width = device-width 部分将页面宽度设置为遵循设备的屏幕宽度（具体取决于设备）。 initial-scale = 1.0 部分设置浏览器首次加载页面时的初始缩放级别。 以下是没有视窗元标记的网页示例，以及具有视窗元标记的同一网页：  
![没有视窗元标记](/images/responsive-web-design/img_viewport1.png "没有视窗元标记")  
没有视窗元标记  
![有视窗元标记](/images/responsive-web-design/img_viewport2.png "有视窗元标记")  
有视窗元标记

**视窗大小内容**

用户用于在桌面和移动设备上垂直滚动网站 - 但不是水平滚动！ 因此，如果用户被迫水平滚动或缩小，以查看整个网页，则会导致糟糕的用户体验。 一些额外的规则要遵循：

- 不要使用大的固定宽度元素 - 例如，如果图像的宽度比视窗宽，则可能导致视口水平滚动。请记住调整此内容以适合视窗的宽度。
- 不要让内容依赖于特定的视口宽度来渲染 - 由于 CSS 像素中的屏幕尺寸和宽度在不同设备之间变化很大，因此内容不应依赖于特定的视口宽度来渲染。
- 使用 CSS 媒体查询为小屏幕和大屏幕应用不同的样式 - 为页面元素设置大的绝对 CSS 宽度将导致元素对于较小设备上的视口而言太宽。相反，请考虑使用相对宽度值，例如宽度：100％。另外，请注意使用大的绝对定位值。它可能导致元素落在小型设备上的视口之外。

## 三、网格视图

**什么是网格视图？**

许多网页都基于网格视图，这意味着页面分为以下几列：  
![网格视图](/images/responsive-web-design/1558680048889.jpg "网格视图")
在设计网页时，使用网格视图非常有用。它可以更轻松地在页面上放置元素。  
![网格视图](/images/responsive-web-design/1558680067487.jpg "网格视图")
响应式网格视图通常有 12 列，总宽度为 100％，并在调整浏览器窗口大小时缩小和展开。

**构建响应式网格视图**  
让我们开始构建响应式网格视图。 首先确保所有 HTML 元素都将 box-sizing 属性设置为 border-box。这可确保填充和边框包含在元素的总宽度和高度中。  
在 CSS 中添加以下代码：

```css
* {
  box-sizing: border-box;
}
```

以下示例显示了一个简单的响应式网页，其中包含两列：

```css
.menu {
  width: 25%;
  float: left;
}
.main {
  width: 75%;
  float: left;
}
```

如果网页只包含两列，则上面的示例很好。 但是，我们希望使用具有 12 列的响应式网格视图，以便更好地控制网页。 首先，我们必须计算一列的百分比：100％/ 12 列= 8.33％。

然后我们为 12 列中的每一列创建一个类，`class =“col-”`和一个定义该段应该跨越多少列的数字：

```css
.col-1 {
  width: 8.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}
```

所有这些列应该浮动到左侧，并且填充为 15px：

```css
[class*="col-"] {
  float: left;
  padding: 15px;
  border: 1px solid red;
}
```

每行应包含在`<div>`中。行内的列数应始终加起来为 12：

```html
<div class="row">
  <div class="col-3">...</div>
  <div class="col-9">...</div>
</div>
```

行内的列全部浮动到左侧，因此从页面流中取出，其他元素将被放置，就好像列不存在一样。为了防止这种情况，我们将添加一个清除流程的样式：

```css
.row::after {
  content: "";
  clear: both;
  display: block;
}
```

我们还想添加一些样式和颜色以使其看起来更好：

```html
html { font-family: "Lucida Sans", sans-serif; } .header { background-color:
#9933cc; color: #ffffff; padding: 15px; } .menu ul { list-style-type: none;
margin: 0; padding: 0; } .menu li { padding: 8px; margin-bottom: 7px;
background-color :#33b5e5; color: #ffffff; box-shadow: 0 1px 3px
rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } .menu li:hover {
background-color: #0099cc; }
```

请注意，当您将浏览器窗口调整为非常小的宽度时，示例中的网页看起来不太好。在下一章中，您将学习如何解决这个问题。

\*\* 四、媒体查询

**什么是媒体查询？**

媒体查询是 CSS3 中引入的 CSS 技术。 仅当某个条件为真时，它才使用@media 规则包含一个 CSS 属性块。  
如果浏览器窗口小于 500px，背景颜色将变为浅蓝色：

```css
@media only screen and (max-width: 500px) {
  body {
    background-color: lightblue;
  }
}
```

**添加断点**  
在本教程的前面，我们创建了一个包含行和列的网页，它具有响应性，但在小屏幕上看起来不太好。  
媒体查询可以提供帮助。我们可以添加一个断点，其中设计的某些部分在断点的每一侧都会表现不同。  
![桌面](/images/responsive-web-design/rwd_desktop.png "桌面")  
桌面  
![手机](/images/responsive-web-design/rwd_phone.png "手机")  
手机  
使用媒体查询在 768px 处添加断点：  
当屏幕（浏览器窗口）小于 768px 时，每列的宽度应为 100％：

```css
/* For desktop: */
.col-1 {
  width: 8.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
```

**始终为移动优先设计**  
移动优先意味着在为桌面设备或任何其他设备进行设计之前设计移动设备（这将使页面在较小的设备上显示得更快）。 这意味着我们必须在 CSS 中进行一些更改。 当宽度小于 768px 时，我们应该在宽度大于 768px 时更改设计，而不是更改样式。这将使我们的设计移动优先：

```css
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
}
```

**另一个断点**

您可以根据需要添加任意数量的断点。 我们还将在平板电脑和手机之间插入一个断点。  
![桌面](/images/responsive-web-design/rwd_desktop.png "桌面")  
桌面  
![平板](/images/responsive-web-design/rwd_tablet.png "平板")  
平板  
![手机](/images/responsive-web-design/rwd_phone.png "手机")  
手机  
我们通过添加一个媒体查询（600px）和一组大于 600px（但小于 768px）的设备的新类来完成此操作：  
请注意，这两组类几乎相同，唯一的区别是名称（`col-`和`col-m-`）：

```css
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}
@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-m-1 {
    width: 8.33%;
  }
  .col-m-2 {
    width: 16.66%;
  }
  .col-m-3 {
    width: 25%;
  }
  .col-m-4 {
    width: 33.33%;
  }
  .col-m-5 {
    width: 41.66%;
  }
  .col-m-6 {
    width: 50%;
  }
  .col-m-7 {
    width: 58.33%;
  }
  .col-m-8 {
    width: 66.66%;
  }
  .col-m-9 {
    width: 75%;
  }
  .col-m-10 {
    width: 83.33%;
  }
  .col-m-11 {
    width: 91.66%;
  }
  .col-m-12 {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
}
```

我们有两组完全相同的类似乎很奇怪，但它给了我们 HTML 的机会，决定每个断点处的列会发生什么：  
对于桌面： 第一部分和第三部分将分别跨越 3 列。中间部分将跨越 6 列。 对于平板电脑 第一部分将跨越 3 列，第二部分将跨越 9 列，第三部分将显示在前两部分下方，它将跨越 12 列：

```html
<div class="row">
  <div class="col-3 col-m-3">...</div>
  <div class="col-6 col-m-9">...</div>
  <div class="col-3 col-m-12">...</div>
</div>
```

**方向：纵向/横向**

媒体查询还可用于根据浏览器的方向更改页面的布局。 您可以拥有一组仅在浏览器窗口宽度超过其高度时应用的 CSS 属性，即所谓的“横向”方向：  
如果方向处于横向模式，则网页将具有浅蓝色背景：

```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

## 五、图片

不同设备的不同图像  
大型图像在大型计算机屏幕上可以是完美的，但在小型设备上却无用。为什么在必须缩小尺寸时加载大图像？要减少负载或出于任何其他原因，您可以使用媒体查询在不同设备上显示不同的图像。 这是一个大图像和一个较小的图像，将显示在不同的设备上：  
![花](/images/responsive-web-design/img_flowers.jpg "花")  
![花](/images/responsive-web-design/img_smallflower.jpg "花")

```css
/* For width smaller than 400px: */
body {
  background-image: url("img_smallflower.jpg");
}

/* For width 400px and larger: */
@media only screen and (min-width: 400px) {
  body {
    background-image: url("img_flowers.jpg");
  }
}
```

您可以使用媒体查询 min-device-width 而不是 min-width 来检查设备宽度，而不是浏览器宽度。然后，在调整浏览器窗口大小时图像不会更改：

```html
/* For devices smaller than 400px: */ body { background-image:
url('img_smallflower.jpg'); } /* For devices 400px and larger: */ @media only
screen and (min-device-width: 400px) { body { background-image:
url('img_flowers.jpg'); } }
```

**HTML5`<picture>`元素**

HTML5 引入了`<picture>`元素，可以让您定义多个图像。  
浏览器支持  
![浏览器支持](/images/responsive-web-design/1558680133741.jpg "浏览器支持")  
`<picture>`元素的工作方式类似于`<video>`和`<audio>`元素。您设置了不同的源，第一个符合首选项的源是正在使用的源：

```html
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 400px)" />
  <source srcset="img_flowers.jpg" />
  <img src="img_flowers.jpg" alt="Flowers" />
</picture>
```

`srcset`属性是必需的，它定义了图像的来源。 `media`属性是可选的，并接受您在 CSS `@media`规则中找到的媒体查询。 您还应该为不支持`<picture>`元素的浏览器定义`<img>`元素。
