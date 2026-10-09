import React from 'react';
import { TESTIMONIALS } from '../data/barbershopData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0b0b0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            Client Impressions
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-white tracking-wide uppercase">
            Praise for <span className="gold-gradient-text">Precision</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4 mb-4" />
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
            Read what gentlemen across New York say about their time in our chairs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#121216] border border-neutral-800 hover:border-[#d4af37]/40 p-8 rounded-sm transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700 group-hover:text-[#d4af37]/40 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-neutral-300 text-sm leading-relaxed italic mb-8 font-light">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Service Attribution - Zero Pill Discipline */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-brand text-base font-bold text-white">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                    <span>{item.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#d4af37]/90">{item.service}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Verified Visit</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Trust Bar */}
        <div className="mt-16 p-6 bg-[#141418] border border-neutral-800/80 rounded-sm flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div>
            <span className="font-serif-brand text-2xl font-bold text-[#d4af37] tabular-nums">4.98 / 5.0</span>
            <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Average Rating</p>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-neutral-800" />
          <div>
            <span className="font-serif-brand text-2xl font-bold text-[#d4af37] tabular-nums">12,400+</span>
            <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Gentlemen Groomed</p>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-neutral-800" />
          <div>
            <span className="font-serif-brand text-2xl font-bold text-[#d4af37] tabular-nums">100%</span>
            <p className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Sanitized Steel & Fresh Linens</p>
          </div>
        </div>
      </div>
    </section>
  );
};
