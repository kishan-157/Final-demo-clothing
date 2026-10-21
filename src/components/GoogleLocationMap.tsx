import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  Car, 
  Compass, 
  Share2 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { getCallUrl, getDirectionsUrl, getStoreStatus } from '../utils/storeUtils';

export const GoogleLocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const storeStatus = getStoreStatus();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsAppLocation = () => {
    const text = `Find NICE & NEW Men's Wear on Google Maps:\n📍 ${STORE_INFO.address.full}\n📞 Phone: ${STORE_INFO.phone}\n🔗 Directions: ${getDirectionsUrl()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const nearbyDistances = [
    { landmark: 'Trikon Baug', distance: '1.2 km', duration: '4 min drive' },
    { landmark: 'Race Course Ring Road', distance: '1.8 km', duration: '5 min drive' },
    { landmark: 'Rajkot Railway Station', distance: '2.4 km', duration: '7 min drive' },
    { landmark: 'Kalawad Road (Kotecha Chowk)', distance: '3.2 km', duration: '8 min drive' },
    { landmark: '150 Feet Ring Road (Indira Circle)', distance: '4.6 km', duration: '12 min drive' },
  ];

  return (
    <section id="location-map" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Google Maps Live Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
            Visit Our Flagship Store in Rajkot
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Located at Rajeshwari Complex, directly opposite the historic Ramakrishna Ashram on Dr. Yagnik Road with dedicated parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Live Status, Distances & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Status Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm space-y-5">
              
              {/* Live Status Pill */}
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  storeStatus.isOpen ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  {storeStatus.statusText}
                </span>

                <span className="text-xs text-stone-500 font-medium">
                  {STORE_INFO.timings.days}
                </span>
              </div>

              {/* Exact Address */}
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-bold text-stone-900 font-serif-luxury">
                  {STORE_INFO.name}
                </h3>
                <p className="text-sm text-stone-700 font-medium">
                  {STORE_INFO.address.line1}
                </p>
                <p className="text-sm font-semibold text-amber-900">
                  {STORE_INFO.address.landmark}
                </p>
                <p className="text-xs text-stone-500">
                  {STORE_INFO.address.city}, {STORE_INFO.address.state} - {STORE_INFO.address.pincode}
                </p>
              </div>

              {/* Copy Address Button */}
              <div className="pt-2">
                <button
                  onClick={handleCopyAddress}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors border border-stone-200"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-600" />}
                  <span>{copied ? 'Address Copied to Clipboard!' : 'Copy Full Address for GPS'}</span>
                </button>
              </div>

              {/* Timings */}
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
                <div className="flex items-center gap-2 text-stone-800 font-semibold">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Store Hours: 10:00 AM to 09:00 PM</span>
                </div>
                <p className="text-stone-500 pl-6 text-[11px]">
                  Open all 7 days including Sunday. Valet and bike parking available.
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navigate Now</span>
                </a>

                <a
                  href={getCallUrl()}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded-xl text-xs font-bold transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Store</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-100">
                <button
                  onClick={handleShareWhatsAppLocation}
                  className="text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-1"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share location on WhatsApp</span>
                </button>

                <a
                  href={STORE_INFO.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-stone-800 flex items-center gap-1"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Approximate Travel Times in Rajkot */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                <Car className="w-4 h-4 text-amber-600" />
                <span>Travel Time From Key Rajkot Areas</span>
              </div>
              <div className="divide-y divide-stone-100 text-xs">
                {nearbyDistances.map((item, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between text-stone-700">
                    <span className="font-medium">{item.landmark}</span>
                    <div className="flex items-center gap-2 text-stone-500">
                      <span>{item.distance}</span>
                      <span className="text-stone-300">·</span>
                      <span className="text-amber-800 font-semibold">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Visual Directions Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-3 rounded-2xl border border-stone-200 shadow-md overflow-hidden">
              {/* Map Iframe */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <iframe
                  title="Nice and New Rajkot Google Map Location"
                  src="https://maps.google.com/maps?q=NICE+AND+NEW,+Rajeshwari+Complex,+Dr+Yagnik+Road,+Rajkot,+Gujarat+360001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-stone-900/90 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg backdrop-blur-xs flex items-center gap-2 border border-stone-700">
                  <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>Opp. Ramakrishna Ashram, Yagnik Rd</span>
                </div>
              </div>

              {/* Map Bottom Bar */}
              <div className="p-3 mt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-600">
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>Coordinates: 22.2965° N, 70.7960° E</span>
                </div>

                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <span>Open Full Screen in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Landmark Assistance Note */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-3">
              <span className="text-lg">💡</span>
              <div>
                <strong>Help Finding Us:</strong> When coming from Trikon Baug towards Race Course on Dr. Yagnik Road, look for Ramakrishna Ashram on your left; Rajeshwari Complex is situated directly opposite on the right side of the road.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
