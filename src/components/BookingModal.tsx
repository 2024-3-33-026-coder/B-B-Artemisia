import React, { useState } from 'react';
import { ROOMS, PROPERTY_INFO } from '../data/property';
import { X, Calendar, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  initialDates?: { checkIn: string; checkOut: string; guests: number };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId = 'all',
  initialDates,
}) => {
  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 7);
  const defaultOut = new Date(today);
  defaultOut.setDate(today.getDate() + 10);
  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialDates?.checkIn || formatDate(defaultIn));
  const [checkOut, setCheckOut] = useState(initialDates?.checkOut || formatDate(defaultOut));
  const [roomId, setRoomId] = useState(preselectedRoomId);
  const [guests, setGuests] = useState(initialDates?.guests || 2);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bicycleParking, setBicycleParking] = useState(false);
  const [motorcycleParking, setMotorcycleParking] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedRoomObj = ROOMS.find((r) => r.id === roomId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#F4F0E8] border border-[#D8CDBB] w-full max-w-2xl rounded-xs shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D8CDBB] bg-[#EFECE6]">
          <div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#7C8068] font-medium block">
              DIRECT RESERVATION INQUIRY
            </span>
            <h3 className="font-serif text-2xl text-[#20201D] font-normal">
              Stay at B&amp;B Artemisia
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#20201D]/70 hover:text-[#20201D] transition-colors cursor-pointer"
            aria-label="Close Reservation Form"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#7C8068]/20 text-[#30372E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#20201D]">
                Inquiry Received with Pleasure
              </h4>
              <p className="font-sans text-sm text-[#20201D]/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you, <strong className="font-medium">{guestName || 'Guest'}</strong>. Lavinia Monica will personally review
                availability for {selectedRoomObj ? selectedRoomObj.name : 'your requested stay'} from{' '}
                <span className="font-mono text-xs">{checkIn}</span> to{' '}
                <span className="font-mono text-xs">{checkOut}</span> and reply directly to{' '}
                <span className="font-medium text-[#20201D]">{guestEmail || 'your email'}</span>.
              </p>
              <div className="p-4 bg-[#EFECE6] border border-[#D8CDBB] max-w-md mx-auto text-xs text-[#20201D]/70 text-left space-y-1">
                <p>· Direct Host: Lavinia Monica ({PROPERTY_INFO.contact.email})</p>
                <p>· Address: Via Alcide De Gasperi 36 C, Alghero</p>
                <p>· CIN: {PROPERTY_INFO.cin}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-8 py-3 bg-[#30372E] text-[#F4F0E8] text-xs uppercase tracking-[0.2em] font-medium rounded-xs"
              >
                RETURN TO SITE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Check In */}
                <div>
                  <label
                    htmlFor="modal-checkin"
                    className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                  >
                    CHECK-IN DATE
                  </label>
                  <input
                    id="modal-checkin"
                    type="date"
                    required
                    value={checkIn}
                    min={formatDate(today)}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label
                    htmlFor="modal-checkout"
                    className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                  >
                    CHECK-OUT DATE
                  </label>
                  <input
                    id="modal-checkout"
                    type="date"
                    required
                    value={checkOut}
                    min={checkIn || formatDate(today)}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                  />
                </div>
              </div>

              {/* Room & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-room"
                    className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                  >
                    ROOM CHOICE
                  </label>
                  <select
                    id="modal-room"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                  >
                    <option value="all">Any Available Room</option>
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} ({r.bedSetup})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="modal-guests"
                    className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                  >
                    NUMBER OF GUESTS
                  </label>
                  <select
                    id="modal-guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 pt-2 border-t border-[#D8CDBB]">
                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Maria Rossi"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="e.g. maria@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                    >
                      PHONE / WHATSAPP
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      placeholder="e.g. +39 347..."
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                    />
                  </div>
                </div>

                {/* Additional Preferences */}
                <div className="space-y-2 pt-2">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium">
                    PARKING REQUIREMENTS (UPON RESERVATION)
                  </span>
                  <div className="flex flex-col sm:flex-row gap-4 text-xs text-[#20201D]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bicycleParking}
                        onChange={(e) => setBicycleParking(e.target.checked)}
                        className="rounded-xs border-[#D8CDBB] text-[#30372E] focus:ring-0"
                      />
                      <span>Guarded bicycle parking</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={motorcycleParking}
                        onChange={(e) => setMotorcycleParking(e.target.checked)}
                        className="rounded-xs border-[#D8CDBB] text-[#30372E] focus:ring-0"
                      />
                      <span>Guarded motorcycle parking</span>
                    </label>
                  </div>
                </div>

                {/* Special Requests / Breakfast Notes */}
                <div>
                  <label
                    htmlFor="modal-requests"
                    className="block text-[10px] uppercase tracking-[0.2em] text-[#7C8068] font-medium mb-1.5"
                  >
                    SPECIAL REQUESTS &amp; DIETARY NOTES
                  </label>
                  <textarea
                    id="modal-requests"
                    rows={3}
                    placeholder="Estimated arrival time, breakfast preferences, or excursions advice..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-[#EFECE6] border border-[#D8CDBB] p-2.5 text-xs text-[#20201D] focus:outline-hidden focus:border-[#7C8068]"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D8CDBB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-[#7C8068] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7C8068]" />
                  <span>No payment charged now. Verified host direct response.</span>
                </div>
                <button
                  id="modal-submit-inquiry-btn"
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#30372E] hover:bg-[#20201D] text-[#F4F0E8] text-xs uppercase tracking-[0.22em] font-semibold transition-colors flex items-center justify-center gap-2 rounded-xs cursor-pointer"
                >
                  <span>SEND RESERVATION INQUIRY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
