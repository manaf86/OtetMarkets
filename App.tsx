import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Platforms from './components/Platforms';
import AccountTypes from './components/AccountTypes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Button from './components/ui/Button';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Simple fallback loader
const PageLoader = () => (
  <div className="min-h-screen bg-[#0A0F2C] flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-otet-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const MainContent = () => {
  const { t, dir, language } = useLanguage();
  const fontClass = language === 'ar' ? 'font-arabic' : 'font-sans';

  return (
    <div dir={dir} className={`bg-[#0A0F2C] text-white selection:bg-otet-blue selection:text-white ${fontClass} overflow-x-hidden`}>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Ticker / Trust Bar */}
        <div className="border-y border-white/5 bg-white/[0.02] py-4 overflow-hidden">
            <div className="flex items-center justify-around min-w-full animate-pulse opacity-50 text-xs font-mono uppercase tracking-widest gap-8">
              <span>EUR/USD 1.08450</span>
              <span>GBP/USD 1.26300</span>
              <span>USD/JPY 149.500</span>
              <span>BTC/USD 64,250.00</span>
              <span>XAU/USD 2,340.50</span>
              <span className="hidden md:inline">ETH/USD 3,450.00</span>
            </div>
        </div>

        <Features />
        <Platforms />
        <AccountTypes />
        
        {/* IB Section / CTA Banner */}
        <section id="ib" className="py-20 px-4">
          <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-otet-blue to-otet-purple opacity-20"></div>
            <div className="absolute inset-0 bg-[#0A0F2C]/40 backdrop-blur-3xl"></div>
            
            <div className="relative z-10 p-12 md:p-24 text-center">
                <h2 className={`text-4xl md:text-6xl ${language === 'ar' ? 'font-bold' : 'font-display font-bold'} mb-6`}>
                  {t.ib.title}
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                  {t.ib.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="primary">{t.ib.ctaPrimary}</Button>
                  <Button size="lg" variant="outline">{t.ib.ctaSecondary}</Button>
                </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<PageLoader />}>
        <MainContent />
      </Suspense>
    </LanguageProvider>
  );
}

export default App;