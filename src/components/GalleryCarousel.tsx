import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS, GalleryPhoto } from '../data/barbershopData';
import { ChevronLeft, ChevronRight, Maximize2, X, Play, Pause, Grid, Layers } from 'lucide-react';

export const GalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Touch gesture support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || viewMode !== 'carousel' || lightboxPhoto) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying, viewMode, lightboxPhoto]);

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxPhoto(null);
      } else if (e.key === 'ArrowRight' && !lightboxPhoto) {
        nextSlide();
      } else if (e.key === 'ArrowLeft' && !lightboxPhoto) {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto]);

  return (
    <section id="gallery" className="py-24 bg-[#0e0e11] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
              Portfolio & Atmosphere
            </p>
            <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-white tracking-wide uppercase">
              The Gallery at <span className="gold-gradient-text">JOHN'S</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-4" />
          </div>

          {/* View Mode Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <div className="inline-flex p-1 bg-[#141418] border border-neutral-800 rounded-sm">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-[#d4af37] text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#d4af37] text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Slider View */}
        {viewMode === 'carousel' && (
          <div className="space-y-6">
            {/* Main Carousel Frame */}
            <div
              className="relative rounded-sm overflow-hidden border border-neutral-800 bg-[#121216] select-none shadow-2xl group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Image Aspect ratio container (16:9 on desktop, 4:3 on mobile) */}
              <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[600px] overflow-hidden">
                {GALLERY_ITEMS.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.88]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                    {/* Slide Information Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="max-w-xl">
                        <span className="inline-block text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold mb-2 bg-black/60 px-2.5 py-1 rounded-sm border border-[#d4af37]/30">
                          {item.category}
                        </span>
                        <h3 className="font-serif-brand text-xl sm:text-3xl font-bold text-white tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Expand / Lightbox Trigger */}
                      <button
                        onClick={() => setLightboxPhoto(item)}
                        className="self-start sm:self-end px-3.5 py-2 bg-black/70 hover:bg-[#d4af37] text-white hover:text-neutral-950 border border-neutral-700 hover:border-[#d4af37] rounded-sm text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="View Full Resolution"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Zoom</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows (Gold styled) */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-sm bg-black/70 hover:bg-[#d4af37] text-white hover:text-neutral-950 border border-neutral-700 hover:border-[#d4af37] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-sm bg-black/70 hover:bg-[#d4af37] text-white hover:text-neutral-950 border border-neutral-700 hover:border-[#d4af37] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Controls Bar: Dots, Autoplay & Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
              {/* Autoplay Toggle & Current Slide Counter */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-xs text-neutral-400 hover:text-[#d4af37] flex items-center gap-1.5 transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause Autoplay' : 'Play Autoplay'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Autoplay Active</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Paused</span>
                    </>
                  )}
                </button>

                <span className="text-xs text-neutral-500 font-mono">
                  {currentIndex + 1} / {GALLERY_ITEMS.length}
                </span>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-2">
                {GALLERY_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? 'w-8 bg-[#d4af37]'
                        : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Swipe Guide Tip for Mobile */}
              <div className="text-[11px] text-neutral-500 tracking-wider uppercase font-medium hidden sm:block">
                Touch swipe or use arrow keys
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="grid grid-cols-5 gap-3 pt-4 border-t border-neutral-900">
              {GALLERY_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative rounded-sm overflow-hidden h-16 sm:h-20 border transition-all cursor-pointer group ${
                    idx === currentIndex
                      ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 scale-[1.02]'
                      : 'border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600'
                  }`}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grid View Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxPhoto(item)}
                className="group relative rounded-sm overflow-hidden border border-neutral-800 bg-[#121216] cursor-pointer hover:border-[#d4af37]/60 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-[#141418]">
                  <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif-brand text-base font-bold text-white mt-1 group-hover:text-[#f4df8c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-sm cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High-res Image */}
            <div className="rounded-sm overflow-hidden border border-[#d4af37]/40 shadow-2xl max-h-[75vh]">
              <img
                src={lightboxPhoto.imageSrc}
                alt={lightboxPhoto.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center max-w-xl">
              <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                {lightboxPhoto.category}
              </span>
              <h3 className="font-serif-brand text-xl font-bold text-white mt-1">
                {lightboxPhoto.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-light">
                {lightboxPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
