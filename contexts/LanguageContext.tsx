import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  nav: {
    markets: string;
    platforms: string;
    accounts: string;
    partners: string;
    login: string;
    openAccount: string;
  };
  hero: {
    liveMarkets: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    regulated: string;
    execution: string;
    liquidity: string;
    profit: string;
    security: string;
    securityDesc: string;
    speed: string;
  };
  features: {
    title: string;
    subtitle: string;
    cards: Array<{ title: string; description: string }>;
  };
  platforms: {
    title: string;
    subtitle: string;
    mt5Title: string;
    mt5Desc: string;
    ctraderTitle: string;
    ctraderDesc: string;
    appTitle: string;
    appDesc: string;
    cta: string;
  };
  accounts: {
    title: string;
    subtitle: string;
    deposit: string;
    spread: string;
    commission: string;
    leverage: string;
    open: string;
    mostPopular: string;
    types: Array<{
      name: string;
      subtitle: string;
      features: string[];
    }>;
  };
  ib: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: {
    desc: string;
    columns: {
      trading: string;
      company: string;
      support: string;
    };
    links: {
      accountTypes: string;
      markets: string;
      platforms: string;
      fees: string;
      about: string;
      partners: string;
      careers: string;
      contact: string;
      help: string;
      legal: string;
      privacy: string;
      risk: string;
    };
    riskWarning: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      markets: 'Markets',
      platforms: 'Platforms',
      accounts: 'Accounts',
      partners: 'Partners',
      login: 'Log In',
      openAccount: 'Open Account',
    },
    hero: {
      liveMarkets: 'Live Markets Active',
      title: 'Trade Smarter with',
      subtitle: 'Experience the future of trading with ultra-low spreads, institutional-grade execution, and powerful AI analytics on MT5 & cTrader.',
      ctaPrimary: 'Open Account',
      ctaSecondary: 'Try Free Demo',
      regulated: 'Regulated',
      execution: '0.0ms Execution',
      liquidity: 'Deep Liquidity',
      profit: 'Profit',
      security: 'Security',
      securityDesc: 'Institutional',
      speed: 'Execution Speed'
    },
    features: {
      title: 'Why Choose',
      subtitle: 'We combine cutting-edge technology with deep liquidity to provide the ultimate trading environment.',
      cards: [
        { title: 'Multi-Asset Trading', description: 'Access Forex, Indices, Commodities, Stocks, and Crypto from a single integrated account.' },
        { title: 'Ultra-Low Spreads', description: 'Trade with raw spreads starting from 0.0 pips on major pairs. Keep more of your profit.' },
        { title: 'MT5 & cTrader', description: 'Choose between the worlds most popular trading platforms tailored for precision execution.' },
        { title: 'Fast Execution', description: 'Equinix NY4 servers ensure your trades are executed in milliseconds. No requotes.' }
      ]
    },
    platforms: {
      title: 'Powerful Platforms for Every Trader',
      subtitle: 'Whether you are a scalper, day trader, or algorithmic trader, Otet Markets provides the industry-standard platforms you need to succeed.',
      mt5Title: 'MetaTrader 5 (MT5)',
      mt5Desc: 'The multi-asset successor to MT4. Advanced charting, more timeframes, and built-in depth of market.',
      ctraderTitle: 'cTrader',
      ctraderDesc: 'Designed for ECN trading. Sleek interface, Level II pricing, and ultra-fast execution speeds.',
      appTitle: 'Otet Mobile App',
      appDesc: 'Trade on the go with our proprietary mobile app. Seamlessly syncs with your desktop account.',
      cta: 'Download Platforms'
    },
    accounts: {
      title: 'Tailored Trading Accounts',
      subtitle: 'Choose the account that fits your trading style. Transparent pricing with no hidden fees.',
      deposit: 'Min. Deposit',
      spread: 'Spread',
      commission: 'Commission',
      leverage: 'Leverage',
      open: 'Open',
      mostPopular: 'Most Popular',
      types: [
        { name: "Standard", subtitle: "For new traders", features: ["MT5 & cTrader", "Mobile Trading", "Daily Analysis"] },
        { name: "ECN Raw", subtitle: "For professionals", features: ["Raw Spreads", "Priority Support", "VPS Available"] },
        { name: "Swap-Free", subtitle: "Islamic friendly", features: ["Sharia Compliant", "No Swap Fees", "Dedicated Manager"] },
        { name: "Premium", subtitle: "For high volume", features: ["Institutional Fees", "1-on-1 Strategy", "Free VPS"] }
      ]
    },
    ib: {
      title: 'Partner with a Global Leader',
      subtitle: 'Join our Introducing Broker (IB) program and earn high commissions for every client you refer.',
      ctaPrimary: 'Become a Partner',
      ctaSecondary: 'Learn More'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about trading with Otet Markets.',
      items: [
        { q: "How do I open a live trading account?", a: "Click on 'Open Account' in the top right corner. Complete the registration form, upload your KYC documents, and once approved, you can fund your account and start trading immediately." },
        { q: "What deposit methods do you accept?", a: "We accept Bank Wire, Credit/Debit Cards (Visa/Mastercard), Skrill, Neteller, and major Cryptocurrencies (BTC, ETH, USDT)." },
        { q: "Are my funds safe with Otet Markets?", a: "Yes. We segregate client funds in top-tier banks, separate from company operational funds. We adhere to strict regulatory guidelines to ensure capital safety." },
        { q: "What is the minimum deposit?", a: "Our Standard Account starts with a minimum deposit of just $50, making it accessible for traders of all levels." },
        { q: "Do you offer demo accounts?", a: "Yes, you can open an unlimited free demo account with virtual funds to practice your strategies on MT5 or cTrader before trading with real money." },
        { q: "Can I use Expert Advisors (EAs)?", a: "Absolutely. All our account types support the use of Expert Advisors (EAs) and algorithmic trading strategies." }
      ]
    },
    footer: {
      desc: 'Otet Markets is a premium multi-asset broker providing traders with ultra-low spreads, fast execution, and institutional grade trading conditions.',
      columns: {
        trading: 'Trading',
        company: 'Company',
        support: 'Support'
      },
      links: {
        accountTypes: 'Account Types',
        markets: 'Markets',
        platforms: 'Platforms',
        fees: 'Spreads & Fees',
        about: 'About Us',
        partners: 'Partners (IB)',
        careers: 'Careers',
        contact: 'Contact Us',
        help: 'Help Center',
        legal: 'Legal Documents',
        privacy: 'Privacy Policy',
        risk: 'Risk Disclosure'
      },
      riskWarning: 'Risk Warning: Trading Forex and CFDs involves a high level of risk to your capital and you should only trade with money you can afford to lose. Trading Forex and CFDs may not be suitable for all investors, so please ensure that you fully understand the risks involved and seek independent advice if necessary.',
      rights: 'Otet Markets. All rights reserved.'
    }
  },
  ar: {
    nav: {
      markets: 'الأسواق',
      platforms: 'المنصات',
      accounts: 'الحسابات',
      partners: 'الشركاء',
      login: 'تسجيل الدخول',
      openAccount: 'افتح حساب',
    },
    hero: {
      liveMarkets: 'الأسواق مباشرة الآن',
      title: 'تداول بذكاء مع',
      subtitle: 'اختبر مستقبل التداول مع سبريد منخفض للغاية، وتنفيذ مؤسسي، وتحليلات الذكاء الاصطناعي القوية على MT5 و cTrader.',
      ctaPrimary: 'افتح حساب حقيقي',
      ctaSecondary: 'جرب الحساب التجريبي',
      regulated: 'مرخص وموثوق',
      execution: 'تنفيذ 0.0ms',
      liquidity: 'سيولة عميقة',
      profit: 'ربح',
      security: 'أمان',
      securityDesc: 'مؤسسي',
      speed: 'سرعة التنفيذ'
    },
    features: {
      title: 'لماذا تختار',
      subtitle: 'نجمع بين أحدث التقنيات والسيولة العميقة لتوفير بيئة التداول المثالية.',
      cards: [
        { title: 'تداول متعدد الأصول', description: 'الوصول إلى الفوركس والمؤشرات والسلع والأسهم والعملات المشفرة من حساب واحد.' },
        { title: 'سبريد منخفض للغاية', description: 'تداول بفروق أسعار خام تبدأ من 0.0 نقطة على الأزواج الرئيسية. احتفظ بالمزيد من أرباحك.' },
        { title: 'MT5 و cTrader', description: 'اختر من بين منصات التداول الأكثر شهرة في العالم والمصممة للتنفيذ الدقيق.' },
        { title: 'تنفيذ سريع', description: 'تضمن خوادم Equinix NY4 تنفيذ صفقاتك في أجزاء من الثانية. بدون إعادة تسعير.' }
      ]
    },
    platforms: {
      title: 'منصات قوية لكل متداول',
      subtitle: 'سواء كنت مضاربًا أو متداولًا يوميًا أو تستخدم التداول الآلي، توفر Otet Markets المنصات القياسية في الصناعة التي تحتاجها للنجاح.',
      mt5Title: 'ميتاتريدر 5 (MT5)',
      mt5Desc: 'الخليفة متعدد الأصول لـ MT4. رسوم بيانية متقدمة، وأطر زمنية أكثر، وعمق سوق مدمج.',
      ctraderTitle: 'سي تريدر (cTrader)',
      ctraderDesc: 'مصممة لتداول ECN. واجهة أنيقة، وتسعير المستوى الثاني، وسرعات تنفيذ فائقة.',
      appTitle: 'تطبيق Otet للجوال',
      appDesc: 'تداول أثناء التنقل مع تطبيقنا الخاص. يتزامن بسلاسة مع حساب سطح المكتب الخاص بك.',
      cta: 'حمل المنصات'
    },
    accounts: {
      title: 'حسابات تداول مخصصة',
      subtitle: 'اختر الحساب الذي يناسب أسلوب تداولك. تسعير شفاف بدون رسوم خفية.',
      deposit: 'الحد الأدنى للإيداع',
      spread: 'السبريد',
      commission: 'العمولة',
      leverage: 'الرافعة المالية',
      open: 'افتح حساب',
      mostPopular: 'الأكثر شعبية',
      types: [
        { name: "القياسي", subtitle: "للمتداولين الجدد", features: ["MT5 و cTrader", "تداول عبر الهاتف", "تحليل يومي"] },
        { name: "ECN Raw", subtitle: "للمحترفين", features: ["سبريد خام", "دعم ذو أولوية", "VPS متاح"] },
        { name: "إسلامي", subtitle: "متوافق مع الشريعة", features: ["متوافق مع الشريعة", "بدون فوائد تبييت", "مدير حساب خاص"] },
        { name: "بريميوم", subtitle: "للأحجام الكبيرة", features: ["رسوم مؤسسية", "استراتيجية 1-على-1", "VPS مجاني"] }
      ]
    },
    ib: {
      title: 'شارك نجاحك مع قائد عالمي',
      subtitle: 'انضم إلى برنامج الوسيط المعرف (IB) واكسب عمولات عالية لكل عميل تحيله.',
      ctaPrimary: 'كن شريكاً',
      ctaSecondary: 'اعرف المزيد'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج لمعرفته حول التداول مع Otet Markets.',
      items: [
        { q: "كيف أفتح حساب تداول حقيقي؟", a: "اضغط على 'افتح حساب' في الزاوية العلوية. أكمل نموذج التسجيل، وارفع وثائق الهوية، وبمجرد الموافقة، يمكنك تمويل حسابك والبدء في التداول فوراً." },
        { q: "ما هي طرق الإيداع المقبولة؟", a: "نقبل الحوالات البنكية، بطاقات الائتمان (فيزا/ماستركارد)، سكريل، نتلر، والعملات الرقمية (BTC, ETH, USDT)." },
        { q: "هل أموالي آمنة مع Otet Markets؟", a: "نعم. نقوم بفصل أموال العملاء في بنوك من الدرجة الأولى، منفصلة عن أموال الشركة التشغيلية. نلتزم بمعايير تنظيمية صارمة لضمان سلامة رأس المال." },
        { q: "ما هو الحد الأدنى للإيداع؟", a: "يبدأ حسابنا القياسي بحد أدنى للإيداع يبلغ 50 دولاراً فقط، مما يجعله متاحاً للمتداولين من جميع المستويات." },
        { q: "هل تقدمون حسابات تجريبية؟", a: "نعم، يمكنك فتح حساب تجريبي مجاني غير محدود بأموال افتراضية لممارسة استراتيجياتك على MT5 أو cTrader قبل التداول بمال حقيقي." },
        { q: "هل يمكنني استخدام المستشارين الخبراء (EAs)؟", a: "بالتأكيد. تدعم جميع أنواع حساباتنا استخدام المستشارين الخبراء (EAs) واستراتيجيات التداول الآلي." }
      ]
    },
    footer: {
      desc: 'أوتيت ماركتس هي وسيط متعدد الأصول متميز يوفر للمتداولين فروق أسعار منخفضة للغاية وتنفيذ سريع وظروف تداول على مستوى المؤسسات.',
      columns: {
        trading: 'التداول',
        company: 'الشركة',
        support: 'الدعم'
      },
      links: {
        accountTypes: 'أنواع الحسابات',
        markets: 'الأسواق',
        platforms: 'المنصات',
        fees: 'الفروق والرسوم',
        about: 'من نحن',
        partners: 'الشركاء (IB)',
        careers: 'وظائف',
        contact: 'اتصل بنا',
        help: 'مركز المساعدة',
        legal: 'وثائق قانونية',
        privacy: 'سياسة الخصوصية',
        risk: 'إفشاء المخاطر'
      },
      riskWarning: 'تحذير المخاطر: ينطوي تداول الفوركس والعقود مقابل الفروقات على مستوى عالٍ من المخاطر على رأس مالك ويجب عليك التداول فقط بالأموال التي يمكنك تحمل خسارتها. قد لا يكون تداول الفوركس والعقود مقابل الفروقات مناسبًا لجميع المستثمرين، لذا يرجى التأكد من فهمك الكامل للمخاطر التي ينطوي عليها الأمر وطلب المشورة المستقلة إذا لزم الأمر.',
      rights: 'Otet Markets. جميع الحقوق محفوظة.'
    }
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === 'ar' ? 'rtl' : 'ltr'
  };

  return (
    <LanguageContext.Provider value={value as any}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};