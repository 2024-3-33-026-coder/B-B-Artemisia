import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { TheHouse } from './components/TheHouse';
import { RoomsSection } from './components/RoomsSection';
import { BreakfastSection } from './components/BreakfastSection';
import { GardenSection } from './components/GardenSection';
import { HostSection } from './components/HostSection';
import { AlgheroSection } from './components/AlgheroSection';
import { SardiniaExperiences } from './components/SardiniaExperiences';
import { LocationSection } from './components/LocationSection';
import { EditorialGallery } from './components/EditorialGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { RoomModal } from './components/RoomModal';
import { BookingModal } from './components/BookingModal';
import { StickyBookingBar } from './components/StickyBookingBar';
import { Room } from './types';
import { ROOMS } from './data/property';

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPreselectedRoom, setBookingPreselectedRoom] = useState<string>('all');
  const [galleryCategory, setGalleryCategory] = useState<string | undefined>(undefined);
  const [initialDates, setInitialDates] = useState<{
    checkIn: string;
    checkOut: string;
    guests: number;
  }>({
    checkIn: '',
    checkOut: '',
    guests: 2,
  });

  const handleOpenBooking = (roomId: string = 'all') => {
    setBookingPreselectedRoom(roomId);
    setIsBookingModalOpen(true);
  };

  const handleCheckAvailability = (params: {
    checkIn: string;
    checkOut: string;
    roomId: string;
    guests: number;
  }) => {
    setInitialDates({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      guests: params.guests,
    });
    setBookingPreselectedRoom(params.roomId);
    setIsBookingModalOpen(true);
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleBookRoom = (roomId: string) => {
    setBookingPreselectedRoom(roomId);
    setIsBookingModalOpen(true);
  };

  const handleOpenGallery = (category?: string) => {
    setGalleryCategory(category);
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#20201D] selection:bg-[#7C8068]/30 selection:text-[#20201D] font-sans antialiased">
      {/* Fixed Luxury Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Cinematic Hero & Overlapping 5-Element Single-Row Booking Bar */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onCheckAvailability={handleCheckAvailability}
        />

        {/* The Art of Hospitality Introduction */}
        <Introduction onOpenBooking={() => handleOpenBooking()} />

        {/* The House & Handcrafted Mediterranean Details */}
        <TheHouse onOpenGallery={handleOpenGallery} />

        {/* The Three Independent Rooms */}
        <RoomsSection
          onSelectRoom={handleSelectRoom}
          onBookRoom={handleBookRoom}
        />

        {/* Breakfast at Artemisia (Sweet & Savory in Morning Light) */}
        <BreakfastSection />

        {/* Outside, Life Slows Down (Garden, Deckchairs, Umbrellas & Herbs) */}
        <GardenSection />

        {/* Meet Lavinia (Personal Hospitality & Local Guidance) */}
        <HostSection />

        {/* Discover Alghero (Dante Promenade, Old Town & Coast) */}
        <AlgheroSection />

        {/* Sardinia Experiences (Four Seasons Style Editorial Discovery) */}
        <SardiniaExperiences />

        {/* Find Us In Alghero (Interactive Architectural Map & Transit Details) */}
        <LocationSection />

        {/* Photography Portfolio & Fullscreen Lightbox */}
        <EditorialGallery initialCategory={galleryCategory} />

        {/* Reputation & Verified Reviews (4.84 / 5 from 62 reviews) */}
        <ReviewsSection />
      </main>

      {/* Refined Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Sticky Bottom Booking Bar */}
      <StickyBookingBar onOpenBooking={() => handleOpenBooking()} />

      {/* Detailed Room Exploration Modal */}
      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBookRoom={(roomId) => handleBookRoom(roomId)}
      />

      {/* Direct Booking Inquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoomId={bookingPreselectedRoom}
        initialDates={initialDates.checkIn ? initialDates : undefined}
      />
    </div>
  );
}
