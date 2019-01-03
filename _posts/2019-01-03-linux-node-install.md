---
title: Linux离线安装node
layout: single
author_profile: true
comments: null
related: true
classes: wide
categories:
- 技术文档
tags:
- node
- linux
---

本文介绍如何在Linux 64位系统上通过二进制压缩文件离线安装安装node。  

1. 到[官网](https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.xz)下载安装包，并scp上传到目标服务器。

``` bash
scp -r ~/Downloads/node-v10.15.0-linux-x64.tar.xz user@host:path
```

2. 将二进制存档解压缩到您要安装Node的任何目录，我使用/usr/ local/lib/nodejs

``` bash
VERSION=v10.15.0
DISTRO=linux-x64
sudo mkdir /usr/local/lib/nodejs
sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs
sudo mv /usr/local/lib/nodejs/node-$VERSION-$DISTRO /usr/local/lib/nodejs/node-$VERSION
```

3. 设置环境变量vim /etc/profile，将下面代码添加到文件最后

``` bash
# Nodejs
export NODEJS_HOME=/usr/local/lib/nodejs/node-$VERSION/bin
export PATH=$NODEJS_HOME:$PATH
```

4. 刷新文件配置

``` bash
. /etc/profile
```

5. 测试安装

``` bash
node -v
npm version
npx -v
```

正常输出是：

``` bash
node -v
v10.15.0
npm version
{ npm: '6.4.1',
  ares: '1.15.0',
  cldr: '33.1',
  http_parser: '2.8.0',
  icu: '62.1',
  modules: '64',
  napi: '3',
  nghttp2: '1.34.0',
  node: '10.15.0',
  openssl: '1.1.0j',
  tz: '2018e',
  unicode: '11.0',
  uv: '1.23.2',
  v8: '6.8.275.32-node.45',
  zlib: '1.2.11' }
```

创建sudo链接：

``` bash
sudo ln -s /usr/local/lib/nodejs/node-$VERSION/bin/node /usr/bin/node

sudo ln -s /usr/local/lib/nodejs/node-$VERSION/bin/npm /usr/bin/npm

sudo ln -s /usr/local/lib/nodejs/node-$VERSION/bin/npx /usr/bin/npx
```