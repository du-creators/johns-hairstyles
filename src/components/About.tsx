import React from 'react';
import { Award, Coffee, ShieldCheck, Scissors } from 'lucide-react';
import { BARBERS } from '../data/barbershopData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0e0e11] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            Heritage & Craft
          </p>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-white tracking-wide uppercase">
            The Story of <span className="gold-gradient-text">JOHN'S</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#d4af37] mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Story and Craftsmanship Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5 text-neutral-300 font-light leading-relaxed">
              <h3 className="font-serif-brand text-2xl text-white font-semibold">
                Traditional Grooming, Reimagined for the Modern Gentleman
              </h3>
              <p>
                Founded in SoHo in 2018, <strong className="text-white font-medium">JOHN'S Barbershop</strong> was built on a simple, uncompromising ethos: grooming should never be an assembly line chore. It should be a restorative ritual where sharp technique, respectful hospitality, and time-honored traditions converge.
              </p>
              <p>
                From hand-honed Japanese shears to warm botanical lather and custom straight-razor detailing, our chairs are occupied by those who appreciate meticulous precision. We take our time with each appointment so you never feel hurried.
              </p>
              <p>
                Step inside, leave the city commotion at the doorstep, and settle into our vintage leather chairs with an artisanal espresso or a complimentary neat pour of Kentucky bourbon.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80">
              <div className="p-4 bg-[#141418] border border-neutral-800 rounded-sm">
                <Scissors className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="font-serif-brand text-sm font-bold text-white uppercase mb-1">Expert Barbers</h4>
                <p className="text-xs text-neutral-400">Master-trained artisans dedicated to bespoke head and facial architecture.</p>
              </div>

              <div className="p-4 bg-[#141418] border border-neutral-800 rounded-sm">
                <Award className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="font-serif-brand text-sm font-bold text-white uppercase mb-1">Traditional Shaves</h4>
                <p className="text-xs text-neutral-400">Authentic double hot towels, badger bristle lather, and straight razor precision.</p>
              </div>

              <div className="p-4 bg-[#141418] border border-neutral-800 rounded-sm">
                <Coffee className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="font-serif-brand text-sm font-bold text-white uppercase mb-1">Private Lounge</h4>
                <p className="text-xs text-neutral-400">Chesterfield leather, curated vinyl jazz, and complimentary reserve spirits.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Photography */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-sm overflow-hidden border border-neutral-800 group shadow-lg">
              <img
                src="/src/assets/images/barber_craftsmanship_1791567038514.jpg"
                alt="Master barber cutting hair with shears at JOHN'S"
                className="w-full h-80 sm:h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs">
                <p className="font-serif-brand text-white font-semibold uppercase tracking-wider">Artisan Scissor Craft</p>
                <p className="text-neutral-400 text-[11px]">Precision tapering & razor refinement</p>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden border border-neutral-800 group shadow-lg">
              <img
                src="/src/assets/images/barbershop_interior_lounge_1791567073466.jpg"
                alt="Luxury waiting lounge at JOHN'S barbershop with chesterfield sofa"
                className="w-full h-80 sm:h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs">
                <p className="font-serif-brand text-white font-semibold uppercase tracking-wider">The Gentlemen's Lounge</p>
                <p className="text-neutral-400 text-[11px]">Espresso, whiskey & relaxed atmosphere</p>
              </div>
            </div>
          </div>
        </div>

        {/* Master Barbers Team Strip */}
        <div className="mt-16 pt-12 border-t border-neutral-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">Our Team</p>
              <h3 className="font-serif-brand text-2xl font-bold text-white uppercase">The Master Craftsmen</h3>
            </div>
            <p className="text-xs text-neutral-400 max-w-md mt-2 md:mt-0">
              Each barber at JOHN'S brings over half a decade of precision training, specializing in classic techniques and modern styles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className="bg-[#141418] border border-neutral-800 hover:border-[#d4af37]/40 p-6 rounded-sm transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-serif-brand text-lg font-bold text-white">{barber.name}</h4>
                    <p className="text-xs text-[#d4af37] font-medium mt-0.5">{barber.role}</p>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono tabular-nums bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-sm">
                    {barber.experience}
                  </span>
                </div>
                <div className="text-xs text-neutral-400 pt-3 border-t border-neutral-800/60 flex items-center gap-1.5">
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px]">Focus:</span>
                  <span className="text-neutral-300">{barber.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
