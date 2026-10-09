import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact & Hours', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d10]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-gradient-to-b from-[#0d0d10]/90 to-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group text-decoration-none shrink-0"
            aria-label="JOHN'S Barbershop Home"
          >
            <div className="w-8 h-8 rounded-sm bg-[#161619] border border-[#d4af37]/40 flex items-center justify-center transition-transform group-hover:scale-105">
              <Scissors className="w-4 h-4 text-[#d4af37]" />
            </div>
            <span className="font-serif-brand text-2xl font-bold tracking-[0.2em] text-white group-hover:text-[#f4df8c] transition-colors">
              JOHN<span className="text-[#d4af37]">'</span>S
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="whitespace-nowrap shrink-0 text-neutral-300 hover:text-[#d4af37] tracking-wider uppercase text-xs transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="gold-button px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-neutral-950 flex items-center gap-2 shadow-md cursor-pointer whitespace-nowrap shrink-0 hover:brightness-110 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-neutral-950" />
              <span>Book an Appointment</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm text-neutral-300 hover:text-[#d4af37] hover:bg-neutral-800/60 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e11] border-b border-[#d4af37]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-neutral-200 hover:text-[#d4af37] text-sm uppercase tracking-wider font-medium py-2 border-b border-neutral-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full gold-button py-3 text-center rounded-sm text-xs font-bold uppercase tracking-wider text-neutral-950 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-neutral-950" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
