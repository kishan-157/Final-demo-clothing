import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { FAQS } from '../data/storeData';
import { getWhatsAppGeneralUrl, getCallUrl } from '../utils/storeUtils';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Shopping', 'Fitting & Alteration', 'Location & Timings', 'Payment & Delivery'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Aise Kyon · Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
            Common Customer Queries Answered
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Everything you need to know about shopping, custom alterations, store location, video shopping, and WhatsApp order delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
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

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-100/60 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900 font-serif-luxury">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-stone-200/70 text-stone-700 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-200 text-amber-900' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-stone-700 text-sm leading-relaxed border-t border-stone-200/70 pt-4 bg-white">
                    <p>{faq.answer}</p>

                    {faq.hindiSummary && (
                      <div className="mt-3 p-3 bg-amber-50/60 rounded-xl border border-amber-200/50 text-xs text-amber-950 font-medium flex items-start gap-2">
                        <span className="font-bold text-amber-800 shrink-0">ગુજરાતી સાર:</span>
                        <span>{faq.hindiSummary}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-stone-900 text-white rounded-2xl border border-stone-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-serif-luxury">
              Have Another Question in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-lg">
              Our team at Rajeshwari Complex, Dr. Yagnik Road is happy to answer any questions about measurements, partywear, and store timings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={getWhatsAppGeneralUrl('I have a query regarding Nice and New store')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={getCallUrl()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs border border-stone-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
