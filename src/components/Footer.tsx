import React from 'react';
import { Scissors, ArrowUp } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Appointment', href: '#contact' },
  ];

  return (
    <footer className="bg-[#09090b] text-neutral-400 text-xs border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-800/80">
          {/* Brand lockup */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-sm bg-[#161619] border border-[#d4af37]/40 flex items-center justify-center">
                <Scissors className="w-3.5 h-3.5 text-[#d4af37]" />
              </div>
              <span className="font-serif-brand text-xl font-bold tracking-[0.2em] text-white">
                JOHN<span className="text-[#d4af37]">'</span>S
              </span>
            </div>
            <p className="text-neutral-500 font-light max-w-sm text-xs">
              Traditional barbering, modern precision, and relaxed hospitality in SoHo, New York.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-[#d4af37] uppercase tracking-wider text-[11px] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 bg-[#121216] border border-neutral-800 hover:border-[#d4af37] text-neutral-300 hover:text-white rounded-sm transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span className="text-[11px] uppercase tracking-wider">Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
          </button>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} JOHN'S Barbershop NYC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Cancellation Terms</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Code of Craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
