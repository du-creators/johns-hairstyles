import React, { useState, useEffect } from 'react';
import { SHOP_INFO, SERVICES, BARBERS } from '../data/barbershopData';
import { BookingDetails } from './AppointmentModal';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  User,
  Scissors,
  Check,
  Navigation,
  Instagram,
  Facebook,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface BookingContactProps {
  selectedService: string;
  onBookingSuccess: (booking: BookingDetails) => void;
}

export const BookingContact: React.FC<BookingContactProps> = ({
  selectedService,
  onBookingSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService || SERVICES[0].name,
    barber: 'Any Master Barber Available',
    date: '',
    time: '11:00 AM',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync when selectedService prop changes
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Set default date to tomorrow in YYYY-MM-DD
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: dateString }));
  }, []);

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:00 PM',
    '03:30 PM',
    '04:30 PM',
    '06:00 PM',
    '07:00 PM'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.date) errors.date = 'Please choose a preferred date';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomRef = Math.floor(1000 + Math.random() * 9000);
      const bookingRecord: BookingDetails = {
        bookingId: `JBS-${randomRef}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        barber: formData.barber,
        date: formData.date,
        time: formData.time,
        notes: formData.notes
      };

      setIsSubmitting(false);
      onBookingSuccess(bookingRecord);

      // Reset form
      setFormData((prev) => ({
        ...prev,
        name: '',
        phone: '',
        email: '',
        notes: ''
      }));
    }, 600);
  };

  // Get today's day for opening hours highlight
  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...

  return (
    <section id="contact" className="py-24 bg-[#0d0d0f] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            Reservations & Location
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-white tracking-wide uppercase">
            Book an <span className="gold-gradient-text">Appointment</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4 mb-4" />
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
            Walk-ins are welcomed subject to chair availability, but reservations guarantee your preferred time and master barber.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Booking Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#131317] border border-neutral-800 rounded-sm p-6 sm:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800">
              <div>
                <h3 className="font-serif-brand text-xl font-bold text-white">
                  Schedule Your Chair
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your details below. We confirm all inquiries promptly.
                </p>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-[11px] text-[#d4af37] uppercase tracking-wider font-semibold block">
                  Complimentary Drink
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">Espresso · Bourbon · Ale</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Jonathan Hayes"
                      className={`w-full bg-[#18181f] border rounded-sm px-3.5 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors ${
                        formErrors.name ? 'border-red-500' : 'border-neutral-700'
                      }`}
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Phone Number <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(212) 555-0144"
                      className={`w-full bg-[#18181f] border rounded-sm px-3.5 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors ${
                        formErrors.phone ? 'border-red-500' : 'border-neutral-700'
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Email and Barber */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Email Address <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jonathan@domain.com"
                    className={`w-full bg-[#18181f] border rounded-sm px-3.5 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors ${
                      formErrors.email ? 'border-red-500' : 'border-neutral-700'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Preferred Barber
                  </label>
                  <select
                    name="barber"
                    value={formData.barber}
                    onChange={handleInputChange}
                    className="w-full bg-[#18181f] border border-neutral-700 rounded-sm px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    <option value="Any Master Barber Available">Any Master Barber Available</option>
                    {BARBERS.map((b) => (
                      <option key={b.id} value={`${b.name} (${b.role.split('&')[0].trim()})`}>
                        {b.name} — {b.role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Requested Service <span className="text-[#d4af37]">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-[#18181f] border border-neutral-700 rounded-sm px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors font-medium"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} — ${s.price} ({s.duration})
                    </option>
                  ))}
                  <option value="Groomsmen / Private Buyout">Groomsmen / Private Buyout (Inquiry)</option>
                </select>
              </div>

              {/* Row 4: Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Appointment Date <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full bg-[#18181f] border rounded-sm px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors ${
                      formErrors.date ? 'border-red-500' : 'border-neutral-700'
                    }`}
                  />
                  {formErrors.date && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-[#18181f] border border-neutral-700 rounded-sm px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Notes / Consultation Request */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Special Notes or Style Requests <span className="text-neutral-500 text-[10px]">(Optional)</span>
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="e.g. Skin sensitive to hot lather, growing out beard taper, attending a wedding..."
                  className="w-full bg-[#18181f] border border-neutral-700 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-button py-4 rounded-sm text-xs font-bold uppercase tracking-wider text-neutral-950 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4 text-neutral-950" />
                  <span>{isSubmitting ? 'Confirming Your Chair...' : 'Confirm Appointment Inquiry'}</span>
                </button>
                <p className="text-center text-[11px] text-neutral-500 mt-3">
                  No advance deposit required. 2-hour cancellation notice appreciated.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Hours, Location & Socials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Opening Hours Card */}
            <div className="bg-[#131317] border border-neutral-800 rounded-sm p-6 sm:p-7">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <h4 className="font-serif-brand text-base font-bold text-white uppercase tracking-wider">
                    Opening Hours
                  </h4>
                </div>
                <span className="text-[10px] text-[#f4df8c] bg-[#d4af37]/15 border border-[#d4af37]/30 px-2 py-0.5 rounded-sm uppercase tracking-wider font-semibold">
                  Doors Open
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-light">
                {SHOP_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1 border-b border-neutral-800/50 last:border-0"
                  >
                    <span className="text-neutral-300">{h.day}</span>
                    <span className="text-[#f4df8c] font-mono tabular-nums font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Contact Card */}
            <div className="bg-[#131317] border border-neutral-800 rounded-sm p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2.5 pb-4 border-b border-neutral-800">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <h4 className="font-serif-brand text-base font-bold text-white uppercase tracking-wider">
                  Location & Contact
                </h4>
              </div>

              <div className="space-y-3.5 text-xs text-neutral-300 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{SHOP_INFO.address}</p>
                    <p className="text-neutral-400">{SHOP_INFO.city}</p>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Subway: Prince St (N/R/W) & Spring St (C/E/6) · 2 min walk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <a
                    href={`tel:${SHOP_INFO.phone}`}
                    className="hover:text-[#d4af37] transition-colors font-mono tabular-nums"
                  >
                    {SHOP_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <a
                    href={`mailto:${SHOP_INFO.email}`}
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    {SHOP_INFO.email}
                  </a>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${SHOP_INFO.name} ${SHOP_INFO.address} ${SHOP_INFO.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#181820] hover:bg-neutral-800 border border-neutral-700 hover:border-[#d4af37] text-neutral-200 text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Get Driving & Subway Directions</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="bg-[#131317] border border-neutral-800 rounded-sm p-6 sm:p-7">
              <h4 className="font-serif-brand text-xs font-bold text-white uppercase tracking-widest mb-3">
                Follow The Shop
              </h4>
              <p className="text-xs text-neutral-400 mb-4 font-light">
                Discover our latest cuts, styling guides, and shop announcements on our social channels.
              </p>

              <div className="flex flex-wrap gap-3">
                {SHOP_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-[#181820] border border-neutral-700 hover:border-[#d4af37] text-neutral-300 hover:text-[#d4af37] rounded-sm text-xs font-medium flex items-center gap-2 transition-colors"
                  >
                    {social.name === 'Instagram' && <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />}
                    {social.name === 'Facebook' && <Facebook className="w-3.5 h-3.5 text-[#d4af37]" />}
                    {social.name === 'Yelp' && <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />}
                    <span>{social.name}</span>
                    <span className="text-[10px] text-neutral-500 font-mono">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
