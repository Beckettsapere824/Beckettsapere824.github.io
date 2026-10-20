(() => {
  // Add future locale entries here; each key maps to a data-i18n attribute in index.html.
  const translations = {
    en: {
      title: 'Rick', name: 'Rick', founder: 'Founder', mission: 'AI Infrastructure for Future Human Intelligence',
      cofounder: 'Co-founder', emailLabel: 'Email', projectLabel: 'Project',
      hiring: 'Noesyx Lab is Hiring | Feel Free to Email Me for Connection & Collaboration'
    },
    'zh-TW': {
      title: 'Rick', name: 'Rick', founder: '創辦人', mission: '為未來人類智慧打造的 AI 基礎設施',
      cofounder: '共同創辦人', emailLabel: '電子郵件', projectLabel: '專案',
      hiring: 'Noesyx Lab 正在招募｜歡迎來信交流與合作'
    },
    es: {
      title: 'Rick', name: 'Rick', founder: 'Fundador', mission: 'Infraestructura de IA para la inteligencia humana del futuro',
      cofounder: 'Cofundador', emailLabel: 'Correo', projectLabel: 'Proyecto',
      hiring: 'Noesyx Lab está contratando | Escríbeme para conectar y colaborar'
    }
  };
  const languageNames = { en: 'EN', 'zh-TW': '繁', es: 'ES' };
  const supported = Object.keys(translations);

  function preferredLanguage() {
    try {
      const saved = localStorage.getItem('rick-language');
      if (saved && supported.includes(saved)) return saved;
    } catch (_) { /* Storage can be unavailable in private browsing. */ }
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
    try { localStorage.setItem('rick-language', selected); } catch (_) { /* Language still works without storage. */ }
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(preferredLanguage());
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
  });
})();
