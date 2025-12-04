import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${darker ? 'bg-otet-dark' : 'bg-transparent'} ${className}`}
    >
      {/* Background radial gradient glow for atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-otet-blue rounded-full blur-[128px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-otet-purple rounded-full blur-[128px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;