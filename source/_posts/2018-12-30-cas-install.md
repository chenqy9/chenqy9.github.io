---
title: CAS 安装
date: 2018-12-30
categories:
  - 技术文档
tags:
  - CAS
  - 单点登录
  - 安装
---

CAS 安装是一个基本的面向源的过程，我们建议使用[WAR overlay](http://maven.apache.org/plugins/maven-war-plugin/overlays.html)项目来组织自定义，例如组件配置和 UI 设计。 WAR 覆盖构建的输出是一个 cas.war 文件，可以部署在像[Tomcat](http://tomcat.apache.org/whichversion.html)这样的 Java servlet 容器上。

WAR overlay 项目提供参考和研究。

### Gradle

- [CAS Gradle Overlay](https://github.com/apereo/cas-gradle-overlay-template/tree/4.2)

### Maven

- [CAS Maven Overlay](https://github.com/apereo/cas-overlay-template/tree/4.2)

CAS 使用 Spring Webflow 以模块化和可配置的方式驱动登录过程; login-webflow.xml 文件包含流中状态和转换的简单描述。自定义此文件可能是 Spring XML 配置文件中除组件配置之外最常见的配置问题。有关各种 CAS 流程的详细说明以及常见配置点的讨论，请参见“Spring Webflow 自定义指南”。

### Spring 配置

CAS 服务器在很大程度上依赖于 Spring 框架。 spring-configuration 目录下有精确和特定的 XML 配置文件，用于控制 CAS 的各种属性以及 cas-servlet.xml 和 deployerConfigContext.xml，后者主要是 CAS 采用者希望将其包含在环境覆盖中 - 特定的 CAS 设置。

如果需要通过 Maven 覆盖过程，可以覆盖 XML 配置文件中的 Spring bean 以更改行为。有两种方法：

1. XML 文件可以从 CAS 版本的源获得，并在 Maven 重叠版本中以相同的名称放置在相同的确切路径上。如果配置正确，则构建将使用本地提供的 XML 文件而不是默认值。

2. CAS 服务器能够加载 XML 配置文件的模式以覆盖默认提供的内容。打算否决 CAS 默认行为的这些配置文件可以放在/ WEB-INF /中，并且必须使用以下模式命名：cas-servlet - \* .xml。放在此文件中的 Bean 将覆盖其他文件。
