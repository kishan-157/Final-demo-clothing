import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleLocationMap } from './components/GoogleLocationMap';
import { StoreGallery } from './components/StoreGallery';
import { GoogleReviews } from './components/GoogleReviews';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { ProductModal } from './components/ProductModal';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { Product, INITIAL_PRODUCTS } from './data/storeData';

const LOCAL_STORAGE_KEY = 'nice_and_new_products_v1';

export default function App() {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_PRODUCTS;
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [photoManagerOpen, setPhotoManagerOpen] = useState(false);

  // Sync to local storage
  const handleUpdateProducts = (updated: Product[]) => {
    setProducts(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Reset product catalog and photos to original defaults?')) {
      setProducts(INITIAL_PRODUCTS);
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch {
        // Ignore
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 selection:bg-amber-600 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenPhotoManager={() => setPhotoManagerOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Brand Heritage, Google Rating, and USPs */}
        <Hero />

        {/* 2. Shop Product Showcase (with WhatsApp Inquiry on every item) */}
        <ProductCatalog
          products={products}
          onOpenProductModal={(p) => setSelectedProduct(p)}
          onOpenPhotoManager={() => setPhotoManagerOpen(true)}
        />

        {/* 3. Why Choose Us / Kyon Chune Section (Aise Kyon Section) */}
        <WhyChooseUs />

        {/* 4. Google Maps Live Location & Directions */}
        <GoogleLocationMap />

        {/* 5. Google Map Store Showroom Photos */}
        <StoreGallery />

        {/* 6. Google Reviews & Testimonials */}
        <GoogleReviews />

        {/* 7. Comprehensive FAQ & Policy Section (Aise Kyon) */}
        <FAQSection />

        {/* 8. Contact Details & Appointment Booking */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPhotoManager={() => setPhotoManagerOpen(true)} />

      {/* Sticky Mobile Bar & Floating Desktop WhatsApp / Call */}
      <FloatingActionBar />

      {/* Product Detail & Order Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Photo Link Manager Modal (to paste photo links anytime) */}
      <PhotoManagerModal
        isOpen={photoManagerOpen}
        onClose={() => setPhotoManagerOpen(false)}
        products={products}
        onUpdateProducts={handleUpdateProducts}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
