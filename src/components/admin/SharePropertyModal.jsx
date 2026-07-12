import { AnimatePresence, motion } from 'framer-motion';
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTelegram,
  FaPinterest,
  FaTwitter,
  FaRegCopy,
} from 'react-icons/fa';
import { X, Share2 } from 'lucide-react';

function formatPrice(value) {
  const amount = Number(value) || 0;
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function SharePropertyModal({ property, onClose }) {
  if (!property) return null;

  const propertyUrl = `https://lightvisionproperties.co.za/properties/${property.property_id}`;
  const imageUrl =
    property.images?.find((img) => img.is_primary)?.image_url ||
    property.images?.[0]?.image_url ||
    property.image ||
    '';

  const message = `🏡 ${property.title}\n\n📍 ${property.location}\n\n🛏 ${property.bedrooms} Bedrooms\n🛁 ${property.bathrooms} Bathrooms\n\n💰 ${formatPrice(property.price)}\n\n${property.description}\n\nView Property\n\n${propertyUrl}`;

  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(message)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(propertyUrl)}`;
  const telegram = `https://t.me/share/url?url=${encodeURIComponent(propertyUrl)}&text=${encodeURIComponent(message)}`;
  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  const pinterest = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(propertyUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(property.title)}`;

  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(message);
      alert('Caption copied!');
    } catch (error) {
      console.error('Unable to copy caption', error);
      alert('Unable to copy caption.');
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl);
      alert('Property link copied!');
    } catch (error) {
      console.error('Unable to copy link', error);
      alert('Unable to copy link.');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div>
              <h3 className="text-xl font-semibold text-navy-900">Share Property</h3>
              <p className="text-sm text-gray-500">Share this listing across your marketing channels.</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <X size={18} className="text-gray-600" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-4 bg-gray-50">
              <div className="flex gap-4">
                {imageUrl ? (
                  <img src={imageUrl} alt={property.title} className="w-24 h-24 rounded-xl object-cover" />
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-gray-200" />
                )}
                <div>
                  <h4 className="font-semibold text-navy-900">{property.title}</h4>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <p className="text-sm text-gold-600 mt-1">{formatPrice(property.price)}</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
              <textarea
                readOnly
                value={message}
                rows={7}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: 'Facebook', href: facebook, icon: FaFacebook, color: 'text-blue-600' },
                { label: 'WhatsApp', href: whatsapp, icon: FaWhatsapp, color: 'text-green-600' },
                { label: 'LinkedIn', href: linkedin, icon: FaLinkedin, color: 'text-blue-700' },
                { label: 'Telegram', href: telegram, icon: FaTelegram, color: 'text-sky-600' },
                { label: 'Pinterest', href: pinterest, icon: FaPinterest, color: 'text-red-600' },
                { label: 'Twitter', href: twitter, icon: FaTwitter, color: 'text-sky-500' },
              ].map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:border-gold-400 hover:text-gold-600 transition-colors"
                >
                  <Icon className={color} />
                  {label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={copyCaption}
                className="flex items-center gap-2 rounded-xl bg-navy-900 px-4 py-2 text-sm font-medium text-white hover:bg-navy-800"
              >
                <FaRegCopy /> Copy Caption
              </button>
              <button
                onClick={copyLink}
                className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gold-400 hover:text-gold-600"
              >
                <Share2 size={14} /> Copy Link
              </button>
              <button
                onClick={onClose}
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
