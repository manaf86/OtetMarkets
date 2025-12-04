import React, { useState } from 'react';
import Section from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useLanguage();

  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
           <h2 className={`text-3xl ${language === 'ar' ? 'font-bold' : 'font-display font-bold'} mb-4`}>{t.faq.title}</h2>
           <p className="text-gray-400">{t.faq.subtitle}</p>
        </div>
        
        <div className="space-y-4">
           {t.faq.items.map((item, idx) => (
             <div 
               key={idx} 
               className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                 openIndex === idx ? 'bg-white/10 border-otet-blue/30' : 'bg-white/5 border-white/5 hover:border-white/10'
               }`}
             >
               <button 
                 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                 className="w-full flex items-center justify-between p-6 text-start focus:outline-none"
               >
                 <span className={`font-medium text-lg ${language === 'ar' ? 'font-bold' : ''}`}>{item.q}</span>
                 {openIndex === idx ? <Minus size={20} className="text-otet-blue flex-shrink-0" /> : <Plus size={20} className="text-gray-400 flex-shrink-0" />}
               </button>
               
               <div 
                 className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ${
                   openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                 }`}
               >
                 {item.a}
               </div>
             </div>
           ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;