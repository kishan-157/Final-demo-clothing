import React, { useState } from 'react';
import { X, Check, RefreshCw, Plus, Image as ImageIcon, ExternalLink, Trash2 } from 'lucide-react';
import { Product } from '../data/storeData';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onUpdateProducts: (updated: Product[]) => void;
  onResetDefaults: () => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  products,
  onUpdateProducts,
  onResetDefaults,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || '');
  const [imageUrlInput, setImageUrlInput] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // New product form
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCode, setNewCode] = useState('');
  const [newCategory, setNewCategory] = useState<Product['category']>('formal-shirts');
  const [newPrice, setNewPrice] = useState('1899');
  const [newOriginalPrice, setNewOriginalPrice] = useState('2499');
  const [newFabric, setNewFabric] = useState('100% Giza Cotton');
  const [newImageUrl, setNewImageUrl] = useState('');

  if (!isOpen) return null;

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  const handleUpdateSelectedImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct || !imageUrlInput.trim()) return;

    const updated = products.map(p => {
      if (p.id === selectedProduct.id) {
        return { ...p, imageUrl: imageUrlInput.trim() };
      }
      return p;
    });

    onUpdateProducts(updated);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleAddNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newImageUrl.trim()) return;

    const newProd: Product = {
      id: `custom-${Date.now()}`,
      code: newCode || `NN-CUSTOM-${Math.floor(100 + Math.random() * 900)}`,
      name: newName.trim(),
      category: newCategory,
      categoryLabel: newCategory.replace('-', ' ').toUpperCase(),
      price: Number(newPrice) || 1999,
      originalPrice: Number(newOriginalPrice) || 2799,
      fabric: newFabric || 'Premium Fabric',
      fit: 'Regular / Slim Fit',
      sizes: ['38', '40', '42', '44'],
      colors: ['Custom Shade'],
      imageUrl: newImageUrl.trim(),
      badge: 'New Upload',
      description: 'Exclusive custom curated item with premium stitching and material.',
      inStock: true,
      featured: true,
    };

    onUpdateProducts([newProd, ...products]);
    setShowAddForm(false);
    setNewName('');
    setNewImageUrl('');
    setSelectedProductId(newProd.id);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to remove this product?')) {
      const updated = products.filter(p => p.id !== id);
      onUpdateProducts(updated);
      if (selectedProductId === id && updated.length > 0) {
        setSelectedProductId(updated[0].id);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Product Photo Link Manager</h2>
              <p className="text-xs text-stone-300">
                Update existing photo links or add your new shop product links whenever ready
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice for the user */}
        <div className="px-6 py-3 bg-amber-50 border-b border-amber-200 text-amber-900 text-xs flex items-center justify-between shrink-0">
          <span>
            💡 <strong>Note for Shop Owner:</strong> You can paste any direct image URL (from Google Drive, Imgur, Cloudinary, or your WhatsApp catalog links) below. Photos update instantly on your website!
          </span>
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1 font-semibold text-amber-800 hover:text-amber-950 underline text-xs shrink-0 ml-3"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Defaults
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {saveSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg text-sm flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Photo link updated and saved successfully!</span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-stone-200">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-stone-800">
                Catalog Items ({products.length})
              </span>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-900 text-amber-300 hover:bg-stone-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddForm ? 'Cancel Add Product' : 'Add New Product Photo'}</span>
            </button>
          </div>

          {/* Add New Product Form */}
          {showAddForm && (
            <form onSubmit={handleAddNewProduct} className="p-4 bg-stone-50 rounded-xl border border-stone-300 space-y-3">
              <h3 className="text-sm font-bold text-stone-900">Add New Product to Catalog</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Royal Oxford Premium Shirt"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Item Code</label>
                  <input
                    type="text"
                    value={newCode}
                    onChange={(e) => setNewCode(e.target.value)}
                    placeholder="e.g. NN-SH-150"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  >
                    <option value="formal-shirts">Formal Shirts</option>
                    <option value="casual-shirts">Casual Shirts</option>
                    <option value="denim-jeans">Denim & Jeans</option>
                    <option value="blazers-suits">Blazers & Suits</option>
                    <option value="indo-western">Indo-Western & Ethnic</option>
                    <option value="trousers-chinos">Trousers & Chinos</option>
                    <option value="tshirts-polos">T-Shirts & Polos</option>
                    <option value="accessories">Perfumes & Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Price (₹) & MRP</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      placeholder="Selling Price"
                      className="w-1/2 px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                    <input
                      type="number"
                      value={newOriginalPrice}
                      onChange={(e) => setNewOriginalPrice(e.target.value)}
                      placeholder="MRP"
                      className="w-1/2 px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-stone-700 font-medium mb-1">Photo Image URL (HTTPS) *</label>
                  <input
                    type="url"
                    required
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="https://example.com/your-product-photo.jpg"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg shadow-sm"
                >
                  Save & Add to Showcase
                </button>
              </div>
            </form>
          )}

          {/* Quick Select & Edit Existing Product */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left: Product List */}
            <div className="md:col-span-5 border border-stone-200 rounded-xl overflow-hidden bg-stone-50 max-h-96 overflow-y-auto">
              <div className="p-2.5 bg-stone-100 border-b border-stone-200 text-xs font-semibold text-stone-700">
                Select Product to Edit Photo Link
              </div>
              <div className="divide-y divide-stone-200">
                {products.map((p) => {
                  const isSelected = p.id === (selectedProduct?.id || products[0]?.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        setSelectedProductId(p.id);
                        setImageUrlInput(p.imageUrl);
                      }}
                      className={`w-full p-2.5 flex items-center gap-3 text-left transition-colors ${
                        isSelected ? 'bg-amber-100/70 border-l-4 border-amber-600' : 'hover:bg-white'
                      }`}
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="w-12 h-12 object-cover rounded-md border border-stone-300 shrink-0 bg-stone-200"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=200&q=80';
                        }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-stone-900 truncate">{p.name}</p>
                        <p className="text-[11px] text-stone-500">{p.code} · ₹{p.price}</p>
                        <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded">
                          {p.categoryLabel}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Product Preview & Image URL form */}
            <div className="md:col-span-7 bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-4">
              {selectedProduct ? (
                <>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        {selectedProduct.categoryLabel}
                      </span>
                      <h4 className="text-sm font-bold text-stone-900 mt-1">{selectedProduct.name}</h4>
                      <p className="text-xs text-stone-500">Code: {selectedProduct.code} · Price: ₹{selectedProduct.price}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteProduct(selectedProduct.id)}
                      className="p-1.5 text-stone-400 hover:text-red-600 rounded-md hover:bg-stone-100 transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Current Image Preview */}
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-stone-700">Current Image Preview:</p>
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-stone-300 bg-stone-900">
                      <img
                        src={imageUrlInput || selectedProduct.imageUrl}
                        alt={selectedProduct.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80';
                        }}
                      />
                    </div>
                  </div>

                  {/* Image URL Input Form */}
                  <form onSubmit={handleUpdateSelectedImage} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-800 mb-1">
                        Paste New Image URL Link:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          value={imageUrlInput || selectedProduct.imageUrl}
                          onChange={(e) => setImageUrlInput(e.target.value)}
                          placeholder="https://images.unsplash.com/photo-... or your image link"
                          className="flex-1 px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs font-mono text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-stone-900 hover:bg-amber-600 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1 shrink-0"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Update Link</span>
                        </button>
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-500">
                      Pro tip: You can test the link by looking at the preview above before clicking Update Link.
                    </p>
                  </form>
                </>
              ) : (
                <div className="p-8 text-center text-xs text-stone-500">
                  Select a product from the left to edit its photo link.
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between shrink-0">
          <p className="text-xs text-stone-500">
            Changes are saved to browser storage and instantly displayed on the live store.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg"
          >
            Done & Return to Store
          </button>
        </div>

      </div>
    </div>
  );
};
