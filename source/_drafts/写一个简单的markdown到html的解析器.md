---
title: 写一个简单的markdown到html的解析器
categories:
  - 技术文档
date: 2023-08-02 10:23:46
tags:
  - markdown
  - 转换器
---

## markdown

markdown是一种方便快捷的基于标签的文本格式化语法，类似于HTML超文本标志语言。事实上，很多markdown的解析器就是把markdown转换成html来显示的，特别是web端的markdown编辑器，基本上主流的开源库比如[marked](https://github.com/markedjs/marked)都是这样实现的。下面我们自己来实现一个简单的markdown到html的解析器。

## markdown标签

首先，我们来看看markdown常用的标签及语义，对应的html标签，如下所示：

| markdown 标签 | 语义 | html标签 |
| ------ | ------ | ------ |
| # ~ ###### | 标题 | h1 ~ h6 |
| \*text\* | 斜体 | em |
| \*\*text\*\* | 加粗 | strong |
| \`text\` | 代码 | code |
| \+ \* \1. | 列表 | ul |
| \[text\]\(href\) | 链接 | a |

## markdown转html

实现思路：  

1. 用换行符`\n`对markdown文本进行分块
2. 写markdown标签的正则表达式和对应的html标映射表
3. 循环文本块进行正则匹配的字符串替换

实现代码如下：  



## 联系我

- [E-mail](mailto:chenqy9@foxmail.com)
- [个人博客](https://chenqy9.github.io)
