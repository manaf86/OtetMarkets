import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AccountTypes: React.FC = () => {
  const { t, language } = useLanguage();

  const accounts = [
    {
      ...t.accounts.types[0],
      deposit: "$50",
      spread: language === 'ar' ? "من 1.2" : "From 1.2",
      commission: language === 'ar' ? "لا يوجد" : "None",
      leverage: "1:500",
      highlight: false
    },
    {
      ...t.accounts.types[1],
      deposit: "$200",
      spread: language === 'ar' ? "من 0.0" : "From 0.0",
      commission: language === 'ar' ? "$3.50 / عقد" : "$3.50 / lot",
      leverage: "1:500",
      highlight: true
    },
    {
      ...t.accounts.types[2],
      deposit: "$100",
      spread: language === 'ar' ? "من 1.5" : "From 1.5",
      commission: language === 'ar' ? "لا يوجد" : "None",
      leverage: "1:200",
      highlight: false
    },
    {
      ...t.accounts.types[3],
      deposit: "$10,000",
      spread: language === 'ar' ? "من 0.0" : "From 0.0",
      commission: language === 'ar' ? "$2.00 / عقد" : "$2.00 / lot",
      leverage: "1:200",
      highlight: false
    }
  ];

  return (
    <Section id="accounts" darker>
       <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl ${language === 'ar' ? 'font-bold' : 'font-display font-bold'} mb-4`}>
          {t.accounts.title}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {t.accounts.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {accounts.map((acc, idx) => (
           <div 
             key={idx}
             className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
               acc.highlight 
                 ? 'bg-gradient-to-b from-white/10 to-white/5 border-otet-blue/50 shadow-lg shadow-otet-blue/10 transform md:-translate-y-4' 
                 : 'bg-white/5 border-white/10 hover:border-white/20'
             }`}
           >
             {acc.highlight && (
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-otet-blue text-xs font-bold uppercase tracking-wide rounded-full text-white shadow-lg whitespace-nowrap">
                 {t.accounts.mostPopular}
               </div>
             )}
             
             <div className="mb-6">
                <h3 className={`text-2xl ${language === 'ar' ? 'font-bold' : 'font-bold'}`}>{acc.name}</h3>
                <p className="text-sm text-gray-400">{acc.subtitle}</p>
             </div>

             <div className="mb-8">
                <div className="text-3xl font-bold">{acc.deposit}</div>
                <div className="text-sm text-gray-400">{t.accounts.deposit}</div>
             </div>

             <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between text-sm">
                   <span className="text-gray-400">{t.accounts.spread}</span>
                   <span className="font-bold">{acc.spread}</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-gray-400">{t.accounts.commission}</span>
                   <span className="font-bold">{acc.commission}</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-gray-400">{t.accounts.leverage}</span>
                   <span className="font-bold">{acc.leverage}</span>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-3">
                   {acc.features.map((feat, i) => (
                     <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check size={16} className="text-otet-blue flex-shrink-0" />
                        {feat}
                     </div>
                   ))}
                </div>
             </div>

             <Button 
               variant={acc.highlight ? 'primary' : 'outline'}
               className="w-full"
             >
               {t.accounts.open} {acc.name}
             </Button>
           </div>
         ))}
      </div>
    </Section>
  );
};

export default AccountTypes;