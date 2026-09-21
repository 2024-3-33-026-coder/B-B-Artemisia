import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Star } from 'lucide-react';
import { PROPERTY_INFO } from '../data/property';

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 600px
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Reservation Bar"
      className="fixed bottom-0 left-0 right-0 z-30 bg-[#F4F0E8]/95 backdrop-blur-md border-t border-[#D8CDBB] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] py-3 px-4 sm:px-8 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand / Rating / Location */}
        <div className="flex items-center gap-4">
          <div>
            <span className="font-serif text-sm sm:text-base font-medium text-[#20201D] block leading-none">
              B&amp;B ARTEMISIA
            </span>
            <span className="text-[9px] uppercase tracking-[0.24em] text-[#7C8068] mt-1 block">
              Alghero · Sardegna
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 border-l border-[#D8CDBB] pl-4 text-xs text-[#20201D]">
            <Star className="w-3.5 h-3.5 fill-[#A7664D] text-[#A7664D]" />
            <span className="font-medium">{PROPERTY_INFO.rating}</span>
            <span className="text-[#7C8068]">({PROPERTY_INFO.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Right: Quick CTA */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[11px] text-[#7C8068] uppercase tracking-wider font-light">
            Direct host booking
          </span>
          <button
            id="sticky-reserve-btn"
            type="button"
            onClick={onOpenBooking}
            className="px-5 sm:px-6 py-2.5 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2 rounded-xs shadow-xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>RESERVE YOUR STAY</span>
            <ArrowRight className="w-3 h-3 hidden sm:inline" />
          </button>
        </div>
      </div>
    </aside>
  );
};
