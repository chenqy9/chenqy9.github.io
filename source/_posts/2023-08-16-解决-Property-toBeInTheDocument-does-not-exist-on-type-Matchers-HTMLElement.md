---
title: 解决 Property 'toBeInTheDocument' does not exist on type 'Matchers<HTMLElement>'
categories:
  - 问题技巧
tags:
  - pnpm
  - react
  - create-react-app
  - typescript
date: 2023-08-16 17:19:54
---

## 问题描述

用`pnpm`安装`create-react-app`创建的`typescript`模板应用依赖，执行`pnpm run start`会出现错误`Property 'toBeInTheDocument' does not exist on type 'Matchers<HTMLElement>'`。  

``` bash
pnpm dlx create-react-app --template typescript

pnpm i

pnpm run start
```

## 问题原因

问题的原因是`pnpm` V7以上的版本默认不提升`@types`的依赖，导致`typescript`编译时在`node_modules/@types`目录下找不到`testing-library/jest-dom`的类型定义，因此报错。参考链接：  

- [https://github.com/pnpm/pnpm/issues/4920#issuecomment-1225961351](https://github.com/pnpm/pnpm/issues/4920#issuecomment-1225961351)
- [https://github.com/pnpm/pnpm/pull/4459](https://github.com/pnpm/pnpm/pull/4459)

## 问题解决

修改`.npmrc`配置，把`types`的依赖提升至根目录，然后重新安装依赖

``` bash
## ~/.npmrc
public-hoist-pattern[]=*types*
```

参考：[public-hoist-pattern](https://pnpm.io/zh/npmrc#public-hoist-pattern)

## 联系我

- [E-mail](mailto:chenqy9@foxmail.com)
- [个人博客](https://chenqy9.github.io)


