import React from 'react';
import { 
  Award, 
  Scissors, 
  Sparkles, 
  Star, 
  MessageCircle, 
  Shirt, 
  CheckCircle2, 
  Clock, 
  HeartHandshake 
} from 'lucide-react';
import { WHY_CHOOSE_US, STORE_INFO } from '../data/storeData';
import { getWhatsAppGeneralUrl } from '../utils/storeUtils';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-600" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'Star':
        return <Star className="w-6 h-6 text-amber-600" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-amber-600" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-amber-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Kyon Chune NICE & NEW · Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
            Why Rajkot Trusts NICE & NEW For 25+ Years
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            In an era of generic shopping malls, NICE & NEW remains Dr. Yagnik Road's most respected men's boutique because we believe in genuine fabrics, authentic craftsmanship, and zero-compromise personal hospitality.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Guaranteed Satisfaction</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gujarati & Hindi Trust Quote */}
        <div className="mt-14 p-6 sm:p-8 bg-stone-900 text-stone-200 rounded-2xl border border-stone-800 text-center max-w-4xl mx-auto shadow-md">
          <p className="text-base sm:text-lg font-serif-luxury text-amber-300 font-semibold italic">
            "રાજકોટમાં બેસ્ટ ફિટિંગ, શ્રેષ્ઠ કાપડ અને વ્યાજબી ભાવ એટલે ફક્ત નાઈસ એન્ડ ન્યૂ."
          </p>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            "Best fitting, premium fabric, and honest pricing since 1998 opposite Ramakrishna Ashram."
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1 text-emerald-400">
              <Clock className="w-3.5 h-3.5" />
              All 7 Days Open (10:00 AM – 9:00 PM)
            </span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="text-stone-300">
              Dr. Yagnik Road, Rajkot
            </span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <a
              href={getWhatsAppGeneralUrl('I want to know more about in-store custom fitting')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 underline"
            >
              Ask on WhatsApp ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
