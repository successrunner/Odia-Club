import { ItinerarySummary } from '@/types/summary.type';

export const SAMPLE_ITINERARY_SUMMARY: ItinerarySummary = {
  itinerary_id: 'cb9792e7-3152-405b-90ee-ce30fcf968b7',
  title: 'Sami in Paris',
  from_date: '2025-06-16',
  to_date: '2025-06-20',
  guest_count: 4,
  cover_image_url:
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format',
  day_summaries: [
    {
      day_date: '2025-06-16',
      day_summary:
        'Spend the day exploring Normandy before taking a private transfer to the picturesque Loire region. Enjoy splashing around and relaxing during your free time.',
    },
    {
      day_date: '2025-06-17',
      day_summary:
        "Explore London at your own pace with a day of car rental, allowing you to discover the city's iconic landmarks and hidden gems.",
    },
    {
      day_date: '2025-06-18',
      day_summary:
        'Indulge in a delectable dinner at a local restaurant in San Sebastien before making your way to the charming city of Bordeaux.',
    },
    {
      day_date: '2025-06-19',
      day_summary:
        'Treat yourself to a luxurious stay at the iconic Peninsula Paris hotel. Later, pick up your rental car and embark on a scenic drive to your next destination.',
    },
    {
      day_date: '2025-06-20',
      day_summary:
        'Relax and unwind at the Maison Rouge Hotel in Strasbourg, then take a private transfer to the Bordeaux airport for your onward journey.',
    },
  ],
  overall_summary:
    'Lorem ipsum dolor sit amet consectetur. Mauris integer nibh amet sit eros sagittis scelerisque ut. Facilisis adipiscing risus tortor ornare. Lorem ipsum dolor sit amet consectetur. Mauris integer nibh amet sit eros sagittis scelerisque ut. Facilisis adipiscing risus tortor ornareLorem ipsum dolor sit amet consectetur. Mauris integer nibh amet sit eros sagittis scelerisque ut. Facilisis adipiscing risus tortor ornareLorem ipsum dolor sit amet consectetur. Mauris integer nibh amet sit eros sagittis scelerisque ut. Facilisis adipiscing risus tortor ornare',
  travellers: ['Tom Owens', 'Liam Jacobs', 'Jacob O’Neils', 'Sarah Riley'],
  price_per_person: 1000,
  travel_agent: {
    first_name: 'Sami',
    last_name: 'Daik',
    agency: 'Tenex',
    logo_file_id: '585b3b70-991e-4851-9850-1447ea163af6',
    logo_image_url:
      'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2000&auto=format&fit=crop',
  },
  created_at: '2025-02-12T07:53:47.204304+00:00',
  updated_at: '2025-02-25T18:18:28.386587+00:00',
};
