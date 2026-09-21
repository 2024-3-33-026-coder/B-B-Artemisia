import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/property';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface EditorialGalleryProps {
  initialCategory?: string;
}

export const EditorialGallery: React.FC<EditorialGalleryProps> = ({ initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: 'ALL COLLECTIONS' },
    { id: 'house', label: 'THE HOUSE' },
    { id: 'rooms', label: 'ROOMS' },
    { id: 'garden', label: 'GARDEN & PATIO' },
    { id: 'breakfast', label: 'BREAKFAST' },
    { id: 'craft', label: 'HANDMADE DETAILS' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F4F0E8] border-t border-[#D8CDBB]/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] block mb-3">
              PHOTOGRAPHY PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#20201D] font-normal leading-[1.1]">
              The Atmosphere <br />
              <span className="italic font-light text-[#30372E]">in Pictures.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap rounded-xs cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#30372E] text-[#F4F0E8] font-semibold'
                    : 'text-[#20201D]/70 hover:text-[#20201D] bg-[#EFECE6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredItems.map((item, index) => {
            // Editorial rhythm: some full/wide (6-8 cols), some tall/portrait (4-5 cols)
            let colSpan = 'lg:col-span-4';
            let heightClass = 'h-[320px]';

            if (index % 5 === 0) {
              colSpan = 'lg:col-span-8';
              heightClass = 'h-[440px]';
            } else if (index % 5 === 1) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[440px]';
            } else if (index % 5 === 2) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[360px]';
            } else if (index % 5 === 3) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[360px]';
            } else if (index % 5 === 4) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[360px]';
            }

            return (
              <div
                key={item.id}
                className={`${colSpan} group relative overflow-hidden rounded-xs border border-[#D8CDBB] cursor-pointer shadow-xs`}
                onClick={() => openLightbox(index)}
              >
                <div className={`w-full ${heightClass} overflow-hidden bg-[#EFECE6]`}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                </div>

                {/* Refined Editorial Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#F4F0E8]">
                  <span className="text-[9px] uppercase tracking-[0.24em] text-[#D8CDBB] mb-1">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-lg font-medium leading-snug">{item.title}</h4>
                  <p className="text-xs text-white/80 font-light mt-1 line-clamp-2">{item.caption}</p>
                  <div className="flex items-center gap-1 mt-3 text-[10px] uppercase tracking-wider text-white/90">
                    <Maximize2 className="w-3 h-3" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to open full collection */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#30372E] hover:text-[#20201D] border-b border-[#30372E] pb-1 cursor-pointer transition-colors"
          >
            <span>EXPLORE THE GALLERY →</span>
          </button>
        </div>

      </div>

      {/* Fullscreen Editorial Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Top Bar: Counter & Close */}
          <div className="flex items-center justify-between text-[#F4F0E8] border-b border-white/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D8CDBB]">
                B&amp;B ARTEMISIA GALLERY
              </span>
              <span className="text-xs text-white/50 ml-3">
                {String(activeLightboxIndex + 1).padStart(2, '0')} /{' '}
                {String(filteredItems.length).padStart(2, '0')}
              </span>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image with Navigation Buttons */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              type="button"
              onClick={prevLightboxImage}
              className="absolute left-2 sm:left-4 z-20 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={filteredItems[activeLightboxIndex].url}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain rounded-xs shadow-2xl"
            />

            <button
              type="button"
              onClick={nextLightboxImage}
              className="absolute right-2 sm:right-4 z-20 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Title & Caption */}
          <div className="text-center text-[#F4F0E8] max-w-2xl mx-auto border-t border-white/10 pt-4">
            <h3 className="font-serif text-xl sm:text-2xl font-normal mb-1">
              {filteredItems[activeLightboxIndex].title}
            </h3>
            <p className="text-xs text-white/75 font-light leading-relaxed">
              {filteredItems[activeLightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
