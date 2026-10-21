import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getCallUrl, getWhatsAppGeneralUrl, getWhatsAppAppointmentUrl, getDirectionsUrl } from '../utils/storeUtils';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Wedding Blazer / Suit Consultation');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const fullDetails = `${service} (${note ? `Note: ${note}` : 'General inquiry'}) - Contact: ${phone}`;
    const url = getWhatsAppAppointmentUrl(fullDetails, date || 'Today / Tomorrow', name);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-amber-300 border border-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white tracking-tight">
            Get In Touch With NICE & NEW
          </h2>
          <p className="text-sm sm:text-base text-stone-300 mt-2">
            Have a question or planning a wedding shopping trip? Call us directly, message on WhatsApp, or book a dedicated styling appointment at our showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-stone-800/90 rounded-2xl border border-stone-700 p-6 sm:p-7 space-y-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold font-serif-luxury text-white border-b border-stone-700 pb-3">
                Store Contact Information
              </h3>

              {/* Phone Direct */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 shrink-0 border border-amber-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Direct Call</p>
                  <a
                    href={getCallUrl()}
                    className="text-base font-bold text-white hover:text-amber-300 transition-colors block"
                  >
                    {STORE_INFO.phone}
                  </a>
                  <a
                    href={`tel:${STORE_INFO.altPhone}`}
                    className="text-xs text-stone-300 hover:text-white transition-colors block"
                  >
                    Alt: {STORE_INFO.altPhone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
                </div>
                <div className="text-left space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400">WhatsApp Support & Video Call</p>
                  <a
                    href={getWhatsAppGeneralUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors block"
                  >
                    +{STORE_INFO.whatsapp}
                  </a>
                  <p className="text-xs text-stone-400">
                    Instant catalog shares, video walkthroughs, and order updates
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-xl text-red-400 shrink-0 border border-red-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Showroom Address</p>
                  <p className="text-sm font-semibold text-white">
                    {STORE_INFO.address.line1}
                  </p>
                  <p className="text-xs text-amber-300">
                    {STORE_INFO.address.landmark}
                  </p>
                  <p className="text-xs text-stone-400">
                    {STORE_INFO.address.city}, {STORE_INFO.address.state} - {STORE_INFO.address.pincode}
                  </p>
                  <a
                    href={getDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-400 hover:underline inline-flex items-center gap-1 pt-1"
                  >
                    <span>Get Navigation Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-700/50 rounded-xl text-stone-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left space-y-0.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Opening Hours</p>
                  <p className="text-sm font-semibold text-white">10:00 AM – 09:00 PM</p>
                  <p className="text-xs text-emerald-400 font-medium">Open 7 Days a Week (All Sunday Open)</p>
                </div>
              </div>

            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={getCallUrl()}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-colors"
              >
                <Phone className="w-4 h-4 text-stone-950" />
                <span>Call Directly</span>
              </a>

              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Book VIP Consultation / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-800/90 rounded-2xl border border-stone-700 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Fast WhatsApp Booking
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white mt-1">
                  Book a Showroom Visit or Video Consultation
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  Planning groom shopping or custom wedding blazers? Reserve a personalized styling session with our master tailor.
                </p>
              </div>

              <form onSubmit={handleBookAppointment} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kishan Ladani"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Service / Styling Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                    >
                      <option value="Wedding Blazer / Suit Consultation">Wedding Blazer / Suit Consultation</option>
                      <option value="Formal Shirts & Office Wardrobe">Formal Shirts & Office Wardrobe</option>
                      <option value="Denim & Casual Collection">Denim & Casual Collection</option>
                      <option value="Indo-Western & Ethnic Kurta Sets">Indo-Western & Ethnic Kurta Sets</option>
                      <option value="Video Call Shopping (Outside Rajkot)">Video Call Shopping (Outside Rajkot)</option>
                      <option value="Express Alteration / Trial Fitting">Express Alteration / Trial Fitting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Preferred Date / Time
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="e.g. This Saturday 4:00 PM"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Special Requirements or Sizes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="e.g. Looking for a royal navy 3-piece tuxedo in size 42 for a reception on next month..."
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Appointment Request via WhatsApp</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  Submitting directly opens WhatsApp with your pre-filled inquiry. No spam guaranteed.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
