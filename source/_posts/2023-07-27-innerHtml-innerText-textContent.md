---
title: innerHTML innerText textContent对比
categories:
  - 技术文档
date: 2023-07-27 15:16:09
tags:
  - 前端API
---

## innerHTML

`innerHTML`获取或设置元素的所有内部HTML内容，包括文本和HTML标签，可以理解为元素内部的HTML代码。  

**测试代码：**

``` html
<!-- 隐藏部分文本 -->
<style>
.hidden {
  display: none;
}
</style>

<!-- 测试的HTML内容 -->
<div id="parent">
  this is <strong>parent</strong> text
  <div id="child">
    hello!
    how are you? <span></span>

    <br>
    this is&nbsp;child text
    <p class="hidden">this is hidden content by css from child</p>
  </div>
</div>

<script>
const parentEl = document.getElementById('parent');
console.log(parentEl.innerHTML);
</script>
```

**输出结果：**  

``` text
this is <strong>parent</strong> text
<div id="child">
  hello!
  how are you? <span></span>

  <br>
  this is&nbsp;child text
  <p class="hidden">this is hidden content by css from child</p>
</div>
```

## innerText

`innerText`获取或设置元素的***可见***文本内容，不包含HTML标签和隐藏不可见的文本内容。如下所示，用css隐藏及`\n`等不显示的内容不会返回。  

**测试代码：**

``` html
<!-- 隐藏部分文本 -->
<style>
.hidden {
  display: none;
}
</style>

<!-- 测试的HTML内容 -->
<div id="parent">
  this is <strong>parent</strong> text
  <div id="child">
    hello!
    how are you? <span></span>

    <br>
    this is&nbsp;child text
    <p class="hidden">this is hidden content by css from child</p>
  </div>
</div>

<script>
const parentEl = document.getElementById('parent');
console.log(parentEl.innerHTML);
</script>
```

**输出结果：**  

``` text
this is parent text
hello! how are you?
this is child text
```

## textContent

`textContent`获取或设置元素的所有文本内容，包括换行、空格、css隐藏的内容等，不包括HTML标签。  

**测试代码：**

``` html
<!-- 隐藏部分文本 -->
<style>
.hidden {
  display: none;
}
</style>

<!-- 测试的HTML内容 -->
<div id="parent">
  this is <strong>parent</strong> text
  <div id="child">
    hello!
    how are you? <span></span>

    <br>
    this is&nbsp;child text
    <p class="hidden">this is hidden content by css from child</p>
  </div>
</div>

<script>
const parentEl = document.getElementById('parent');
console.log(parentEl.innerHTML);
</script>
```

**输出结果：**  

``` text
this is parent text

  hello!
  how are you? 

  
  this is child text
  this is hidden content by css from child
```


