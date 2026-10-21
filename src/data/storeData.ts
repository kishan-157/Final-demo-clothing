export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'formal-shirts' | 'casual-shirts' | 'denim-jeans' | 'trousers-chinos' | 'blazers-suits' | 'indo-western' | 'tshirts-polos' | 'accessories';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  fabric: string;
  fit: string;
  sizes: string[];
  colors: string[];
  imageUrl: string;
  badge?: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  helpfulCount: number;
  ownerResponse?: string;
}

export interface StorePhoto {
  id: string;
  title: string;
  category: 'Showroom Interior' | 'Suits & Blazers' | 'Casual & Denims' | 'Ethnic Collection';
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  hindiSummary?: string;
  category: 'Shopping' | 'Fitting & Alteration' | 'Location & Timings' | 'Payment & Delivery';
}

export const STORE_INFO = {
  name: 'NICE & NEW',
  legalName: 'Nice & New Men\'s Wear',
  tagline: 'Premium Men\'s & Boys\' Fashion Since 1998',
  establishedYear: 1998,
  googleRating: 4.9,
  totalReviews: 1248,
  googleProfileUrl: 'https://www.google.com/search?client=ms-android-xiaomi-terr1-rso2&hs=5hBW&sca_esv=7e69963a3bb46de9&cs=0&hl=en-IN&output=search&kgmid=/g/1tfqjsjc&q=NICE+AND+NEW',
  phone: '+91 78781 00009',
  phoneClean: '917878100009',
  altPhone: '+91 94282 10009',
  whatsapp: '917878100009',
  email: 'contact@niceandnew.in',
  address: {
    line1: 'Rajeshwari Complex, Ground Floor',
    landmark: 'Opposite Ramakrishna Ashram, Dr. Yagnik Road',
    city: 'Rajkot',
    state: 'Gujarat',
    pincode: '360001',
    country: 'India',
    full: 'Rajeshwari Complex, Opp. Ramakrishna Ashram, Dr. Yagnik Road, Rajkot, Gujarat 360001',
  },
  timings: {
    days: 'All 7 Days Open (Monday to Sunday)',
    openTime: '10:00 AM',
    closeTime: '09:00 PM',
    openHour24: 10,
    closeHour24: 21,
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.685387994464!2d70.79375!3d22.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca187ab670ff%3A0x8ec12484c98031e2!2sDr%20Yagnik%20Rd%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=NICE+AND+NEW+Dr+Yagnik+Road+Rajkot+Gujarat+360001',
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'nn-01',
    code: 'NN-SH-101',
    name: 'Executive Giza Cotton Formal Shirt',
    category: 'formal-shirts',
    categoryLabel: 'Formal Shirts',
    price: 1899,
    originalPrice: 2499,
    fabric: '100% Egyptian Giza Cotton (Satin Weave)',
    fit: 'Slim / Regular Fit',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['Royal White', 'Sky Blue', 'Soft Lavender', 'Charcoal Grey'],
    imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller',
    description: 'Crisp luxury formal shirt crafted from high-thread Egyptian Giza cotton. Wrinkle-resistant finish ideal for corporate meetings and evening gatherings.',
    inStock: true,
    featured: true,
  },
  {
    id: 'nn-02',
    code: 'NN-DN-204',
    name: 'Vintage Wash Comfort-Stretch Denims',
    category: 'denim-jeans',
    categoryLabel: 'Denim & Jeans',
    price: 2499,
    originalPrice: 3299,
    fabric: 'Premium 12.5 oz Denim with 2% Elastane',
    fit: 'Narrow Straight Fit',
    sizes: ['30', '32', '34', '36', '38', '40'],
    colors: ['Midnight Indigo', 'Stone Wash Blue', 'Deep Black'],
    imageUrl: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    badge: 'Trending Fit',
    description: 'Engineered for all-day comfort with 4-way stretch denim fabric. Features authentic whiskering, durable copper rivets, and reinforced stitching.',
    inStock: true,
    featured: true,
  },
  {
    id: 'nn-03',
    code: 'NN-BZ-301',
    name: 'Italian Cut Royal Navy Tuxedo Blazer',
    category: 'blazers-suits',
    categoryLabel: 'Blazers & Suits',
    price: 6499,
    originalPrice: 8999,
    fabric: 'Wool Blend with Satin Peak Lapel',
    fit: 'Modern Tailored Fit',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['Midnight Navy', 'Emerald Green', 'Classic Black'],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    badge: 'Wedding Collection',
    description: 'Distinguished peak lapel evening blazer crafted for receptions, festive galas, and high-profile parties. Includes complimentary in-store fitting.',
    inStock: true,
    featured: true,
  },
  {
    id: 'nn-04',
    code: 'NN-CS-402',
    name: 'Pure Linen Textured Casual Shirt',
    category: 'casual-shirts',
    categoryLabel: 'Casual Shirts',
    price: 1999,
    originalPrice: 2699,
    fabric: '100% European Flax Breathable Linen',
    fit: 'Relaxed Comfort Fit',
    sizes: ['38', '40', '42', '44'],
    colors: ['Sage Green', 'Warm Beige', 'Desert Sand', 'Navy Blue'],
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    badge: 'Summer Favorite',
    description: 'Ultra-breathable linen shirt treated for maximum softness. Perfect for Saurashtra climate, weekend getaways, and smart-casual outings.',
    inStock: true,
    featured: true,
  },
  {
    id: 'nn-05',
    code: 'NN-IW-503',
    name: 'Designer Asymmetrical Indo-Western Kurta',
    category: 'indo-western',
    categoryLabel: 'Indo-Western & Ethnic',
    price: 4999,
    originalPrice: 6999,
    fabric: 'Raw Silk Blend with Subtle Thread Work',
    fit: 'Royal Tailored Cut',
    sizes: ['38', '40', '42', '44'],
    colors: ['Wine Maroon', 'Powder Peach', 'Ivory Cream', 'Teal Blue'],
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    badge: 'Festive Special',
    description: 'Contemporary festive ensemble designed for weddings, Sangeet, and Diwali. Features metallic accent buttons and sleek drape cut.',
    inStock: true,
    featured: true,
  },
  {
    id: 'nn-06',
    code: 'NN-TR-602',
    name: 'Smart Stretch Chinos & Formal Trousers',
    category: 'trousers-chinos',
    categoryLabel: 'Trousers & Chinos',
    price: 1799,
    originalPrice: 2299,
    fabric: 'Micro-Twill Stretch Cotton',
    fit: 'Slim Tapered Cut',
    sizes: ['30', '32', '34', '36', '38', '40', '42'],
    colors: ['Khaki Tan', 'Carbon Slate', 'Olive Drab', 'Navy Blue'],
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    badge: 'Daily Essential',
    description: 'Versatile stretch chinos crafted with an expandable waistband lining for maximum seated comfort during office or travel.',
    inStock: true,
    featured: false,
  },
  {
    id: 'nn-07',
    code: 'NN-PL-701',
    name: 'Supima Cotton Mercerized Polo T-Shirt',
    category: 'tshirts-polos',
    categoryLabel: 'T-Shirts & Polos',
    price: 1299,
    originalPrice: 1799,
    fabric: '100% Double-Mercerized Supima Cotton',
    fit: 'Athletic Fit',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Forest Green', 'Burgundy', 'Jet Black', 'Pure White'],
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
    badge: 'Silky Smooth',
    description: 'Double-mercerized fabric provides lustrous sheen and prevents color fading even after multiple washes. Tipped knitted ribbed collar.',
    inStock: true,
    featured: false,
  },
  {
    id: 'nn-08',
    code: 'NN-BZ-305',
    name: 'Textured Tweed Winter & Party Blazer',
    category: 'blazers-suits',
    categoryLabel: 'Blazers & Suits',
    price: 5999,
    originalPrice: 7999,
    fabric: 'Herringbone Structured Wool Blend',
    fit: 'Structured Slim Fit',
    sizes: ['38', '40', '42', '44'],
    colors: ['Mocha Brown', 'Charcoal Grid', 'Forest Olive'],
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    badge: 'New Arrival',
    description: 'Premium textured houndstooth tweed blazer featuring contrast elbow patches, hand-stitched inner piping, and silk inner lining.',
    inStock: true,
    featured: true,
  },
  {
    id: 'nn-09',
    code: 'NN-CS-408',
    name: 'Printed Cuban Collar Resort Casual Shirt',
    category: 'casual-shirts',
    categoryLabel: 'Casual Shirts',
    price: 1599,
    originalPrice: 2199,
    fabric: 'Rayon Viscose Ultra-Flow Fabric',
    fit: 'Camp Collar Relaxed Fit',
    sizes: ['38', '40', '42', '44'],
    colors: ['Monochrome Abstract', 'Tropical Emerald', 'Sunset Ochre'],
    imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    badge: 'Party Hit',
    description: 'Lightweight flowing Cuban collar shirt with vibrant digital patterns. Ideal for Goa trips, evening cafe dinners, and casual parties.',
    inStock: true,
    featured: false,
  },
  {
    id: 'nn-10',
    code: 'NN-AC-801',
    name: 'Nice & New Signature French Parfum (100ml)',
    category: 'accessories',
    categoryLabel: 'Perfumes & Accessories',
    price: 1499,
    originalPrice: 1999,
    fabric: 'Eau De Parfum (EDP) 25% Concentration',
    fit: 'Long Lasting 14+ Hours',
    sizes: ['100ml'],
    colors: ['Amber Oud', 'Aqua Marine', 'Tobacco Vanilla'],
    imageUrl: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    badge: 'Customer Favorite',
    description: 'Our in-house best-selling artisan fragrance. Rich top notes of bergamot and spicy cardamon transitioning to a deep woody oud base.',
    inStock: true,
    featured: false,
  },
  {
    id: 'nn-11',
    code: 'NN-SH-112',
    name: 'Micro-Check Dobby Premium Formal Shirt',
    category: 'formal-shirts',
    categoryLabel: 'Formal Shirts',
    price: 1799,
    originalPrice: 2399,
    fabric: 'Super 120s Dobby Cotton',
    fit: 'Contemporary Slim Fit',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['Silver Grey Check', 'Light Lilac Check', 'Ice Blue Grid'],
    imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    badge: 'Formal Classic',
    description: 'Subtle micro-geometric weave that offers crisp fall and sharp collar stability. German interlining in collars and cuffs for longevity.',
    inStock: true,
    featured: false,
  },
  {
    id: 'nn-12',
    code: 'NN-IW-509',
    name: 'Jodhpuri Bandhgala Suit Set with Trousers',
    category: 'indo-western',
    categoryLabel: 'Indo-Western & Ethnic',
    price: 7999,
    originalPrice: 10999,
    fabric: 'Rich Brocade Jacquard Fabric',
    fit: 'Regal Royal Fit',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['Royal Black Gold', 'Imperial Wine', 'Navy Brocade'],
    imageUrl: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80',
    badge: 'Royal Heritage',
    description: 'Traditional Jodhpuri bandhgala with metallic crested buttons and coordinating slim-fit formal trousers. Crafted for grooms and close family weddings.',
    inStock: true,
    featured: true,
  },
];

export const STORE_PHOTOS: StorePhoto[] = [
  {
    id: 'sp-1',
    title: 'Flagship Showroom Entrance & Facade',
    category: 'Showroom Interior',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    description: 'Welcome to NICE & NEW at Rajeshwari Complex, Dr. Yagnik Road Rajkot. Modern spacious showroom with dedicated display sections.',
  },
  {
    id: 'sp-2',
    title: 'Designer Suits & Tuxedo Lounge',
    category: 'Suits & Blazers',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
    description: 'Explore over 300+ blazer varieties, Italian cut tuxedos, and three-piece party suits with personal stylist guidance.',
  },
  {
    id: 'sp-3',
    title: 'Exclusive Denim & Chino Rack Wall',
    category: 'Casual & Denims',
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=80',
    description: 'Huge inventory of stretch denims, comfort fit jeans, chinos, and casual shirts across all sizes from 28 to 44+.',
  },
  {
    id: 'sp-4',
    title: 'Wedding & Festive Ethnic Collection',
    category: 'Ethnic Collection',
    imageUrl: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=1000&q=80',
    description: 'Curated Kurta sets, Nehru jackets, Indo-Western bandhgalas, and sherwanis for Saurashtra wedding season.',
  },
  {
    id: 'sp-5',
    title: 'VIP Trial Room & Alteration Station',
    category: 'Showroom Interior',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    description: 'Spacious well-lit fitting rooms equipped with our on-site master tailor for quick same-day custom alterations.',
  },
  {
    id: 'sp-6',
    title: 'Perfumes, Ties & Premium Accessories Section',
    category: 'Casual & Denims',
    imageUrl: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=1000&q=80',
    description: 'Complete your look with our long-lasting signature fragrances, genuine leather belts, cufflinks, and bow ties.',
  },
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Kishan Patel',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 week ago',
    text: 'One of the best menswear shops in Rajkot! Located right on Yagnik Road opposite Ramkrishna Ashram. The shirt quality and fitting are outstanding. Their master tailor altered my trousers within 20 minutes without any extra charge. Highly recommend!',
    verified: true,
    helpfulCount: 24,
    ownerResponse: 'Thank you so much Kishan bhai for your trust and kind words! Looking forward to serving you again soon.',
  },
  {
    id: 'rev-2',
    author: 'Hardik Vora',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 weeks ago',
    text: 'I purchased 2 blazers and 4 formal shirts for my brother\'s wedding. The fabric collection is truly premium and designs are fresh, unlike traditional stores. Staff was very patient in showing different combinations. 5 stars for sure!',
    verified: true,
    helpfulCount: 19,
    ownerResponse: 'Warmest congratulations to your brother! We are delighted that you loved the wedding blazers and service.',
  },
  {
    id: 'rev-3',
    author: 'Amit Joshi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    text: 'Nice & New has been my go-to shop since college days (over 10 years). Always honest pricing and authentic branded fabrics. Their signature perfume is also amazing and stays all day.',
    verified: true,
    helpfulCount: 31,
  },
  {
    id: 'rev-4',
    author: 'Bhavin Ladani',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 month ago',
    text: 'Best shop for plus-size formal wear in Rajkot. Usually 44 and 46 size is hard to find in good stylish cuts, but here they have a dedicated section. Clean showroom, good AC, and quick WhatsApp support!',
    verified: true,
    helpfulCount: 15,
    ownerResponse: 'Thank you Bhavin bhai! We take pride in stocking all sizes so everyone looks sharp.',
  },
  {
    id: 'rev-5',
    author: 'Parthib Mehta',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '2 months ago',
    text: 'Very polite owner and helpful staff. No pushy sales. They listen to what you need for your office or occasion and recommend exact matching shades. Convenient parking right nearby.',
    verified: true,
    helpfulCount: 12,
  },
  {
    id: 'rev-6',
    author: 'Jaydeep Dave',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
    rating: 4,
    date: '3 months ago',
    text: 'Superb quality denim and linen shirts. Prices are very reasonable compared to branded malls on Kalawad Road. Only suggestion is to add more floral prints in festival season.',
    verified: true,
    helpfulCount: 8,
    ownerResponse: 'Noted Jaydeep bhai! We have added new digital linen floral prints in our latest festive rack. Do visit!',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Where is Nice & New located in Rajkot and what are the store timings?',
    answer: 'NICE & NEW is located at Rajeshwari Complex, Ground Floor, Opposite Ramakrishna Ashram, Dr. Yagnik Road, Rajkot - 360001. We are open all 7 days of the week from 10:00 AM in the morning to 09:00 PM at night.',
    hindiSummary: 'દુકાન ડો. યાજ્ઞિક રોડ પર રામકૃષ્ણ આશ્રમની સામે આવેલી છે. દરરોજ સવારે ૧૦ થી રાત્રે ૯ વાગ્યા સુધી ખુલ્લું રહે છે.',
    category: 'Location & Timings',
  },
  {
    question: 'How do I inquire or order clothes on WhatsApp?',
    answer: 'Simply click the "Inquire on WhatsApp" button on any product card or the floating WhatsApp button. You can also message or call us directly on +91 78781 00009. Our team will instantly share available sizes, photos, video previews, and courier details.',
    hindiSummary: 'કોઈપણ પ્રોડક્ટ પર "Inquire on WhatsApp" બટન દબાવો અથવા +91 7878100009 પર સીધો મેસેજ કરો.',
    category: 'Shopping',
  },
  {
    question: 'Do you offer free alterations and custom tailoring fitting?',
    answer: 'Yes! We have an experienced in-house master tailor at our Yagnik Road showroom. Whether you need trouser hem shortening, waist adjustment, or sleeve fitting on blazers and shirts, we provide express alterations within 20–30 minutes free of charge with your purchase.',
    hindiSummary: 'હા, દુકાન પર જ અનુભવી માસ્ટર ટેલર દ્વારા તદ્દન ફ્રી અલ્ટરેશન કરી આપવામાં આવે છે.',
    category: 'Fitting & Alteration',
  },
  {
    question: 'What sizes are available in your shirts, jeans, and blazers?',
    answer: 'We stock standard as well as extended plus sizes: Shirts from size 38 to 46 (S to 3XL), Denims and Trousers from waist 28 to 44, and Blazers & Suits from chest 36 to 48. Custom orders for specific requirements can also be arranged.',
    hindiSummary: 'શર્ટ 38 થી 46, જીન્સ 28 થી 44 અને બ્લેઝર 36 થી 48 સાઈઝ સુધી ઉપલબ્ધ છે.',
    category: 'Fitting & Alteration',
  },
  {
    question: 'Can I do video call shopping if I live outside Rajkot or Gujarat?',
    answer: 'Absolutely! Many of our clients from Surat, Ahmedabad, Mumbai, the UK, and the USA shop with us via WhatsApp Video Call. We walk you through our showroom racks, help you pick matching outfits, verify measurements, and dispatch via insured express courier across India and worldwide.',
    hindiSummary: 'હા, તમે WhatsApp વિડીયો કોલ દ્વારા ઘરે બેઠા શોપિંગ કરી શકો છો અને કુરિયરથી મંગાવી શકો છો.',
    category: 'Shopping',
  },
  {
    question: 'Do you have wedding suits, reception blazers, and festive ethnic wear?',
    answer: 'Yes! We have a dedicated festive and groom section featuring Italian-cut blazers, 3-piece tuxedo suits, Jodhpuri bandhgalas, designer Indo-Western kurtas, and matching accessories (brooches, ties, pocket squares, and luxury perfumes).',
    hindiSummary: 'લગ્ન પ્રસંગ અને સગાઈ માટે બ્લેઝર, જોધપુરી સુટ અને ઈન્ડો-વેસ્ટર્ન કુર્તાનું વિશાળ કલેક્શન છે.',
    category: 'Shopping',
  },
  {
    question: 'What payment modes do you accept at the store and online?',
    answer: 'We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards, Net Banking, Cash, and instant QR payment.',
    hindiSummary: 'દરેક પ્રકારના UPI (GPay, PhonePe, Paytm), ક્રેડિટ/ડેબિટ કાર્ડ અને રોકડ સ્વીકાર્ય છે.',
    category: 'Payment & Delivery',
  },
  {
    question: 'Is parking available near the store on Dr. Yagnik Road?',
    answer: 'Yes, convenient two-wheeler parking is available directly in front of Rajeshwari Complex, and dedicated four-wheeler parking spaces are available along Dr. Yagnik Road and near the Ramakrishna Ashram perimeter.',
    hindiSummary: 'હા, કોમ્પ્લેક્સ પાસે ટુ-વ્હીલર અને ફોર-વ્હીલર પાર્કિંગની પૂરતી સુવિધા છે.',
    category: 'Location & Timings',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: '25+ Years Legacy in Rajkot',
    subtitle: 'Established 1998',
    description: 'Trusted by over 3 generations of Saurashtra families for authentic styling, honest craftsmanship, and dependable quality.',
    iconName: 'Award',
  },
  {
    title: 'Instant In-House Alterations',
    subtitle: 'Zero Extra Cost',
    description: 'Our veteran master tailor adjusts sleeves, length, and waist in 20 minutes right inside the store so you walk out with a bespoke fit.',
    iconName: 'Scissors',
  },
  {
    title: 'Handpicked Luxury Fabrics',
    subtitle: '100% Cotton & Italian Blends',
    description: 'Every garment is curated for supreme comfort, breathable wear in Gujarat weather, and enduring color retention.',
    iconName: 'Sparkles',
  },
  {
    title: '4.9★ Google Business Rating',
    subtitle: '1,200+ Verified Reviews',
    description: 'Rajkot\'s highest-rated men\'s boutique on Google with thousands of satisfied repeat customers praising our value and hospitality.',
    iconName: 'Star',
  },
  {
    title: 'Direct WhatsApp Shopping',
    subtitle: 'Express Indian Courier',
    description: 'Can\'t visit in person? Connect via WhatsApp for photos, video call selections, and safe same-day dispatch to your door.',
    iconName: 'MessageCircle',
  },
  {
    title: 'Extended Plus Sizes (Up to 5XL)',
    subtitle: 'Flawless Fit For Everyone',
    description: 'Fashion has no size limit. We stock an extensive variety of plus-size formal shirts, stretch denims, and ethnic wear.',
    iconName: 'Shirt',
  },
];
