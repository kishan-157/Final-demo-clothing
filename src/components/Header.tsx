import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  Menu, 
  X, 
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getStoreStatus, getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl } from '../utils/storeUtils';

interface HeaderProps {
  onOpenPhotoManager: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPhotoManager }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const storeStatus = getStoreStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Why Us (Kyon Chune)', href: '#why-us' },
    { label: 'Live Location & Map', href: '#location-map' },
    { label: 'Store Photos', href: '#gallery' },
    { label: 'Google Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 transition-shadow duration-300 shadow-xs">
      {/* Top Notification / Store Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Status & Rating */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span className={storeStatus.isOpen ? 'text-emerald-400 font-semibold' : 'text-amber-400'}>
                {storeStatus.statusText}
              </span>
              <span className="hidden sm:inline text-stone-400">· {storeStatus.subText}</span>
            </span>

            <span className="hidden md:inline-block text-stone-600">|</span>

            {/* Google Rating */}
            <a 
              href={STORE_INFO.googleProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white ml-0.5">{STORE_INFO.googleRating}</span>
              <span className="text-stone-400 text-[11px]">({STORE_INFO.totalReviews}+ Google Reviews)</span>
            </a>
          </div>

          {/* Quick Direct Actions in Top Bar */}
          <div className="flex items-center gap-4 text-xs ml-auto">
            <a 
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Dr. Yagnik Road, Rajkot</span>
            </a>

            <a 
              href={getCallUrl()} 
              className="flex items-center gap-1.5 text-stone-200 hover:text-amber-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{STORE_INFO.phone}</span>
            </a>

            <a 
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Support</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-stone-900 font-serif-luxury uppercase">
                {STORE_INFO.name}
              </span>
              <span className="text-[10px] tracking-widest font-bold uppercase bg-stone-900 text-amber-300 px-1.5 py-0.5 rounded-sm">
                EST. {STORE_INFO.establishedYear}
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-widest text-stone-500 uppercase">
              Men's & Boys' Fashion · Dr. Yagnik Rd, Rajkot
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Photo Link Manager Button */}
            <button
              onClick={onOpenPhotoManager}
              title="Add or update custom product image links"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md border border-stone-300 transition-colors"
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden md:inline">Photo Link Manager</span>
              <span className="md:hidden">Photos</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={getCallUrl()}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-900" />
              <span>Call Shop</span>
            </a>

            {/* WhatsApp Shopping Button */}
            <a
              href={getWhatsAppGeneralUrl('Showroom Visit / Catalog Inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenPhotoManager}
              className="p-2 text-stone-700 hover:bg-stone-100 rounded-md border border-stone-200"
              title="Photo Link Manager"
            >
              <ImageIcon className="w-4 h-4 text-amber-700" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-amber-700 py-1.5 border-b border-stone-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPhotoManager();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-300"
              >
                <ImageIcon className="w-4 h-4 text-amber-700" />
                <span>Update / Add Photo Links</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={getCallUrl()}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-sm font-semibold text-stone-900 bg-amber-100 border border-amber-300 rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-sm font-semibold text-white bg-emerald-600 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-stone-600 bg-stone-50 border border-stone-200 rounded-lg"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Directions: Opp. Ramakrishna Ashram, Rajkot</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
