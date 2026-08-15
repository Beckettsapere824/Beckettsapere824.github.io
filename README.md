# Rick — Personal Site & Venture Office

This repository powers a unified GitHub Pages website for **Rick**. The root URL is the personal website, while **RICK — Venture Office** is a company-facing section inside the same site.

## Public routes

| Route | Purpose |
|---|---|
| `/` | Rick’s trilingual personal website: background, interdisciplinary interests, current work, contact information, and a direct entry to the company space. |
| `/venture-office/` | RICK — Venture Office company page: venture network, collaboration information, and company contacts. |
| `/venture-office/careers/` | Venture Office careers page, currently configured for open introductions while specific roles are still being defined. |

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Personal homepage at the root of the GitHub Pages site. |
| `venture-office/index.html` | Company-facing Venture Office subpage. |
| `venture-office/careers/index.html` | Recruitment subpage for Venture Office. |
| `assets/styles.css` | Shared responsive visual system for the personal and company sections. |
| `assets/personal.js` | Personal homepage language switching and lightweight UI behavior. |
| `assets/site.js` | Venture Office and careers language switching and lightweight UI behavior. |

## Languages

Every public page includes **English**, **Simplified Chinese**, and **Traditional Chinese**. Language preference is stored in the browser and shared across the personal and company areas.

## Recruitment configuration

The current recruitment CTA opens a pre-filled email to **beckett114191@gmail.com**. When formal roles are ready, replace the open-introduction state in `venture-office/careers/index.html` with role cards or an application system.

## Local preview

The site is static and can be previewed by opening `index.html` in a modern browser. GitHub Pages publishes the repository root from the `main` branch.
