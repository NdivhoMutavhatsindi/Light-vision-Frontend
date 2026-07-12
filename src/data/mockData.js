export const services = [
  {
    id: 'property-buying',
    slug: 'valuation',
    title: 'Property Buying',
    description: 'Expert guidance for finding and securing your ideal property.',
    icon: 'Building2',
    features: ['Property sourcing', 'Negotiation support', 'Market insight'],
  },
  {
    id: 'property-selling',
    slug: 'legal',
    title: 'Property Selling',
    description: 'Strategic marketing and transaction support to maximise your sale outcome.',
    icon: 'TrendingUp',
    features: ['Pricing strategy', 'Marketing exposure', 'Closing coordination'],
  },
  {
    id: 'compliance',
    slug: 'compliance',
    title: 'Compliance & Due Diligence',
    description: 'Ensure your transaction is fully compliant and risk-aware at every stage.',
    icon: 'Shield',
    features: ['Title checks', 'Regulatory guidance', 'Risk review'],
  },
  {
    id: 'legal-services',
    slug: 'legal',
    title: 'Legal Support',
    description: 'Professional legal coordination for a smooth, secure property transfer.',
    icon: 'Scale',
    features: ['Contract reviews', 'Transfer support', 'Documentation handling'],
  },
  {
    id: 'offer-to-purchase',
    slug: 'offer-to-purchase',
    title: 'Offer to Purchase',
    description: 'Create polished offers with clarity, protection, and confidence.',
    icon: 'FileText',
    features: ['Offer drafting', 'Negotiation guidance', 'Document support'],
  },
  {
    id: 'bond-calculator',
    slug: 'bond-calculator',
    title: 'Bond & Finance Guidance',
    description: 'Understand your affordability and financing options clearly.',
    icon: 'Calculator',
    features: ['Bond estimates', 'Finance planning', 'Affordability insights'],
  },
];

export const stats = [
  { label: 'Properties Sold', value: '350+' },
  { label: 'Happy Clients', value: '250+' },
  { label: 'Years Experience', value: '15+' },
];

export const testimonials = [
  {
    name: 'Client One',
    quote: 'Exceptional service and attention to detail.',
  },
];

export const agents = [
  {
    name: 'Agent One',
    role: 'Senior Property Consultant',
  },
];

export const formatPrice = (value) => {
  const amount = Number(value) || 0;
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(amount);
};
