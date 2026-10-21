import { Product, STORE_INFO } from '../data/storeData';

/**
 * Generates an official WhatsApp click-to-chat link with encoded text
 */
export function getWhatsAppProductUrl(product: Product, customNote?: string): string {
  const base = `https://wa.me/${STORE_INFO.whatsapp}`;
  const message = `Hello Nice & New! 🛍️\n\nI am interested in:\n*${product.name}*\n• Item Code: ${product.code}\n• Price: ₹${product.price.toLocaleString('en-IN')}\n• Category: ${product.categoryLabel}\n• Available Sizes: ${product.sizes.join(', ')}\n${customNote ? `\nNote: ${customNote}\n` : ''}\nPlease share more photos, available colors, and ordering details.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(topic?: string): string {
  const base = `https://wa.me/${STORE_INFO.whatsapp}`;
  const message = topic 
    ? `Hello Nice & New! 👋\n\nI would like to inquire about: *${topic}*. Please assist me with details.`
    : `Hello Nice & New! 👋\n\nI visited your website and would like to inquire about your collection and showroom visit at Dr. Yagnik Road, Rajkot.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppAppointmentUrl(service: string, date: string, name: string): string {
  const base = `https://wa.me/${STORE_INFO.whatsapp}`;
  const message = `Hello Nice & New! 👔\n\nI would like to book a showroom visit / fitting consultation:\n• Name: ${name}\n• Service: ${service}\n• Preferred Date: ${date}\n\nPlease confirm availability at your Dr. Yagnik Road store.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getCallUrl(): string {
  return `tel:${STORE_INFO.phone}`;
}

export function getDirectionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE_INFO.address.full)}`;
}

/**
 * Returns real-time open/closed status according to Indian Standard Time (UTC + 5:30)
 */
export function getStoreStatus(): {
  isOpen: boolean;
  statusText: string;
  subText: string;
} {
  try {
    // Current time in IST (UTC+5:30)
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 3600000;
    const istDate = new Date(utcTime + istOffset);
    
    const hours = istDate.getHours();
    const minutes = istDate.getMinutes();
    const currentDecimal = hours + minutes / 60;
    
    const openTime = STORE_INFO.timings.openHour24; // 10
    const closeTime = STORE_INFO.timings.closeHour24; // 21 (9 PM)

    if (currentDecimal >= openTime && currentDecimal < closeTime) {
      const hoursRemaining = Math.floor(closeTime - currentDecimal);
      return {
        isOpen: true,
        statusText: 'Open Now',
        subText: `Closes at 9:00 PM (${hoursRemaining > 0 ? `${hoursRemaining}h remaining` : 'closing soon'})`,
      };
    } else if (currentDecimal < openTime) {
      return {
        isOpen: false,
        statusText: 'Opens at 10:00 AM',
        subText: 'Showroom opens shortly today',
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Closed for Today',
        subText: 'Opens tomorrow at 10:00 AM',
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Today',
      subText: '10:00 AM – 9:00 PM',
    };
  }
}
