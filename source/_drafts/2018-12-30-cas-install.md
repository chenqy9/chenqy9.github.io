title: CAS安装
layout: single
author_profile: true
read_time: false
related: true
classes: wide
categories:
  - 技术文档
tags:
  - CAS
  - 单点登录
  - 安装
date: 2019-01-31 00:06:33
comments:
---

CAS安装是一个基本的面向源的过程，我们建议使用[WAR overlay](http://maven.apache.org/plugins/maven-war-plugin/overlays.html)项目来组织自定义，例如组件配置和UI设计。 WAR覆盖构建的输出是一个cas.war文件，可以部署在像[Tomcat](http://tomcat.apache.org/whichversion.html)这样的Java servlet容器上。

WAR overlay项目提供参考和研究。

### Gradle

* [CAS Gradle Overlay](https://github.com/apereo/cas-gradle-overlay-template/tree/4.2)

### Maven

* [CAS Maven Overlay](https://github.com/apereo/cas-overlay-template/tree/4.2)

CAS使用Spring Webflow以模块化和可配置的方式驱动登录过程; login-webflow.xml文件包含流中状态和转换的简单描述。自定义此文件可能是Spring XML配置文件中除组件配置之外最常见的配置问题。有关各种CAS流程的详细说明以及常见配置点的讨论，请参见“Spring Webflow自定义指南”。

### Spring 配置

CAS服务器在很大程度上依赖于Spring框架。 spring-configuration目录下有精确和特定的XML配置文件，用于控制CAS的各种属性以及cas-servlet.xml和deployerConfigContext.xml，后者主要是CAS采用者希望将其包含在环境覆盖中 - 特定的CAS设置。

如果需要通过Maven覆盖过程，可以覆盖XML配置文件中的Spring bean以更改行为。有两种方法：

1. XML文件可以从CAS版本的源获得，并在Maven重叠版本中以相同的名称放置在相同的确切路径上。如果配置正确，则构建将使用本地提供的XML文件而不是默认值。

2. CAS服务器能够加载XML配置文件的模式以覆盖默认提供的内容。打算否决CAS默认行为的这些配置文件可以放在/ WEB-INF /中，并且必须使用以下模式命名：cas-servlet - * .xml。放在此文件中的Bean将覆盖其他文件。