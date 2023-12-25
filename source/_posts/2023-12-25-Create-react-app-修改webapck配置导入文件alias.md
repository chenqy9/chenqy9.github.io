---
title: Create react app 修改webapck配置导入文件alias
categories:
  - 技术文档
date: 2023-12-25 14:00:21
tags:
---

create react app
create-react-app是 react 的官方项目脚手架，可以帮我们快速的搭建一个 react 项目。了解 vue 的同学应该知道，vue的官方脚手架是默认支持@到src的绝对路径引用，可以优雅高效的引用其它模块，特别是跨目录，深嵌套的引用。而且vue把webpack的配置文件暴露出来，可以很方便的对webapck进行个性化的配置修改。相比之下，create react app生成的项目，默认还是用相对路径的引入，而且把webpack的配置深度集成到脚本里面，如果需要个性化的修改配置，只能通过react-scripts eject来导出wenpack配置，而且修改之后就只能自己维护了，一些我们不需要修改的react官方默认配置可能就会丢失。我们可以通过以下两个插件来优雅的修改create react app生成的项目配置，以修改导入路径alias为例说明。

react app rewired
react-app-rewired

安装插件
npm install react-app-rewired --save-dev
创建 config-overrides.js
/* config-overrides.js */

const path = require('path');

module.exports = {
  webpack: function(config, env) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  jest: function(config) {
    const {
      moduleNameMapper = {},
    } = config;
    config.moduleNameMapper = {
      ...moduleNameMapper,
      '^@/(.*)$': '<rootDir>/src/$1',
    };
    return config;
  }
}
修改 react-scripts 的默认npm脚本
/* package.json */

"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
   "eject": "react-scripts eject"
}
@craco/craco
@craco/craco

安装
npm i -D @craco/craco
创建 craco-config.js 文件
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.alias['@'] = path.resolve(__dirname, 'src');
      return webpackConfig;
    },
  },
  jest: {
    configure: (jestConfig) => {
      const {
        moduleNameMapper = {},
      } = jestConfig;
      jestConfig.moduleNameMapper = {
        ...moduleNameMapper,
        '^@/(.*)$': '<rootDir>/src/$1',
      };
      return jestConfig;
    },
  }
};
修改 react-scripts 的默认npm脚本
/* package.json */

"scripts": {
   "start": "craco start",
   "build": "craco build",
   "test": "craco test",
   "eject": "react-scripts eject"
}
总结
我们可以通过 react-app-rewired 和 @craco/craco 两个插件优雅的修改 create-react-app 生成的项目配置。两个插件的使用方法都差不多，也都可以实现我们的需求，至于使用哪一个见仁见智。我建议是用@craco/craco，比较新，react-app-rewired最后的更新已经是两年前了。

