import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  ThumbsUp, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle2, 
  MessageCircle,
  Plus
} from 'lucide-react';
import { GOOGLE_REVIEWS, STORE_INFO, Review } from '../data/storeData';
import { getWhatsAppGeneralUrl } from '../utils/storeUtils';

export const GoogleReviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(GOOGLE_REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      rating: userRating,
      date: 'Just now',
      text: reviewText.trim(),
      verified: true,
      helpfulCount: 1,
      ownerResponse: 'Thank you for shopping with NICE & NEW! We truly appreciate your feedback.',
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowReviewModal(false);
      setAuthorName('');
      setReviewText('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Verified Business Ratings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 tracking-tight">
            Loved By Over 1,200+ Customers
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Read what gentlemen and families across Rajkot, Morbi, Jamnagar, and Saurashtra say about our fitting, fabric longevity, and customer experience.
          </p>
        </div>

        {/* Google Summary Scorecard */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score box */}
            <div className="md:col-span-4 text-center md:text-left md:border-r border-stone-200 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-extrabold text-stone-950 font-serif-luxury">
                  {STORE_INFO.googleRating}
                </span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-1 font-medium">
                    Based on <strong>{STORE_INFO.totalReviews}+</strong> Google Reviews
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center md:justify-start gap-1.5 text-xs text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Google Verified Business Profile</span>
              </div>

              <p className="text-xs text-stone-500 mt-2">
                Rajeshwari Complex, Opp. Ramakrishna Ashram, Dr. Yagnik Road Rajkot
              </p>
            </div>

            {/* Distribution bars */}
            <div className="md:col-span-5 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-12 font-medium text-stone-700">5 star</span>
                <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="w-10 text-right text-stone-500">92%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-medium text-stone-700">4 star</span>
                <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '7%' }}></div>
                </div>
                <span className="w-10 text-right text-stone-500">7%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-medium text-stone-700">3 star</span>
                <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '1%' }}></div>
                </div>
                <span className="w-10 text-right text-stone-500">1%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-medium text-stone-700">2 star</span>
                <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="w-10 text-right text-stone-500">0%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-medium text-stone-700">1 star</span>
                <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="w-10 text-right text-stone-500">0%</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <a
                href={STORE_INFO.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded-xl text-xs font-bold transition-colors text-center shadow-xs"
              >
                <span>Write a Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setShowReviewModal(true)}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors border border-stone-200"
              >
                <Plus className="w-3.5 h-3.5 text-stone-700" />
                <span>Leave Customer Feedback</span>
              </button>
            </div>

          </div>
        </div>

        {/* Customer Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author Info & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover border border-stone-200"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{review.author}</h4>
                      <p className="text-[11px] text-stone-400">{review.date}</p>
                    </div>
                  </div>

                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  "{review.text}"
                </p>
              </div>

              {/* Owner Response if present */}
              {review.ownerResponse && (
                <div className="mt-4 pt-3 border-t border-stone-100 bg-amber-50/50 p-3 rounded-xl border border-amber-200/50 text-[11px] text-amber-950">
                  <p className="font-bold text-amber-900 mb-0.5">Response from Nice & New (Owner):</p>
                  <p className="text-stone-700">{review.ownerResponse}</p>
                </div>
              )}

              {/* Helpful footer */}
              <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-stone-500">
                  <ThumbsUp className="w-3 h-3 text-stone-400" />
                  {review.helpfulCount} people found this helpful
                </span>
                <span className="text-stone-400">Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-App Feedback */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 relative">
              <h3 className="text-lg font-bold text-stone-900 font-serif-luxury">
                Leave Customer Feedback
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Your experience helps fellow shoppers in Rajkot choose their best fit!
              </p>

              {submitted ? (
                <div className="py-8 text-center text-emerald-700 space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <p className="font-bold text-sm">Thank You For Your Review!</p>
                  <p className="text-xs text-stone-600">Your review is now displayed on the store page.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4 mt-4 text-xs">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Ramesh Bhai Patel"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Star Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setUserRating(star)}
                          className="p-1 text-stone-300 hover:text-amber-400"
                        >
                          <Star className={`w-6 h-6 ${star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Your Review / Experience *</label>
                    <textarea
                      required
                      rows={3}
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Mention fabric quality, fitting, staff behavior, alteration speed..."
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewModal(false)}
                      className="px-4 py-2 border border-stone-300 text-stone-700 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-stone-900 text-amber-300 font-bold rounded-lg"
                    >
                      Post Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
