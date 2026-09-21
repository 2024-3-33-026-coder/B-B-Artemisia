import React from 'react';
import { PROPERTY_INFO } from '../data/property';
import { Mail, Phone, MapPin, Clock, Bike, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#20201D] text-[#F4F0E8] pt-20 pb-12 border-t border-[#30372E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Editorial Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-normal text-[#F4F0E8] block mb-1">
                B&amp;B ARTEMISIA
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#D8CDBB] block mb-6">
                Alghero · Sardegna · Italy
              </span>
              <p className="font-sans text-xs text-[#D8CDBB]/70 font-light leading-relaxed max-w-md mb-8">
                An intimate Sardinian bed &amp; breakfast where thoughtful hospitality, local character,
                and Mediterranean tranquility come together. Three independent rooms close to the heart of Alghero.
              </p>
            </div>

            <div className="bg-[#30372E]/60 border border-white/10 p-4 rounded-xs max-w-sm">
              <div className="flex items-center gap-2 text-[10px] text-[#D8CDBB] font-mono mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C8068]" />
                <span>REGIONAL TOURIST CODE (CIN)</span>
              </div>
              <p className="font-mono text-xs text-white font-medium">{PROPERTY_INFO.cin}</p>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#D8CDBB] font-medium block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs text-[#F4F0E8]/80 font-light tracking-wider uppercase">
              <li>
                <a href="#introduction" className="hover:text-white transition-colors">The Stay</a>
              </li>
              <li>
                <a href="#the-house" className="hover:text-white transition-colors">The House</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">Rooms</a>
              </li>
              <li>
                <a href="#breakfast" className="hover:text-white transition-colors">Breakfast</a>
              </li>
              <li>
                <a href="#alghero" className="hover:text-white transition-colors">Alghero</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Hospitality & Stay Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#D8CDBB] font-medium block mb-4">
                PROPERTY &amp; ARRIVAL
              </span>
              
              <div className="space-y-3 text-xs text-[#D8CDBB]/80 font-light mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <span>
                    {PROPERTY_INFO.address.street} · {PROPERTY_INFO.address.postcode} {PROPERTY_INFO.address.city} ({PROPERTY_INFO.address.province}), Sardegna, Italy
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#7C8068] shrink-0" />
                  <a href={`mailto:${PROPERTY_INFO.contact.email}`} className="hover:text-white transition-colors">
                    {PROPERTY_INFO.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#7C8068] shrink-0" />
                  <span>Check-in: {PROPERTY_INFO.contact.checkInTime} · Check-out: {PROPERTY_INFO.contact.checkOutTime}</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Bike className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                  <span>Free street parking · Guarded bicycle and motorcycle parking by reservation</span>
                </div>
              </div>
            </div>

            <button
              id="footer-book-cta"
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F4F0E8] hover:bg-white text-[#20201D] text-xs uppercase tracking-[0.22em] font-semibold transition-colors text-center rounded-xs cursor-pointer"
            >
              DIRECT BOOKING INQUIRY
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Language & Quiet Luxury Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8CDBB]/60 font-light">
          <div>
            &copy; {new Date().getFullYear()} B&amp;B Artemisia Alghero. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
            <span className="text-[#F4F0E8] font-semibold">IT</span>
            <span className="opacity-40">/</span>
            <span className="text-white/60">EN</span>
            <span className="opacity-40">·</span>
            <span>Boutique Sardinian Hospitality</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
