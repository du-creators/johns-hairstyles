import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/barbershopData';
import { Check, Clock, Sparkles, Scissors, ShieldAlert } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircut', label: 'Cuts & Styling' },
    { id: 'beard', label: 'Beard & Shaves' },
    { id: 'combo', label: 'Combos & VIP' },
  ];

  return (
    <section id="services" className="py-24 bg-[#0b0b0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            Menu of Craftsmanship
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-white tracking-wide uppercase">
            Services & <span className="gold-gradient-text">Pricing</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4 mb-4" />
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
            Every service includes a consultation, warm neck towel, and a complimentary beverage from our private bar.
          </p>
        </div>

        {/* Category Tabs (Segmented control) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#141418] border border-neutral-800 rounded-sm gap-1 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-neutral-950 shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative bg-[#121216] border rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/60 group ${
                service.popular ? 'border-[#d4af37]/40 shadow-[0_4px_25px_rgba(212,175,55,0.06)]' : 'border-neutral-800'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-5 bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-neutral-950 text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-sm shadow-sm flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Signature Choice</span>
                </div>
              )}

              <div>
                {/* Title & Price Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800/80">
                  <div>
                    <h3 className="font-serif-brand text-lg font-bold text-white group-hover:text-[#f4df8c] transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-serif-brand text-2xl font-bold text-[#d4af37] tabular-nums">
                      ${service.price}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 my-4 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* What's Included */}
                <div className="space-y-2 mb-6 pt-2">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Included:</p>
                  {service.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.name)}
                className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#d4af37]/40 text-[#f4df8c] bg-[#d4af37]/5 hover:bg-[#d4af37] hover:text-neutral-950 transition-all cursor-pointer flex items-center justify-center gap-2 group-hover:border-[#d4af37]"
              >
                <span>Select & Book</span>
              </button>
            </div>
          ))}
        </div>

        {/* Custom Consultation Note */}
        <div className="mt-14 p-6 bg-[#121216] border border-neutral-800 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#181820] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <Scissors className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="font-serif-brand text-base font-bold text-white">Looking for a Custom Grooming Package?</h4>
              <p className="text-xs text-neutral-400">Wedding parties, private evening buyouts, and groomsmen grooming sessions available upon request.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService("Groomsmen / Private Buyout")}
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-neutral-200 border border-neutral-700 hover:border-[#d4af37] hover:text-[#d4af37] rounded-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Inquire for Group Booking
          </button>
        </div>
      </div>
    </section>
  );
};
