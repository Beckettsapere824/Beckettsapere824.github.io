(() => {
  const translations = {
    en: {
      title: 'Rick', name: 'Rick', founder: 'Founder', mission: 'AI Infrastructure for Future Human Intelligence',
      cofounder: 'Co-founder', emailLabel: 'Email', projectLabel: 'Project', wechatLabel: 'WeChat',
      hiring: 'Noesyx Lab is Hiring | Feel Free to Email Me for Connection & Collaboration',
      aboutBtn: 'Author', quadLibrary: 'Library', quadResearch: 'Research', quadProjects: 'Projects',
      quadMore: 'More', quadEmpty: '—'
    },
    'zh-TW': {
      title: 'Rick', name: 'Rick', founder: '創辦人', mission: '為未來人類智慧打造的 AI 基礎設施',
      cofounder: '共同創辦人', emailLabel: '電子郵件', projectLabel: '專案', wechatLabel: 'WeChat',
      hiring: 'Noesyx Lab 正在招募｜歡迎來信交流與合作',
      aboutBtn: '作者介紹', quadLibrary: '資料庫', quadResearch: '研究成果', quadProjects: '項目',
      quadMore: '更多', quadEmpty: '—'
    },
    es: {
      title: 'Rick', name: 'Rick', founder: 'Fundador', mission: 'Infraestructura de IA para la inteligencia humana del futuro',
      cofounder: 'Cofundador', emailLabel: 'Correo', projectLabel: 'Proyecto', wechatLabel: 'WeChat',
      hiring: 'Noesyx Lab está contratando | Escríbeme para conectar y colaborar',
      aboutBtn: 'Autor', quadLibrary: 'Biblioteca', quadResearch: 'Investigación', quadProjects: 'Proyectos',
      quadMore: 'Más', quadEmpty: '—'
    }
  };
  const languageNames = { en: 'EN', 'zh-TW': '繁', es: 'ES' };
  const supported = Object.keys(translations);

  function preferredLanguage() {
    try {
      const saved = localStorage.getItem('rick-language');
      if (saved && supported.includes(saved)) return saved;
    } catch (_) {}
    const browserLanguage = (navigator.language || 'en').toLowerCase();
    if (browserLanguage.startsWith('zh')) return 'zh-TW';
    if (browserLanguage.startsWith('es')) return 'es';
    return 'en';
  }

  function applyLanguage(language) {
    const selected = supported.includes(language) ? language : 'en';
    const dictionary = translations[selected];
    document.documentElement.lang = selected;
    document.title = dictionary.title;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const value = dictionary[node.dataset.i18n];
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll('[data-language]').forEach((button) => {
      const active = button.dataset.language === selected;
      button.setAttribute('aria-pressed', String(active));
      button.textContent = languageNames[button.dataset.language];
    });
    try { localStorage.setItem('rick-language', selected); } catch (_) {}
  }

  function setUpAboutPanel() {
    const btn = document.getElementById('about-btn');
    const panel = document.getElementById('about-panel');
    if (!btn || !panel) return;

    let pinned = false;
    let openTimer = null;
    let closeTimer = null;

    function openPanel() {
      clearTimeout(closeTimer);
      closeTimer = null;
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    }
    function closePanel() {
      clearTimeout(openTimer);
      openTimer = null;
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }
    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        if (!pinned) closePanel();
      }, 200);
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      pinned = !pinned;
      if (pinned) openPanel();
      else closePanel();
    });

    btn.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      if (pinned) return;
      clearTimeout(openTimer);
      openTimer = setTimeout(() => {
        if (!pinned) openPanel();
      }, 700);
    });
    btn.addEventListener('mouseleave', () => {
      clearTimeout(openTimer);
      openTimer = null;
      if (!pinned) scheduleClose();
    });

    panel.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      clearTimeout(openTimer);
    });
    panel.addEventListener('mouseleave', () => {
      if (!pinned) scheduleClose();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(preferredLanguage());
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
    setUpAboutPanel();
  });
})();
