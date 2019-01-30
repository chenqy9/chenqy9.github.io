---
title: CAS入门
layout: single
author_profile: true
read_time: false
comments: null
related: true
classes: wide
categories:
- 技术文档
tags:
- CAS
- 单点登录
- 入门
---

企业单点登录 - CAS提供友好的开源社区，积极支持并为项目做出贡献。虽然该项目植根于高级开放源代码，但它已发展成为跨越财富500强企业和小型专用设备的国际受众。  

CAS为Web提供企业单点登录服务：

* 开放且文档齐全的协议开源
* Java服务器组件
* 可插入的身份验证支持（LDAP，数据库，X.509,2-factor）
* 支持多种协议（CAS，SAML） ，OAuth，OpenID）Java，.Net，PHP，Perl，Apache，uPortal和其他
* 客户端库集成了uPortal，BlueSocket，TikiWiki，Mule，Liferay，Moodle等
* 社区文档和实现支持广泛的采用者社区

## 资源链接

* [官方网站](https://www.apereo.org/projects/cas)
* [官方文档](https://apereo.github.io/cas/4.2.x/index.html)
* [GitHub](https://github.com/apereo/cas)

## 架构

![cas架构图](https://apereo.github.io/cas/4.2.x/images/cas_architecture.png)

### CAS服务器

CAS服务器是基于Spring Framework构建的Java servlet，其主要职责是通过颁发和验证票证来对用户进行身份验证并授予对启用CAS的服务（通常称为CAS客户端）的访问权限。当服务器在成功登录后向用户发出票证授予票证（TGT）时，将创建SSO会话。使用TGT作为令牌，通过浏览器重定向，根据用户的请求向服务发出服务票据（ST）。随后通过反向信道通信在CAS服务器上验证ST。

### CAS客户端

术语“CAS客户端”在其通用使用中具有两个不同的含义。 CAS客户端是任何启用CAS的应用程序，可以通过支持的协议与服务器通信。 CAS客户端也是可以与各种软件平台和应用程序集成的软件包，以便通过某种认证协议（例如CAS，SAML，OAuth）与CAS服务器通信。已经开发了支持许多软件平台和产品的CAS客户。

平台：

* Apache httpd Server ([mod_auth_cas module](https://github.com/Jasig/mod_auth_cas))
* Java ([Java CAS Client](https://github.com/apereo/java-cas-client))
* .NET ([.NET CAS Client](https://github.com/apereo/dotnet-cas-client))
* PHP (phpCAS)
* Perl (PerlCAS)
* Python (pycas)
* Ruby (rubycas-client)

应用：

* Outlook Web Application (ClearPass + .NET CAS Client)
* Atlassian Confluence
* Atlassian JIRA
* Drupal
* Liferay
* uPortal

### 协议

客户端通过几种支持的协议与服务器通信。所有支持的协议在概念上都是相似的，但有些协议具有使其适用于特定应用程序或用例的特征或特征。例如，CAS协议支持委托（代理）身份验证，SAML协议支持属性释放和单点注销。

支持的协议：

* [CAS (versions 1, 2, and 3)](https://apereo.github.io/cas/4.2.x/protocol/CAS-Protocol.htmlv)
* [SAML 1.1](https://apereo.github.io/cas/4.2.x/protocol/SAML-Protocol.html)
* [OpenID](https://apereo.github.io/cas/4.2.x/protocol/OpenID-Protocol.html)
* [OAuth (1.0, 2.0)](https://apereo.github.io/cas/4.2.x/protocol/OAuth-Protocol.html)

### 组件

根据三层子系统描述CAS服务器是很有帮助的：

* Web (Spring MVC/Spring Webflow)
* [Ticketing](https://apereo.github.io/cas/4.2.x/installation/Configuring-Ticketing-Components.html)
* [Authentication](https://apereo.github.io/cas/4.2.x/installation/Configuring-Authentication-Components.html)

几乎所有部署注意事项和组件配置都涉及这三个子系统。 Web层是与包括CAS客户端在内的所有外部系统进行通信的端点。 Web层委托票务子系统生成CAS客户端访问的票证。 SSO会话开始于成功验证时发出票证授予票证，因此票务子系统经常委托给验证子系统。

认证系统通常仅在SSO会话开始时处理请求，尽管存在可以调用它的其他情况（例如，强制认证）。

### Spring 框架

CAS使用Spring Framework的许多方面;最值得注意的是，Spring MVC和Spring Webflow。 Spring为核心CAS代码库以及部署者提供了完整且可扩展的框架;通过挂钩CAS和Spring API扩展点，可以直接定制或扩展CAS行为。 Spring的一般知识有助于理解某些框架组件之间的相互作用，但并不是严格要求的。但是，用于配置CAS和Spring组件的基于XML的配置是安装，定制和扩展的核心问题。通常使用XML的能力和特别是Spring IOC容器是CAS安装的先决条件。

## 安装要求

要求概览：

1. [Java](http://www.java.com/) >=1.7
2. [支持servlet规范的Servlet容器](http://tomcat.apache.org/) >=3.0
3. [Apache Maven](http://maven.apache.org/) >=3.3
4. [熟悉Spring框架](http://www.springsource.org/)
5. 互联网连接

根据配置组件的选择，可能还有其他要求，例如LDAP目录，数据库和缓存基础结构。但是，在大多数情况下，对于选择具有明确硬件和软件依赖性的组件的部署者来说，要求应该是不言而喻的。在任何其他要求不明显的情况下，组件配置的讨论应该提到系统，软件，硬件和其他要求。

### Servlet容器

CAS没有官方支持的servlet容器，但[Apache Tomcat](http://tomcat.apache.org/)是最常用的。对特定servlet容器的支持取决于社区成员的专业知识，但已知以下工作正常并且应该获得[社区讨论邮件列表](https://apereo.github.io/cas/4.2.x/Mailing-Lists.html)的优先支持：

* [JBoss]( http://www.jboss.org/)
* [Jetty](http://www.eclipse.org/jetty/)
* [GlassFish](http://glassfish.java.net/)
* [WebSphere](http://www.ibm.com/software/websphere/)

### Apache Maven

CAS使用Maven构建和创建可部署的软件包，以便安装到Java servlet容器中。强烈建议使用Maven进行CAS安装过程所需的配置管理。 CAS基本上是一个复杂的软件产品，它嵌入并紧密集成到机构的软件环境中。因此，它倾向于要求定制远远超出交钥匙解决方案，并且集成要求往往会随着时间的推移而变化。像[Maven WAR overlay](https://apereo.github.io/cas/4.2.x/installation/Maven-Overlay-Installation.html)这样的基于源的安装过程为复杂和动态的需求提供了直接而灵活的解决方案。虽然它确实需要高昂的前期学习成本，但从长远来看，它可以获得许多好处

### 互联网连接

任何基于Maven的项目的构建阶段通常都需要Internet连接，包括用于安装CAS的推荐Maven WAR覆盖。 Maven通过搜索包含本地下载和安装的工件（大多数情况下为jar文件）的在线存储库来解析依赖关系。虽然可以通过替换Maven配置设置来覆盖此行为，但它被视为高级用法，不受支持。

克服CAS服务器上缺少Internet连接的常见解决方案是在具有Internet连接的专用构建主机上构建CAS。随后将构建生成的cas.war文件复制到CAS服务器以进行部署。

## 安全指南

CAS是一种安全软件，可为基于Web的应用程序提供基于Web的安全单点登录。单点登录在安全性和便利性方面提供了双赢：它减少了对单个受信任凭证代理的密码暴露，同时透明地提供对多个服务的访问而无需重复登录。 CAS的使用通常会改善安全环境，但是应该考虑几种CAS配置，策略和部署问题以实现适当的安全性。

### 系统安全注意事项

#### 安全传输（https）

与CAS服务器的所有通信必须通过安全信道（即TLSv1）进行。此要求有两个主要理由：

1. 身份验证过程需要传输安全凭据。
2.  CAS票证授予票证是不记名令牌。

由于任一数据的公开都会允许冒充攻击，因此保护CAS客户端和CAS服务器之间的通信通道至关重要。

实际上，这意味着所有CAS URL必须使用HTTPS，但这也意味着必须使用HTTPS完成从CAS服务器到应用程序的所有连接：

1. 当生成的服务票据被发送回“服务”URL上的应用程序时。
2.  当调用代理回调网址时。

#### 与依赖系统的连接

CAS通常需要连接到其他系统，例如LDAP目录，数据库和缓存服务。我们通常建议在可能的情况下对这些系统使用安全传输（SSL / TLS，IPSec），但可能存在补偿性控制，这使得安全传输成为必要。具有严格访问控制的专用网络和企业网络是常见的例外情况，但仍建议使用安全传输。客户端认证验证可以是LDAP提供足够安全性的另一个好方案。

如前所述，必须确保与其他系统的连接。但是，如果CAS服务器部署在多个节点上，则同样适用于CAS服务器本身。如果基于缓存的故障单注册表在单个CAS服务器上运行时没有任何安全问题，则在网络未受保护时使用多个节点时，同步可能会成为安全问题。

如果没有正确保护，任何磁盘存储也都容易受到攻可以关闭EhCache溢出到磁盘以增加保护，而高级加密数据机制应该用于数据库磁盘存储。

### 部署驱动的安全功能

CAS支持许多可用于实现各种安全策略的功能。通过CAS配置和CAS客户端集成提供以下功能。请注意，许多功能都是开箱即用的，而其他功能则需要显式设置。

#### 强制认证

许多CAS客户端和支持的协议支持强制身份验证的概念，用户必须重新进行身份验证才能访问特定服务。 CAS协议通过renew参数支持强制认证。强制身份验证为SSO会话的主体身份提供了额外的保证，因为用户必须在访问之前验证其凭据。强制认证适用于需要或强制要求更高安全性的服务。通常，强制身份验证是基于每个服务配置的，但是服务管理工具通过集中安全策略为实施强制身份验证提供了一些支持。强制认证可以与多因素认证特征组合以实现任意特定于服务的访问控制策略。

#### 被动认证

某些CAS协议支持被动身份验证，其中在请求时匿名授予对受CAS保护的服务的访问权限。 CASv2和CASv3协议通过网关功能支持此功能。被动认证补充了强制认证;强制身份验证需要身份验证才能访问服务，被动身份验证允许服务访问，尽管是匿名的，无需身份验证。

#### 代理验证

代理身份验证或委派身份验证提供了CAS的强大，重要且可能具有安全性的功能。 CASv2和CASv3协议支持代理身份验证，并由代表用户的服务请求的代理票证调解;因此，服务代理用户的认证。代理身份验证通常用于服务无法直接与用户交互的情况，也可用作将最终用户凭据重放到服务的替代方法。

然而，代理票据存在风险，因为接受代理票据的服务负责验证代理链（最终用户的认证已经被委托到达票证验证服务的服务列表）。通过简单地针对/ serviceValidate验证端点验证票证，服务可以完全选择不接受代理票证（并避免验证代理链的责任），但是经验表明很容易对此进行混淆并配置为无意中使用/ proxyValidate端点不仔细检查故障单验证响应中出现的任何代理链。因此，代理身份验证需要仔细配置以进行适当的安如果不需要代理身份验证，建议在CAS服务器上禁用代理身份验证组件。

过去，任何服务都可以获取代理授予票证，并从中获取代理票证以访问任何其他服务。换句话说，安全模型是分散的而不是集中的。服务管理设施通过暴露可以基于每个服务启用或禁用的代理验证标志来提供对代理验证的一些集中控制。默认情况下，注册服务未授予代理身份验证功能。

#### 多因素身份验证

CAS以两种模式之一提供对多因素身份验证的支持：全局和单服务。登录表单上总是需要多个凭证的全局情况很简单：修改用户界面以接受多个凭证，并将身份验证组件配置为要求成功验证所有提供的凭据。

单服务案例更有趣，更复杂：

* 必须建立凭证和凭证组的身份保证级别（LOA）。
* 必须根据服务建立安全策略与凭证LOA。
* 必须通过服务管理工具配置服务访问策略。

前两项任务至关重要，但超出了本文档的范围。通过服务管理工具应用服务访问策略是通过声明必须成功验证凭证以允许访问的验证处理程序来实现的;例如，LDAP身份验证处理程序和RSA SecureID身份验证处理程序。

由于多因素身份验证需要开发机构安全策略，高级组件配置（以及可能的自定义组件开发）和UI设计，因此应将其视为框架而非功能。有关配置问题和实施建议的详细讨论，请参阅多因素配置部分。

#### 凭据缓存和恢复

ClearPass扩展提供了一种机制，用于捕获主要身份验证凭据，对其进行缓存（加密），并根据需要恢复以访问旧服务。虽然建议使用代理身份验证代替密码重放，但可能需要将旧服务与CAS集成。有关详细信息，请参阅ClearPass文档。

#### 安全响应标头

作为CAS安全筛选器的一部分，CAS项目自动提供必要的配置，以将HTTP安全标头插入Web响应中，以防止HSTS，XSS，X-FRAME和其他攻击。默认情况下，这些设置目前处于关闭状态，可通过以下设置启用：

``` bash
# httpresponse.header.cache=false
# httpresponse.header.hsts=false
# httpresponse.header.xframe=false
# httpresponse.header.xcontent=false
# httpresponse.header.xss=false
```

要查看并了解有关这些选项的更多信息，请访问此[指南](https://github.com/apereo/cas-server-security-filter)。

## 高可用性指南(HA /群集)

高度可用的CAS部署是为了响应各种故障模式而提供弹性的部署，以便尽管出现故障，CAS仍继续提供SSO服务。我们提供推荐的体系结构，为规划和执行符合机构性能和可用性要求的CAS部署提供了一个起点。它还提供了一个框架，用于理解由HA考虑因素强加的CAS软件组件要求。

通过确保有足够的冗余来实现CAS的高可用性（HA）配置，以便在面对组件故障时服务是稳健的，并且可以在没有服务停机的情况下完成日常维护。这可以通过多节点实现，在较小程度上可以通过具有高级虚拟机功能的单节点CAS实现。本文档将重点介绍实现HA所需的CAS Server组件。对HA配置的更加定量的分析取决于支持基础设施和服务，超出了本文档的范围。

CAS服务器软件具有非常可靠的良好记录。但是，CAS服务器只是软件和硬件的一小部分，认证必须遍历才能顺利运行。集群通常使用集群，不仅用于负载处理，还用于故障转移。即使没有发生故障，有时也需要重新启动服务器。例如，如果安装了操作系统级别的严重安全修复程序，则应立即重新启动服务器。在CAS服务器集群中，即使在最繁忙的时间，也可以通过滚动重启轻松完成。

传统上操作单个服务器会延迟重启，直到较不繁忙的时间，同时运行已知漏洞。然而，最近随着虚拟机技术的日益接受及其固有的冗余和容错性，单节点CAS已经能够实现类似的质量。

### 推荐架构

下图突出显示了高可用CAS部署的重要方面。

[CAS集群架构](https://apereo.github.io/cas/4.2.x/images/recommended_ha_architecture.png)

值得指出这种架构的一些重要特征：

* 从属系统可以容忍多达N-1个节点故障。 （其中N是节点总数。）
* CAS本身可以容忍多达N-1个节点故障。
* 丢失缓存节点不会导致复制缓存中的SSO状态数据（即票据）丢失。
* 丢失缓存节点可能导致非复制缓存中的SSO状态数据丢失（例如，memcached）。
* SSO状态数据的丢失始终是优雅的：用户只需重新进行身份验证。

在详细讨论推荐架构的各个方面之前，我们提供了规划高可用性部署的指导原则：

``` text
追求简单
设计满足性能和可用性要求的最简单解决方案。
```

经验表明，简单性是成功和强大的HA部署的重要系统特征。力求简洁，您将获得良好的服务。