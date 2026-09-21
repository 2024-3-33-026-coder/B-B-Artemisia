import React, { useState } from 'react';
import { Room } from '../types';
import { X, Bed, Users, Bath, Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onBookRoom }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!room) return null;

  const nextPhoto = () => {
    setPhotoIndex((photoIndex + 1) % room.photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((photoIndex - 1 + room.photos.length) % room.photos.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#F4F0E8] border border-[#D8CDBB] w-full max-w-4xl rounded-xs shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8CDBB] bg-[#EFECE6]">
          <div>
            <span className="text-[9px] uppercase tracking-[0.26em] text-[#7C8068] font-medium block">
              {room.roomNumber}
            </span>
            <h3 className="font-serif text-2xl text-[#20201D] font-normal">{room.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#20201D]/70 hover:text-[#20201D] transition-colors cursor-pointer"
            aria-label="Close Room Dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Photo Carousel */}
          <div className="relative h-[320px] sm:h-[420px] bg-black/10 rounded-xs overflow-hidden border border-[#D8CDBB]">
            <img
              src={room.photos[photoIndex]}
              alt={`${room.name} photo ${photoIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {room.photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 text-white hover:bg-black/75 rounded-full transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 text-white hover:bg-black/75 rounded-full transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs">
                  {photoIndex + 1} / {room.photos.length}
                </div>
              </>
            )}
          </div>

          {/* Botanical Lore */}
          <div className="bg-[#EFECE6] border-l-2 border-[#7C8068] p-4 text-xs sm:text-sm text-[#20201D]/80 italic font-serif">
            {room.botanicalMeaning}
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-[#D8CDBB] py-4">
            <div className="flex items-center gap-3">
              <Bed className="w-4 h-4 text-[#7C8068]" />
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#7C8068] block">Bed Arrangement</span>
                <span className="text-xs text-[#20201D] font-medium">{room.bedSetup}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-[#7C8068]" />
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#7C8068] block">Capacity</span>
                <span className="text-xs text-[#20201D] font-medium">{room.capacityNote}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Bath className="w-4 h-4 text-[#7C8068]" />
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#7C8068] block">Bathroom</span>
                <span className="text-xs text-[#20201D] font-medium">Private Ensuite</span>
              </div>
            </div>
          </div>

          {/* Detailed Room Description */}
          <div>
            <h4 className="font-serif text-lg text-[#20201D] mb-2">Room Overview</h4>
            <p className="font-sans text-sm text-[#20201D]/80 font-light leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Verified Amenities Grid */}
          <div>
            <h4 className="font-serif text-lg text-[#20201D] mb-3">Included Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#20201D]/80 font-light">
                  <Check className="w-3.5 h-3.5 text-[#7C8068] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#D8CDBB] bg-[#EFECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#7C8068]">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#A7664D]" />
            Direct booking ensures verified host communication and best assistance.
          </div>
          <button
            id={`modal-book-cta-${room.id}`}
            type="button"
            onClick={() => {
              onClose();
              onBookRoom(room.id);
            }}
            className="w-full sm:w-auto px-8 py-3 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs cursor-pointer"
          >
            INQUIRE TO BOOK {room.name.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};
