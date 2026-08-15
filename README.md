![RICK — Personal Site](assets/readme-site-banner.svg)

# RICK — Personal Site

[![Live site](https://img.shields.io/badge/Live%20site-beckettsapere824.github.io-ff7a45?style=flat-square&labelColor=171219)](https://beckettsapere824.github.io/)
[![License](https://img.shields.io/badge/license-MIT-b8ff5b?style=flat-square&labelColor=171219)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-a77dff?style=flat-square&labelColor=171219)](https://beckettsapere824.github.io/)

> A personal site for **Rick Beckett** — a technical builder, founder, and interdisciplinary thinker working across AI, education, data, and systems.

[**Visit the site**](https://beckettsapere824.github.io/) · [**Venture Office**](https://beckettsapere824.github.io/venture-office/) · [**Careers**](https://beckettsapere824.github.io/venture-office/careers/) · [**GitHub profile**](https://github.com/Beckettsapere824)

---

## In this repository

This repository is the source for the public personal website and its company-facing Venture Office space. It is intentionally built as a lean static site: no framework lock-in, no build step, and no unnecessary dependency layer.

| Surface | Public route | Purpose |
|---|---|---|
| **Personal site** | [`/`](https://beckettsapere824.github.io/) | Personal identity, current work, interdisciplinary perspective, and direct contact. |
| **Venture Office** | [`/venture-office/`](https://beckettsapere824.github.io/venture-office/) | Company-facing context for EduTech × Data, collaborations, and the operating network. |
| **Careers** | [`/venture-office/careers/`](https://beckettsapere824.github.io/venture-office/careers/) | An open-introductions page for the emerging EduTech team. |

## What it communicates

The site gives each part of the practice a distinct place while keeping the personal and company narratives connected.

| Theme | Intent |
|---|---|
| **AI × Education × Data** | Show the work at the intersection of learning products, AI-native systems, and responsible training data. |
| **Systems thinking** | Connect technical work with the institutional, economic, legal, mathematical, and human contexts around it. |
| **Clear collaboration paths** | Make the personal website, Venture Office, company contact routes, and careers entry point easy to discover. |

## Project structure

```text
.
├── index.html                     # Personal site root
├── venture-office/
│   ├── index.html                 # Company-facing Venture Office
│   └── careers/index.html         # Careers / open introductions
├── assets/
│   ├── styles.css                 # Shared visual system
│   ├── personal.js                # Root-page language and interaction logic
│   └── site.js                    # Venture Office language and interaction logic
├── robots.txt                     # Crawler access rules
└── sitemap.xml                    # Canonical public routes
```

## Local preview

The website is static. From the repository root, run the following and open `http://localhost:8000`.

```bash
python3 -m http.server 8000
```

## Content and language

The public experience supports **English**, **简体中文**, and **繁體中文**. Page titles, descriptions, canonical URLs, sitemap, robots rules, and structured data are included to make the public routes easier for search engines and visitors to understand.

## Connect

[Personal website](https://beckettsapere824.github.io/) · [Lumen Play](https://egsp-web.vercel.app/) · [AIx Origin](https://aixorigin.innoai.org.cn/) · [OIOLaw](https://oiolawaiplatform.horse/) · [Email Rick](mailto:beckett114191@gmail.com)

---

## 简体中文

这是 **Rick Beckett** 的个人网站源码仓库，也是 RICK — Venture Office 分页面与招聘入口的发布来源。项目以轻量、可维护的静态站形式组织，覆盖个人介绍、创业项目、合作网络与开放自荐入口。

| 页面 | 作用 |
|---|---|
| [个人主页](https://beckettsapere824.github.io/) | 展示个人背景、正在做的事、跨学科兴趣与联系方式。 |
| [Venture Office](https://beckettsapere824.github.io/venture-office/) | 展示 EduTech × Data、合作项目与公司侧信息。 |
| [招聘入口](https://beckettsapere824.github.io/venture-office/careers/) | 面向 AI 教育、学习产品与合规训练数据方向的开放自荐。 |

## 繁體中文

這是 **Rick Beckett** 的個人網站原始碼倉庫，同時為 RICK — Venture Office 分頁面與招聘入口提供發布來源。專案採用輕量、易維護的靜態網站架構，涵蓋個人介紹、創業項目、合作網絡與開放自薦入口。

| 頁面 | 作用 |
|---|---|
| [個人主頁](https://beckettsapere824.github.io/) | 展示個人背景、正在做的事、跨學科興趣與聯絡方式。 |
| [Venture Office](https://beckettsapere824.github.io/venture-office/) | 展示 EduTech × Data、合作項目與公司側資訊。 |
| [招聘入口](https://beckettsapere824.github.io/venture-office/careers/) | 面向 AI 教育、學習產品與合規訓練資料方向的開放自薦。 |

---

Released under the [MIT License](LICENSE).
