import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.markets, href: '#features' },
    { name: t.nav.platforms, href: '#platforms' },
    { name: t.nav.accounts, href: '#accounts' },
    { name: t.nav.partners, href: '#ib' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-otet-navy/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="relative flex items-center gap-3">
                {/* Logo Icon SVG */}
                <div className="w-10 h-10 relative">
                   <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      {/* Main Blue/Purple Circle Part */}
                      <path d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C22.5 4 24.8 4.6 26.9 5.6" 
                        stroke="url(#logo_grad)" strokeWidth="5" strokeLinecap="round" />
                      
                      {/* Teal Accent Part (Top Right) */}
                      <path d="M30 7.5C33.5 10.5 36 15 36 20" 
                        stroke="#34D399" strokeWidth="5" strokeLinecap="round" />
                        
                      <defs>
                        <linearGradient id="logo_grad" x1="4" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#4F6FFF"/>
                          <stop offset="1" stopColor="#7A85FF"/>
                        </linearGradient>
                      </defs>
                   </svg>
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col justify-center h-full pt-1">
                  <div className="flex items-baseline leading-none">
                    <span className={`text-2xl tracking-tight text-white ${language === 'ar' ? 'font-bold' : 'font-sans font-bold'}`}>
                      Otet
                    </span>
                    <span className={`text-2xl tracking-tight text-white ml-0.5 ${language === 'ar' ? 'font-normal' : 'font-sans font-light'}`}>
                      Markets
                    </span>
                  </div>
                </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm ${language === 'ar' ? 'font-bold text-base' : 'font-medium'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons & Lang Switch */}
          <div className="hidden md:flex items-center gap-4">
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
             >
                <Globe size={16} />
                <span>{language === 'en' ? 'AR' : 'EN'}</span>
             </button>
            <a href="#" className="text-white hover:text-otet-blue font-medium text-sm transition-colors">
              {t.nav.login}
            </a>
            <Button size="sm" variant="primary">
              {t.nav.openAccount}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium px-2"
             >
                {language === 'en' ? 'AR' : 'EN'}
             </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-otet-navy/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base ${language === 'ar' ? 'font-bold' : 'font-medium'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10 mt-4 flex flex-col gap-3 px-3">
              <Button variant="outline" className="w-full justify-center">{t.nav.login}</Button>
              <Button variant="primary" className="w-full justify-center">{t.nav.openAccount}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;