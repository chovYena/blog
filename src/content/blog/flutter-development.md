---
title: "使用cursor开发一个Flutter应用"
description: "使用cursor开发一个Flutter应用"
date: 2024-11-20
pubDate: "2024-11-20"
heroImage: "/blog-placeholder-3.jpg"
tags: ["Flutter", "移动开发", "跨平台", "Dart"]
---


## 使用idea配置Flutter开发环境

为什么使用idea？因为`flutter`所需要的`android`，`jdk`环境，idea可以很方便的配置。

idea可以安装`java`和`flutter`以及模拟器等`android`插件，然后配置flutter的sdk路径即可。

## 初始化项目

使用`flutter create`命令初始化项目。

```bash
flutter create flutter_app
```

现在的`flutter`使用`gradle`作为构建工具，由于网络问题，`gradle`编译会卡住，`gradle`的缓存目录在`C:\Users\用户名\.gradle`，需要手动配置`wrapper`，我是不太喜欢切换到国内源的一些方法。

[gradle下载](https://mirrors.cloud.tencent.com/gradle/)

```bash
# 配置wrapper
C:\Users\asuna\.gradle\wrapper\dists 目录下 手动下载所需版本的gradle 并解压到该目录下

所需版本可以在 gradle-wrapper.properties 文件中查看
```
配置好后，重新编译，`gradle`就不会卡住了。

如果还是卡在启动模拟器阶段，可以切换到`android` 目录下，使用`./gradle build`命令手动编译，编译完成后，再切换回
项目目录下，重新运行。

## 使用cursor开发

使用`cursor` 打开项目，然后与`cursor`交互即可。


## 成品地址

[抖音视频下载](https://github.com/chovYena/douyin_downloader)
