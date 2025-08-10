import { ServicePrice } from '@/types/service-price.type';

export const TOTAL_PRICE_TABLE_DATA = {
  days: 7,
  categories: [
    {
      label: 'Transport',
      icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/transport.svg',
      count: 7,
      price: 199,
    },
    {
      label: 'Tour',
      icon: 'https://ceojweewugyimddhqsdg.supabase.co/storage/v1/object/public/icons/tour.svg',
      count: 4,
      price: 430,
    },
    {
      label: 'Boat',
      icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/boat.svg',
      count: 6,
      price: 199,
    },
  ],
};

export const DAILY_SERVICE_PRICE_TABLE_DATA: ServicePrice[] = [
  {
    day: 1,
    date: new Date('2025-01-01'),
    services: [
      {
        title: 'Airport Transport',
        details: '(Option 2) Luxury Mercedes A Class+3',
        category: {
          label: 'Transport',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/transport.svg',
        },
        pricePerPerson: 49.99,
        totalPassengers: 4,
        extraOptions: [
          {
            label: 'Tripping driver',
            unitPrice: 9.99,
            quantity: 1,
          },
          {
            label: 'Add-on title',
            unitPrice: 9.99,
            quantity: 4,
          },
          {
            label: 'Add-on title',
            unitPrice: 9.99,
            quantity: 3,
          },
        ],
      },
      {
        title: 'Hotel Stay one night ',
        category: {
          label: 'Boat',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/boat.svg',
        },
        pricePerPerson: 49.99,
        totalPassengers: 4,
        extraOptions: [
          {
            label: 'Breakfast buffet',
            unitPrice: 25.0,
            quantity: 4,
          },
          {
            label: 'Spa access',
            unitPrice: 45.0,
            quantity: 2,
          },
        ],
      },
      {
        title: 'Perfume Workshop in Grasse',
        details:
          '(Option 3) Prestige Workshop, 100 rare essences, 2 hours, 90ml perfume including handbag vapo +3',
        category: {
          label: 'Tour',
          icon: 'https://ceojweewugyimddhqsdg.supabase.co/storage/v1/object/public/icons/tour.svg',
        },
        pricePerPerson: 49.99,
        totalPassengers: 4,
      },
    ],
  },
  {
    day: 2,
    date: new Date('2025-01-02'),
    services: [
      {
        title: 'Monaco City Tour',
        details:
          'Full day guided tour of Monaco including Monte Carlo Casino and Royal Palace',
        category: {
          label: 'Tour',
          icon: 'https://ceojweewugyimddhqsdg.supabase.co/storage/v1/object/public/icons/tour.svg',
        },
        pricePerPerson: 89.99,
        totalPassengers: 4,
        extraOptions: [
          {
            label: 'Casino entrance fee',
            unitPrice: 30.0,
            quantity: 4,
          },
          {
            label: 'Lunch at Café de Paris',
            unitPrice: 75.0,
            quantity: 4,
          },
        ],
      },
      {
        title: 'Yacht Experience',
        details: '4-hour private yacht tour along the French Riviera',
        category: {
          label: 'Boat',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/boat.svg',
        },
        pricePerPerson: 199.99,
        totalPassengers: 4,
      },
    ],
  },
  {
    day: 3,
    date: new Date('2025-01-03'),
    services: [
      {
        title: 'Nice to Cannes Transfer',
        details: 'Private luxury vehicle transfer',
        category: {
          label: 'Transport',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/transport.svg',
        },
        pricePerPerson: 39.99,
        totalPassengers: 4,
      },
      {
        title: 'Cannes Film Festival Walking Tour',
        details:
          'Guided tour of famous film festival locations and La Croisette',
        category: {
          label: 'Tour',
          icon: 'https://ceojweewugyimddhqsdg.supabase.co/storage/v1/object/public/icons/tour.svg',
        },
        pricePerPerson: 59.99,
        totalPassengers: 4,
        extraOptions: [
          {
            label: 'Professional photo session',
            unitPrice: 99.0,
            quantity: 1,
          },
          {
            label: 'VIP access to Palais des Festivals',
            unitPrice: 35.0,
            quantity: 4,
          },
        ],
      },
    ],
  },
];
