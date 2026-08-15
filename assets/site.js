(() => {
  const translations = {
    en: {
      siteTitle: 'RICK — Venture Office',
      navIdentity: 'Identity', navVentures: 'Ventures', navCareers: 'Careers', navContact: 'Contact',
      heroKicker: 'RICK — VENTURE OFFICE / HONG KONG ↔ GLOBAL',
      heroTitle: 'Rick<br><span class="accent">Venture Office.</span>',
      heroDescription: 'An independent venture office connecting AI education, compliant training data, community building and cross-border digital infrastructure.',
      heroPrimary: 'Enter the network', heroSecondary: 'Join the team',
      heroMeta: 'A company site for ventures, collaborators and people who prefer building the future to waiting for it.', heroScroll: 'Explore the rooms',
      identityLabel: '01 / Identity', identityHeading: 'Build systems that let ideas become real.',
      identityIntro: 'Rick works across computer science, artificial intelligence, economics, education and law. The practice is technical by default, interdisciplinary by choice, and built around creating useful systems with people at the centre.',
      discipline1: 'Computer Science & AI', discipline2: 'Economics & Education', discipline3: 'Law & Governance', discipline4: 'Mathematics & Theoretical Physics', discipline5: 'Poetry & Intellectual Life',
      identityQuote: '“The work is to make rigorous technology feel more human — and make human institutions ready for technology.”', identityQuoteFoot: 'RICK — VENTURE OFFICE',
      roomsLabel: '02 / The Network', roomsHeading: 'Four rooms. One connected practice.', roomsIntro: 'Each room holds a distinct part of the work. Together, they form an operating network for building, learning and collaborating in an AI-native world.',
      roomNote: 'Follow the doors. <span>Every room is a real part of the network.</span>',
      room1Title: 'EduTech × Data', room1Desc: 'AI-native learning products and compliant training data, with an emphasis on educational value and responsible deployment.', room1Link: 'Visit product',
      room2Title: 'InnoAI', room2Desc: 'An AI community for founders and developers, paired with incubation-oriented programmes and collaborative experimentation.', room2Link: 'Visit AIx Origin',
      room3Title: 'OIOLaw', room3Desc: 'A multilingual platform for international legal, tax and cross-border compliance collaboration.', room3Link: 'Visit platform',
      room4Title: 'Open Studio', room4Desc: 'A working space for research, writing, technical exploration and collaborations not yet constrained by a category.', room4Link: 'Start a conversation',
      venturesLabel: '03 / Ventures', venturesHeading: 'Work in public. Build with intent.', venturesIntro: 'Current ventures and core collaborations at the intersection of technology, institutions and creative practice.',
      venture1Title: 'EduTech × Data', venture1Role: 'Founder & CEO', venture1Desc: 'AI education technology and compliant LLM training data, especially education data. Featured product: Lumen Play.',
      venture2Title: 'InnoAI', venture2Role: 'Core member', venture2Desc: 'Community and incubation-oriented programming for AI founders, developers and builders.',
      venture3Title: 'OIOLaw', venture3Role: 'Web Founding Engineer & Core Contributor', venture3Desc: 'Digital infrastructure for international legal, tax and cross-border compliance collaboration.',
      venture4Title: 'Open Collaborations', venture4Role: 'Research, writing & experiments', venture4Desc: 'Interdisciplinary work spanning AI, institutions, mathematical thinking and the humanities.',
      contactLabel: '04 / Contact', contactHeading: 'Build something that matters.', contactEmail: 'Personal email', contactOfficial: 'Official email', contactWeb: 'InnoAI / AIx Origin', contactCareers: 'Careers',
      footerStatus: 'Network online', footerText: 'RICK — VENTURE OFFICE / 2026',
      careersKicker: 'RICK — VENTURE OFFICE / CAREERS', careersTitle: 'Help build learning for an AI-native world.', careersIntro: 'We are preparing a small, high-agency team at the intersection of AI education technology, learning products and compliant LLM training data.',
      careersLabel: 'Openings', careersHeading: 'A future-facing team, intentionally small.', careersBody: 'The first roles are still being defined. If you care about how people learn, how trustworthy data is made, and how thoughtful products reach real users, we would like to hear from you.',
      careersStatus: 'OPEN CALL / ROLES TO BE ANNOUNCED', careersCardTitle: 'Introduce yourself early.', careersCardBody: 'We are not publishing role descriptions yet. Send a concise note describing what you build, what you are curious about and where you could contribute.',
      careersNote1: 'Early-stage, high-ownership work', careersNote2: 'AI education, product, data and operations', careersNote3: 'Hong Kong connected / globally minded', careersApply: 'Apply by email', careersReturn: 'Return to the office'
    },
    'zh-CN': {
      siteTitle: 'RICK — Venture Office',
      navIdentity: '身份与方向', navVentures: '项目网络', navCareers: '加入我们', navContact: '联系',
      heroKicker: 'RICK — VENTURE OFFICE / 香港 ↔ 全球',
      heroTitle: 'Rick<br><span class="accent">Venture Office.</span>',
      heroDescription: '一个连接 AI 教育、合规训练数据、社区构建与跨境数字基础设施的独立创业工作室。',
      heroPrimary: '进入项目网络', heroSecondary: '加入团队',
      heroMeta: '这里汇集创业项目、合作网络与愿意亲手建造未来的人。', heroScroll: '探索各个空间',
      identityLabel: '01 / 身份与方向', identityHeading: '把想法建造成<br>真正可用的系统。',
      identityIntro: 'Rick 接受计算机科学与人工智能的系统训练，也持续投入经济学、教育学、法学、数学与理论物理的跨学科思考。这里的工作以技术为起点，以人的真实需求为中心。',
      discipline1: '计算机科学与人工智能', discipline2: '经济学与教育学', discipline3: '法律与治理', discipline4: '数学与理论物理', discipline5: '诗歌与思想生活',
      identityQuote: '“让严谨的技术更有人性，也让人的制度真正准备好迎接技术。”', identityQuoteFoot: 'RICK — VENTURE OFFICE',
      roomsLabel: '02 / 项目网络', roomsHeading: '四个空间，一张相互连接的实践网络。', roomsIntro: '每个空间对应工作的一部分；它们共同构成一个面向 AI 原生时代的建造、学习与协作网络。',
      roomNote: '穿过每一道门。<span>每个空间都对应真实的项目与合作。</span>',
      room1Title: 'EduTech × Data', room1Desc: '面向 AI 原生时代的学习产品与合规训练数据，重点关注教育价值与负责任的落地。', room1Link: '访问产品',
      room2Title: 'InnoAI', room2Desc: '面向创业者与开发者的 AI 社区，结合孵化、实验与协作式项目实践。', room2Link: '访问 AIx Origin',
      room3Title: 'OIOLaw', room3Desc: '服务于国际法律、财税与跨境合规协作的多语种数字平台。', room3Link: '访问平台',
      room4Title: '开放工作室', room4Desc: '用于研究、写作、技术探索，以及尚未被任何单一类别限制的合作。', room4Link: '开启对话',
      venturesLabel: '03 / 正在发生的项目', venturesHeading: '公开实践，有意识地建造。', venturesIntro: '当前的创业项目与核心协作，位于技术、制度与创造性实践的交汇处。',
      venture1Title: 'EduTech × Data', venture1Role: '创始人兼 CEO', venture1Desc: '聚焦 AI 教育科技与合规 LLM 训练数据，尤其是教育数据。代表产品：Lumen Play。',
      venture2Title: 'InnoAI', venture2Role: '核心成员', venture2Desc: '服务 AI 创业者、开发者与建造者的社区及孵化型项目实践。',
      venture3Title: 'OIOLaw', venture3Role: 'Web 联合创始工程师与核心贡献者', venture3Desc: '为国际法律、财税与跨境合规协作建设数字基础设施。',
      venture4Title: '开放合作', venture4Role: '研究、写作与实验', venture4Desc: '涵盖 AI、制度、数学思维与人文学科的跨界实践。',
      contactLabel: '04 / 联系', contactHeading: '一起建造真正重要的事。', contactEmail: '个人邮箱', contactOfficial: '官方邮箱', contactWeb: 'InnoAI / AIx Origin', contactCareers: '招聘入口',
      footerStatus: '网络在线', footerText: 'RICK — VENTURE OFFICE / 2026',
      careersKicker: 'RICK — VENTURE OFFICE / 招聘', careersTitle: '一起为 AI 原生时代建造新的学习方式。', careersIntro: '我们正在筹备一个小而高自主性的团队，聚焦 AI 教育科技、学习产品与合规 LLM 训练数据的交汇处。',
      careersLabel: '岗位信息', careersHeading: '面向未来的团队，刻意保持精简。', careersBody: '首批岗位仍在定义中。如果你关心人如何学习、可信数据如何被建立，以及有思考的产品如何真正抵达用户，我们愿意认识你。',
      careersStatus: '开放自荐 / 岗位即将公布', careersCardTitle: '现在就介绍你自己。', careersCardBody: '我们暂未公布具体岗位。请用一封简洁邮件告诉我们：你在建造什么、你对什么保持好奇，以及你希望如何参与。',
      careersNote1: '早期阶段，高责任与高自主', careersNote2: 'AI 教育、产品、数据与运营', careersNote3: '连接香港，面向全球', careersApply: '通过邮箱申请', careersReturn: '返回官网'
    },
    'zh-TW': {
      siteTitle: 'RICK — Venture Office',
      navIdentity: '身分與方向', navVentures: '項目網絡', navCareers: '加入我們', navContact: '聯絡',
      heroKicker: 'RICK — VENTURE OFFICE / 香港 ↔ 全球',
      heroTitle: 'Rick<br><span class="accent">Venture Office.</span>',
      heroDescription: '一個連結 AI 教育、合規訓練資料、社群建構與跨境數位基礎設施的獨立創業工作室。',
      heroPrimary: '進入項目網絡', heroSecondary: '加入團隊',
      heroMeta: '這裡匯集創業項目、合作網絡與願意親手建造未來的人。', heroScroll: '探索各個空間',
      identityLabel: '01 / 身分與方向', identityHeading: '把想法建造成<br>真正可用的系統。',
      identityIntro: 'Rick 接受電腦科學與人工智慧的系統訓練，也持續投入經濟學、教育學、法學、數學與理論物理的跨學科思考。這裡的工作以技術為起點，以人的真實需求為中心。',
      discipline1: '電腦科學與人工智慧', discipline2: '經濟學與教育學', discipline3: '法律與治理', discipline4: '數學與理論物理', discipline5: '詩歌與思想生活',
      identityQuote: '「讓嚴謹的技術更有人性，也讓人的制度真正準備好迎接技術。」', identityQuoteFoot: 'RICK — VENTURE OFFICE',
      roomsLabel: '02 / 項目網絡', roomsHeading: '四個空間，一張相互連結的實踐網絡。', roomsIntro: '每個空間對應工作的一部分；它們共同構成一個面向 AI 原生時代的建造、學習與協作網絡。',
      roomNote: '穿過每一道門。<span>每個空間都對應真實的項目與合作。</span>',
      room1Title: 'EduTech × Data', room1Desc: '面向 AI 原生時代的學習產品與合規訓練資料，重點關注教育價值與負責任的落地。', room1Link: '訪問產品',
      room2Title: 'InnoAI', room2Desc: '面向創業者與開發者的 AI 社群，結合孵化、實驗與協作式項目實踐。', room2Link: '訪問 AIx Origin',
      room3Title: 'OIOLaw', room3Desc: '服務於國際法律、財稅與跨境合規協作的多語種數位平台。', room3Link: '訪問平台',
      room4Title: '開放工作室', room4Desc: '用於研究、寫作、技術探索，以及尚未被任何單一類別限制的合作。', room4Link: '開啟對話',
      venturesLabel: '03 / 正在發生的項目', venturesHeading: '公開實踐，有意識地建造。', venturesIntro: '當前的創業項目與核心協作，位於技術、制度與創造性實踐的交匯處。',
      venture1Title: 'EduTech × Data', venture1Role: '創辦人兼 CEO', venture1Desc: '聚焦 AI 教育科技與合規 LLM 訓練資料，尤其是教育資料。代表產品：Lumen Play。',
      venture2Title: 'InnoAI', venture2Role: '核心成員', venture2Desc: '服務 AI 創業者、開發者與建造者的社群及孵化型項目實踐。',
      venture3Title: 'OIOLaw', venture3Role: 'Web 聯合創始工程師與核心貢獻者', venture3Desc: '為國際法律、財稅與跨境合規協作建設數位基礎設施。',
      venture4Title: '開放合作', venture4Role: '研究、寫作與實驗', venture4Desc: '涵蓋 AI、制度、數學思維與人文學科的跨界實踐。',
      contactLabel: '04 / 聯絡', contactHeading: '一起建造真正重要的事。', contactEmail: '個人電郵', contactOfficial: '官方電郵', contactWeb: 'InnoAI / AIx Origin', contactCareers: '招聘入口',
      footerStatus: '網絡在線', footerText: 'RICK — VENTURE OFFICE / 2026',
      careersKicker: 'RICK — VENTURE OFFICE / 招聘', careersTitle: '一起為 AI 原生時代建造新的學習方式。', careersIntro: '我們正在籌備一個小而高自主性的團隊，聚焦 AI 教育科技、學習產品與合規 LLM 訓練資料的交匯處。',
      careersLabel: '職位資訊', careersHeading: '面向未來的團隊，刻意保持精簡。', careersBody: '首批職位仍在定義中。如果你關心人如何學習、可信資料如何被建立，以及有思考的產品如何真正抵達使用者，我們願意認識你。',
      careersStatus: '開放自薦 / 職位即將公布', careersCardTitle: '現在就介紹你自己。', careersCardBody: '我們暫未公布具體職位。請用一封簡潔電郵告訴我們：你在建造什麼、你對什麼保持好奇，以及你希望如何參與。',
      careersNote1: '早期階段，高責任與高自主', careersNote2: 'AI 教育、產品、資料與營運', careersNote3: '連結香港，面向全球', careersApply: '透過電郵申請', careersReturn: '返回官網'
    }
  };

  const languageNames = { en: 'EN', 'zh-CN': '简', 'zh-TW': '繁' };
  const supported = Object.keys(translations);

  function getPreferredLanguage() {
    const saved = localStorage.getItem('rvo-language');
    if (saved && supported.includes(saved)) return saved;
    const browser = navigator.language || 'en';
    if (browser.toLowerCase().startsWith('zh-tw') || browser.toLowerCase().startsWith('zh-hk')) return 'zh-TW';
    if (browser.toLowerCase().startsWith('zh')) return 'zh-CN';
    return 'en';
  }

  function applyLanguage(language) {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.title = dictionary.siteTitle;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const value = dictionary[node.dataset.i18n];
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
      const value = dictionary[node.dataset.i18nHtml];
      if (value !== undefined) node.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
      const value = dictionary[node.dataset.i18nAriaLabel];
      if (value !== undefined) node.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-language]').forEach((button) => {
      const selected = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = languageNames[button.dataset.language];
    });
    localStorage.setItem('rvo-language', language);
  }

  function setUpLanguage() {
    const selected = getPreferredLanguage();
    applyLanguage(selected);
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
  }

  function setUpMobileNavigation() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    if (!toggle || !nav) return;
    const close = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((item) => item.addEventListener('click', close));
  }

  function setUpReveal() {
    const observed = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      observed.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    observed.forEach((node) => observer.observe(node));
  }

  function setUpRoomTilt() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.room-card').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `translateY(-10px) rotateX(${y * -6}deg) rotateY(${x * 7}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setUpLanguage();
    setUpMobileNavigation();
    setUpReveal();
    setUpRoomTilt();
    document.querySelectorAll('[data-current-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
  });
})();
