import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#05081A] pt-20 pb-10 border-t border-white/5 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 relative">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C22.5 4 24.8 4.6 26.9 5.6" 
                                stroke="url(#footer_grad)" strokeWidth="5" strokeLinecap="round" />
                            <path d="M30 7.5C33.5 10.5 36 15 36 20" 
                                stroke="#34D399" strokeWidth="5" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="footer_grad" x1="4" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4F6FFF"/>
                                <stop offset="1" stopColor="#7A85FF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-baseline leading-none">
                            <span className={`text-2xl tracking-tight text-white ${language === 'ar' ? 'font-bold' : 'font-sans font-bold'}`}>
                            Otet
                            </span>
                            <span className={`text-2xl tracking-tight text-white ml-0.5 ${language === 'ar' ? 'font-normal' : 'font-sans font-light'}`}>
                            Markets
                            </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium mt-1">Otet Group LTD</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-500 mb-6 max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={`font-bold text-white mb-6 ${language === 'ar' ? 'font-bold' : ''}`}>{t.footer.columns.trading}</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.accountTypes}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.markets}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.platforms}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.fees}</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-white mb-6 ${language === 'ar' ? 'font-bold' : ''}`}>{t.footer.columns.company}</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.about}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.partners}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.careers}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-white mb-6 ${language === 'ar' ? 'font-bold' : ''}`}>{t.footer.columns.support}</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.help}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.legal}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.privacy}</a></li>
              <li><a href="#" className="hover:text-otet-blue">{t.footer.links.risk}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-gray-600 text-xs leading-relaxed text-justify">
          <p className="mb-4">
            {t.footer.riskWarning}
          </p>
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;