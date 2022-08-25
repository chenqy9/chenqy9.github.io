---
title: 在Linux上安装MongoDB社区版
date: 2019-02-15
categories:
  - 文章教程
tags:
  - linux
  - MongoDB
---

## 在 Red Hat Enterprise 或 CentOS Linux 上安装 MongoDB 社区版

本教程使用.rpm 软件包在 Red Hat Enterprise Linux 或 CentOS Linux 版本 6 和 7 上安装 MongoDB Community Edition。

### 使用.rpm 包（推荐）

1. 配置包管理系统（yum）

创建一个/etc/yum.repos.d/mongodb-org-4.0.repo 文件，以便您可以使用 yum 直接安装 MongoDB：

```bash
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

2. 安装 MongoDB 包

要安装最新的稳定版 MongoDB，请发出以下命令：

```bash
sudo yum install -y mongodb-org
```

### 运行 MongoDB 社区版

1. 启动 MongoDB

您可以通过发出以下命令来启动 mongod 进程：

```bash
sudo service mongod start
```

2. 验证 MongoDB 是否已成功启动

您可以通过检查/var/log/mongodb/mongod.log 中日志文件的内容来检查 mongod 进程是否已成功启动以获取行读取

```bash
[initandlisten] waiting for connections on port <port>
```

其中<port>是/etc/mongod.conf 中配置的端口，默认为 27017。

您可以选择通过发出以下命令来确保 MongoDB 在系统重新启动后启动：

```bash
sudo chkconfig mongod on
```

3. 停止 MongoDB

根据需要，您可以通过发出以下命令来停止 mongod 进程：

```bash
sudo service mongod stop
```

4. 重启 MongoDB

您可以通过发出以下命令重新启动 mongod 进程：

```bash
sudo service mongod restart
```

您可以通过观察/var/log/mongodb/mongod.log 文件中的输出来跟踪错误或重要消息的进程状态。

5. 开始使用 MongoDB

在与 mongod 相同的主机上启动 mongo shell。您可以在没有任何命令行选项的情况下运行 mongo shell，以使用默认端口 27017 连接到 localhost 上运行的 mongod：

```bash
mongo
```
