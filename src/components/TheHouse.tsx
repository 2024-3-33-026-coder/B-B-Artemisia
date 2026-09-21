import React from 'react';
import { PROPERTY_IMAGES } from '../data/property';
import { ArrowRight } from 'lucide-react';

interface TheHouseProps {
  onOpenGallery: (category?: string) => void;
}

export const TheHouse: React.FC<TheHouseProps> = ({ onOpenGallery }) => {
  return (
    <section id="the-house" className="py-24 md:py-32 bg-[#EFECE6]/70 border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
            THE HOUSE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.1]">
            A House Full <br />
            <span className="italic font-light text-[#30372E]">of Small Details.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#20201D]/75 font-light leading-relaxed mt-6 max-w-xl">
            Every corner of Artemisia reflects a life of mindful collecting and genuine care. From traditional Sardinian
            weavings to handcrafted objects gathered across travels, every texture tells an authentic story.
          </p>
        </div>

        {/* SEQUENCE 1: 60/40 Split - The Garden & Outdoor Patio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-24 md:mb-32">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xs border border-[#D8CDBB]">
              <img
                src={PROPERTY_IMAGES.gardenPatio}
                alt="Garden and covered patio at B&B Artemisia"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#7C8068] font-medium mb-2">
              OUTDOOR LIVING
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#20201D] mb-5 leading-tight">
              The Garden &amp; <br />
              <span className="italic text-[#30372E]">Covered Patio</span>
            </h3>
            <p className="font-sans text-sm text-[#20201D]/75 font-light leading-relaxed mb-6">
              A private outdoor sanctuary shaded from the noon sun. Guests gather here for morning espresso,
              quiet reading on comfortable deckchairs under sun umbrellas, or an unhurried evening aperitivo
              fragranced by fresh rosemary, sage, and wild thyme.
            </p>
            <ul className="space-y-2.5 text-xs text-[#20201D]/70 mb-6 font-light border-l border-[#7C8068]/40 pl-4">
              <li>· Deckchairs &amp; sun umbrellas for unhurried rest</li>
              <li>· Mediterranean aromatic herb relaxation area</li>
              <li>· Covered patio for open-air breakfast and evening reading</li>
            </ul>
            <button
              type="button"
              onClick={() => onOpenGallery('garden')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7C8068] hover:text-[#20201D] transition-colors"
            >
              <span>VIEW GARDEN GALLERY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* SEQUENCE 2: 40/60 Split - The Entrance Lounge & Sardinian Textiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center lg:pr-6">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#7C8068] font-medium mb-2">
              WARM WELCOME
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#20201D] mb-5 leading-tight">
              The Entrance Lounge &amp; <br />
              <span className="italic text-[#30372E]">Handwoven Textiles</span>
            </h3>
            <p className="font-sans text-sm text-[#20201D]/75 font-light leading-relaxed mb-6">
              Stepping inside, a welcoming lounge furnished with soft sofa and armchairs offers a peaceful
              common gathering space. The hallway is lined with traditional Sardinian textile works alongside
              woven tapestries from Argentina, wooden architectural elements, and natural linen fabrics.
            </p>
            <ul className="space-y-2.5 text-xs text-[#20201D]/70 mb-6 font-light border-l border-[#7C8068]/40 pl-4">
              <li>· Welcoming entrance lounge with sofa and armchairs</li>
              <li>· Traditional Sardinian hand-loomed textiles in the hallway</li>
              <li>· Handcrafted items gathered across travels and local artisans</li>
            </ul>
            <button
              type="button"
              onClick={() => onOpenGallery('house')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7C8068] hover:text-[#20201D] transition-colors"
            >
              <span>VIEW INTERIOR DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="overflow-hidden rounded-xs border border-[#D8CDBB]">
              <img
                src={PROPERTY_IMAGES.entranceLounge}
                alt="Entrance lounge with sofa and armchairs"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* SEQUENCE 3: Artisanal Highlight Feature with Paraguay Suitcase Map Holder */}
        <div className="bg-[#F4F0E8] border border-[#D8CDBB] p-8 md:p-14 mb-20 rounded-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-xs border border-[#D8CDBB] shadow-xs">
                <img
                  src={PROPERTY_IMAGES.paraguaySuitcaseMapHolder}
                  alt="Handcrafted leather suitcase from Paraguay transformed into a map holder"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#A7664D] font-medium mb-2">
                SIGNATURE DETAIL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#20201D] mb-4">
                The Leather Suitcase <br />
                <span className="italic text-[#30372E]">Transformed into a Map Holder</span>
              </h3>
              <p className="font-sans text-sm text-[#20201D]/75 font-light leading-relaxed mb-6">
                One of Artemisia’s most beloved conversation pieces: a handcrafted vintage leather suitcase from Paraguay,
                carefully restored and repurposed by Lavinia into a repository for regional maps, island guidebooks,
                and local notes. It is here that guests gather around to plan their excursions across Alghero and Sardinia.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-[#D8CDBB] pt-4 text-xs text-[#20201D]/70 font-light">
                <div>
                  <strong className="block font-medium text-[#20201D]">Artisanal Origin</strong>
                  Handcrafted leather from Paraguay
                </div>
                <div>
                  <strong className="block font-medium text-[#20201D]">Curated By Host</strong>
                  10 years of personal island itineraries
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
