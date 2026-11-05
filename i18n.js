/* =====================================================================
 * 🌐 TRANSLATIONS — the single source of every UI string on the site.
 * Supported: en (default), uz (Uzbek, Latin script), ru (Russian).
 * Brand names (Behance, Instagram, Telegram, Work and Travel, Green Card…)
 * are intentionally left untranslated.
 * Missing keys in uz/ru fall back to English (with a console warning).
 * ===================================================================== */
window.I18N = {
  defaultLang: "en",
  supported: ["en", "uz", "ru"],
  storageKey: "site_lang",
  ogLocale: { en: "en_US", uz: "uz_UZ", ru: "ru_RU" },

  strings: {
    en: {
      "meta.title": "Mirazim Ruzimurodov",
      "profile.name": "Mirazim Ruzimurodov",
      "profile.bio": "Man on his path. Brand Designer ('21), Webster University '27 (Int'l Relations/Econ), young entrepreneur, traveler, athlete. I can stay silent in 5+ languages. More 👇",
      "cta.telegramBlog": "Telegram Blog",
      "social.behance": "Behance",
      "social.instagram": "Instagram",
      "social.facebook": "Facebook",
      "social.linkedin": "LinkedIn",
      "social.x": "X",
      "social.telegram": "Telegram",
      "social.phone": "Phone",
      "social.email": "Email",
      "link.brand": "Create your own brand",
      "link.workTravel": "Apply for Work and Travel",
      "link.greenCard": "Apply for Green Card’27",
      "footer.copyright": "© {year} Mirazim Ruzimurodov",
      "share.label": "Share",
      "share.text": "Check out Mirazim Ruzimurodov's links",
      "share.copied": "Link copied",
      "lang.label": "Change language",
      "lang.current": "Current: English",
      "lang.en": "English",
      "lang.uz": "Oʻzbekcha",
      "lang.ru": "Русский",
      "alt.avatar": "Mirazim Ruzimurodov profile photo",
      "aria.socials": "Social profiles and contacts",
      "aria.links": "Applications",
    },

    uz: {
      "meta.title": "Mirazim Rözimurodov",
      "profile.name": "Mirazim Rözimurodov",
      "profile.bio": "Yöldagi odam. Brend dizayner ('21), Vebster Universiteti'27 (Xalqaro munosabatlar/Iqtisodiyot), yoş tadbirkor, sayohatçi, sportçi. 5+ tilda jim tura olaman. Batafsil 👇",
      "cta.telegramBlog": "Telegram blog",
      "social.behance": "Behance",
      "social.instagram": "Instagram",
      "social.facebook": "Facebook",
      "social.linkedin": "LinkedIn",
      "social.x": "X",
      "social.telegram": "Telegram",
      "social.phone": "Telefon",
      "social.email": "Email",
      "link.brand": "Brendingizni yarating",
      "link.workTravel": "Work and Travel dasturi",
      "link.greenCard": "Green Card’27 uçun ariza",
      "footer.copyright": "© {year} Mirazim Ruzimurodov",
      "share.label": "Ulashish",
      "share.text": "Mirazim Ruzimurodov havolalari",
      "share.copied": "Havola nusxalandi",
      "lang.label": "Tilni oʻzgartirish",
      "lang.current": "Joriy: Oʻzbekcha",
      "lang.en": "English",
      "lang.uz": "Oʻzbekcha",
      "lang.ru": "Русский",
      "alt.avatar": "Mirazim Ruzimurodov profil surati",
      "aria.socials": "Ijtimoiy tarmoqlar va kontaktlar",
      "aria.links": "Arizalar",
    },

    ru: {
      "meta.title": "Миразим Рузимуродов",
      "profile.name": "Миразим Рузимуродов",
      "profile.bio": "Идущий своим путём. Бренд-дизайнер ('21), Университет Вебстера '27 (Международные отношения/Экономика), молодой предприниматель, путешественник, спортсмен. Умею молчать на 5+ языках. Подробнее 👇",
      "cta.telegramBlog": "Телеграм-блог",
      "social.behance": "Behance",
      "social.instagram": "Instagram",
      "social.facebook": "Facebook",
      "social.linkedin": "LinkedIn",
      "social.x": "X",
      "social.telegram": "Telegram",
      "social.phone": "Телефон",
      "social.email": "Email",
      "link.brand": "Создайте свой бренд",
      "link.workTravel": "Участвовать в Work and Travel",
      "link.greenCard": "Участвовать в Green Card’27",
      "footer.copyright": "© {year} Mirazim Ruzimurodov",
      "share.label": "Поделиться",
      "share.text": "Все ссылки Mirazim Ruzimurodov",
      "share.copied": "Ссылка скопирована",
      "lang.label": "Сменить язык",
      "lang.current": "Текущий: Русский",
      "lang.en": "English",
      "lang.uz": "Oʻzbekcha",
      "lang.ru": "Русский",
      "alt.avatar": "Фото профиля: Mirazim Ruzimurodov",
      "aria.socials": "Соцсети и контакты",
      "aria.links": "Заявки",
    },
  },

  /** Translate a key; falls back to English and warns if missing. */
  t(key, lang, vars) {
    const dict = this.strings[lang] || {};
    let str = dict[key];
    if (str === undefined) {
      if (lang !== "en") console.warn(`[i18n] Missing "${key}" for "${lang}", using English.`);
      str = this.strings.en[key];
      if (str === undefined) { console.warn(`[i18n] Unknown key "${key}"`); return key; }
    }
    if (vars) str = str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return str;
  },

  /** Priority: ?lang= URL param → localStorage → default (en). */
  resolveLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && this.supported.includes(fromUrl.toLowerCase())) return fromUrl.toLowerCase();
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved && this.supported.includes(saved)) return saved;
    } catch (e) { /* storage blocked (private mode) */ }
    return this.defaultLang;
  },
};

