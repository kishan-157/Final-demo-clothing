import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Phone, 
  Check, 
  Scissors, 
  ShieldCheck, 
  Truck, 
  Share2, 
  ExternalLink 
} from 'lucide-react';
import { Product, STORE_INFO } from '../data/storeData';
import { getWhatsAppProductUrl, getCallUrl } from '../utils/storeUtils';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0];
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} | NICE & NEW Rajkot`,
        text: `Check out ${product.name} (Code: ${product.code}) at NICE & NEW, Dr. Yagnik Road Rajkot.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.origin}#collection`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-900/60 hover:bg-stone-900 text-white rounded-full transition-colors"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left: Product Image */}
          <div className="md:col-span-5 bg-stone-900 relative aspect-square md:aspect-auto">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
              }}
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-md shadow-md">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-3 left-3 right-3 p-2 bg-stone-900/80 backdrop-blur-sm rounded-lg text-white text-[11px] flex items-center justify-between">
              <span>Item Code: <strong className="text-amber-300">{product.code}</strong></span>
              <span className="text-emerald-400 font-semibold">● Ready in Store</span>
            </div>
          </div>

          {/* Right: Product Details & WhatsApp Ordering */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                    {product.categoryLabel}
                  </span>
                  <button
                    onClick={handleShare}
                    className="text-stone-400 hover:text-stone-700 text-xs flex items-center gap-1"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                  </button>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900 mt-2">
                  {product.name}
                </h3>
              </div>

              {/* Price & Savings */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-stone-950">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-stone-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Save {discountPercent}%
                </span>
                <span className="text-[11px] text-stone-500 ml-auto">(Taxes included)</span>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key Fabric & Fit Specs */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                <div>
                  <span className="text-stone-500 block">Fabric:</span>
                  <strong className="text-stone-800">{product.fabric}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block">Fit Style:</span>
                  <strong className="text-stone-800">{product.fit}</strong>
                </div>
              </div>

              {/* Available Sizes Selection */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-stone-800">Select Desired Size:</span>
                  <span className="text-stone-500">Free In-Store Alteration Included</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        currentSize === size
                          ? 'bg-stone-900 text-amber-300 border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Available Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-stone-800 block mb-1">
                    Available Shades:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-stone-600">
                    {product.colors.map((c, i) => (
                      <span key={i} className="px-2.5 py-1 bg-stone-100 rounded-md border border-stone-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Inquiries & CTAs */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={getWhatsAppProductUrl(product, `Selected Size: ${currentSize}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={getCallUrl()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-semibold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Store Directly</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <Scissors className="w-3.5 h-3.5 text-amber-600" />
                  Free 20-min alteration
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-amber-600" />
                  Pan-India Courier
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  100% Genuine Fabric
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
