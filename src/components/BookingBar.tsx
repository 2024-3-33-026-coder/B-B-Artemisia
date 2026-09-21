import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, BedDouble, ArrowRight, ChevronDown } from 'lucide-react';
import { ROOMS } from '../data/property';

interface BookingBarProps {
  onCheckAvailability: (params: {
    checkIn: string;
    checkOut: string;
    roomId: string;
    guests: number;
  }) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onCheckAvailability }) => {
  // Default dates: 7 days from today to 10 days from today (3-night stay)
  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 7);
  const defaultOut = new Date(today);
  defaultOut.setDate(today.getDate() + 10);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDate(defaultIn));
  const [checkOut, setCheckOut] = useState<string>(formatDate(defaultOut));
  const [roomId, setRoomId] = useState<string>('all');
  const [guests, setGuests] = useState<number>(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      roomId,
      guests,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 -translate-y-8 lg:-translate-y-12">
      <form
        onSubmit={handleSubmit}
        id="luxury-booking-bar-form"
        className="bg-[#F4F0E8] border border-[#D8CDBB] shadow-[0_16px_40px_-10px_rgba(32,32,29,0.18)] p-[18px_24px] rounded-xs"
      >
        {/* ONE SINGLE HORIZONTAL ROW ON DESKTOP (20% | 20% | 22% | 18% | 20%) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[20%_20%_22%_18%_20%] items-center gap-3 lg:gap-0">
          
          {/* 1. CHECK-IN (20%) */}
          <div className="flex flex-col justify-center h-[68px] px-3 sm:px-4 border-b md:border-b-0 md:border-r border-[#D8CDBB]/70 hover:bg-[#EFECE6]/70 transition-colors rounded-xs group">
            <label
              htmlFor="booking-checkin"
              className="flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-[#7C8068] font-medium mb-1 cursor-pointer select-none"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-[#7C8068] shrink-0" />
              <span>CHECK-IN</span>
            </label>
            <input
              id="booking-checkin"
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              onClick={(e) => {
                try {
                  (e.currentTarget as HTMLInputElement).showPicker?.();
                } catch {
                  // Fallback for browsers without showPicker
                }
              }}
              className="w-full bg-transparent font-sans text-[14px] md:text-[15px] text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer p-0 leading-normal"
            />
          </div>

          {/* 2. CHECK-OUT (20%) */}
          <div className="flex flex-col justify-center h-[68px] px-3 sm:px-4 border-b md:border-b-0 lg:border-r border-[#D8CDBB]/70 hover:bg-[#EFECE6]/70 transition-colors rounded-xs group">
            <label
              htmlFor="booking-checkout"
              className="flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-[#7C8068] font-medium mb-1 cursor-pointer select-none"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-[#7C8068] shrink-0" />
              <span>CHECK-OUT</span>
            </label>
            <input
              id="booking-checkout"
              type="date"
              value={checkOut}
              min={checkIn || formatDate(today)}
              onChange={(e) => setCheckOut(e.target.value)}
              onClick={(e) => {
                try {
                  (e.currentTarget as HTMLInputElement).showPicker?.();
                } catch {
                  // Fallback for browsers without showPicker
                }
              }}
              className="w-full bg-transparent font-sans text-[14px] md:text-[15px] text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer p-0 leading-normal"
            />
          </div>

          {/* 3. ROOM (22%) */}
          <div className="flex flex-col justify-center h-[68px] px-3 sm:px-4 border-b md:border-b-0 md:border-r border-[#D8CDBB]/70 hover:bg-[#EFECE6]/70 transition-colors rounded-xs group">
            <label
              htmlFor="booking-room-select"
              className="flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-[#7C8068] font-medium mb-1 cursor-pointer select-none"
            >
              <BedDouble className="w-3.5 h-3.5 text-[#7C8068] shrink-0" />
              <span>ROOM</span>
            </label>
            <div className="relative w-full flex items-center">
              <select
                id="booking-room-select"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full bg-transparent font-sans text-[14px] md:text-[15px] text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer appearance-none pr-6 p-0 truncate leading-normal"
              >
                <option value="all">Any Room (3 Available)</option>
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({r.bedSetup})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#7C8068] absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* 4. GUESTS (18%) - NO DIVIDER TO BUTTON */}
          <div className="flex flex-col justify-center h-[68px] px-3 sm:px-4 border-b md:border-b-0 hover:bg-[#EFECE6]/70 transition-colors rounded-xs group">
            <label
              htmlFor="booking-guests-select"
              className="flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-[#7C8068] font-medium mb-1 cursor-pointer select-none"
            >
              <Users className="w-3.5 h-3.5 text-[#7C8068] shrink-0" />
              <span>GUESTS</span>
            </label>
            <div className="relative w-full flex items-center">
              <select
                id="booking-guests-select"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent font-sans text-[14px] md:text-[15px] text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer appearance-none pr-6 p-0 leading-normal"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#7C8068] absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* 5. CHECK AVAILABILITY BUTTON (20% - approx 225-240px) */}
          <div className="flex items-center justify-end pl-0 lg:pl-3 pt-2 lg:pt-0 w-full">
            <button
              id="booking-check-avail-button"
              type="submit"
              className="w-full h-[68px] px-5 sm:px-6 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-xs shadow-xs group"
            >
              <span>CHECK AVAILABILITY</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};
