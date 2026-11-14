---
title: "DiPECS"
slug: dipecs
published: 2026-07-07
description: "课程团队项目：Android 端侧 AIOS 原型，模型只负责提议，经过策略授权后才执行资源动作。"
image: "./images/dipecs/cover.webp"
status: "archived"
tags:
  - 课程项目
  - Android
  - Rust
  - AIOS
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/114August514/DiPECS"
  - label: "文档"
    icon: "material-symbols:menu-book"
    value: "https://114august514.github.io/DiPECS/"
---

## 简介

OSH 2026 课程的五人团队项目。DiPECS 研究的问题是：Android 端侧的 AIOS 能不能把本地上下文转化成在真机上可以测量的资源优化动作，比如进程预热、文件预取和内存释放，同时又不让模型直接控制系统。

（封面是 DiPECS 结题材料里的总体架构图，团队作品，Apache-2.0。）

## 我的分工

可行性报告；文档站更新；调研、可行性和中期报告的源码，以及文档构建 CI；整理模拟器端到端实验和预热补充实验数据；结题答辩幻灯片。

## 亮点（团队作品）

- 六段闭环：采集 → PrivacyAirGap 脱敏 → 聚合为 StructuredContext → 决策后端（规则 / 本地评估器 / 云端 LLM / 兜底）→ PolicyEngine 授权 → 执行与审计。
- 「模型提议，策略决定」：可执行的动作必须先封装成 AuthorizedAction；Android 端通过本地 socket 加 HMAC-SHA256 认证后才执行。
- 在 Pixel 6a 真机上实测 PreWarmProcess、PrefetchFile、ReleaseMemory 三类动作的收益（每项 n≥20）。

## 技术栈

Rust · Kotlin（Android）· Python · MkDocs

## 状态

课程已于 2026 年 7 月结题。

## 仓库

::github{repo="114August514/DiPECS"}
