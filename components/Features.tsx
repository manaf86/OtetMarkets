import React from 'react';
import { Layers, TrendingDown, Cpu, Globe } from 'lucide-react';
import Section from './ui/Section';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t, language } = useLanguage();

  const icons = [
    <Layers className="w-8 h-8 text-otet-blue" />,
    <TrendingDown className="w-8 h-8 text-otet-purple" />,
    <Cpu className="w-8 h-8 text-blue-400" />,
    <Globe className="w-8 h-8 text-green-400" />
  ];

  const features = t.features.cards.map((card, index) => ({
    ...card,
    icon: icons[index]
  }));

  return (
    <Section id="features" darker>
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl ${language === 'ar' ? 'font-bold' : 'font-display font-bold'} mb-4`}>
          {t.features.title} <span className="text-otet-blue">Otet Markets?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {t.features.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              {feature.icon}
            </div>
            <h3 className={`text-xl ${language === 'ar' ? 'font-bold' : 'font-bold'} mb-3`}>{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;