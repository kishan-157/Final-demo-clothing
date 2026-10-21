import React from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Scissors, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl, getStoreStatus } from '../utils/storeUtils';

export const Hero: React.FC = () => {
  const storeStatus = getStoreStatus();

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Graphic & Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
          alt="Nice & New Showroom"
          className="w-full h-full object-cover object-center opacity-25 brightness-75 scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Main Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Google Profile Authority Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-stone-800/80 border border-stone-700/80 backdrop-blur-sm text-xs text-stone-200">
              <span className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9 Google Rating
              </span>
              <span className="text-stone-300 font-medium">1,200+ Verified Reviews</span>
              <span className="text-stone-500">·</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Business
              </span>
            </div>

            {/* Main Title */}
            <div>
              <p className="text-amber-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2">
                Rajkot's Premier Fashion Institution · Est. {STORE_INFO.establishedYear}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury tracking-tight text-white leading-tight">
                Crafting Timeless <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Men's Elegance
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-light">
              From sharp executive Egyptian cotton shirts and stretch denims to regal Italian tuxedos and wedding Indo-Westerns. Experience bespoke master tailoring and Saurashtra's most celebrated collection on Dr. Yagnik Road.
            </p>

            {/* Location & Status Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3.5 rounded-xl bg-stone-800/60 border border-stone-700/60 backdrop-blur-sm max-w-xl">
              <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-400 shrink-0">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-white">Rajeshwari Complex, Opp. Ramakrishna Ashram</p>
                <p className="text-stone-400">Dr. Yagnik Road, Rajkot - 360001 · All 7 Days Open (10 AM - 9 PM)</p>
              </div>
              <div className="sm:ml-auto shrink-0">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${storeStatus.isOpen ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                  {storeStatus.statusText}
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppGeneralUrl('Looking for outfit recommendations / Showroom visit')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/20 transition-all hover:translate-y-[-1px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                href={getCallUrl()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Direct Call</span>
              </a>
            </div>

            {/* Fast Bullet Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free 20-Min Alterations</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pan-India Courier Dispatch</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sizes S to 5XL Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-700 bg-stone-800/90 shadow-2xl p-4 sm:p-5 backdrop-blur-md">
                
                {/* Main Hero Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
                    alt="Premium Menswear Suit & Blazer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Floating Corner Tag */}
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-md border border-amber-500/30">
                    Latest 2026 Collection
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Featured Masterpiece</p>
                    <p className="text-base font-bold">Royal Navy Tuxedo & Wedding Suits</p>
                    <p className="text-xs text-stone-300">Custom tailored fit in-store with Italian interlining</p>
                  </div>
                </div>

                {/* Sub cards / Trust grid */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-left">
                  <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-700/80">
                    <p className="text-2xl font-bold text-amber-400">25+ Yrs</p>
                    <p className="text-xs font-semibold text-stone-200 mt-0.5">Fashion Legacy</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">Trusted in Saurashtra since 1998</p>
                  </div>

                  <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-700/80">
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="text-2xl font-bold">4.9</span>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <p className="text-xs font-semibold text-stone-200 mt-0.5">Google Verified</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">1,248+ customer reviews</p>
                  </div>
                </div>

                {/* Direct Google Map Link CTA */}
                <div className="mt-4 pt-3 border-t border-stone-700/80 flex items-center justify-between">
                  <a
                    href={getDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>Get Navigation Directions</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>

                  <a
                    href={STORE_INFO.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-stone-400 hover:text-stone-200 transition-colors"
                  >
                    View on Google Maps ↗
                  </a>
                </div>

              </div>

              {/* Decorative accent glow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
