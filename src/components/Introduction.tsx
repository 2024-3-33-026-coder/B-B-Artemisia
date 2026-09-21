import React from 'react';
import { PROPERTY_IMAGES, PROPERTY_INFO } from '../data/property';
import { Sparkles, MapPin, Coffee, Flower2 } from 'lucide-react';

interface IntroductionProps {
  onOpenBooking: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenBooking }) => {
  return (
    <section id="introduction" className="pt-24 lg:pt-32 pb-20 md:pb-28 bg-[#F4F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Split Editorial Layout: Left Text / Right Large Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Editorial Text) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] mb-3">
              THE ART OF HOSPITALITY
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#20201D] font-normal leading-[1.12] mb-8">
              A Home in Alghero, <br />
              <span className="italic font-light text-[#30372E]">Made for Slower Days.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#20201D]/80 leading-relaxed font-light mb-6">
              Tucked within a peaceful residential quarter of Alghero, B&amp;B Artemisia is an intimate,
              personal retreat where quiet Mediterranean living, Sardinian craft, and authentic Italian hospitality
              unfold at an unhurried pace.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#20201D]/70 leading-relaxed font-light mb-8">
              With just three independent, luminous rooms, this is not a hotel, but a welcoming Sardinian home.
              Here, mornings begin in a sunlit kitchen with homemade breakfast, afternoons drift gently on garden deckchairs
              under sun umbrellas amidst fragrant Mediterranean herbs, and evenings are guided by ten years of genuine local insight.
            </p>

            {/* Core Values / Architectural Anchors */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 w-full pt-4 pb-6 border-y border-[#D8CDBB]/70 mb-8">
              <div className="flex items-start gap-3">
                <Flower2 className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#20201D] font-medium">Aromatic Garden</h4>
                  <p className="text-xs text-[#20201D]/60 mt-0.5">Deckchairs, herbs &amp; patio relaxation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#20201D] font-medium">Italian Breakfast</h4>
                  <p className="text-xs text-[#20201D]/60 mt-0.5">Sweet &amp; savory in the bright kitchen</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#20201D] font-medium">Handmade Details</h4>
                  <p className="text-xs text-[#20201D]/60 mt-0.5">Sardinian textiles &amp; world objects</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#20201D] font-medium">Personal Welcome</h4>
                  <p className="text-xs text-[#20201D]/60 mt-0.5">Curated tips by host Lavinia Monica</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                id="intro-book-room-btn"
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-xs cursor-pointer"
              >
                RESERVE YOUR ROOM
              </button>
              <a
                href="#the-house"
                className="text-xs uppercase tracking-[0.2em] text-[#7C8068] hover:text-[#30372E] font-medium transition-colors border-b border-[#7C8068]/50 pb-0.5"
              >
                EXPLORE THE HOUSE →
              </a>
            </div>
          </div>

          {/* Right Column (Large Photography Composition) - 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 overflow-hidden rounded-xs border border-[#D8CDBB] shadow-sm">
              <img
                src={PROPERTY_IMAGES.gardenOverview}
                alt="B&B Artemisia Mediterranean Garden and Terrace"
                className="w-full h-[460px] md:h-[560px] object-cover hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Overlapping Editorial Detail Card */}
            <div className="hidden sm:block absolute -bottom-8 -left-10 z-20 bg-[#F4F0E8] border border-[#D8CDBB] p-6 max-w-[260px] shadow-md">
              <p className="text-[9px] uppercase tracking-[0.26em] text-[#7C8068] font-medium mb-1">
                INTIMATE &amp; INDEPENDENT
              </p>
              <p className="font-serif text-lg text-[#20201D] leading-snug">
                Only 3 rooms in a quiet residential haven, 800m from the sea.
              </p>
              <p className="text-[10px] text-[#A7664D] uppercase tracking-[0.2em] font-medium mt-3">
                Rating {PROPERTY_INFO.rating} · 62 Reviews
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
