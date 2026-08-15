(() => {
  const translations = {
    en: {
      title: 'Rick — Builder, Founder & Systems Thinker',
      navAbout: 'About', navWork: 'Work', navNotes: 'Notes', navCompany: 'Venture Office', navContact: 'Contact',
      heroKicker: 'RICK / HONG KONG ↔ GLOBAL', heroTitle: 'Rick<br><span class="surname">Beckett.</span>',
      heroDescription: 'A technical builder, founder and interdisciplinary thinker working across artificial intelligence, education, data and institutions.',
      heroPrimary: 'Explore my work', heroSecondary: 'Enter Venture Office', heroSignature: 'SYSTEMS · STORIES · FUTURES',
      aboutLabel: '01 / About', aboutHeading: 'Technical by training. Interdisciplinary by instinct.',
      aboutBody: 'Rick has a foundation in computer science and artificial intelligence, with further training across economics, education and law. His work also reaches into mathematics and theoretical physics — not as a list of labels, but as different lenses for understanding complex systems.',
      aboutTag1: 'Computer science & artificial intelligence', aboutTag2: 'Economics, education & law', aboutTag3: 'Mathematics & theoretical physics', aboutTag4: 'Poetry, writing & long-form thinking',
      workLabel: '02 / Work', workHeading: 'Building at the boundary of technology and institutions.', workIntro: 'Current work moves between ventures, communities and digital infrastructure — always with an interest in how ambitious ideas become usable systems.',
      work1Role: 'FOUNDER & CEO', work1Title: 'EduTech × Data', work1Body: 'AI education technology, learning products and compliant LLM training data with particular attention to education data.',
      work2Role: 'CORE MEMBER', work2Title: 'InnoAI', work2Body: 'An AI community and incubation-oriented network for founders, developers and people building in public.',
      work3Role: 'WEB FOUNDING ENGINEER', work3Title: 'OIOLaw', work3Body: 'Cross-border digital infrastructure for legal, tax and compliance collaboration.',
      companyLabel: '03 / Company', companyHeading: 'The ventures have a room of their own.', companyBody: 'RICK — Venture Office is the company-facing home for current ventures, collaboration enquiries and an emerging team. Enter it for the full operating network and careers page.', companyLink: 'Enter the Venture Office', companyCardSmall: 'COMPANY SPACE', companyCardTitle: 'RICK Venture Office',
      notesLabel: '04 / Notes', notesHeading: 'A practice of making sense before making more.', notesIntro: 'Beyond product and engineering work, Rick reads and writes across the systems that shape human possibility: technical, institutional, mathematical and poetic.', notesQuote: '“Ideas deserve more than speed. They deserve a structure strong enough to carry their consequences.”', notesFoot: 'PERSONAL NOTEBOOK / IN PROGRESS',
      contactLabel: '05 / Contact', contactHeading: 'Start with a considered message.', contactPersonal: 'Personal email', contactOfficial: 'Official email', contactCompany: 'Venture Office', footerStatus: 'Personal site online', footerText: 'RICK / 2026'
    },
    'zh-CN': {
      title: 'Rick — 技术建造者、创业者与系统思考者',
      navAbout: '关于我', navWork: '正在做的事', navNotes: '思考', navCompany: 'Venture Office', navContact: '联系',
      heroKicker: 'RICK / 香港 ↔ 全球', heroTitle: 'Rick<br><span class="surname">Beckett.</span>',
      heroDescription: '一名技术建造者、创业者与跨学科思考者，工作横跨人工智能、教育、数据与制度。',
      heroPrimary: '探索我的工作', heroSecondary: '进入 Venture Office', heroSignature: '系统 · 叙事 · 未来',
      aboutLabel: '01 / 关于我', aboutHeading: '接受技术训练，也依靠跨学科直觉。',
      aboutBody: 'Rick 以计算机科学与人工智能为基础，同时接受经济学、教育学与法学训练。他的思考也延伸到数学和理论物理；这并非一张标签清单，而是理解复杂系统的不同视角。',
      aboutTag1: '计算机科学与人工智能', aboutTag2: '经济学、教育学与法学', aboutTag3: '数学与理论物理', aboutTag4: '诗歌、写作与长程思考',
      workLabel: '02 / 正在做的事', workHeading: '在技术与制度的边界上建造。', workIntro: '当前工作游走于创业项目、社区和数字基础设施之间，始终关注如何把大胆的想法变成真正可用的系统。',
      work1Role: '创始人兼 CEO', work1Title: 'EduTech × Data', work1Body: '面向 AI 教育科技、学习产品与合规 LLM 训练数据，尤其关注教育数据。',
      work2Role: '核心成员', work2Title: 'InnoAI', work2Body: '服务创业者、开发者和公开建造者的 AI 社区与孵化型网络。',
      work3Role: 'WEB 联合创始工程师', work3Title: 'OIOLaw', work3Body: '服务法律、财税与跨境合规协作的数字基础设施。',
      companyLabel: '03 / 公司', companyHeading: '这些项目有一个自己的空间。', companyBody: 'RICK — Venture Office 是面向公司的入口，承载当前项目、合作咨询和正在形成的团队。进入后可查看完整的项目网络和招聘页面。', companyLink: '进入 Venture Office', companyCardSmall: '公司空间', companyCardTitle: 'RICK Venture Office',
      notesLabel: '04 / 思考', notesHeading: '先理解，再建造更多。', notesIntro: '除产品与工程工作外，Rick 也阅读和写作，关注那些塑造人类可能性的系统：技术、制度、数学与诗意。', notesQuote: '“想法不应只追求速度；它们也值得拥有足以承载其后果的结构。”', notesFoot: '个人笔记 / 持续更新中',
      contactLabel: '05 / 联系', contactHeading: '从一条经过思考的信息开始。', contactPersonal: '个人邮箱', contactOfficial: '官方邮箱', contactCompany: 'Venture Office', footerStatus: '个人网站在线', footerText: 'RICK / 2026'
    },
    'zh-TW': {
      title: 'Rick — 技術建造者、創業者與系統思考者',
      navAbout: '關於我', navWork: '正在做的事', navNotes: '思考', navCompany: 'Venture Office', navContact: '聯絡',
      heroKicker: 'RICK / 香港 ↔ 全球', heroTitle: 'Rick<br><span class="surname">Beckett.</span>',
      heroDescription: '一名技術建造者、創業者與跨學科思考者，工作橫跨人工智慧、教育、資料與制度。',
      heroPrimary: '探索我的工作', heroSecondary: '進入 Venture Office', heroSignature: '系統 · 敘事 · 未來',
      aboutLabel: '01 / 關於我', aboutHeading: '接受技術訓練，也依靠跨學科直覺。',
      aboutBody: 'Rick 以電腦科學與人工智慧為基礎，同時接受經濟學、教育學與法學訓練。他的思考也延伸到數學和理論物理；這並非一張標籤清單，而是理解複雜系統的不同視角。',
      aboutTag1: '電腦科學與人工智慧', aboutTag2: '經濟學、教育學與法學', aboutTag3: '數學與理論物理', aboutTag4: '詩歌、寫作與長程思考',
      workLabel: '02 / 正在做的事', workHeading: '在技術與制度的邊界上建造。', workIntro: '當前工作游走於創業項目、社群和數位基礎設施之間，始終關注如何把大膽的想法變成真正可用的系統。',
      work1Role: '創辦人兼 CEO', work1Title: 'EduTech × Data', work1Body: '面向 AI 教育科技、學習產品與合規 LLM 訓練資料，尤其關注教育資料。',
      work2Role: '核心成員', work2Title: 'InnoAI', work2Body: '服務創業者、開發者和公開建造者的 AI 社群與孵化型網絡。',
      work3Role: 'WEB 聯合創始工程師', work3Title: 'OIOLaw', work3Body: '服務法律、財稅與跨境合規協作的數位基礎設施。',
      companyLabel: '03 / 公司', companyHeading: '這些項目有一個自己的空間。', companyBody: 'RICK — Venture Office 是面向公司的入口，承載當前項目、合作諮詢和正在形成的團隊。進入後可查看完整的項目網絡和招聘頁面。', companyLink: '進入 Venture Office', companyCardSmall: '公司空間', companyCardTitle: 'RICK Venture Office',
      notesLabel: '04 / 思考', notesHeading: '先理解，再建造更多。', notesIntro: '除產品與工程工作外，Rick 也閱讀和寫作，關注那些塑造人類可能性的系統：技術、制度、數學與詩意。', notesQuote: '「想法不應只追求速度；它們也值得擁有足以承載其後果的結構。」', notesFoot: '個人筆記 / 持續更新中',
      contactLabel: '05 / 聯絡', contactHeading: '從一條經過思考的訊息開始。', contactPersonal: '個人電郵', contactOfficial: '官方電郵', contactCompany: 'Venture Office', footerStatus: '個人網站在線', footerText: 'RICK / 2026'
    }
  };
  const languageNames = { en: 'EN', 'zh-CN': '简', 'zh-TW': '繁' };
  const supported = Object.keys(translations);
  const preferred = () => {
    const saved = localStorage.getItem('rvo-language');
    if (saved && supported.includes(saved)) return saved;
    const language = (navigator.language || 'en').toLowerCase();
    if (language.startsWith('zh-tw') || language.startsWith('zh-hk')) return 'zh-TW';
    return language.startsWith('zh') ? 'zh-CN' : 'en';
  };
  const apply = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.title = dictionary.title;
    document.querySelectorAll('[data-i18n]').forEach((node) => { const text = dictionary[node.dataset.i18n]; if (text !== undefined) node.textContent = text; });
    document.querySelectorAll('[data-i18n-html]').forEach((node) => { const text = dictionary[node.dataset.i18nHtml]; if (text !== undefined) node.innerHTML = text; });
    document.querySelectorAll('[data-language]').forEach((button) => { button.textContent = languageNames[button.dataset.language]; button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
    localStorage.setItem('rvo-language', language);
  };
  document.addEventListener('DOMContentLoaded', () => {
    apply(preferred());
    document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => apply(button.dataset.language)));
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
      nav.querySelectorAll('a').forEach((item) => item.addEventListener('click', () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }));
    }
    const reveal = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) reveal.forEach((item) => item.classList.add('is-visible'));
    else {
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .1 });
      reveal.forEach((item) => observer.observe(item));
    }
  });
})();
