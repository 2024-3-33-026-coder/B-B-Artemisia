import React from 'react';
import { ROOMS } from '../data/property';
import { Room } from '../types';
import { Users, Bed, Bath, Sparkles, ArrowRight } from 'lucide-react';

interface RoomsSectionProps {
  onSelectRoom: (room: Room) => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom, onBookRoom }) => {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-[#F4F0E8] border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
            YOUR ROOM IN ALGHERO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.12]">
            Three Independent <br />
            <span className="italic font-light text-[#30372E]">Sanctuaries</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#20201D]/75 font-light leading-relaxed mt-5">
            Named after aromatic Mediterranean flora, each room offers complete independence, generous natural light,
            an ensuite private bathroom, orthopedic bedding, and slow, quiet comfort.
          </p>
        </div>

        {/* The Three Rooms: Editorial Presentation */}
        <div className="space-y-24 md:space-y-32">
          {ROOMS.map((room, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={room.id}
                id={`room-${room.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Large Image Column (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    className="relative group overflow-hidden rounded-xs border border-[#D8CDBB] cursor-pointer shadow-xs"
                    onClick={() => onSelectRoom(room)}
                  >
                    <img
                      src={room.heroImage}
                      alt={`${room.name} at B&B Artemisia`}
                      className="w-full h-[360px] sm:h-[460px] md:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2">
                        <span>EXPLORE FULL ROOM GALLERY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#F4F0E8]/90 backdrop-blur-xs px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#30372E] font-medium border border-[#D8CDBB]">
                      {room.roomNumber}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {room.photos.slice(1, 5).map((photo, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => onSelectRoom(room)}
                        className="h-16 sm:h-20 overflow-hidden border border-[#D8CDBB] hover:opacity-80 transition-opacity"
                        aria-label={`View photo ${pIdx + 2} of ${room.name}`}
                      >
                        <img
                          src={photo}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Editorial Details Column (5 cols) */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1 lg:pr-6' : 'lg:order-2 lg:pl-6'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#7C8068] font-medium mb-2">
                    <Sparkles className="w-3 h-3 text-[#A7664D]" />
                    <span>{room.roomNumber}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#20201D] font-normal leading-tight mb-3">
                    {room.name}
                  </h3>

                  <p className="text-xs text-[#7C8068] italic mb-4 font-serif leading-relaxed">
                    "{room.editorialQuote}"
                  </p>

                  <p className="font-sans text-sm text-[#20201D]/80 font-light leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Verified Room Metadata Checklist */}
                  <div className="bg-[#EFECE6] border border-[#D8CDBB] p-4 rounded-xs mb-6 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-[#20201D]">
                      <Bed className="w-4 h-4 text-[#7C8068] shrink-0" />
                      <span className="font-medium">{room.bedSetup}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#20201D]">
                      <Users className="w-4 h-4 text-[#7C8068] shrink-0" />
                      <span>{room.capacityNote}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#20201D]">
                      <Bath className="w-4 h-4 text-[#7C8068] shrink-0" />
                      <span>{room.bathroom}</span>
                    </div>
                  </div>

                  {/* Amenities Highlight */}
                  <div className="mb-8">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#7C8068] block mb-2 font-medium">
                      INCLUDED AMENITIES
                    </span>
                    <p className="text-xs text-[#20201D]/70 font-light leading-relaxed">
                      Orthopedic mattress · Air conditioning &amp; heating · Free Wi-Fi · Flat-screen TV · Safe · Mosquito nets · Hairdryer · Towels &amp; linen.
                    </p>
                  </div>

                  {/* Action Buttons: VIEW ROOM & BOOK THIS ROOM */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      id={`book-room-btn-${room.id}`}
                      type="button"
                      onClick={() => onBookRoom(room.id)}
                      className="px-6 py-3 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-xs uppercase tracking-[0.2em] font-semibold transition-colors text-center rounded-xs cursor-pointer"
                    >
                      BOOK THIS ROOM
                    </button>
                    <button
                      id={`view-room-btn-${room.id}`}
                      type="button"
                      onClick={() => onSelectRoom(room)}
                      className="px-5 py-3 border border-[#30372E]/40 hover:border-[#30372E] text-[#30372E] hover:text-[#20201D] text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center rounded-xs cursor-pointer"
                    >
                      VIEW ROOM DETAILS
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
