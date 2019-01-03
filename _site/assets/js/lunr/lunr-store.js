var store = [{
        "title": "基于Jekyll和GitHub Pages搭建个人博客",
        "excerpt":"本文介绍如何利用Jekyll创建一个静态站点，并托管到GitHub Pages上。 JeKyll JeKyll是一个基于Ruby的博客类静态网站生成器。 Jekyll是一个简单，可扩展的静态站点生成器。您可以使用自己喜欢的标记语言编写文本，然后通过布局来创建静态网站。在整个过程中，您可以调整网站URL的显示方式，布局中显示的数据等 基于JeKyll创建静态网站 安装Ruby开发环境 (以macOS 为例) macOS Mojave 10.14 可省略以下安装步骤 1.1 安装Homebrew和Ruby # Install Homebrew /usr/bin/ruby -e \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)\" brew install ruby 1.2 导出Ruby环境变量 echo 'export PATH=/usr/local/opt/ruby/bin:$PATH' &gt;&gt; ~/.zshrc 1.3 检查Ruby是否安装成功 which ruby /usr/local/opt/ruby/bin/ruby ruby -v ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-darwin18] 安装打包器和jekyll gem install --user-install...","categories": ["文章教程"],
        "tags": ["博客","Jekyll","GitHub Pages","markdown"],
        "url": "https://chenqy9.github.io/%E6%96%87%E7%AB%A0%E6%95%99%E7%A8%8B/build-blog-with-jekyll-and-github-pages/",
        "teaser":null},{
        "title": "CAS入门",
        "excerpt":"企业单点登录 - CAS提供友好的开源社区，积极支持并为项目做出贡献。虽然该项目植根于高级开放源代码，但它已发展成为跨越财富500强企业和小型专用设备的国际受众。 CAS为Web提供企业单点登录服务： 开放且文档齐全的协议开源 Java服务器组件 可插入的身份验证支持（LDAP，数据库，X.509,2-factor） 支持多种协议（CAS，SAML） ，OAuth，OpenID）Java，.Net，PHP，Perl，Apache，uPortal和其他 客户端库集成了uPortal，BlueSocket，TikiWiki，Mule，Liferay，Moodle等 社区文档和实现支持广泛的采用者社区 资源链接 官方网站 官方文档 GitHub 架构 CAS服务器 CAS服务器是基于Spring Framework构建的Java servlet，其主要职责是通过颁发和验证票证来对用户进行身份验证并授予对启用CAS的服务（通常称为CAS客户端）的访问权限。当服务器在成功登录后向用户发出票证授予票证（TGT）时，将创建SSO会话。使用TGT作为令牌，通过浏览器重定向，根据用户的请求向服务发出服务票据（ST）。随后通过反向信道通信在CAS服务器上验证ST。 CAS客户端 术语“CAS客户端”在其通用使用中具有两个不同的含义。 CAS客户端是任何启用CAS的应用程序，可以通过支持的协议与服务器通信。 CAS客户端也是可以与各种软件平台和应用程序集成的软件包，以便通过某种认证协议（例如CAS，SAML，OAuth）与CAS服务器通信。已经开发了支持许多软件平台和产品的CAS客户。 平台： Apache httpd Server (mod_auth_cas module) Java (Java CAS Client) .NET (.NET CAS Client) PHP (phpCAS) Perl (PerlCAS) Python (pycas) Ruby (rubycas-client) 应用： Outlook Web Application...","categories": ["技术文档"],
        "tags": ["CAS","单点登录","入门"],
        "url": "https://chenqy9.github.io/%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/learn-about-cas/",
        "teaser":null},{
        "title": "CAS安装",
        "excerpt":"CAS安装是一个基本的面向源的过程，我们建议使用WAR overlay项目来组织自定义，例如组件配置和UI设计。 WAR覆盖构建的输出是一个cas.war文件，可以部署在像Tomcat这样的Java servlet容器上。   WAR overlay项目提供参考和研究。   Gradle      CAS Gradle Overlay   Maven      CAS Maven Overlay   CAS使用Spring Webflow以模块化和可配置的方式驱动登录过程; login-webflow.xml文件包含流中状态和转换的简单描述。自定义此文件可能是Spring XML配置文件中除组件配置之外最常见的配置问题。有关各种CAS流程的详细说明以及常见配置点的讨论，请参见“Spring Webflow自定义指南”。   Spring 配置   CAS服务器在很大程度上依赖于Spring框架。 spring-configuration目录下有精确和特定的XML配置文件，用于控制CAS的各种属性以及cas-servlet.xml和deployerConfigContext.xml，后者主要是CAS采用者希望将其包含在环境覆盖中 - 特定的CAS设置。   如果需要通过Maven覆盖过程，可以覆盖XML配置文件中的Spring bean以更改行为。有两种方法：           XML文件可以从CAS版本的源获得，并在Maven重叠版本中以相同的名称放置在相同的确切路径上。如果配置正确，则构建将使用本地提供的XML文件而不是默认值。            CAS服务器能够加载XML配置文件的模式以覆盖默认提供的内容。打算否决CAS默认行为的这些配置文件可以放在/ WEB-INF /中，并且必须使用以下模式命名：cas-servlet - * .xml。放在此文件中的Bean将覆盖其他文件。      ","categories": ["技术文档"],
        "tags": ["CAS","单点登录","安装"],
        "url": "https://chenqy9.github.io/%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/cas-install/",
        "teaser":null},{
        "title": "Linux离线安装node",
        "excerpt":"本文介绍如何在Linux 64位系统上通过二进制压缩文件离线安装安装node。 1、 到官网下载安装包，并scp上传到目标服务器。 scp -r ~/Downloads/node-v10.15.0-linux-x64.tar.xz user@host:path 2、将二进制存档解压缩到您要安装Node的任何目录，我使用/usr/ local/lib/nodejs VERSION=v10.15.0 DISTRO=linux-x64 sudo mkdir /usr/local/lib/nodejs sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs sudo mv /usr/local/lib/nodejs/node-$VERSION-$DISTRO /usr/local/lib/nodejs/node-$VERSION 3、设置环境变量vim /etc/profile，将下面\b代码添加到文件最后 # Nodejs export NODEJS_HOME=/usr/local/lib/nodejs/node-$VERSION/bin export PATH=$NODEJS_HOME:$PATH 4、刷新文件配置 . /etc/profile 5、测试安装 node -v npm version npx -v 正常输出是： node -v v10.15.0 npm version {...","categories": ["技术文档"],
        "tags": ["node","linux"],
        "url": "https://chenqy9.github.io/%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/linux-node-install/",
        "teaser":null}]
