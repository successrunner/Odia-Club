export const DAILY_SERVICE_COMMENTS = [
  {
    day: 1,
    date: new Date('2025-01-01'),
    services: [
      {
        title: 'Airport Transfer',
        category: {
          label: 'Transport',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/transport.svg',
        },
        comments: [
          {
            writer: {
              fullName: 'John Smith',
              avatar:
                'https://ui-avatars.com/api/?name=John+Smith&background=0D8ABC&color=fff',
            },
            comment:
              'Driver was very professional and arrived 10 minutes early. Excellent service!',
            createdAt: new Date('2025-01-01T08:30:00'),
          },
          {
            writer: {
              fullName: 'Maria Garcia',
              avatar:
                'https://ui-avatars.com/api/?name=Maria+Garcia&background=FF8C00&color=fff',
            },
            comment: 'Vehicle was clean and comfortable. Would recommend!',
            createdAt: new Date('2025-01-01T14:15:00'),
          },
        ],
      },
      {
        title: 'Welcome Dinner',
        category: {
          label: 'Dining',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/tour.svg',
        },
        comments: [
          {
            writer: {
              fullName: 'David Chen',
              avatar:
                'https://ui-avatars.com/api/?name=David+Chen&background=2E8B57&color=fff',
            },
            comment:
              'The local cuisine was fantastic! Chef did an amazing job explaining each dish.',
            createdAt: new Date('2025-01-01T19:45:00'),
          },
        ],
      },
    ],
  },
  {
    day: 2,
    date: new Date('2025-01-02'),
    services: [
      {
        title: 'Guided City Tour',
        category: {
          label: 'Activities',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/hotel.svg',
        },
        comments: [
          {
            writer: {
              fullName: 'Sarah Johnson',
              avatar:
                'https://ui-avatars.com/api/?name=Sarah+Johnson&background=9370DB&color=fff',
            },
            comment:
              "Our guide Tom was incredibly knowledgeable about the city's history. The walking tour was well-paced.",
            createdAt: new Date('2025-01-02T11:20:00'),
          },
          {
            writer: {
              fullName: 'James Wilson',
              avatar:
                'https://ui-avatars.com/api/?name=James+Wilson&background=CD853F&color=fff',
            },
            comment:
              'Loved the hidden gems we discovered. The local coffee shop stop was a highlight!',
            createdAt: new Date('2025-01-02T16:30:00'),
          },
        ],
      },
      {
        title: 'Spa Treatment',
        category: {
          label: 'Wellness',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/hotel.svg',
        },
        comments: [
          {
            writer: {
              fullName: 'Emma Thompson',
              avatar:
                'https://ui-avatars.com/api/?name=Emma+Thompson&background=DC143C&color=fff',
            },
            comment:
              'The massage was exactly what I needed after the long flight. Very relaxing atmosphere.',
            createdAt: new Date('2025-01-02T15:00:00'),
          },
        ],
      },
    ],
  },
  {
    day: 3,
    date: new Date('2025-01-03'),
    services: [
      {
        title: 'Mountain Excursion',
        category: {
          label: 'Adventure',
          icon: 'https://lmpflklddofmcbqsfdot.supabase.co/storage/v1/object/public/icons/hotel.svg',
        },
        comments: [
          {
            writer: {
              fullName: 'Michael Brown',
              avatar:
                'https://ui-avatars.com/api/?name=Michael+Brown&background=4682B4&color=fff',
            },
            comment:
              "Breathtaking views from the summit! The guide ensured everyone's safety throughout the climb.",
            createdAt: new Date('2025-01-03T14:45:00'),
          },
          {
            writer: {
              fullName: 'Lisa Anderson',
              avatar:
                'https://ui-avatars.com/api/?name=Lisa+Anderson&background=8FBC8F&color=fff',
            },
            comment:
              'Pack lunch was delicious and the photo opportunities were amazing!',
            createdAt: new Date('2025-01-03T16:20:00'),
          },
        ],
      },
    ],
  },
];
