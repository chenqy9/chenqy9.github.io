---
title: Linux离线安装yarn和配置离线仓库
date: 2019-01-03
categories:
  - 技术文档
tags:
  - linux
  - yarn
---

yarn 是 Facebook 团队开发的快速、可靠、安全的依赖管理工具。相比于 npm 包管理工具，yarn 的离线模式更适用于在没有网络链接的情况下进行项目依赖安装及构建。

## 优势

- **极其快速**  
  Yarn 会缓存它下载的每个包，所以无需重复下载。它还能并行化操作以最大化资源利用率，安装速度之快前所未有。

- **特别安全**  
  Yarn 会在每个安装包被执行前校验其完整性。

- **超级可靠**  
  Yarn 使用格式详尽而又简洁的 lockfile 文件 和确定性算法来安装依赖，能够保证在一个系统上的运行的安装过程也会以同样的方式运行在其他系统上。

## 特点

- **离线模式**  
  如果你之前安装过某个包，你就可以在没有网络连接的情况下再次安装它。

- **确定性**  
  不管是什么顺序，在不同的机器上的依赖会以同一方式安装。

- **网络性能**  
  Yarn 可以高效地队列化请求并且避免请求瀑布化，使网络利用率最大化。

- **相同的软件包**  
  从 npm 安装软件包并使用相同的包管理流程。

- **网络适应**  
  单个请求失败不会导致安装失败，请求失败时会重试。

- **扁平模式**  
  解析不匹配的依赖版本为一个单一的版本来避免导致多个版本。

## 安装 yarn

1. 从[官网](https://yarnpkg.com/latest.tar.gz)下载源码包并上传到目标服务器

   ```bash
   scp -r ~/Downloads/yarn-v1.12.3.tar.gz user@host:path
   ```

2. 解压程序包到目标目录

   ```bash
   tar zvxf yarn-v1.12.3.tar.gz -C /opt
   ```

3. 设置环境变量 vim /etc/profile，将下面  代码添加到文件最后

   ```bash
   export NODEJS_HOME=/opt/yarn-v1.12.3/bin
   export PATH=$NODEJS_HOME:$PATH
   ```

4. 刷新文件配置

   ```bash
   . /etc/profile
   ```

5. 运行命令来测试 Yarn 是否安装：

   ```bash
   yarn --version
   ```

## 配置离线镜像

首先我们需要设置一个目录作为我们的“离线镜像”存储，我们可以使用 yarn config 命令：

```bash
yarn config set yarn-offline-mirror ./npm-packages-offline-cache
```

./npm-packages-offline-cache 是    相对于主文件夹的示例位置，其中所有 source.tar.gz 文件将从注册表下载。

脱机镜像不会删除 tar 包。为了使缓存文件夹保持最新，您需要将以下内容添加到配置文件中：

```bash
yarn config set yarn-offline-mirror-pruning true
```

如何测试以确保它处于脱机状态？

- 使用“yarn cache clean”清除全局缓存
- 关掉 wifi
- 运行“yarn install -offline”。离线标志将确保 yarn 不会到达网络

简而言之，要为您的项目启用“离线镜像”，您需要：

- 将“yarn-offline-mirror”配置添加到.yarnrc 文件中
- 使用“yarn install”命令生成一个新的 yarn.lock
