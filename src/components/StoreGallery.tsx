import React, { useState } from 'react';
import { Camera, Eye, X, ExternalLink, Sparkles } from 'lucide-react';
import { STORE_PHOTOS, STORE_INFO, StorePhoto } from '../data/storeData';

export const StoreGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<StorePhoto | null>(null);

  const categories = ['All', 'Showroom Interior', 'Suits & Blazers', 'Casual & Denims', 'Ethnic Collection'];

  const filteredPhotos = activeCategory === 'All'
    ? STORE_PHOTOS
    : STORE_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Google Business Profile Photos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
              Inside Our Rajkot Showroom
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-2xl">
              Take a virtual walkthrough of our Dr. Yagnik Road showroom before your visit. Explore our dedicated suit trial lounges, denim sections, and in-house tailoring studio.
            </p>
          </div>

          <a
            href={STORE_INFO.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 underline shrink-0"
          >
            <span>View All Photos on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-stone-900 text-amber-300 shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-950 cursor-pointer border border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80';
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag */}
              <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                {photo.category}
              </span>

              {/* Bottom text */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-stone-300 line-clamp-1 mt-0.5 font-light">
                  {photo.description}
                </p>
              </div>

              {/* Hover icon */}
              <div className="absolute top-3 right-3 p-2 bg-white/90 text-stone-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md">
            <div className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-stone-950/80 hover:bg-stone-950 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video max-h-[70vh] bg-stone-950">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 text-white bg-stone-900">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {selectedPhoto.category} · NICE & NEW Rajkot
                </span>
                <h3 className="text-lg font-bold mt-1">{selectedPhoto.title}</h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
