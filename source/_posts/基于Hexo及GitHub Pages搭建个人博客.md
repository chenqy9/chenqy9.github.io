---
title: 基于Hexo及GitHub Pages搭建个人博客
date: 2022-08-26
categories:
  - 教程文章
tags:
  - 博客
  - Hexo
  - GitHub Pages
  - Next
---

## Hexo

[Hexo](https://hexo.io/zh-cn/) 是一个基于JavaScript，快速、简洁且高效的开源博客框架，具有以下特点：

- **超快速度**
  Node.js 所带来的超快生成速度，让上百个页面在几秒内瞬间完成渲染。
- **支持 Markdown**
  Hexo 支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件。
- **一键部署**
  只需一条指令即可部署到 GitHub Pages, Heroku 或其他平台。
- **插件和可扩展性**
  强大的 API 带来无限的可能，与数种模板引擎（EJS，Pug，Nunjucks）和工具（Babel，PostCSS，Less/Sass）轻易集成

## Hexo vs Jekyll vs Hugo

[Hexo](https://hexo.io/zh-cn/)是基于JavaScript开发的开源博客框架，GitHub Stars 35.3K(截止2022-08-25)。
[Jekyll](https://github.com/jekyll/jekyll)是基于ruby开发的开源博客框架，GitHub Stars 45.2K(截止2022-08-25)。
[Hugo](https://github.com/gohugoio/hugo)是基于Go开发的开源博客框架，GitHub Stars 61.4K(截止2022-08-25)。

我选择Hexo的原因：

- 我是web前端开发工程师，对自己熟悉的JavaScript有好感
- Hexo的开发者是中国台湾人，资源和文档对中文支持好
- 配置上手简单

## 初始化博客

安装前提：

- [Node.js](https://nodejs.org/en/) (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
- [Git](https://git-scm.com/)

``` bash
# 1. 安装 Hexo
npm install -g hexo-cli

# 2. 初始化项目
hexo init hexo-demo

# 3. 安装依赖
cd hexo-demo
npm i

# 4. 启动本地服务，访问http://localhost:4000/
npm run server
```

## 配置博客

打开hexo的配置文件`_config.yml`，具体配置可参考[官方文档](https://hexo.io/docs/configuration.html)，下面是我的配置，给大家参考一下

<details>
  <summary>参考配置</summary>

``` yml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: 小王子星球
subtitle: '道虽迩，不行不至，<br>事虽小，不为不成。'
description: '一只热爱生活的程序猿'
keywords: '全栈，前端，后台，JavaScript，java，css3，html5，Linux，数据库'
author: 小王子
language: zh-CN
timezone: Asia/ShangHai

# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://chenqy9.github.io/
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''

# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 10
  order_by: -date

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Metadata elements
## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
meta_generator: true

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss
## updated_option supports 'mtime', 'date', 'empty'
updated_option: 'mtime'

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude:
ignore:

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next

search:
  path: search.xml
  field: post
  content: false
  format: html

# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: https://github.com/chenqy9/chenqy9.github.io.git
  branch: master
```

</details>

## 安装并配置NexT主题

Hexo的默认主题是landscape，其官方网站也提供了很多其他[主题](https://hexo.io/themes/)。我个人喜欢
[NexT](https://github.com/next-theme/hexo-theme-next)主题，下面展示一下主题的安装和配置。

``` bash
# 1. 通过npm安装主题
cd hexo-demo # 进入你的博客项目根目录
npm install hexo-theme-next # 安装主题

# 2. 修改_config.yml的主题配置项为next
# theme: next

# 3. 通过npm更新主题
npm install hexo-theme-next@latest
```

主题的配置文件为根目录的`_config.next.yml`，可以从`node_modules`拷贝一份官方默认配置到博客根目录，具体操作如下：

``` bash
# 复制默认配置到博客根目录
cp node_modules/hexo-theme-next/_config.yml _config.next.yml
```

具体的配置项可参考[官方文档](https://theme-next.js.org/docs/theme-settings/)，下面是我的配置给大家参考一下：

<details>
	<summary>参考配置</summary>

``` yml
# ===============================================================
# It's recommended to use Alternate Theme Config to configure NexT
# Modifying this file may result in merge conflict
# See: https://theme-next.js.org/docs/getting-started/configuration
# ===============================================================

# ---------------------------------------------------------------
# Theme Core Configuration Settings
# See: https://theme-next.js.org/docs/theme-settings/
# ---------------------------------------------------------------

# Allow to cache content generation.
cache:
  enable: true

# Remove unnecessary files after hexo generate.
minify: false

# Define custom file paths.
# Create your custom files in site directory `source/_data` and uncomment needed files below.
custom_file_path:
  #head: source/_data/head.njk
  #header: source/_data/header.njk
  #sidebar: source/_data/sidebar.njk
  #postMeta: source/_data/post-meta.njk
  #postBodyEnd: source/_data/post-body-end.njk
  #footer: source/_data/footer.njk
  #bodyEnd: source/_data/body-end.njk
  #variable: source/_data/variables.styl
  #mixin: source/_data/mixins.styl
  #style: source/_data/styles.styl


# ---------------------------------------------------------------
# Scheme Settings
# ---------------------------------------------------------------

# Schemes
# scheme: Muse
# scheme: Mist
# scheme: Pisces
scheme: Gemini

# Dark Mode
darkmode: true


# ---------------------------------------------------------------
# Site Information Settings
# ---------------------------------------------------------------

favicon:
  small: /images/favicon-16x16.png
  medium: /images/favicon-32x32.png
  apple_touch_icon: /images/apple-touch-icon.png
  safari_pinned_tab: /images/safari-pinned-tab
  #android_manifest: /manifest.json

# Custom Logo (Warning: Do not support scheme Mist)
custom_logo: /uploads/logo.jpeg

# Creative Commons 4.0 International License.
# See: https://creativecommons.org/about/cclicenses/
creative_commons:
  # Available values: by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | cc-zero
  license: by-nc-sa
  # Available values: big | small
  size: small
  sidebar: false
  post: false
  # You can set a language value if you prefer a translated version of CC license, e.g. deed.zh
  # CC licenses are available in 39 languages, you can find the specific and correct abbreviation you need on https://creativecommons.org
  language:

# Open graph settings
# See: https://hexo.io/docs/helpers#open-graph
open_graph:
  enable: true
  options:
    #twitter_card: <twitter:card>
    #twitter_id: <twitter:creator>
    #twitter_site: <twitter:site>
    #twitter_image: <twitter:image>
    #google_plus: <g+:profile_link>
    #fb_admins: <fb:admin_id>
    #fb_app_id: <fb:app_id>


# ---------------------------------------------------------------
# Menu Settings
# ---------------------------------------------------------------

# Usage: `Key: /link/ || icon`
# Key is the name of menu item. If the translation for this item is available, the translated text will be loaded, otherwise the Key name will be used. Key is case-sensitive.
# Value before `||` delimiter is the target link, value after `||` delimiter is the name of Font Awesome icon.
# External url should start with http:// or https://
menu:
  home: / || fa fa-home
  # about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
  # schedule: /schedule/ || fa fa-calendar
  # sitemap: /sitemap.xml || fa fa-sitemap
  # commonweal: /404/ || fa fa-heartbeat

# Enable / Disable menu icons / item badges.
menu_settings:
  icons: true
  badges: true


# ---------------------------------------------------------------
# Sidebar Settings
# See: https://theme-next.js.org/docs/theme-settings/sidebar
# ---------------------------------------------------------------

sidebar:
  # Sidebar Position.
  position: left
  #position: right

  # Manual define the sidebar width. If commented, will be default for:
  # Muse | Mist: 320
  # Pisces | Gemini: 240
  #width: 300

  # Sidebar Display (only for Muse | Mist), available values:
  #  - post    expand on posts automatically. Default.
  #  - always  expand for all pages automatically.
  #  - hide    expand only when click on the sidebar toggle icon.
  #  - remove  totally remove sidebar including sidebar toggle.
  display: post

  # Sidebar padding in pixels.
  padding: 18
  # Sidebar offset from top menubar in pixels (only for Pisces | Gemini).
  offset: 12

# Sidebar Avatar
avatar:
  # Replace the default image and set the url here.
  url: #/images/avatar.gif
  # If true, the avatar will be displayed in circle.
  rounded: false
  # If true, the avatar will be rotated with the cursor.
  rotated: false

# Posts / Categories / Tags in sidebar.
site_state: false

# Social Links
# Usage: `Key: permalink || icon`
# Key is the link label showing to end users.
# Value before `||` delimiter is the target permalink, value after `||` delimiter is the name of Font Awesome icon.
social:
  GitHub: https://github.com/chenqy9 || fab fa-github
  E-Mail: mailto:chenqy9@foxmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  #Twitter: https://twitter.com/yourname || fab fa-twitter
  #FB Page: https://www.facebook.com/yourname || fab fa-facebook
  #StackOverflow: https://stackoverflow.com/yourname || fab fa-stack-overflow
  #YouTube: https://youtube.com/yourname || fab fa-youtube
  #Instagram: https://instagram.com/yourname || fab fa-instagram
  #Skype: skype:yourname?call|chat || fab fa-skype

social_icons:
  enable: true
  icons_only: false
  transition: false

# Blog rolls
links_settings:
  icon: fa fa-globe
  title: Links
  # Available values: block | inline
  layout: block

links:
  #Title: https://example.com

# Table of Contents in the Sidebar
# Front-matter variable (nonsupport wrap expand_all).
toc:
  enable: true
  # Automatically add list number to toc.
  number: true
  # If true, all words will placed on next lines if header width longer then sidebar width.
  wrap: false
  # If true, all level of TOC in a post will be displayed, rather than the activated part of it.
  expand_all: false
  # Maximum heading depth of generated toc.
  max_depth: 6


# ---------------------------------------------------------------
# Footer Settings
# See: https://theme-next.js.org/docs/theme-settings/footer
# ---------------------------------------------------------------

# Show multilingual switcher in footer.
language_switcher: false

footer:
  # Specify the year when the site was setup. If not defined, current year will be used.
  #since: 2021

  # Icon between year and copyright info.
  icon:
    # Icon name in Font Awesome. See: https://fontawesome.com/icons
    name: fa fa-heart
    # If you want to animate the icon, set it to true.
    animated: false
    # Change the color of icon, using Hex Code.
    color: "#ff0000"

  # If not defined, `author` from Hexo `_config.yml` will be used.
  copyright:

  # Powered by Hexo & NexT
  powered: false

  # Beian ICP and gongan information for Chinese users. See: https://beian.miit.gov.cn, http://www.beian.gov.cn
  beian:
    enable: false
    icp:
    # The digit in the num of gongan beian.
    gongan_id:
    # The full num of gongan beian.
    gongan_num:
    # The icon for gongan beian. See: http://www.beian.gov.cn/portal/download
    gongan_icon_url:


# ---------------------------------------------------------------
# Post Settings
# See: https://theme-next.js.org/docs/theme-settings/posts
# ---------------------------------------------------------------

# Automatically excerpt description in homepage as preamble text.
excerpt_description: true

# Read more button
# If true, the read more button will be displayed in excerpt section.
read_more_btn: true

# Post meta display settings
post_meta:
  item_text: true
  created_at: true
  updated_at:
    enable: true
    another_day: true
  categories: true

# Post wordcount display settings
# Dependencies: https://github.com/next-theme/hexo-word-counter
symbols_count_time:
  separated_meta: true
  item_text_total: false

# Use icon instead of the symbol # to indicate the tag at the bottom of the post
tag_icon: false

# Donate (Sponsor) settings
# Front-matter variable (nonsupport animation).
reward_settings:
  # If true, a donate button will be displayed in every article by default.
  enable: false
  animation: false
  #comment: Buy me a coffee

reward:
  #wechatpay: /images/wechatpay.png
  #alipay: /images/alipay.png
  #paypal: /images/paypal.png
  #bitcoin: /images/bitcoin.png

# Subscribe through Telegram Channel, Twitter, etc.
# Usage: `Key: permalink || icon` (Font Awesome)
follow_me:
  #Twitter: https://twitter.com/username || fab fa-twitter
  #Telegram: https://t.me/channel_name || fab fa-telegram
  #WeChat: /images/wechat_channel.jpg || fab fa-weixin
  #RSS: /atom.xml || fa fa-rss

# Related popular posts
# Dependencies: https://github.com/sergeyzwezdin/hexo-related-posts
related_posts:
  enable: false
  title: # Custom header, leave empty to use the default one
  display_in_home: false

# Post edit
# Easily browse and edit blog source code online.
post_edit:
  enable: false
  url: https://github.com/user-name/repo-name/tree/branch-name/subdirectory-name/ # Link for view source
  #url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/ # Link for fork & edit

# Show previous post and next post in post footer if exists
# Available values: left | right | false
post_navigation: left


# ---------------------------------------------------------------
# Custom Page Settings
# See: https://theme-next.js.org/docs/theme-settings/custom-pages
# ---------------------------------------------------------------

# TagCloud settings for tags page.
tagcloud:
  min: 12 # Minimum font size in px
  max: 30 # Maximum font size in px
  amount: 200 # Total amount of tags
  orderby: name # Order of tags
  order: 1 # Sort order

# Google Calendar
# Share your recent schedule to others via calendar page.
calendar:
  calendar_id: <required> # Your Google account E-Mail
  api_key: <required>
  orderBy: startTime
  showLocation: false
  offsetMax: 72 # Time Range
  offsetMin: 4 # Time Range
  showDeleted: false
  singleEvents: true
  maxResults: 250


# ---------------------------------------------------------------
# Misc Theme Settings
# See: https://theme-next.js.org/docs/theme-settings/miscellaneous
# ---------------------------------------------------------------

# Preconnect CDN for fonts and plugins.
# For more information: https://www.w3.org/TR/resource-hints/#preconnect
preconnect: false

# Set the text alignment in posts / pages.
text_align:
  # Available values: start | end | left | right | center | justify | justify-all | match-parent
  desktop: justify
  mobile: justify

# Reduce padding / margin indents on devices with narrow width.
mobile_layout_economy: true

# Browser header panel color.
theme_color:
  light: "#222"
  dark: "#222"

# Override browsers' default behavior.
body_scrollbar:
  # Place the scrollbar over the content.
  overlay: false
  # Present the scrollbar even if the content is not overflowing.
  stable: false

codeblock:
  # Code Highlight theme
  # All available themes: https://theme-next.js.org/highlight/
  theme:
    light: default
    dark: stackoverflow-dark
  prism:
    light: prism
    dark: prism-dark
  # Add copy button on codeblock
  copy_button:
    enable: false
    # Available values: default | flat | mac
    style:

back2top:
  enable: true
  # Back to top in sidebar.
  sidebar: false
  # Scroll percent label in b2t button.
  scrollpercent: false

# Reading progress bar
reading_progress:
  enable: true
  # Available values: left | right
  start_at: left
  # Available values: top | bottom
  position: top
  reversed: false
  color: "#37c6c0"
  height: 3px

# Bookmark Support
bookmark:
  enable: false
  # Customize the color of the bookmark.
  color: "#222"
  # If auto, save the reading progress when closing the page or clicking the bookmark-icon.
  # If manual, only save it by clicking the bookmark-icon.
  save: auto

# `Follow me on GitHub` banner in the top-right corner.
github_banner:
  enable: true
  permalink: https://github.com/chenqy9
  title: Follow me on GitHub


# ---------------------------------------------------------------
# Font Settings
# ---------------------------------------------------------------
# Find fonts on Google Fonts (https://fonts.google.com)
# All fonts set here will have the following styles:
#   light | light italic | normal | normal italic | bold | bold italic
# Be aware that setting too much fonts will cause site running slowly
# ---------------------------------------------------------------
# Web Safe fonts are recommended for `global` (and `title`):
# Arial | Tahoma | Helvetica | Times New Roman | Courier New | Verdana | Georgia | Palatino | Garamond | Comic Sans MS | Trebuchet MS
# ---------------------------------------------------------------

font:
  enable: false

  # Uri of fonts host, e.g. https://fonts.googleapis.com (Default).
  host:

  # Font options:
  # `external: true` will load this font family from `host` above.
  # `family: Times New Roman`. Without any quotes.
  # `size: x.x`. Use `em` as unit. Default: 1 (16px)

  # Global font settings used for all elements inside <body>.
  global:
    external: true
    family: Lato
    size:

  # Font settings for site title (.site-title).
  title:
    external: true
    family:
    size:

  # Font settings for headlines (<h1> to <h6>).
  headings:
    external: true
    family:
    size:

  # Font settings for posts (.post-body).
  posts:
    external: true
    family:

  # Font settings for <code> and code blocks.
  codes:
    external: true
    family:


# ---------------------------------------------------------------
# SEO Settings
# See: https://theme-next.js.org/docs/theme-settings/seo
# ---------------------------------------------------------------

# If true, site-subtitle will be added to index page.
# Remember to set up your site-subtitle in Hexo `_config.yml` (e.g. subtitle: Subtitle)
index_with_subtitle: false

# Automatically add external URL with Base64 encrypt & decrypt.
exturl: false
# If true, an icon will be attached to each external URL
exturl_icon: true

# Google Webmaster tools verification.
# See: https://developers.google.com/search
google_site_verification:

# Bing Webmaster tools verification.
# See: https://www.bing.com/webmasters
bing_site_verification:

# Yandex Webmaster tools verification.
# See: https://webmaster.yandex.ru
yandex_site_verification:

# Baidu Webmaster tools verification.
# See: https://ziyuan.baidu.com/site
baidu_site_verification:


# ---------------------------------------------------------------
# Third Party Plugins & Services Settings
# See: https://theme-next.js.org/docs/third-party-services/
# More plugins: https://github.com/next-theme/awesome-next
# You may need to install the corresponding dependency packages
# ---------------------------------------------------------------

# Math Formulas Render Support
# Warning: Please install / uninstall the relevant renderer according to the documentation.
# See: https://theme-next.js.org/docs/third-party-services/math-equations
# Server-side plugin: https://github.com/next-theme/hexo-filter-mathjax
math:
  # Default (false) will load mathjax / katex script on demand.
  # That is it only render those page which has `mathjax: true` in front-matter.
  # If you set it to true, it will load mathjax / katex script EVERY PAGE.
  every_page: false

  mathjax:
    enable: false
    # Available values: none | ams | all
    tags: none

  katex:
    enable: false
    # See: https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex
    copy_tex: false

# Easily enable fast Ajax navigation on your website.
# For more information: https://github.com/next-theme/pjax
pjax: false

# FancyBox is a tool that offers a nice and elegant way to add zooming functionality for images.
# For more information: https://fancyapps.com/fancybox/
fancybox: false

# A JavaScript library for zooming images like Medium.
# Warning: Do not enable both `fancybox` and `mediumzoom`.
# For more information: https://medium-zoom.francoischalifour.com
mediumzoom: false

# Vanilla JavaScript plugin for lazyloading images.
# For more information: https://apoorv.pro/lozad.js/demo/
lazyload: false

# Pangu Support
# For more information: https://github.com/vinta/pangu.js
# Server-side plugin: https://github.com/next-theme/hexo-pangu
pangu: false

# Quicklink Support
# For more information: https://getquick.link
# Front-matter variable (nonsupport home archive).
quicklink:
  enable: false

  # Home page and archive page can be controlled through home and archive options below.
  # This configuration item is independent of `enable`.
  home: false
  archive: false

  # Default (true) will initialize quicklink after the load event fires.
  delay: true
  # Custom a time in milliseconds by which the browser must execute prefetching.
  timeout: 3000
  # Default (true) will attempt to use the fetch() API if supported (rather than link[rel=prefetch]).
  priority: true


# ---------------------------------------------------------------
# Comments Settings
# See: https://theme-next.js.org/docs/third-party-services/comments
# ---------------------------------------------------------------

# Multiple Comment System Support
comments:
  # Available values: tabs | buttons
  style: tabs
  # Choose a comment system to be displayed by default.
  # Available values: disqus | disqusjs | changyan | livere | gitalk | utterances
  active:
  # Setting `true` means remembering the comment system selected by the visitor.
  storage: true
  # Lazyload all comment systems.
  lazyload: false
  # Modify texts or order for any naves, here are some examples.
  nav:
    #disqus:
    #  text: Load Disqus
    #  order: -1
    #gitalk:
    #  order: -2

# Disqus
# For more information: https://disqus.com
disqus:
  enable: false
  shortname:
  count: true

# DisqusJS
# For more information: https://disqusjs.skk.moe
disqusjs:
  enable: false
  # API Endpoint of Disqus API (https://disqus.com/api/docs/).
  # Leave api empty if you are able to connect to Disqus API. Otherwise you need a reverse proxy for it.
  # For example:
  # api: https://disqus.skk.moe/disqus/
  api:
  apikey: # Register new application from https://disqus.com/api/applications/
  shortname: # See: https://disqus.com/admin/settings/general/

# Changyan
# For more information: https://changyan.kuaizhan.com
changyan:
  enable: false
  appid:
  appkey:

# LiveRe comments system
# You can get your uid from https://livere.com/insight/myCode (General web site)
livere_uid: # <your_uid>

# Gitalk
# For more information: https://gitalk.github.io
gitalk:
  enable: false
  github_id: # GitHub repo owner
  repo: # Repository name to store issues
  client_id: # GitHub Application Client ID
  client_secret: # GitHub Application Client Secret
  admin_user: # GitHub repo owner and collaborators, only these guys can initialize gitHub issues
  distraction_free_mode: true # Facebook-like distraction free mode
  # When the official proxy is not available, you can change it to your own proxy address
  proxy: https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token # This is official proxy address
  # Gitalk's display language depends on user's browser or system environment
  # If you want everyone visiting your site to see a uniform language, you can set a force language value
  # Available values: en | es-ES | fr | ru | zh-CN | zh-TW
  language:

# Utterances
# For more information: https://utteranc.es
utterances:
  enable: false
  repo: user-name/repo-name # Github repository owner and name
  # Available values: pathname | url | title | og:title
  issue_term: pathname
  # Available values: github-light | github-dark | preferred-color-scheme | github-dark-orange | icy-dark | dark-blue | photon-dark | boxy-light
  theme: github-light

# Isso
# For more information: https://posativ.org/isso/
isso: # <data_isso>


# ---------------------------------------------------------------
# Post Widgets & Content Sharing Services
# See: https://theme-next.js.org/docs/third-party-services/post-widgets
# ---------------------------------------------------------------

# Star rating support to each article.
# To get your ID visit https://widgetpack.com
rating:
  enable: false
  id:     # <app_id>
  color:  "#fc6423"

# AddThis Share. See: https://www.addthis.com
# Go to https://www.addthis.com/dashboard to customize your tools.
add_this_id:


# ---------------------------------------------------------------
# Statistics and Analytics
# See: https://theme-next.js.org/docs/third-party-services/statistics-and-analytics
# ---------------------------------------------------------------

# Google Analytics
# See: https://analytics.google.com
google_analytics:
  tracking_id: # <app_id>
  # By default, NexT will load an external gtag.js script on your site.
  # If you only need the pageview feature, set the following option to true to get a better performance.
  only_pageview: false

# Baidu Analytics
# See: https://tongji.baidu.com
baidu_analytics: # <app_id>

# Growingio Analytics
# See: https://www.growingio.com
growingio_analytics: # <project_id>

# Cloudflare Web Analytics
# See: https://www.cloudflare.com/web-analytics/
cloudflare_analytics:

# Microsoft Clarity Analytics
# See: https://clarity.microsoft.com/
clarity_analytics: # <project_id>

# Show number of visitors of each article.
# You can visit https://www.leancloud.cn to get AppID and AppKey.
leancloud_visitors:
  enable: false
  app_id: # <your app id>
  app_key: # <your app key>
  # Required for apps from CN region
  server_url: # <your server url>
  # Dependencies: https://github.com/theme-next/hexo-leancloud-counter-security
  # If you don't care about security in leancloud counter and just want to use it directly
  # (without hexo-leancloud-counter-security plugin), set `security` to `false`.
  security: true

# Another tool to show number of visitors to each article.
# Visit https://console.firebase.google.com/u/0/ to get apiKey and projectId.
# Visit https://firebase.google.com/docs/firestore/ to get more information about firestore.
firestore:
  enable: false
  collection: articles # Required, a string collection name to access firestore database
  apiKey: # Required
  projectId: # Required

# Show Views / Visitors of the website / page with busuanzi.
# For more information: http://ibruce.info/2015/04/04/busuanzi/
busuanzi_count:
  enable: false
  total_visitors: true
  total_visitors_icon: fa fa-user
  total_views: true
  total_views_icon: fa fa-eye
  post_views: true
  post_views_icon: far fa-eye


# ---------------------------------------------------------------
# Search Services
# See: https://theme-next.js.org/docs/third-party-services/search-services
# ---------------------------------------------------------------

# Algolia Search
# For more information: https://www.algolia.com
algolia_search:
  enable: false
  hits:
    per_page: 10

# Local Search
# Dependencies: https://github.com/next-theme/hexo-generator-searchdb
local_search:
  enable: true
  # If auto, trigger search by changing input.
  # If manual, trigger search by pressing enter key or search button.
  trigger: auto
  # Show top n results per article, show all results by setting to -1
  top_n_per_article: -1
  # Unescape html strings to the readable one.
  unescape: false
  # Preload the search data when the page loads.
  preload: false


# ---------------------------------------------------------------
# Chat Services
# See: https://theme-next.js.org/docs/third-party-services/chat-services
# ---------------------------------------------------------------

# A button to open designated chat widget in sidebar.
# Firstly, you need to enable and configure the chat service.
chat:
  enable: false
  icon: fa fa-comment # Icon name in Font Awesome, set false to disable icon.
  text: Chat # Button text, change it as you wish.

# Chatra Support
# For more information: https://chatra.com
# Dashboard: https://app.chatra.io/settings/general
chatra:
  enable: false
  async: true
  id: # Visit Dashboard to get your ChatraID
  #embed: # Unfinished experimental feature for developers. See: https://chatra.com/help/api/#injectto

# Tidio Support
# For more information: https://www.tidio.com
# Dashboard: https://www.tidio.com/panel/dashboard
tidio:
  enable: false
  key: # Public Key, get it from dashboard. See: https://www.tidio.com/panel/settings/developer

# Gitter Support
# For more information: https://gitter.im
gitter:
  enable: false
  room:


# ---------------------------------------------------------------
# Tags Settings
# See: https://theme-next.js.org/docs/tag-plugins/
# ---------------------------------------------------------------

# Note tag (bootstrap callout)
note:
  # Note tag style values:
  #  - simple    bootstrap callout old alert style. Default.
  #  - modern    bootstrap callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0

# Tabs tag
tabs:
  # Make the nav bar of tabs with long content stick to the top.
  sticky: false
  transition:
    tabs: false
    labels: true

# PDF tag
# NexT will try to load pdf files natively, if failed, pdf.js will be used.
# So, you have to install the dependency of pdf.js if you want to use pdf tag and make it available to all browsers.
# Dependencies: https://github.com/next-theme/theme-next-pdf
pdf:
  enable: false
  # Default height
  height: 500px

# Mermaid tag
mermaid:
  enable: false
  # Available themes: default | dark | forest | neutral
  theme:
    light: default
    dark: dark


# ---------------------------------------------------------------
# Animation Settings
# ---------------------------------------------------------------

# Use Animate.css to animate everything.
# For more information: https://animate.style
motion:
  enable: true
  async: false
  transition:
    # All available transition variants: https://theme-next.js.org/animate/
    post_block: fadeIn
    post_header: fadeInDown
    post_body: fadeInDown
    coll_header: fadeInLeft
    # Only for Pisces | Gemini.
    sidebar: fadeInUp

# Progress bar in the top during page loading.
# For more information: https://github.com/CodeByZach/pace
pace:
  enable: false
  # All available colors:
  # black | blue | green | orange | pink | purple | red | silver | white | yellow
  color: blue
  # All available themes:
  # big-counter | bounce | barber-shop | center-atom | center-circle | center-radar | center-simple
  # corner-indicator | fill-left | flat-top | flash | loading-bar | mac-osx | material | minimal
  theme: minimal

# Canvas ribbon
# For more information: https://github.com/hustcc/ribbon.js
canvas_ribbon:
  enable: false
  size: 300 # The width of the ribbon
  alpha: 0.6 # The transparency of the ribbon
  zIndex: -1 # The display level of the ribbon


# ---------------------------------------------------------------
# CDN Settings
# See: https://theme-next.js.org/docs/advanced-settings/vendors
# ---------------------------------------------------------------

vendors:
  # The CDN provider of NexT internal scripts.
  # Available values: local | jsdelivr | unpkg | cdnjs | custom
  # Warning: If you are using the latest master branch of NexT, please set `internal: local`
  internal: local
  # The default CDN provider of third-party plugins.
  # Available values: local | jsdelivr | unpkg | cdnjs | custom
  # Dependencies for `plugins: local`: https://github.com/next-theme/plugins
  plugins: cdnjs
  # Custom CDN URL
  # For example:
  # custom_cdn_url: https://cdn.jsdelivr.net/npm/${npm_name}@${version}/${minified}
  # custom_cdn_url: https://cdnjs.cloudflare.com/ajax/libs/${cdnjs_name}/${version}/${cdnjs_file}
  custom_cdn_url:

# Assets
# Accelerate delivery of static files using a CDN
# The js option is only valid when vendors.internal is local.
css: css
js: js
images: images

```

</details>

## 撰写第一篇博客

配置好我们的博客之后，就可以开始基于markdown写博客文章啦，具体操作如下：  

``` bash
# 通过hexo命令创建博文
hexo new post hello-world
```

其创建的文件如下：

``` markdown
---
title: hello-world
date: 2022-08-26 18:16:52
tags:
---

```

头部是博文的信息，可以添加分类和标签，如：

``` markdown
---
title: hello-world
date: 2022-08-26 18:16:52
categories
 - 测试
tags:
 - helloworld
---
这里是正文
```

## 发布博客到Github Pages

完成以上配置，写好我们的博文，接下来就是发布托管到GitHub Pages啦～

### 创建仓库

1. 创建一个仓库  
   前往[GitHUb](https://github.com/)创建一个新的仓库，仓库名称为**username.github.io**，其中 **username**是你的 GitHub 用户名或者组织名称。

2. 克隆仓库  
   把步骤一创建的仓库克隆到本地。

   ```bash
   git clone https://github.com/username/username.github.io
   ```

3. 创建第一个页面  
   进入项目目录，新建一个 index.html 的文件。

   ```bash
   cd username.github.io
   echo "Hello World" > index.html
   ```

4. 推送到远程仓库  
   增加、提交和推送你的更改

   ```bash
   git add --all
   git commit -m "初始提交"
   git push -u origin master
   ```

5. 你已经成功完成  
   访问[https://username.github.io_](https://username.github.io)查看效果

### 部署博客

1. 首先从上面的仓库中创建一个新的分支，用来写博客：

``` bash
# username.github.io根目录
git checkout -b blog
```

2. 将我们上面创建的博客项目复制到仓库

``` bash
cp -r hexo-demo/** username.github.io
```

3. 修改博客配置文件中的部署配置

``` yml
# _config.yml配置文件
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: master
```

4. 提交变更并发布

``` bash
# 提交blog分支的变更
git add .
git commit -m "更新博客"
git push --set-upstream origin blog

# 安装依赖
npm install hexo-deployer-git

# 执行部署
npm run deploy
```

完成上面的操作之后，我们就可以在https://username.github.io看到我们的博客啦～

## 增加本地搜索功能

`NexT`主题支持[搜索配置](https://theme-next.js.org/docs/third-party-services/search-services)，一种是基于第三方服务`Algolia`的搜索，一种是不需要依赖第三方服务的本地搜索。这里我选择了更简单和通用的本地搜索，配置如下：

1. 安装依赖，该依赖并不是直接搜索的依赖，而是帮你生成搜索索引文件：

``` bash
npm install hexo-generator-searchdb
```

2. 修改博客配置文件`_config.yml`的搜索配置项，上面安装的插件基于该配置生成索引文件：

``` yml
search:
  path: search.xml
  field: post
  # 这里选择false，只基于标题进行搜索
  content: false
  format: html
```

3. 修改主题配置文件`_config.next.yml`的搜索配置项，这里配置的是搜索UI组件：

``` yml
# Local Search
# Dependencies: https://github.com/next-theme/hexo-generator-searchdb
local_search:
  enable: true
  # If auto, trigger search by changing input.
  # If manual, trigger search by pressing enter key or search button.
  trigger: auto
  # Show top n results per article, show all results by setting to -1
  top_n_per_article: -1
  # Unescape html strings to the readable one.
  unescape: false
  # Preload the search data when the page loads.
  preload: false
```

## 参考项目

[hexo-demo](https://github.com/chenqy9/hexo-demo)
