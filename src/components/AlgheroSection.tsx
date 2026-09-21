import React from 'react';
import { PROPERTY_IMAGES, PROPERTY_INFO } from '../data/property';
import { MapPin, Bus, Compass, Navigation } from 'lucide-react';

export const AlgheroSection: React.FC = () => {
  return (
    <section id="alghero" className="py-24 md:py-32 bg-[#EFECE6]/70 border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
            DISCOVER ALGHERO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.1]">
            The City, Just Beyond <br />
            <span className="italic font-light text-[#30372E]">The Door.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#20201D]/75 font-light leading-relaxed mt-6">
            Located in a quiet, authentic residential neighborhood of Alghero, B&amp;B Artemisia grants the luxury
            of peaceful island rest while remaining within an easy, pleasant walk of the sea and the historic center.
          </p>
        </div>

        {/* Editorial Photo Composition: Coastline & Old Town Bastions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-8 overflow-hidden rounded-xs border border-[#D8CDBB] shadow-xs">
            <img
              src={PROPERTY_IMAGES.algheroCoastline}
              alt="Coastal view of Alghero and Sardinia sea"
              className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-102 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-4 overflow-hidden rounded-xs border border-[#D8CDBB] shadow-xs">
            <img
              src={PROPERTY_IMAGES.algheroOldTown}
              alt="Historic cobblestone streets and architecture of Alghero"
              className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-102 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Location Narrative & Verified Distances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#D8CDBB]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Navigation className="w-4 h-4 text-[#7C8068]" />
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#20201D]">
                Dante Promenade
              </span>
            </div>
            <p className="font-serif text-2xl text-[#20201D] mb-2">800 Meters</p>
            <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
              Just an 800-meter stroll leads directly to the Lungomare Dante seaside promenade for morning walks and sunset views.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-[#7C8068]" />
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#20201D]">
                Historic Center
              </span>
            </div>
            <p className="font-serif text-2xl text-[#20201D] mb-2">~15 Minutes</p>
            <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
              An easy 15-minute walk brings you into Alghero's ancient Catalan ramparts, vibrant restaurants, shops, and cafés.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Bus className="w-4 h-4 text-[#7C8068]" />
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#20201D]">
                Beach Bus Service
              </span>
            </div>
            <p className="font-serif text-2xl text-[#20201D] mb-2">At Your Doorstep</p>
            <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
              Bus stops directly in front and opposite the B&amp;B provide effortless transit to the celebrated coastal beaches.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
