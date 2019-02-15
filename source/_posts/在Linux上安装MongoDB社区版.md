title: 在Linux上安装MongoDB社区版
author: chenqy9
tags:
  - 'linux '
  - MongoDB
categories:
  - 文章教程
date: 2019-02-15 14:11:00
---
## 在Red Hat Enterprise或CentOS Linux上安装MongoDB 社区版

本教程使用.rpm软件包在Red Hat Enterprise Linux或CentOS Linux版本6和7上安装MongoDB Community Edition。

### 使用.rpm包（推荐）

1. 配置包管理系统（yum）

  创建一个/etc/yum.repos.d/mongodb-org-4.0.repo文件，以便您可以使用yum直接安装MongoDB：

  ``` bash
  [mongodb-org-4.0]
  name=MongoDB Repository
  baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
  gpgcheck=1
  enabled=1
  gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
  ```

2. 安装MongoDB包

  要安装最新的稳定版MongoDB，请发出以下命令：

  ``` bash
  sudo yum install -y mongodb-org
  ```
  
### 运行MongoDB社区版

1. 启动MongoDB

  您可以通过发出以下命令来启动mongod进程：

  ``` bash
  sudo service mongod start
  ```
    
2. 验证MongoDB是否已成功启动

  您可以通过检查/var/log/mongodb/mongod.log中日志文件的内容来检查mongod进程是否已成功启动以获取行读取
  
  ``` bash
  [initandlisten] waiting for connections on port <port>
  ```
  
  其中<port>是/etc/mongod.conf中配置的端口，默认为27017。
  
  您可以选择通过发出以下命令来确保MongoDB在系统重新启动后启动：
  
  ``` bash
  sudo chkconfig mongod on
  ```

3. 停止MongoDB

  根据需要，您可以通过发出以下命令来停止mongod进程：
  
  ``` bash
  sudo service mongod stop
  ```
  
4. 重启MongoDB

  您可以通过发出以下命令重新启动mongod进程：
  
  ``` bash
  sudo service mongod restart
  ```
  
  您可以通过观察/var/log/mongodb/mongod.log文件中的输出来跟踪错误或重要消息的进程状态。
  
5. 开始使用MongoDB

  在与mongod相同的主机上启动mongo shell。您可以在没有任何命令行选项的情况下运行mongo shell，以使用默认端口27017连接到localhost上运行的mongod：
  
  ``` bash
  mongo
  ```