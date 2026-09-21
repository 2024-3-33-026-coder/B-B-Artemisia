import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PROPERTY_IMAGES } from '../data/property';
import { BookingBar } from './BookingBar';

interface HeroProps {
  onOpenBooking: () => void;
  onCheckAvailability: (params: {
    checkIn: string;
    checkOut: string;
    roomId: string;
    guests: number;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onCheckAvailability }) => {
  const scrollToIntro = () => {
    const el = document.getElementById('introduction');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image with Refined Editorial Treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={PROPERTY_IMAGES.hero}
          alt="B&B Artemisia in Alghero, Sardinia"
          className="w-full h-full object-cover object-center editorial-hero-zoom filter brightness-[0.82] contrast-[1.02]"
        />
        {/* Soft Mediterranean Vignette & Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/45" />
        <div className="absolute inset-0 bg-[#30372E]/15 mix-blend-multiply" />
      </div>

      {/* Top Spacer for Fixed Nav */}
      <div className="h-24 md:h-32" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto pt-8 pb-16">
        {/* Location Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full border border-white/25 bg-black/20 backdrop-blur-xs text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C8068]" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-medium">
            ALGHERO · SARDINIA
          </span>
        </div>

        {/* Major Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8] font-normal tracking-[0.03em] leading-[1.06] mb-6 max-w-4xl">
          A Mediterranean Stay <br className="hidden sm:inline" />
          <span className="italic font-light">in Alghero</span>
        </h1>

        {/* Verified Supporting Copy */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 max-w-2xl font-light tracking-wide leading-relaxed mb-8">
          Three independent rooms, thoughtful hospitality and the character of Sardinia,
          in a welcoming home close to the heart of Alghero.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button
            id="hero-primary-book-btn"
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#F4F0E8] hover:bg-white text-[#20201D] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-md hover:shadow-lg rounded-xs cursor-pointer"
          >
            BOOK YOUR STAY
          </button>
          <button
            id="hero-secondary-discover-btn"
            type="button"
            onClick={scrollToIntro}
            className="w-full sm:w-auto px-6 py-3.5 text-white hover:text-[#F4F0E8] text-xs uppercase tracking-[0.22em] font-medium transition-colors flex items-center justify-center gap-2 group cursor-pointer border-b border-transparent hover:border-white/60"
          >
            <span>DISCOVER ARTEMISIA</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Scroll To Discover Indicator */}
        <button
          onClick={scrollToIntro}
          className="mt-12 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll to discover Artemisia"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-light">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-white/60 group-hover:text-white" />
        </button>
      </div>

      {/* Booking Bar: Positioned at Bottom Overlapping the Hero/Intro Boundary */}
      <div className="relative z-20 w-full translate-y-6 lg:translate-y-8">
        <BookingBar onCheckAvailability={onCheckAvailability} />
      </div>
    </section>
  );
};
