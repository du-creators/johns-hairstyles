import React from 'react';
import { CheckCircle2, Calendar, Clock, User, Scissors, X, Share2, MapPin } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';

export interface BookingDetails {
  bookingId: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  notes?: string;
}

interface AppointmentModalProps {
  booking: BookingDetails | null;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ booking, onClose }) => {
  if (!booking) return null;

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`Grooming Appointment at JOHN'S Barbershop`);
    const details = encodeURIComponent(
      `Service: ${booking.service}\nBarber: ${booking.barber}\nRef: ${booking.bookingId}\nLocation: ${SHOP_INFO.address}, ${SHOP_INFO.city}`
    );
    const location = encodeURIComponent(`${SHOP_INFO.address}, ${SHOP_INFO.city}`);
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#121216] border border-[#d4af37]/50 max-w-lg w-full rounded-sm p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-sm cursor-pointer"
          aria-label="Close booking confirmation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Confirmation Badge */}
        <div className="flex flex-col items-center text-center pb-6 border-b border-neutral-800">
          <div className="w-14 h-14 rounded-full bg-[#181820] border border-[#d4af37] flex items-center justify-center mb-4 text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
            Appointment Requested
          </span>
          <h3 className="font-serif-brand text-2xl font-bold text-white mt-1">
            We Look Forward to Seeing You, {booking.name.split(' ')[0]}
          </h3>
          <p className="text-xs text-neutral-400 mt-2 font-light">
            A confirmation SMS & email have been dispatched to your contact details.
          </p>
          <div className="mt-3 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-sm font-mono text-xs text-[#f4df8c]">
            Ref ID: #{booking.bookingId}
          </div>
        </div>

        {/* Summary Card */}
        <div className="py-6 space-y-3.5 text-xs">
          <div className="flex items-center justify-between text-neutral-300">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Scissors className="w-3.5 h-3.5 text-[#d4af37]" /> Service
            </span>
            <span className="font-semibold text-white">{booking.service}</span>
          </div>

          <div className="flex items-center justify-between text-neutral-300">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#d4af37]" /> Preferred Barber
            </span>
            <span className="font-semibold text-white">{booking.barber}</span>
          </div>

          <div className="flex items-center justify-between text-neutral-300">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" /> Date & Time
            </span>
            <span className="font-semibold text-[#f4df8c]">
              {booking.date} at {booking.time}
            </span>
          </div>

          <div className="flex items-center justify-between text-neutral-300">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> Location
            </span>
            <span className="text-white text-right">{SHOP_INFO.address}, SoHo</span>
          </div>

          {booking.notes && (
            <div className="pt-2 border-t border-neutral-800/80">
              <span className="text-neutral-500 uppercase tracking-wider text-[10px] block mb-1">
                Your Note:
              </span>
              <p className="text-neutral-300 italic text-[11px] bg-neutral-900/80 p-2.5 rounded-sm">
                "{booking.notes}"
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAddToCalendar}
            className="flex-1 py-3 bg-[#d4af37] hover:bg-[#e5c158] text-neutral-950 font-bold uppercase tracking-wider text-xs rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Calendar</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold uppercase tracking-wider text-xs rounded-sm transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
