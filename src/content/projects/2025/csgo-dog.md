---
title: "CSGO-Dog"
slug: csgo-dog
published: 2025-10-26
description: "2025 年 10 月黑客松作品：CS2 饰品行情看板原型，带多平台价格走势和一个大模型建仓问答助手。"
image: "../images/csgo-dog/cover.webp"
status: "archived"
tags:
  - Next.js
  - Supabase
  - LLM
  - 黑客松
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/mirawind/CSGO-Dog"
---

## 简介

2025 年 10 月黑客松上两人合作、用两天做出的原型。看板展示热门 CS2 饰品在 BUFF、Steam、悠悠有品、C5GAME 等平台的价格，以及可以缩放的价格走势图；旁边有一个 AI 建仓助手，可以围绕当前行情提问。

## 主要功能

- 市场总览：热门饰品的当前价格、24 小时涨跌和成交量，可以切换平台查看。
- 价格走势图：显示小时级的历史价格，支持滚轮缩放和拖动。
- 平台差价：对比同一饰品在两个平台的价格和差价，给「搬砖」做参考（演示数据）。
- 仓位建议：输入总资金，在「稳健」和「激进」之间调节，按预设的饰品池给出持仓分配和预期收益。
- AI 建仓助手：围绕当前行情提问，比如走势、推荐和风险。

## 亮点

- 两个饰品接入了真实价格历史：从 SteamDT API 拉取后存进 Supabase Postgres，前端优先读数据库，没有数据时回退到 API。
- AI 建仓助手：把行情数据整理成上下文，按问题类型（趋势、推荐、风险等）选择不同的提示词，再调用 DeepSeek 模型。

## 技术栈

Next.js · React · TypeScript · Supabase（Postgres）· Recharts · DeepSeek API

## 状态

原型阶段，除这两个饰品使用真实价格外，其余行情都是模拟数据。原域名已失效。

## 仓库

::github{repo="mirawind/CSGO-Dog"}
