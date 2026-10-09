export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircut' | 'beard' | 'combo' | 'treatment';
  price: number;
  duration: string;
  description: string;
  included: string[];
  popular?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Haircut' | 'Beard & Shave' | 'Shop & Interior' | 'Craftsmanship';
  description: string;
  imageSrc: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
}

export interface BarberStaff {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'classic-haircut',
    name: 'Classic Precision Cut',
    category: 'haircut',
    price: 45,
    duration: '45 mins',
    description: 'Tailored scissor & clipper cut matched to head shape and hair texture, finished with neck taper and razor cleanup.',
    included: ['Personalized consultation', 'Energizing wash & scalp rinse', 'Straight razor neck shave', 'Styling with matte paste or pomade'],
    popular: true
  },
  {
    id: 'beard-sculpt',
    name: 'Artisan Beard Sculpt & Trim',
    category: 'beard',
    price: 35,
    duration: '30 mins',
    description: 'Precision clipper and scissor shaping, clean line-ups with foil shaver, organic beard oil conditioning, and hot towel finish.',
    included: ['Beard length consultation', 'Symmetric cheek & jawline edging', 'Hot towel steam & hydration', 'Organic sandalwood beard balm']
  },
  {
    id: 'straight-razor-shave',
    name: 'Traditional Hot Towel Shave',
    category: 'beard',
    price: 50,
    duration: '45 mins',
    description: 'The quintessence of barber tradition. Pre-shave essential oils, double hot towel wrap, warm lather, and Japanese steel straight razor shave.',
    included: ['Pre-shave botanical oil massage', 'Double aromatic hot towel wrap', 'Traditional badger-brush lather', 'Cold towel closure & cooling tonic'],
    popular: false
  },
  {
    id: 'executive-combo',
    name: 'The Executive Hair & Beard Combo',
    category: 'combo',
    price: 75,
    duration: '75 mins',
    description: 'Our signature comprehensive package. Full precision haircut combined with a complete sculpted beard trim and straight razor lineup.',
    included: ['Full custom haircut & taper', 'Complete beard sculpting & detail', 'Hot towel treatment', 'Complimentary drink from the private lounge'],
    popular: true
  },
  {
    id: 'fade-scalp-treatment',
    name: 'Skin Fade & Scalp Therapy',
    category: 'haircut',
    price: 55,
    duration: '50 mins',
    description: 'Seamless low, mid, or high bald fade with customized clipper gradients, followed by a tea-tree exfoliating scalp scrub.',
    included: ['Zero-gap seamless skin fade', 'Exfoliating tea tree scalp wash', 'Straight razor perimeter lineup', 'Matte texture powder styling']
  },
  {
    id: 'royal-treatment',
    name: "John's Master VIP Experience",
    category: 'combo',
    price: 110,
    duration: '90 mins',
    description: 'The pinnacle of luxury grooming. Full haircut, hot towel straight razor shave, facial detox massage, and a complimentary single-malt pour.',
    included: ['Master barber service', 'Full haircut & hot towel razor shave', 'Invigorating facial steam & pressure massage', 'Take-home sample styling pomade'],
    popular: true
  }
];

export const BARBERS: BarberStaff[] = [
  {
    id: 'john-vance',
    name: 'John Vance',
    role: 'Founder & Master Barber',
    experience: '16 Years Experience',
    specialty: 'Classic Tapers & Straight Razor Shaves'
  },
  {
    id: 'marcus-cole',
    name: 'Marcus Cole',
    role: 'Senior Stylist',
    experience: '9 Years Experience',
    specialty: 'Beard Sculpting & Scissor Architecture'
  },
  {
    id: 'liam-ortiz',
    name: 'Liam Ortiz',
    role: 'Precision Fade Specialist',
    experience: '7 Years Experience',
    specialty: 'Skin Fades, Textured Crops & Modern Styles'
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'photo-fade',
    title: 'Modern Skin Fade & Textured Crop',
    category: 'Haircut',
    description: 'Seamless taper gradient transition with natural matte volume on top.',
    imageSrc: '/src/assets/images/gallery_haircut_fade_1791567049026.jpg'
  },
  {
    id: 'photo-beard',
    title: 'Precision Sculpted Beard & Mustache',
    category: 'Beard & Shave',
    description: 'Crisp cheek lines, balanced density graduation, and conditioned mustache taper.',
    imageSrc: '/src/assets/images/gallery_beard_grooming_1791567061583.jpg'
  },
  {
    id: 'photo-craft',
    title: 'Artisan Shears & Traditional Hot Lather',
    category: 'Craftsmanship',
    description: 'Hand-honed Japanese shears and custom badger-hair brush detailing.',
    imageSrc: '/src/assets/images/barber_craftsmanship_1791567038514.jpg'
  },
  {
    id: 'photo-stations',
    title: "Heritage Barber Stations & Brass Chairs",
    category: 'Shop & Interior',
    description: 'Custom Belmont leather chairs, warm Edison filament lighting, and antique brass mirrors.',
    imageSrc: '/src/assets/images/hero_barbershop_1791567024555.jpg'
  },
  {
    id: 'photo-lounge',
    title: "Members Lounge & Complimentary Bar",
    category: 'Shop & Interior',
    description: 'Chesterfield leather sofa, dark walnut millwork, espresso bar, and select small-batch bourbon.',
    imageSrc: '/src/assets/images/barbershop_interior_lounge_1791567073466.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'David Rochester',
    role: 'Architect & Urban Designer',
    rating: 5,
    date: 'October 2026',
    service: 'The Executive Hair & Beard Combo',
    quote: "Hands down the finest cut in the city. John's attention to detail is remarkable, and the straight razor work is pure relaxation. The ambiance feels like an exclusive private club without any pretension."
  },
  {
    id: 'test-2',
    name: 'Michael Thornton',
    role: 'Creative Director',
    rating: 5,
    date: 'September 2026',
    service: 'Skin Fade & Scalp Therapy',
    quote: "The precision on my taper fade and beard lineup was textbook perfection. Clean shop, zero rush, immaculate vibes, and great music. Stepping out with a sharp cut and a great espresso is unmatched."
  },
  {
    id: 'test-3',
    name: 'Julian Vance-Kaye',
    role: 'Managing Partner',
    rating: 5,
    date: 'August 2026',
    service: "John's Master VIP Experience",
    quote: "The traditional hot towel shave here sets the gold standard. Essential oils, warm lather, and razor mastery leave your skin completely refreshed. Booking is effortless and they respect your schedule to the minute."
  },
  {
    id: 'test-4',
    name: 'Christopher Bradley',
    role: 'Software Executive',
    rating: 5,
    date: 'July 2026',
    service: 'Classic Precision Cut',
    quote: "Found JOHN'S two years ago and will never go anywhere else. Every barber here treats grooming like a true craft. The atmosphere is warm, calm, and effortlessly stylish."
  }
];

export const SHOP_INFO = {
  name: "JOHN'S",
  tagline: "Classic Cuts, Modern Style",
  subheadline: "Where timeless barbering craft meets contemporary precision. Relax in our private lounge, enjoy a complimentary pour, and leave looking your absolute best.",
  establishedYear: 2018,
  address: "428 Mercer Street, SoHo",
  city: "New York, NY 10013",
  phone: "(212) 555-0198",
  email: "appointments@johnsbarbershop.com",
  hours: [
    { day: "Monday – Thursday", time: "9:00 AM – 8:00 PM" },
    { day: "Friday", time: "9:00 AM – 8:30 PM" },
    { day: "Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "10:00 AM – 5:00 PM" }
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@johnsbarbershop" },
    { name: "Facebook", url: "https://facebook.com", handle: "johnsbarbershopnyc" },
    { name: "Yelp", url: "https://yelp.com", handle: "JOHN'S Barbershop SoHo" }
  ]
};
