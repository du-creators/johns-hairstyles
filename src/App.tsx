/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { GalleryCarousel } from './components/GalleryCarousel';
import { Testimonials } from './components/Testimonials';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { AppointmentModal, BookingDetails } from './components/AppointmentModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  const scrollToBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-neutral-200 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#f4df8c]">
      {/* Sticky Header with Logo and Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* About Us Section */}
        <About />

        {/* Services & Pricing Section */}
        <Services onSelectService={handleSelectService} />

        {/* Gallery Section with Carousel / Slider */}
        <GalleryCarousel />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact & Booking Section */}
        <BookingContact
          selectedService={selectedService}
          onBookingSuccess={(booking) => setConfirmedBooking(booking)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Appointment Confirmation Modal */}
      <AppointmentModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </div>
  );
}
