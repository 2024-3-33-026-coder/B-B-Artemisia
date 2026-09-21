import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, BedDouble, ArrowRight } from 'lucide-react';
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
  // Tomorrow and 3 days later default dates
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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        id="luxury-booking-bar-form"
        className="bg-[#F4F0E8] border border-[#D8CDBB] shadow-[0_12px_30px_-8px_rgba(32,32,29,0.12)] p-2 md:p-3 rounded-xs"
      >
        {/* Desktop: ALL 5 ELEMENTS IN ONE SINGLE HORIZONTAL ROW */}
        <div className="flex flex-col lg:flex-row lg:items-center divide-y lg:divide-y-0 lg:divide-x divide-[#D8CDBB]">
          {/* 1. CHECK-IN */}
          <div className="flex-1 px-4 py-3 group hover:bg-[#EFECE6] transition-colors relative">
            <label
              htmlFor="booking-checkin"
              className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-[#7C8068] font-medium mb-1"
            >
              <CalendarIcon className="w-3 h-3 text-[#7C8068]" />
              <span>CHECK-IN</span>
            </label>
            <input
              id="booking-checkin"
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent font-sans text-xs md:text-sm text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer"
            />
          </div>

          {/* 2. CHECK-OUT */}
          <div className="flex-1 px-4 py-3 group hover:bg-[#EFECE6] transition-colors relative">
            <label
              htmlFor="booking-checkout"
              className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-[#7C8068] font-medium mb-1"
            >
              <CalendarIcon className="w-3 h-3 text-[#7C8068]" />
              <span>CHECK-OUT</span>
            </label>
            <input
              id="booking-checkout"
              type="date"
              value={checkOut}
              min={checkIn || formatDate(today)}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent font-sans text-xs md:text-sm text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer"
            />
          </div>

          {/* 3. ROOM */}
          <div className="flex-1 px-4 py-3 group hover:bg-[#EFECE6] transition-colors relative">
            <label
              htmlFor="booking-room-select"
              className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-[#7C8068] font-medium mb-1"
            >
              <BedDouble className="w-3 h-3 text-[#7C8068]" />
              <span>ROOM</span>
            </label>
            <select
              id="booking-room-select"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full bg-transparent font-sans text-xs md:text-sm text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer appearance-none"
            >
              <option value="all">Any Room (3 Available)</option>
              {ROOMS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.bedSetup})
                </option>
              ))}
            </select>
          </div>

          {/* 4. GUESTS */}
          <div className="flex-1 px-4 py-3 group hover:bg-[#EFECE6] transition-colors relative">
            <label
              htmlFor="booking-guests-select"
              className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-[#7C8068] font-medium mb-1"
            >
              <Users className="w-3 h-3 text-[#7C8068]" />
              <span>GUESTS</span>
            </label>
            <select
              id="booking-guests-select"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-transparent font-sans text-xs md:text-sm text-[#20201D] font-medium tracking-wide focus:outline-hidden cursor-pointer appearance-none"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
            </select>
          </div>

          {/* 5. CHECK AVAILABILITY BUTTON */}
          <div className="p-2 lg:p-1 flex items-center justify-center">
            <button
              id="booking-check-avail-button"
              type="submit"
              className="w-full lg:w-auto h-full px-6 py-3.5 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-[11px] uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-xs"
            >
              <span>CHECK AVAILABILITY</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
