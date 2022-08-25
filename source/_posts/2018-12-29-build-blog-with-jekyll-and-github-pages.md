---
title: "基于Jekyll和GitHub Pages搭建个人博客"
date: 2018-12-29
categories:
  - 文章教程
tags:
  - 博客
  - Jekyll
  - GitHub Pages
  - markdown
---

## 本文介绍如何利用 Jekyll 创建一个静态站点，并托管到 GitHub Pages 上。

## JeKyll

[JeKyll](https://jekyllrb.com)是一个基于 Ruby 的博客类静态网站生成器。

> Jekyll 是一个简单，可扩展的静态站点生成器。您可以使用自己喜欢的标记语言编写文本，然后通过布局来创建静态网站。在整个过程中，您可以调整网站 URL 的显示方式，布局中显示的数据等

### 基于 JeKyll 创建静态网站

1. [安装 Ruby 开发环境](https://jekyllrb.com/docs/installation/) ([以 macOS 为例](https://jekyllrb.com/docs/installation/macos/)) **_macOS Mojave 10.14 可省略以下安装步骤_**

   1.1 安装 Homebrew 和 Ruby

   ```bash
   # Install Homebrew
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

   brew install ruby
   ```

   1.2 导出 Ruby 环境变量

   ```bash
   echo 'export PATH=/usr/local/opt/ruby/bin:$PATH' >> ~/.zshrc
   ```

   1.3 检查 Ruby 是否安装成功

   ```bash
   which ruby
   /usr/local/opt/ruby/bin/ruby
   ruby -v
   ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-darwin18]
   ```

2. 安装打包器和 jekyll

   ```bash
   gem install --user-install bundler jekyll
   ```

3.  创建一个新的 Jekyll 网站

   ```bash
   jekyll new myblog
   ```

   若提示 _command not found: jekyll_ ，需要把 gem 路径配置到 PATH 里面

4. 编译网站并启动本地服务

   ```bash
   cd myblog
   bundle exec jekyll serve
   ```

   访问[http://localhost:4000/](http://localhost:4000/)查看效果

## GitHub Pages

[GitHub Pages](https://pages.github.com/)是直接从 GitHub 仓库托管的个人网站和项目网站。

### 基于 GitHub Pages 托管网站

1.  创建一个仓库  
   前往[GitHUb](https://github.com/)创建一个新的仓库， 仓库名称为 *username.github.io*，其中 *username*是你的 GitHub 用户名或者组织名称。

2. 克隆仓库  
   把步骤一创建的仓库克隆到本地。

   ```bash

   git clone https://github.com/username/username.github.io
   ```

3. 创建第一个页面  
   进入项目目录，新建一个 index.html 的文件。

   ```bash

   cd username.github.io
   echo "Hello World" > index.html
   ```

4. 推送到远程仓库  
   增加、提交和推送你的更改

   ```bash

   git add --all
   git commit -m "初始提交"
   git push -u origin master
   ```

5. 你已经成功完成  
   访问[_https://username.github.io_](https://username.github.io)查看效果

## 整合部署

将 Jekyll 生成的静态网站复制到 username.github.io 仓库并  提交推送到 GitHub

```bash
cp -r myblog/** username.github.io
```

后面直接修改仓库文件，用 Jekyll 编译提交即可。
