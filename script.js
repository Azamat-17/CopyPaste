document.getElementById('year').textContent = new Date().getFullYear();

const burger = document.getElementById('burger');
const nav = document.getElementById('main-nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('mobile-open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  ky: {
    nav_services: 'Кызматтар',
    nav_about: 'Биз жөнүндө',
    nav_contacts: 'Байланыш',
    call_btn: 'Чалуу',
    hero_eyebrow: 'Таласта көчүрмө кызматтары',
    hero_h1: 'Документтерди басып чыгаруу, көчүрүү жана документ үчүн сүрөт — тез жана сапаттуу',
    hero_sub: 'Ксерокопия, басып чыгаруу, тиктирүү жана ламинирлөө. Күн сайын иштейбиз, келиңиз же алдын ала чалыңыз.',
    whatsapp_btn: 'WhatsApp аркылуу жазуу',
    address_text: 'Талас ш., Манас көч., 185',
    hours_text: 'Күн сайын 09:00–18:00',
    services_eyebrow: 'Кызматтар',
    services_title: 'Биз эмне менен жардам бере алабыз',
    service1_title: 'Документтерди көчүрүү жана басып чыгаруу',
    service1_desc: 'Ак-кара жана түстүү басып чыгаруу, А4 форматында көчүрүү. Каалаган документти тез басып беребиз жана көчүрөбүз.',
    service2_title: 'Тиктирүү жана ламинирлөө',
    service2_desc: 'Документтерди, дипломдорду жана отчётторду пружиналуу тиктирүү, ошондой эле барактарды жана маанилүү кагаздарды ламинирлөө.',
    service3_title: 'Документ үчүн сүрөт',
    service3_desc: 'Паспортко, визага жана башка документтерге сүрөт тартабыз, ошондой эле каалаган форматта сүрөт басып беребиз.',
    price_link: 'Баасын билүү →',
    about_eyebrow: 'Биз жөнүндө',
    about_p1: 'Биз — Таластын так борборундагы копи-борборбуз. Каалаган документти тез басып чыгарууга, көчүрүүгө, тиктирүүгө жана ламинирлөөгө жардам беребиз — кезексиз жана узак күтүүсүз.',
    about_p2: 'Убактыңызды баалайсызбы? Биз да. Күн сайын 09:00дөн 18:00гө чейин келиңиз — же WhatsApp аркылуу алдын ала жазыңыз.',
    rights: 'Бардык укуктар корголгон.',
    page_title: 'CopyPaste — Таласта копи-борбор',
    page_description: 'CopyPaste — Таластагы копи-борбор. Документтерди көчүрүү жана басып чыгаруу, тиктирүү жана ламинирлөө. Күн сайын 09:00–18:00.',
    menu_aria: 'Менюну ачуу',
  },
  ru: {
    nav_services: 'Услуги',
    nav_about: 'О нас',
    nav_contacts: 'Контакты',
    call_btn: 'Позвонить',
    hero_eyebrow: 'Копировальные услуги в Таласе',
    hero_h1: 'Печать, копирование документов и фото на документ — быстро и качественно',
    hero_sub: 'Ксерокопия, печать, переплёт и ламинирование. Работаем каждый день, приходите или звоните заранее.',
    whatsapp_btn: 'Написать в WhatsApp',
    address_text: 'г. Талас, ул. Манас, 185',
    hours_text: 'Ежедневно 09:00–18:00',
    services_eyebrow: 'Услуги',
    services_title: 'Чем мы можем помочь',
    service1_title: 'Ксерокопия и печать документов',
    service1_desc: 'Чёрно-белая и цветная печать, копирование в формате А4. Быстро распечатаем и скопируем любые документы.',
    service2_title: 'Переплёт и ламинирование',
    service2_desc: 'Пружинный переплёт документов, дипломов и отчётов, а также ламинирование листов и важных бумаг.',
    service3_title: 'Фото на документы',
    service3_desc: 'Фотографии на паспорт, визу и другие документы, а также печать фотографий в любом формате.',
    price_link: 'Узнать цену →',
    about_eyebrow: 'О нас',
    about_p1: 'Мы — копи-центр в самом сердце Таласа. Помогаем быстро распечатать, скопировать, переплести и заламинировать любые документы — без очередей и лишнего ожидания.',
    about_p2: 'Цените своё время? Мы тоже. Заходите в любой день с 09:00 до 18:00 — или напишите нам заранее в WhatsApp.',
    rights: 'Все права защищены.',
    page_title: 'CopyPaste — копи-центр в Таласе',
    page_description: 'CopyPaste — копи-центр в Таласе. Ксерокопия и печать документов, переплёт и ламинирование. Ежедневно 09:00–18:00.',
    menu_aria: 'Открыть меню',
  },
};

const langButtons = document.querySelectorAll('.lang-btn');
const metaDescription = document.querySelector('meta[name="description"]');

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ky;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  document.title = dict.page_title;
  if (metaDescription) metaDescription.setAttribute('content', dict.page_description);
  burger.setAttribute('aria-label', dict.menu_aria);

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem('cp_lang', lang);
  } catch (e) {
    /* ignore storage errors (private mode, disabled storage) */
  }
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

let initialLang = 'ky';
try {
  initialLang = localStorage.getItem('cp_lang') || 'ky';
} catch (e) {
  /* ignore storage errors */
}
applyLanguage(initialLang);
