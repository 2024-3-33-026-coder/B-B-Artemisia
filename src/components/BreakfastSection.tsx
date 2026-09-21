import React from 'react';
import { PROPERTY_IMAGES } from '../data/property';
import { Coffee, Sun, UtensilsCrossed, Sparkles } from 'lucide-react';

export const BreakfastSection: React.FC = () => {
  return (
    <section id="breakfast" className="py-24 md:py-32 bg-[#EFECE6]/80 border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
              BREAKFAST AT ARTEMISIA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.1]">
              Mornings, <br />
              <span className="italic font-light text-[#30372E]">The Sardinian Way.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="font-sans text-sm sm:text-base text-[#20201D]/75 font-light leading-relaxed">
              Breakfast at Artemisia is an unhurried morning ritual. Prepared with care and served in our bright,
              welcoming kitchen or outside under the covered garden patio, it brings together a balanced mix of
              sweet and savory flavors to begin your day in Alghero.
            </p>
          </div>
        </div>

        {/* Large Atmospheric Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch mb-16">
          {/* Main Large Kitchen/Breakfast Image (7 cols) */}
          <div className="md:col-span-7 overflow-hidden rounded-xs border border-[#D8CDBB] shadow-xs">
            <img
              src={PROPERTY_IMAGES.kitchenBreakfast}
              alt="Bright welcoming kitchen breakfast at B&B Artemisia"
              className="w-full h-[360px] sm:h-[440px] md:h-[500px] object-cover hover:scale-102 transition-transform duration-700"
            />
          </div>

          {/* Secondary Stack: Coffee details & Outdoor breakfast setting (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6 justify-between">
            <div className="overflow-hidden rounded-xs border border-[#D8CDBB] shadow-xs h-[230px] sm:h-[240px]">
              <img
                src={PROPERTY_IMAGES.coveredPatioBreakfast}
                alt="Outdoor covered patio breakfast table setting"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-xs border border-[#D8CDBB] shadow-xs h-[230px] sm:h-[240px]">
              <img
                src={PROPERTY_IMAGES.kitchenCoffeeCorner}
                alt="Morning coffee area and natural materials"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Storytelling Elements: Atmosphere & Verified Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#D8CDBB]">
          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-[#F4F0E8] border border-[#D8CDBB] flex items-center justify-center mb-3">
              <Sun className="w-4 h-4 text-[#7C8068]" />
            </div>
            <h4 className="font-serif text-lg text-[#20201D] mb-1">Morning Light</h4>
            <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
              Luminous kitchen kissed by early Mediterranean sun rays, creating an inviting start to island days.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-[#F4F0E8] border border-[#D8CDBB] flex items-center justify-center mb-3">
              <UtensilsCrossed className="w-4 h-4 text-[#7C8068]" />
            </div>
            <h4 className="font-serif text-lg text-[#20201D] mb-1">Sweet &amp; Savory</h4>
            <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
              A thoughtful balance of sweet pastries and savory delicacies adapted attentively to guest preferences.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-[#F4F0E8] border border-[#D8CDBB] flex items-center justify-center mb-3">
              <Coffee className="w-4 h-4 text-[#7C8068]" />
            </div>
            <h4 className="font-serif text-lg text-[#20201D] mb-1">Freshly Brewed Coffee</h4>
            <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
              Rich espresso and freshly brewed Italian coffee from the dedicated in-kitchen machine.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-8 h-8 rounded-full bg-[#F4F0E8] border border-[#D8CDBB] flex items-center justify-center mb-3">
              <Sparkles className="w-4 h-4 text-[#7C8068]" />
            </div>
            <h4 className="font-serif text-lg text-[#20201D] mb-1">Kitchen Comforts</h4>
            <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
              Fully equipped with dining tables, chairs, refrigerator, microwave, and outdoor patio dining.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
