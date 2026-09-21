import React from 'react';
import { GENUINE_REVIEWS, PROPERTY_INFO } from '../data/property';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#EFECE6]/70 border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header & Verified Score Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-12 border-b border-[#D8CDBB]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
              REPUTATION &amp; PRAISE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.1]">
              Words from <br />
              <span className="italic font-light text-[#30372E]">Our Guests.</span>
            </h2>
          </div>

          {/* Verified Official Rating Badge */}
          <div className="bg-[#F4F0E8] border border-[#D8CDBB] p-6 rounded-xs shadow-xs flex items-center gap-6">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A7664D] text-[#A7664D]" />
                ))}
              </div>
              <p className="font-serif text-3xl text-[#20201D] font-semibold">
                {PROPERTY_INFO.rating} <span className="text-base font-normal text-[#7C8068]">/ 5</span>
              </p>
            </div>
            <div className="border-l border-[#D8CDBB] pl-6">
              <div className="flex items-center gap-1 text-[#30372E] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#7C8068]" />
                <span>VERIFIED RATING</span>
              </div>
              <p className="text-xs text-[#20201D]/70 mt-0.5">Based on {PROPERTY_INFO.reviewCount} verified guest reviews</p>
            </div>
          </div>
        </div>

        {/* Verified Review Themes Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14 text-center">
          {['Cleanliness', 'Breakfast', 'Hospitality', 'Comfortable Beds', 'Quiet Location', 'Local Guidance'].map((theme, idx) => (
            <div key={idx} className="bg-[#F4F0E8] border border-[#D8CDBB]/70 py-3 px-2 rounded-xs">
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[#7C8068]">
                {theme}
              </span>
            </div>
          ))}
        </div>

        {/* Verified Editorial Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GENUINE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F4F0E8] border border-[#D8CDBB] p-8 rounded-xs flex flex-col justify-between shadow-xs hover:border-[#7C8068] transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-[#A7664D]/60 mb-4" />
                <div className="inline-block px-2.5 py-0.5 bg-[#EFECE6] text-[9px] uppercase tracking-[0.2em] font-medium text-[#7C8068] mb-3">
                  Theme: {review.highlightTheme}
                </div>
                <p className="font-serif text-base sm:text-lg text-[#20201D] leading-relaxed italic mb-6">
                  "{review.excerpt}"
                </p>
              </div>

              <div className="border-t border-[#D8CDBB] pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-xs tracking-wider uppercase text-[#20201D]">
                    {review.author}
                  </h4>
                  <p className="text-[10px] text-[#7C8068]">{review.guestOrigin || 'Independent Traveler'}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#7C8068]/80">
                  {review.stayDate}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
