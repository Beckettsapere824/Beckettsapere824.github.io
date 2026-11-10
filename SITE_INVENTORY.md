# Site inventory — do not drop links

Captured 2026-11-10 before IA redesign toward `/`, `/connect`, `/console`.
All listed routes and externals must remain reachable (same URL or explicit redirect).

## Public routes (on this repo)

| Route | Role |
|-------|------|
| `/` | Personal home (quad + author panel) |
| `/about.html` | About / contact mirror |
| `/venture-office/` | Company-facing venture office |
| `/venture-office/careers/` | Careers / open intro |
| `/ml-notes/` | ML notes viewer |
| `/ml-demos/knn-voronoi.html` | k-NN demo |
| `/ml-demos/svm-margin.html` | SVM margin demo |
| `/memo/` | Structured memory viewer (ex-memo-rick export) |
| `/connect/` | **New** — deeper collab / business entry |
| `/console/` | **New** — project / test console |

## External links (must stay discoverable)

### Contact
- Email: mailto:beckett114191@gmail.com
- Official: mailto:InnoAIxHKU@gmail.com (venture-office)
- GitHub: https://github.com/Beckettsapere824
- LinkedIn: https://www.linkedin.com/in/yihan-zhou-060b32383
- X: https://x.com/rickxofficial
- WhatsApp: https://wa.me/85264341914
- WeChat: ZYH-1-1 (text)

### Ventures / products
- Zenno-X: https://www.zenno-x.com/
- EGSP / Lumen Play: https://egsp-web.vercel.app/
- AIx Origin / InnoAI: https://aixorigin.innoai.org.cn/
- OIOLaw: https://oiolawaiplatform.horse/
- Hiring / Lumen Play company: https://www.linkedin.com/company/lumenplay/

### Repos
- Library: https://github.com/Beckettsapere824/Library
- ML Study: https://github.com/Beckettsapere824/c-machine-learning
- Memo source: https://github.com/Beckettsapere824/ex-memo-rick

## Assets / behavior to keep

- `assets/styles.css`, `personal.js`, `pool.js`, `site.js`
- EN / 繁 / ES (home/about); EN / 简 / 繁 (venture-office)
- Pool / About Me interactive cell on home
- robots.txt, LICENSE, README badges

## Redesign rules

1. Never remove a row above without a redirect or equivalent link.
2. `/connect` aggregates collab; does not delete `/venture-office`.
3. `/console` aggregates projects/tests; does not delete `/ml-notes` or `/memo`.
4. Taste: functional, minimal, modernist.
