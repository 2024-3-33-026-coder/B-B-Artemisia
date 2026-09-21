import React, { useState } from 'react';
import { SARDINIA_EXPERIENCES } from '../data/property';
import { ExperienceCategory } from '../types';
import { Compass, Check } from 'lucide-react';

export const SardiniaExperiences: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(SARDINIA_EXPERIENCES[0].id);

  const current = SARDINIA_EXPERIENCES.find((item) => item.id === activeId) || SARDINIA_EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F4F0E8] border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
            EXPERIENCE SARDINIA
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.1]">
            Curated Discoveries <br />
            <span className="italic font-light text-[#30372E]">in Northwestern Sardinia.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#20201D]/75 font-light leading-relaxed mt-5">
            Inspired by slow travel and genuine local living, here is a curated introduction to the sea,
            heritage, and flavors awaiting your exploration around Alghero.
          </p>
        </div>

        {/* Four Seasons Inspired Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-[#D8CDBB] pb-4 mb-12">
          {SARDINIA_EXPERIENCES.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setActiveId(exp.id)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium transition-all whitespace-nowrap rounded-xs cursor-pointer ${
                  isActive
                    ? 'bg-[#30372E] text-[#F4F0E8] font-semibold shadow-xs'
                    : 'text-[#20201D]/70 hover:text-[#20201D] hover:bg-[#EFECE6]'
                }`}
              >
                {exp.tag}
              </button>
            );
          })}
        </div>

        {/* Editorial Showcase for Selected Category */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#EFECE6]/50 border border-[#D8CDBB] p-6 sm:p-10 md:p-14 rounded-xs">
          
          {/* Photography Column (6 cols) */}
          <div className="lg:col-span-6 overflow-hidden rounded-xs border border-[#D8CDBB] shadow-xs">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-[360px] sm:h-[440px] md:h-[480px] object-cover hover:scale-102 transition-transform duration-700"
            />
          </div>

          {/* Storytelling Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#A7664D] font-medium mb-2">
              {current.subtitle}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#20201D] font-normal leading-tight mb-5">
              {current.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#20201D]/80 font-light leading-relaxed mb-8">
              {current.description}
            </p>

            <div className="border-t border-[#D8CDBB] pt-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#7C8068] block mb-3">
                LOCAL ADVICE FROM ARTEMISIA
              </span>
              <ul className="space-y-3">
                {current.localTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#20201D]/75 font-light">
                    <Check className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
