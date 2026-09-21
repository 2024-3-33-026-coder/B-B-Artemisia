import React from 'react';
import { PROPERTY_INFO } from '../data/property';
import { MapPin, Navigation, Car, Bus, Bike, Store, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Via+Alcide+De+Gasperi+36+C+Alghero+Italy`;

  return (
    <section id="location" className="py-24 md:py-32 bg-[#EFECE6]/80 border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
            FIND US IN ALGHERO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.1]">
            A Quiet Haven, <br />
            <span className="italic font-light text-[#30372E]">Seamlessly Connected.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#20201D]/75 font-light leading-relaxed mt-5">
            Nestled in a peaceful residential district of Alghero, offering easy access on foot, by car, or via convenient local buses.
          </p>
        </div>

        {/* Sophisticated Map & Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Property Coordinates & Transit Highlights (5 cols) */}
          <div className="lg:col-span-5 bg-[#F4F0E8] border border-[#D8CDBB] p-8 sm:p-10 flex flex-col justify-between rounded-xs">
            <div>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#7C8068] font-medium mb-2 block">
                PROPERTY ADDRESS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#20201D] mb-1">
                {PROPERTY_INFO.name}
              </h3>
              <p className="text-sm text-[#20201D]/80 font-light mb-1">
                {PROPERTY_INFO.address.street}
              </p>
              <p className="text-sm text-[#20201D]/80 font-light mb-8">
                {PROPERTY_INFO.address.postcode} {PROPERTY_INFO.address.city} ({PROPERTY_INFO.address.province}) · Sardegna, Italy
              </p>

              {/* Highlights List */}
              <div className="space-y-4 border-t border-[#D8CDBB] pt-6 mb-8">
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-medium text-[#20201D] block">800m to Dante Promenade</strong>
                    <span className="text-[#20201D]/70 font-light">Scenic coastal walkway just minutes away on foot.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-medium text-[#20201D] block">~15 Minutes to Historic Center</strong>
                    <span className="text-[#20201D]/70 font-light">Direct pleasant stroll to ancient ramparts and dining.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bus className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-medium text-[#20201D] block">Public Transport at the Doorstep</strong>
                    <span className="text-[#20201D]/70 font-light">Bus stops directly in front and opposite for beach lines.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-medium text-[#20201D] block">Free Street Parking</strong>
                    <span className="text-[#20201D]/70 font-light">Available directly in front of the property.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bike className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-medium text-[#20201D] block">Guarded Bicycle &amp; Motorcycle Parking</strong>
                    <span className="text-[#20201D]/70 font-light">Secure gated parking available upon reservation.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Store className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-medium text-[#20201D] block">Local Neighborhood Conveniences</strong>
                    <span className="text-[#20201D]/70 font-light">Pharmacy, supermarket, tobacco shop, pizzerias &amp; cafés nearby.</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              id="location-get-directions-btn"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-xs uppercase tracking-[0.22em] font-semibold transition-colors flex items-center justify-center gap-2 rounded-xs"
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Sophisticated Custom Architectural Map View (7 cols) */}
          <div className="lg:col-span-7 bg-[#F4F0E8] border border-[#D8CDBB] p-4 sm:p-6 flex flex-col rounded-xs overflow-hidden shadow-xs relative">
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-xs overflow-hidden border border-[#D8CDBB]">
              <iframe
                title="B&B Artemisia Location in Alghero"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.816431945677!2d8.3222384!3d40.553957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12dc6032130e58c9%3A0xe2da03c14a275ba2!2sVia%20Alcide%20de%20Gasperi%2C%2036%2C%2007041%20Alghero%20SS%2C%20Italy!5e0!3m2!1sen!2sit!4v1710000000000!5m2!1sen!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) sepia(0.08) contrast(1.05)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Refined Overlaid Pill */}
              <div className="absolute top-4 left-4 bg-[#F4F0E8]/95 backdrop-blur-xs border border-[#D8CDBB] px-4 py-2 text-xs text-[#20201D] shadow-sm">
                <span className="font-serif text-sm font-medium block">B&amp;B ARTEMISIA</span>
                <span className="text-[10px] text-[#7C8068] uppercase tracking-wider">Residential Alghero</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
