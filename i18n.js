/* ============================================================
   I18N — English (default) · Turkish · Persian
   Persists choice in localStorage. Toggles dir="rtl" for FA.
============================================================ */

const translations = {
  en: {
    /* Nav */
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    /* Hero */
    'hero.location': 'UX/UI Design · Brand Identity · Istanbul, Turkey',
    'hero.greeting': 'Hi',
    'hero.tagline': "Hi! I'm a UX/UI Designer and Brand Identity Specialist based in Istanbul.<br>Let's create something meaningful together.",
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    'hero.scroll': 'Scroll',
    /* Available badge */
    'avail.text': 'Available for work',
    /* Services */
    'services.heading': 'WHAT I CAN<br>DO FOR YOU',
    'services.sub': 'I craft digital experiences where design meets purpose combining UX thinking, visual clarity, and brand identity to create meaningful impact.',
    'services.uiux': 'UX/UI DESIGN',
    'services.brand': 'BRAND IDENTITY',
    'services.uiux1': 'Wireframing & Prototyping',
    'services.uiux2': 'User Interface Design (Web / Mobile)',
    'services.uiux3': 'Usability Testing & Analysis',
    'services.uiux4': 'Interaction Design with Micro-animations',
    'services.brand1': 'Logo & Brand Design',
    'services.brand2': 'Social Media Graphics',
    'services.brand3': 'Infographics & Data Visualisation',
    'services.brand4': 'Custom Illustrations & Icons',
    /* About */
    'about.heading': 'ABOUT ME',
    'about.bio': "Hi, I'm Bahareh — I craft digital experiences where design meets purpose combining UX thinking, visual clarity, and brand identity to create meaningful impact. I bridge strategy with creativity — solving real problems through thoughtful design and impactful storytelling.",
    'about.years': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.clients': 'Clients on Worldwide',
    'about.callToday': 'Call Today :',
    'about.emailLabel': 'Email :',
    'about.myStory': 'MY STORY',
    'about.downloadResume': 'Download Resume',
    /* Projects */
    'projects.heading': 'FEATURED PROJECTS',
    'projects.websiteSub': 'Website Design',
    'projects.appSub': 'Mobile App Design',
    'projects.redesignSub': 'Website Redesign',
    'projects.brandSub': 'Brand Identity Design',
    'projects.tagWebsite': 'UX/UI · Website',
    'projects.tagApp': 'UX/UI · App',
    'projects.tagRedesign': 'UX/UI · Redesign',
    'projects.tagBrand': 'Brand Identity',
    'projects.descPockigo': "A travel planning platform that creates personalised itineraries based on users' preferences and needs.",
    'projects.descApp': 'Mobile companion for tracking and adapting itineraries in real time while travelling.',
    'projects.descSaving': "A boutique skincare studio's website redesigned for clarity, trust, and a seamless booking experience.",
    'projects.descVelora': 'A cohesive brand identity system — logo design, color palette, and visual language for a premium brand.',
    /* AI section */
    'ai.eyebrow': 'AI-Assisted Workflow',
    'ai.heading': 'CREATING CONTENT<br>WITH AI TOOLS',
    'ai.sub': 'A behind-the-scenes look at how I use AI tools alongside traditional design — for image generation, ideation, copywriting, and visual exploration. Each piece below pairs a brief with the AI tool that helped shape it.',
    'ai.imgTag': 'Image Generation',
    'ai.imgTitle': 'AI Image Generation',
    'ai.imgDesc': 'Concept exploration, mood boards, hero imagery and brand visuals — generated and refined with AI tools, then polished by hand.',
    'ai.videoTag': 'Video Generation',
    'ai.videoTitle': 'AI Video Generation',
    'ai.videoDesc': 'Short motion pieces and product reveals created with AI video tools — from prompt to storyboard to final cut.',
    'ai.viewWork': 'View Work →',
    /* Contact */
    'contact.eyebrow': "Let's Connect",
    'contact.heading': "LET'S WORK<br>TOGETHER",
    'contact.sub': "Let's build something impactful together — whether it's your brand, your website, or your next big idea.",
    'contact.formName': 'Name',
    'contact.formEmail': 'Email',
    'contact.formService': 'Service Needed ?',
    'contact.formMessage': 'What Can I Help You...',
    'contact.submit': 'SUBMIT',
    'contact.namePh': 'John Smith',
    'contact.emailPh': 'johnsmith@gmail.com',
    'contact.servicePh': 'Select...',
    'contact.messagePh': "Hello, I'd like to enquire about...",
    /* Footer */
    'footer.email': 'Email :',
    'footer.callToday': 'Call Today :',
    'footer.social': 'Social :',
    'footer.copyright': '© Copyright 2025. All Rights Reserved by Bahareh Ahrabi',
    'footer.backToTop': 'Back to top ↑',
  },

  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.projects': 'Projeler',
    'nav.resume': 'Özgeçmiş',
    'nav.contact': 'İletişim',
    'hero.location': 'UX/UI Tasarımı · Marka Kimliği · İstanbul, Türkiye',
    'hero.greeting': 'Selam',
    'hero.tagline': 'Merhaba! İstanbul\'da yaşayan bir UX/UI Tasarımcı ve Marka Kimliği Uzmanıyım.<br>Birlikte anlamlı bir şeyler yaratalım.',
    'hero.viewWork': 'İşlerimi Gör',
    'hero.getInTouch': 'İletişime Geç',
    'hero.scroll': 'Kaydır',
    'avail.text': 'İş için müsait',
    'services.heading': 'SİZİN İÇİN<br>NELER YAPABİLİRİM',
    'services.sub': 'Tasarımın amaçla buluştuğu dijital deneyimler tasarlıyorum — UX düşüncesi, görsel netlik ve marka kimliğini birleştirerek anlamlı etki yaratıyorum.',
    'services.uiux': 'UX/UI TASARIMI',
    'services.brand': 'MARKA KİMLİĞİ',
    'services.uiux1': 'Wireframe & Prototipleme',
    'services.uiux2': 'Kullanıcı Arayüzü Tasarımı (Web / Mobil)',
    'services.uiux3': 'Kullanılabilirlik Testi & Analizi',
    'services.uiux4': 'Mikro-animasyonlu Etkileşim Tasarımı',
    'services.brand1': 'Logo & Marka Tasarımı',
    'services.brand2': 'Sosyal Medya Grafikleri',
    'services.brand3': 'İnfografik & Veri Görselleştirme',
    'services.brand4': 'Özel İllüstrasyon & İkonlar',
    'about.heading': 'HAKKIMDA',
    'about.bio': 'Merhaba, ben Bahareh — tasarımın amaçla buluştuğu dijital deneyimler yaratıyorum. UX düşüncesini, görsel netliği ve marka kimliğini birleştirerek anlamlı etki yaratıyorum. Stratejiyi yaratıcılıkla birleştiriyor, düşünceli tasarım ve etkileyici hikaye anlatımı yoluyla gerçek sorunları çözüyorum.',
    'about.years': 'Yıllık Deneyim',
    'about.projects': 'Tamamlanan Proje',
    'about.clients': 'Dünya Çapında Müşteri',
    'about.callToday': 'Bugün Ara :',
    'about.emailLabel': 'E-posta :',
    'about.myStory': 'HİKAYEM',
    'about.downloadResume': 'Özgeçmişi İndir',
    'projects.heading': 'ÖNE ÇIKAN PROJELER',
    'projects.websiteSub': 'Web Sitesi Tasarımı',
    'projects.appSub': 'Mobil Uygulama Tasarımı',
    'projects.redesignSub': 'Web Sitesi Yeniden Tasarımı',
    'projects.brandSub': 'Marka Kimliği Tasarımı',
    'projects.tagWebsite': 'UX/UI · Web Sitesi',
    'projects.tagApp': 'UX/UI · Uygulama',
    'projects.tagRedesign': 'UX/UI · Yeniden Tasarım',
    'projects.tagBrand': 'Marka Kimliği',
    'projects.descPockigo': 'Kullanıcıların tercihlerine ve ihtiyaçlarına göre kişiselleştirilmiş seyahat planları oluşturan bir seyahat planlama platformu.',
    'projects.descApp': 'Seyahat sırasında planlarınızı gerçek zamanlı takip etmek ve uyarlamak için mobil yardımcı.',
    'projects.descSaving': 'Butik bir cilt bakım stüdyosunun web sitesi — netlik, güven ve kusursuz rezervasyon deneyimi için yeniden tasarlandı.',
    'projects.descVelora': 'Premium bir marka için bütünleşik marka kimlik sistemi — logo tasarımı, renk paleti ve görsel dil.',
    'ai.eyebrow': 'AI Destekli İş Akışı',
    'ai.heading': 'AI ARAÇLARIYLA<br>İÇERİK ÜRETMEK',
    'ai.sub': 'Geleneksel tasarımın yanında AI araçlarını nasıl kullandığıma dair perde arkası — görsel üretimi, fikir geliştirme, metin yazımı ve görsel keşif için.',
    'ai.imgTag': 'Görsel Üretimi',
    'ai.imgTitle': 'AI Görsel Üretimi',
    'ai.imgDesc': 'Konsept keşfi, mood board, kahraman görselleri ve marka görselleri — AI araçlarıyla üretilip elle rafine edildi.',
    'ai.videoTag': 'Video Üretimi',
    'ai.videoTitle': 'AI Video Üretimi',
    'ai.videoDesc': 'Kısa hareketli parçalar ve ürün tanıtımları AI video araçlarıyla oluşturuldu — promptan storyboarda kadar.',
    'ai.viewWork': 'Çalışmayı Gör →',
    'contact.eyebrow': 'İletişime Geçin',
    'contact.heading': 'BİRLİKTE<br>ÇALIŞALIM',
    'contact.sub': 'Birlikte etkili bir şey yaratalım — markanız, web siteniz veya bir sonraki büyük fikriniz olsun.',
    'contact.formName': 'Ad',
    'contact.formEmail': 'E-posta',
    'contact.formService': 'Hangi Hizmeti İstiyorsunuz?',
    'contact.formMessage': 'Size Nasıl Yardımcı Olabilirim...',
    'contact.submit': 'GÖNDER',
    'contact.namePh': 'Ad Soyad',
    'contact.emailPh': 'eposta@ornek.com',
    'contact.servicePh': 'Seçiniz...',
    'contact.messagePh': 'Merhaba, sormak istediğim...',
    'footer.email': 'E-posta :',
    'footer.callToday': 'Bugün Ara :',
    'footer.social': 'Sosyal :',
    'footer.copyright': '© Telif Hakkı 2025. Tüm hakları Bahareh Ahrabi tarafından saklıdır.',
    'footer.backToTop': 'Yukarı dön ↑',
  },

};

const I18N_KEY = 'site-lang';
const DEFAULT_LANG = 'en';

function getLang() {
  return localStorage.getItem(I18N_KEY) || DEFAULT_LANG;
}

function setLang(lang) {
  if (!translations[lang]) return;
  localStorage.setItem(I18N_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  // Update text content via data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] === undefined) return;
    if (key.endsWith('.tagline') || key.endsWith('.heading') || key.endsWith('.text')) {
      el.innerHTML = dict[key];      // allow <br> in long strings
    } else {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Update aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  // Set <html> lang + dir
  document.documentElement.lang = lang;
  document.documentElement.dir = 'ltr';

  // Update body class for language-specific styling
  document.body.classList.remove('lang-en', 'lang-tr');
  document.body.classList.add('lang-' + lang);

  // Update active button state
  document.querySelectorAll('.lang-switch__btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());

  // Wire up the switcher buttons
  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
