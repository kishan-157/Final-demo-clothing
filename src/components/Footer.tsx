import React from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  Heart 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getCallUrl, getWhatsAppGeneralUrl, getDirectionsUrl } from '../utils/storeUtils';

interface FooterProps {
  onOpenPhotoManager: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPhotoManager }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs pb-16 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-serif-luxury text-white tracking-wider">
                {STORE_INFO.name}
              </span>
              <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                EST. {STORE_INFO.establishedYear}
              </span>
            </div>
            
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Rajkot's premier men's and boys' fashion destination for over 25 years. Specializing in executive formal wear, party blazers, stretch denims, and wedding Indo-Westerns.
            </p>

            {/* Google Rating Badge */}
            <a
              href={STORE_INFO.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-300 hover:border-amber-500/40 transition-colors"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">4.9 / 5.0</span>
              <span className="text-stone-400 text-[11px]">(1,248+ Google Reviews)</span>
              <ExternalLink className="w-3 h-3 text-stone-500 ml-1" />
            </a>

            <div className="pt-2">
              <button
                onClick={onOpenPhotoManager}
                className="text-[11px] text-stone-400 hover:text-amber-300 underline transition-colors"
              >
                ⚙️ Shop Owner Photo Link Manager
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Men's Collection</a></li>
              <li><a href="#why-us" className="text-stone-400 hover:text-white transition-colors">Why Choose Us (Kyon)</a></li>
              <li><a href="#location-map" className="text-stone-400 hover:text-white transition-colors">Google Live Map</a></li>
              <li><a href="#gallery" className="text-stone-400 hover:text-white transition-colors">Store Photos</a></li>
              <li><a href="#reviews" className="text-stone-400 hover:text-white transition-colors">Google Reviews</a></li>
              <li><a href="#faq" className="text-stone-400 hover:text-white transition-colors">FAQs & Policy</a></li>
              <li><a href="#contact" className="text-stone-400 hover:text-white transition-colors">Contact & Timings</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Popular Racks
            </h4>
            <ul className="space-y-2">
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Giza Cotton Formal Shirts</a></li>
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Italian Cut Wedding Blazers</a></li>
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Comfort-Stretch Denim Jeans</a></li>
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Indo-Western & Kurta Sets</a></li>
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Pure European Linen Shirts</a></li>
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Signature French Perfumes (EDP)</a></li>
              <li><a href="#collection" className="text-stone-400 hover:text-white transition-colors">Extended Sizes (Up to 5XL)</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Rajkot Showroom
            </h4>
            
            <div className="space-y-2 text-stone-400">
              <p className="text-white font-semibold">Rajeshwari Complex</p>
              <p className="text-amber-300">Opp. Ramakrishna Ashram, Dr. Yagnik Road</p>
              <p>Rajkot, Gujarat - 360001</p>
              
              <div className="pt-2 space-y-1">
                <a href={getCallUrl()} className="flex items-center gap-1.5 text-stone-200 hover:text-amber-300">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{STORE_INFO.phone}</span>
                </a>
                <a href={getWhatsAppGeneralUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300">
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>WhatsApp: +{STORE_INFO.whatsapp}</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-stone-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>10:00 AM – 09:00 PM (Daily)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {STORE_INFO.name} ({STORE_INFO.legalName}). All rights reserved. Dr. Yagnik Road, Rajkot.
          </div>

          <div className="flex items-center gap-4">
            <a href={STORE_INFO.googleProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
              Google Business Profile
            </a>
            <span>•</span>
            <a href={getDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
              Google Maps
            </a>
            <span>•</span>
            <a href={getWhatsAppGeneralUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">
              WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
