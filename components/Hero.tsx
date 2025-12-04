import React, { useState } from 'react';
import { ArrowRight, Zap, Shield, BarChart2 } from 'lucide-react';
import Button from './ui/Button';
import { generateHeroImage } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { t, language, dir } = useLanguage();

  const handleGenerateBackground = async () => {
    setIsGenerating(true);
    const prompt = "Futuristic trading holograms, neon blue/purple, 3D charts, fintech dashboard, 8K, cinematic lighting, dark background";
    const image = await generateHeroImage(prompt);
    if (image) {
      setHeroImage(image);
    }
    setIsGenerating(false);
  };

  const isRtl = dir === 'rtl';

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         {heroImage ? (
           <img 
            src={heroImage} 
            alt="AI Generated Background" 
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
           />
         ) : (
           <div className="w-full h-full bg-[#0A0F2C]">
             <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-otet-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
             <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-otet-purple/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
             
             {/* Abstract Grid */}
             <div className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
                  backgroundSize: '50px 50px' 
                }}>
             </div>
           </div>
         )}
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-[#0A0F2C]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className={`text-center lg:text-start space-y-8`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wider uppercase text-gray-300">{t.hero.liveMarkets}</span>
            </div>
            
            <h1 className={`text-5xl lg:text-7xl ${language === 'ar' ? 'font-bold' : 'font-display font-bold'} leading-tight`}>
              {t.hero.title} <br/>
              <span className="gradient-text">Otet Markets</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRtl ? 'lg:justify-start' : 'lg:justify-start'}`}>
              <Button size="lg" variant="primary" className="group">
                {t.hero.ctaPrimary}
                <ArrowRight className={`w-5 h-5 transition-transform ${isRtl ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
              </Button>
              <Button size="lg" variant="outline">
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className={`pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 font-medium`}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-otet-blue" />
                <span>{t.hero.regulated}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>{t.hero.execution}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-green-400" />
                <span>{t.hero.liquidity}</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative hidden lg:block" dir="ltr">
            {/* Main Visual - A floating glass card composition */}
            <div className="relative w-full aspect-square animate-float">
               <div className="absolute inset-0 bg-gradient-to-br from-otet-blue/10 to-otet-purple/10 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl p-6 flex flex-col items-center justify-center">
                 {/* Placeholder for the "Futuristic Interface" - Using CSS shapes to simulate UI */}
                 <div className="w-full h-full relative overflow-hidden rounded-2xl bg-[#05081A] border border-white/5 p-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-4 w-32 bg-white/10 rounded"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-full bg-white/5"></div>
                        <div className="h-8 w-8 rounded-full bg-otet-blue/50"></div>
                      </div>
                    </div>
                    {/* Chart Area */}
                    <div className="relative h-48 w-full bg-gradient-to-b from-otet-blue/5 to-transparent rounded-lg border border-white/5 mb-4 overflow-hidden">
                       <svg className="absolute bottom-0 left-0 right-0 h-full w-full" preserveAspectRatio="none">
                         <path d="M0,100 C100,50 200,80 300,40 C400,0 500,60 600,20 L600,200 L0,200 Z" fill="rgba(79, 111, 255, 0.2)" />
                         <path d="M0,100 C100,50 200,80 300,40 C400,0 500,60 600,20" fill="none" stroke="#4F6FFF" strokeWidth="2" />
                       </svg>
                    </div>
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-white/5">
                        <div className="text-xs text-gray-400 mb-1">EUR/USD</div>
                        <div className="text-lg font-bold text-white">1.0842<span className="text-xs align-top">5</span></div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                         <div className="text-xs text-gray-400 mb-1">{t.hero.profit}</div>
                         <div className="text-lg font-bold text-green-400">+$1,240.50</div>
                      </div>
                    </div>
                 </div>

                 {/* Floating Elements */}
                 <div className="absolute -top-6 -right-6 p-4 rounded-xl bg-otet-navy/90 border border-white/20 backdrop-blur-md shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{t.hero.speed}</div>
                        <div className="font-bold">12ms</div>
                      </div>
                    </div>
                 </div>

                 <div className="absolute -bottom-8 -left-8 p-4 rounded-xl bg-otet-navy/90 border border-white/20 backdrop-blur-md shadow-xl animate-float" style={{ animationDelay: '2.5s' }}>
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-otet-blue/20 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-otet-blue" />
                       </div>
                       <div>
                          <div className="text-xs text-gray-400">{t.hero.security}</div>
                          <div className="font-bold">{t.hero.securityDesc}</div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* AI Generator Button (Visible to demonstrate Gemini API capability) */}
            <div className="absolute -bottom-20 right-0">
               <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={handleGenerateBackground}
                  isLoading={isGenerating}
                  className="text-xs text-gray-500 hover:text-white"
                  title="Generate a new background using Gemini AI"
               >
                  Generate AI Background
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;