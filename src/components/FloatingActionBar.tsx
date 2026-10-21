import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Navigation, 
  ArrowUp, 
  ShoppingBag,
  Sparkles 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl } from '../utils/storeUtils';

export const FloatingActionBar: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right Widgets */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-stone-900 text-stone-200 hover:text-white rounded-full shadow-lg border border-stone-700 hover:bg-stone-800 transition-all"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={getCallUrl()}
          className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 text-amber-300 hover:bg-stone-800 rounded-full shadow-xl border border-stone-700 text-xs font-bold transition-all hover:scale-105"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call: {STORE_INFO.phone}</span>
        </a>

        {/* Floating WhatsApp Action Pill */}
        <a
          href={getWhatsAppGeneralUrl('Hello! I would like to inquire about menswear at Nice and New')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl font-bold text-sm transition-all hover:scale-105 shadow-emerald-900/30"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span>WhatsApp Shopping</span>
        </a>
      </div>

      {/* Mobile Persistent Bottom Floating Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 px-3 py-2.5 shadow-2xl safe-area-pb">
        <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-stone-300">
          
          {/* 1. Direct Call */}
          <a
            href={getCallUrl()}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-stone-900 text-amber-300 hover:bg-stone-800 border border-stone-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400 mb-1" />
            <span>Call Shop</span>
          </a>

          {/* 2. Direct WhatsApp */}
          <a
            href={getWhatsAppGeneralUrl('Hello! I would like to inquire about Nice and New clothing')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-600 text-white shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white mb-1" />
            <span>WhatsApp</span>
          </a>

          {/* 3. Catalog Jump */}
          <a
            href="#collection"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-stone-900 text-stone-200 hover:bg-stone-800 border border-stone-800 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400 mb-1" />
            <span>Catalog</span>
          </a>

          {/* 4. Directions Map */}
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-stone-900 text-stone-200 hover:bg-stone-800 border border-stone-800 transition-colors"
          >
            <Navigation className="w-4 h-4 text-red-400 mb-1" />
            <span>Map GPS</span>
          </a>

        </div>
      </div>
    </>
  );
};
