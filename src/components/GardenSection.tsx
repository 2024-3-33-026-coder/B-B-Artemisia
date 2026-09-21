import React from 'react';
import { PROPERTY_IMAGES } from '../data/property';
import { Compass } from 'lucide-react';

export const GardenSection: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Cinematic Full-Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={PROPERTY_IMAGES.gardenDeckchairs}
          alt="Garden deckchairs and Mediterranean greenery at B&B Artemisia"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Editorial Mediterranean Color Tone Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-[#30372E]/25 mix-blend-multiply" />
      </div>

      {/* Subtle Overlay Text */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-[#F4F0E8] flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full border border-white/20 bg-black/25 backdrop-blur-xs text-white/90">
          <Compass className="w-3.5 h-3.5 text-[#7C8068]" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium">
            THE MEDITERRANEAN GARDEN
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl font-normal leading-[1.08] tracking-wide mb-6">
          Outside, <br />
          <span className="italic font-light">Life Slows Down.</span>
        </h2>

        <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 max-w-2xl font-light leading-relaxed mb-10">
          Surrounded by indigenous Mediterranean flora and aromatic herbs, our garden invites you to linger.
          Unwind upon comfortable deckchairs under sun umbrellas, share quiet conversation beneath the covered patio,
          or sip a cool evening aperitivo as the coastal breeze rolls in from the nearby sea.
        </p>

        {/* Minimalist Feature Strip */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-[10px] sm:text-xs uppercase tracking-[0.24em] text-white/70 border-t border-white/20 pt-6">
          <span>Deckchairs &amp; Sun Umbrellas</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>Aromatic Herb Relaxation Area</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>Covered Patio</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>Reading &amp; Aperitif Corner</span>
        </div>
      </div>
    </section>
  );
};
