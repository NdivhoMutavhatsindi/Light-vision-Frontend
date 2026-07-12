export const services = [
  {
    title: 'Property Buying',
    description: 'Expert guidance for finding and securing your ideal property.',
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
