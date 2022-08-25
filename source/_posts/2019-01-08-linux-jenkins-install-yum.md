---
title: Linux安装升级jenkins
date: 2019-01-08
categories:
  - 文章教程
tags:
  - jenkins
  - linux
  - yum
---

## 本文介绍在 centos 操作系统下通过 yum 安装 jenkins，并通过下载官方 war 包的方式升级。

## 安装

1. 安装 JDK

   ```bash
   yum install -y java
   ```

2. 安装 Jenkins

   ```bash
   # 如果没安装wget，可先安装或用curl
   yum install -y wget

   # 添加Jenkins库到yum库
   wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo

   rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key

   yum install -y jenkins
   ```

3. 启动 Jenkins 服务

   ```bash
   # 启动Jenkins
   service jenkins start

   # 停止Jenkins
   service jenkins stop

   # 重启Jenkins
   service jenkins restart
   ```

4. 注意事项

   Jenkins 默认端口是 8080，确保此端口不被占用或者修改 Jenkins 的默认端口，打开防火墙对该端口的拦截。

   ```bash
   # 配置Jenkis的端口， 修改JENKINS_PORT="8080"为目标端口
   vi /etc/sysconfig/jenkins

   # 开启防火墙端口
   firewall-cmd --zone=public --add-port=8080/tcp --permanent

   # 重启Jenkins服务
   service jenkins restart
   ```

## 升级

1. 下载官升升级 war 包，scp 到目标服务器

   ```bash
   cp ~/Downloads/jenkins.war user@ip:/usr/lib/jenkins/
   ```

2. 查看 Jenkins 服务启动的安装包位置

   ```bash
   # 可以看到包的位置在/usr/lib/jenkins/jenkins.war
   ps -ef | grep jenkins

   # 用升级war包替换旧的安装包，重启Jenkins服务
   service jenkins stop
   service jenkins start
   ```
