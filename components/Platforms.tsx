import React from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const Platforms: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <Section id="platforms">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative" dir="ltr">
           {/* Abstract Device Mockup Composition */}
           <div className="relative mx-auto w-full max-w-md aspect-[3/4]">
             {/* Mobile Phone Mockup */}
             <div className="absolute top-10 left-0 right-0 bottom-0 bg-[#05081A] rounded-[3rem] border-8 border-gray-800 shadow-2xl z-20 overflow-hidden">
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-otet-navy to-[#05081A] relative">
                   <div className="h-full w-full opacity-80" style={{
                      backgroundImage: 'radial-gradient(circle at 50% 0, #1e293b, transparent 70%)'
                   }}>
                      {/* Fake Chart UI */}
                      <div className="p-6 space-y-6">
                         <div className="flex justify-between items-center text-white">
                            <span className="font-bold text-lg">BTC/USD</span>
                            <span className="text-green-400 font-mono">$64,230.50</span>
                         </div>
                         <div className="h-40 bg-gradient-to-b from-green-500/10 to-transparent rounded-lg border-t border-green-500/50"></div>
                         <div className="space-y-3">
                            <div className="h-12 bg-white/5 rounded-lg flex items-center px-4 justify-between">
                              <span className="text-sm text-gray-400">Volume</span>
                              <span className="text-sm text-white">24.5M</span>
                            </div>
                            <div className="h-12 bg-otet-blue rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-otet-blue/20">
                               BUY
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Background Element (Tablet/Desktop hint) */}
             <div className="absolute top-0 -right-12 w-[120%] h-[90%] bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm -z-10 rotate-6 transform translate-y-12"></div>
             <div className="absolute top-20 -left-12 w-[120%] h-[80%] bg-otet-purple/10 rounded-3xl blur-2xl -z-20"></div>
           </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h2 className={`text-3xl md:text-5xl ${language === 'ar' ? 'font-bold' : 'font-display font-bold'}`}>
            {t.platforms.title} <br/>
          </h2>
          <p className="text-gray-400 text-lg">
            {t.platforms.subtitle}
          </p>

          <div className="space-y-6">
             <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-lg text-otet-blue">
                   <Monitor size={24} />
                </div>
                <div>
                   <h3 className={`text-xl ${language === 'ar' ? 'font-bold' : 'font-bold'}`}>{t.platforms.mt5Title}</h3>
                   <p className="text-gray-400 text-sm mt-1">{t.platforms.mt5Desc}</p>
                </div>
             </div>

             <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-lg text-otet-purple">
                   <Tablet size={24} />
                </div>
                <div>
                   <h3 className={`text-xl ${language === 'ar' ? 'font-bold' : 'font-bold'}`}>{t.platforms.ctraderTitle}</h3>
                   <p className="text-gray-400 text-sm mt-1">{t.platforms.ctraderDesc}</p>
                </div>
             </div>

             <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-lg text-green-400">
                   <Smartphone size={24} />
                </div>
                <div>
                   <h3 className={`text-xl ${language === 'ar' ? 'font-bold' : 'font-bold'}`}>{t.platforms.appTitle}</h3>
                   <p className="text-gray-400 text-sm mt-1">{t.platforms.appDesc}</p>
                </div>
             </div>
          </div>
          
          <div className="pt-4">
             <Button>{t.platforms.cta}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Platforms;