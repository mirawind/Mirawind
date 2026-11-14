---
title: "Mirawind Library"
slug: mirawind-library
published: 2026-09-22
order: 10
description: "自托管的个人在线图书馆：把 MinerU 解析的电子书转换成结构化、可搜索的网页图书。"
image: ""
status: "developing"
tags:
  - Astro
  - SQLite
  - React
  - Docker
  - MinerU
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/mirawind/mirawind-library"
---

## 简介

单管理员、自托管的在线图书馆。上传一本书的 MinerU 解析结果（ZIP）后，后台会把它整理成结构化正文；预览确认后，发布成带目录、书内搜索和原文件下载的网页图书。阅读的主体是转换出来的语义 HTML，而不是 PDF。

## 亮点

- 自有结构化正文 IR：MinerU 的输出先转换成按块存储在 SQLite 里的工作稿，可以按块编辑；保存和构建分开，预览在后台合并构建。
- 不可变版本、原子发布：预览和发布共用同一份构建产物，读者只会读到已发布的版本；后台重建期间，旧版本照常可读。
- 一台机器就能部署：Astro Web 进程加同一代码库的 worker，数据放在 SQLite WAL 里，书内搜索用 FTS5 trigram；单管理员用 Passkey 登录，用 Docker Compose 加 Caddy 部署；用 Vitest、Playwright 和性能基准做验收。

## 已完成

- 出版流程：上传 MinerU v2 JSON ZIP → 安全解包 → 生成结构化工作稿 → 构建预览、建立搜索索引 → 以不可变版本原子发布。
- 阅读端：`/library` 书库、图书详情页，以及带目录、提纲、搜索、下载和移动端抽屉的阅读器。
- 管理端：按块编辑正文、元数据与封面、可配置的标题编号、单本永久删除。
- 工程基础：Passkey / 备用密码登录、独立 worker 与 SQLite 任务队列、Docker 一键本地启动、CI 与 commitlint。

## 计划中

- 完整的书库管理：嵌套文件夹、拖拽整理，以及 PDF / EPUB 等更多附件。
- 个人阅读状态：阅读进度、书签、高亮与批注。
- 笔记（`notes.md`）与重新导入：保留块 ID，迁移已有批注。
- EPUB 导入、展示型首页、自动封面优化。

## 状态

开发中，暂时没有公开演示。

## 仓库

::github{repo="mirawind/mirawind-library"}
