import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  Eye, 
  Image as ImageIcon, 
  Sparkles, 
  Check, 
  Scissors,
  ArrowUpDown
} from 'lucide-react';
import { Product } from '../data/storeData';
import { getWhatsAppProductUrl } from '../utils/storeUtils';

interface ProductCatalogProps {
  products: Product[];
  onOpenProductModal: (product: Product) => void;
  onOpenPhotoManager: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onOpenProductModal,
  onOpenPhotoManager,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'formal-shirts', label: 'Formal Shirts' },
    { id: 'casual-shirts', label: 'Casual Shirts' },
    { id: 'denim-jeans', label: 'Denim & Jeans' },
    { id: 'blazers-suits', label: 'Blazers & Suits' },
    { id: 'indo-western', label: 'Indo-Western & Ethnic' },
    { id: 'trousers-chinos', label: 'Trousers & Chinos' },
    { id: 'tshirts-polos', label: 'T-Shirts & Polos' },
    { id: 'accessories', label: 'Perfumes & Accessories' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.sizes.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="collection" className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Showroom Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
              Exclusive Men's Collection
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Handpicked garments crafted with luxury Egyptian cotton, premium denim weaves, and Italian tailoring. Click on any item for instant WhatsApp size inquiry & free in-store alteration.
            </p>
          </div>

          {/* Photo Link Manager Trigger */}
          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={onOpenPhotoManager}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <ImageIcon className="w-4 h-4 text-amber-700" />
              <span>Update / Add Photo Links</span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs mb-8 space-y-4">
          
          {/* Top Search & Sort Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shirts, blazers, jeans, sizes (e.g. 42), or fabric..."
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-700">
                <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
                <span>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-semibold text-stone-900 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-stone-900 text-amber-300 shadow-xs'
                      : 'bg-stone-50 text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-base font-semibold text-stone-800">No products found matching your search</p>
            <p className="text-xs text-stone-500 mt-1">Try searching with a different keyword or category</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[4/5] bg-stone-950 overflow-hidden cursor-pointer" onClick={() => onOpenProductModal(product)}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80';
                      }}
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-amber-500/20 shadow-sm backdrop-blur-xs">
                        {product.badge}
                      </span>
                    )}

                    {/* Code Tag */}
                    <span className="absolute bottom-3 left-3 bg-stone-900/80 text-stone-200 text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-xs">
                      {product.code}
                    </span>

                    {/* Quick View Button overlay on hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProductModal(product);
                      }}
                      className="absolute bottom-3 right-3 bg-white text-stone-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-md flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & Fabric info */}
                      <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                        <span className="font-semibold text-amber-800 uppercase tracking-wider">{product.categoryLabel}</span>
                        <span className="truncate max-w-[120px]">{product.fabric}</span>
                      </div>

                      {/* Product Title */}
                      <h3
                        onClick={() => onOpenProductModal(product)}
                        className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Available Sizes */}
                      <div className="flex items-center gap-1 mt-2.5 flex-wrap">
                        <span className="text-[11px] text-stone-400 mr-1">Sizes:</span>
                        {product.sizes.slice(0, 4).map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-semibold text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded"
                          >
                            {s}
                          </span>
                        ))}
                        {product.sizes.length > 4 && (
                          <span className="text-[10px] text-stone-400">+{product.sizes.length - 4}</span>
                        )}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-stone-950">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-stone-400 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          {discount}% OFF
                        </span>
                      </div>

                      {/* Primary WhatsApp Direct Inquiry Button */}
                      <a
                        href={getWhatsAppProductUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Video Shopping / Custom Order Banner */}
        <div className="mt-12 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-6 sm:p-8 text-white border border-stone-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Specialized Wedding & Festive Assistance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury">
              Need a Custom Suit, Blazer, or Video Call Shopping?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Can’t visit the Yagnik Road showroom? Connect with our master fashion consultant over a 1-on-1 WhatsApp video call. We show real-time racks and arrange free alteration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917878100009?text=Hello%20Nice%20%26%20New!%20I%20would%20like%20to%20schedule%20a%20Video%20Call%20Shopping%20session%20for%20menswear."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book Video Call on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
