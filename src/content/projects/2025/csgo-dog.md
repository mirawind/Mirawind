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

## 亮点

- 两个饰品接入了真实价格历史：从 SteamDT API 拉取后存进 Supabase Postgres，前端优先读数据库，没有数据时回退到 API。
- AI 建仓助手：把行情数据整理成上下文，按问题类型（趋势、推荐、风险等）选择不同的提示词，再调用 DeepSeek 模型。

## 技术栈

Next.js · React · TypeScript · Supabase（Postgres）· Recharts · DeepSeek API

## 状态

原型阶段，除这两个饰品使用真实价格外，其余行情都是模拟数据。原域名已失效。

## 仓库

::github{repo="mirawind/CSGO-Dog"}
