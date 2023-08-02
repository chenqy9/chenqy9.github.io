---
title: 写一个简单的markdown到html的解析器
categories:
  - 技术文档
tags:
  - markdown
  - 转换器
date: 2023-08-02 10:23:46
---

## 联系我

- [E-mail](mailto:chenqy9@foxmail.com)
- [个人博客](https://chenqy9.github.io)


## markdown

markdown是一种方便快捷的基于标签的文本格式化语法，类似于HTML超文本标志语言。事实上，很多markdown的解析器就是把markdown转换成html来显示的，特别是web端的markdown编辑器，基本上主流的开源库比如[marked](https://github.com/markedjs/marked)都是这样实现的。下面我们自己来实现一个简单的markdown到html的解析器。

## markdown标签

首先，我们来看看markdown常用的标签及语义，对应的html标签，如下所示：

| markdown 标签 | 语义 | html标签 |
| ------ | ------ | ------ |
| # ~ ###### | 标题 | h1 ~ h6 |
| \*text\* | 斜体 | em |
| \*\*text\*\* | 加粗 | strong |
| \`text\` | 高亮 | a |
| \[text\]\(href\) | 链接 | a |

## markdown转html

实现思路：  

1. 写markdown标签的正则表达式和对应的html模板规则映射表
2. 循环规则的正则进行正则匹配的字符串替换

实现代码如下：  

``` javascript
const rules = [
  // header rules
  [/#{6}\s?([^\n]+)/g, "<h6>$1</h6>"],
  [/#{5}\s?([^\n]+)/g, "<h5>$1</h5>"],
  [/#{4}\s?([^\n]+)/g, "<h4>$1</h4>"],
  [/#{3}\s?([^\n]+)/g, "<h3>$1</h3>"],
  [/#{2}\s?([^\n]+)/g, "<h2>$1</h2>"],
  [/#{1}\s?([^\n]+)/g, "<h1>$1</h1>"],

  //bold, italics
  [/\*\*\s?([^\n]+)\*\*/g, "<strong>$1</strong>"],
  [/\*\s?([^\n]+)\*/g, "<em>$1</em>"],
  
  //links
  [
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>',
  ],

  //highlights
  [
    /(`)(\s?[^\n,]+\s?)(`)/g,
    '<a style="background-color:grey;color:black;text-decoration: none;border-radius: 3px;padding:0 2px;">$2</a>',
  ],
]

function markdown2html(markdown = '') {
  let html = markdown;
  try {
    rules.forEach(([rule, template]) => {
      html = html.replace(rule, template);
    });
  } catch (error) {
    console.error('转换失败：', error);
  }
  return html;
}

console.log(markdown2html(`
# heading1
## heading2
### heading3
#### heading4
##### heading5
###### heading6

**strong**
*em*

[百度](https://www.baidu.com)

\`highlight\`
`));
```

## 联系我

- [E-mail](mailto:chenqy9@foxmail.com)
- [个人博客](https://chenqy9.github.io)
