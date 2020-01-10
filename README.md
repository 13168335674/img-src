# 快速上手

![](https://img.shields.io/badge/ZSTOP-blue)

## Introduction - 介绍

### Summary - 概要

## Usage - 用法

- 修改图传到 github img-src 仓库并修改文件

  - `cd /copy_item_obkoro/`
  - `node handleimg.js`
  - `cd /img-src/sub/blog/docs/.vuepress/`
  - 控制台生成 `vuepress sidebar` 配置 `node node.js`
  - 修改替换 `config.js` `sidebar` 里的 `blog` 字段

- 子仓库用法
  - add <br>
    `git subtree add --prefix=sub/blog sub-blog master --squash`
  - pull <br>
    `git subtree pull --prefix=sub/blog sub-blog master --squash`
  - push <br>
    `git subtree push --prefix=sub/blog sub-blog master`

## License - 版权信息
