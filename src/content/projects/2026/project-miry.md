---
title: "Project Miry"
slug: project-miry
published: 2026-09-22
description: "个人量化研究尝试：从行情采集、影子交易到自动化策略研究的一整套实验系统。"
image: ""
status: "archived"
tags:
  - 量化研究
  - Python
  - PostgreSQL
  - Grafana
  - Optuna
link:
  - label: "Shadow Lab"
    icon: "fa7-brands:github"
    value: "https://github.com/mirawind/ft-shadow"
  - label: "数据采集器"
    icon: "fa7-brands:github"
    value: "https://github.com/PROJECT-MIRY/miry-data-collector"
---

## 简介

2026 年 8～9 月，我想弄清楚加密货币永续合约市场能不能用系统化的方法来研究。我从 Freqtrade 起步，后来自己搭了从数据采集到执行的整条链路，统一叫 Project Miry，全部由我一个人完成。

## 主要功能

- 行情采集：持续采集 Binance USD-M 60 个合约的行情，重建 L2 订单簿；无法证明完整的时间段会被显式记为 gap。
- 影子交易：用实时行情模拟挂单、撮合、持仓和账本，不动用真实资金。
- 多策略研究：五条策略轨道并行运行，用遗传演化和 Optuna 生成并评估候选策略。
- 自动研究：由协议文件驱动，按日做前向的样本外评估。
- 运营观察台：两个只读的 Grafana 看板，一个看交易、策略、收益和演化，另一个看数据、存储、事故和日志。

## 组成

- **数据采集器 miry-data-collector**（公开）：负责行情采集。云服务器采集，数据以 Parquet/Zstd 落盘后传到计算服务器；计算服务器校验 SHA-256 并回传 ACK 之后，源端才删除文件，再由 Slurm 做离线重建。
- **影子交易 Shadow Lab（ft-shadow）**（公开）：负责影子交易、多策略研究和运营观察台。订单、持仓、风控、账本都实现为状态机；用 Docker Compose 部署 PostgreSQL、Prometheus、Loki 和 Grafana。另外写了 Binance 模拟盘（Demo）执行通道，但没有完成最终验收。
- **自动研究框架 Base Game**（私有）：负责自动研究，用 MAP-Elites 搜索候选策略。

## 技术栈

Python（asyncio / aiohttp / websockets）· PyArrow / Parquet · PostgreSQL · DuckDB · Optuna · MLflow · Docker Compose · Prometheus / Loki / Grafana · Slurm

## 仓库

::github{repo="PROJECT-MIRY/miry-data-collector"}

::github{repo="mirawind/ft-shadow"}
