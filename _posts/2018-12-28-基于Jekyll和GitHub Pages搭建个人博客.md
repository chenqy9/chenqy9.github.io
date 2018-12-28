---
layout: post
title:  "基于Jekyll和GitHub Pages搭建个人博客"
date:   2018-12-28 19:16:28
categories: 技术教程
---

# 基于Jekyll和GitHub Pages搭建个人博客

## JeKyll

[JeKyll](https://jekyllrb.com)是一个基于Ruby的博客类静态网站生成器。

> Jekyll是一个简单，可扩展的静态站点生成器。您可以使用自己喜欢的标记语言编写文本，然后通过布局来创建静态网站。在整个过程中，您可以调整网站URL的显示方式，布局中显示的数据等

### 基于JeKyll创建静态网站

1. [安装Ruby开发环境](https://jekyllrb.com/docs/installation/) ([以macOS 为例](https://jekyllrb.com/docs/installation/macos/)) ***macOS Mojave 10.14 可省略以下安装步骤***

   1.1 安装Homebrew和Ruby

    ``` bash
    # Install Homebrew
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    brew install ruby
    ```
   1.2 导出Ruby环境变量

    ``` bash
    echo 'export PATH=/usr/local/opt/ruby/bin:$PATH' >> ~/.zshrc
    ```

   1.3 检查Ruby是否安装成功

    ``` bash
    which ruby
    /usr/local/opt/ruby/bin/ruby
    ruby -v
    ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-darwin18]
    ```
2. 安装打包器和jekyll

    ``` bash
    gem install --user-install bundler jekyll
    ```
3. 创建一个新的Jekyll网站

    ``` bash
    jekyll new myblog
    ```
    若提示 *command not found: jekyll* ，需要把gem路径配置到PATH里面

4. 编译网站并启动本地服务

   ``` bash
   cd myblog
   bundle exec jekyll serve
   ```

   访问[http://localhost:4000/](http://localhost:4000/)查看效果

## GitHub Pages

[GitHub Pages](https://pages.github.com/)是直接从GitHub仓库托管的个人网站和项目网站。

### 基于GitHub Pages托管网站

1. 创建一个仓库  
  前往[GitHUb](https://github.com/)创建一个新的仓库，仓库名称为*username.github.io*，其中*username*是你的GitHub用户名或者组织名称。
   ![创建GitHub仓库区](./images/create_github_repository.jpg "创建GitHub仓库区")

2. 克隆仓库  
   把步骤一创建的仓库克隆到本地。

   ``` bash

   git clone https://github.com/username/username.github.io
   ```

3. 创建第一个页面  
   进入项目目录，新建一个index.html的文件。

   ``` bash

   cd username.github.io
   echo "Hello World" > index.html
   ```

4. 推送到远程仓库  
   增加、提交和推送你的更改

   ``` bash

   git add --all
   git commit -m "初始提交"
   git push -u origin master
   ```

5. 你已经成功完成  
   访问[*https://username.github.io*](https://username.github.io)查看效果

## 整合部署

将Jekyll生成的静态网站复制到username.github.io仓库并提交推送到GitHub

``` bash
cp -r myblog/** username.github.io
```

后面直接修改仓库文件，用Jekyll编译提交即可。