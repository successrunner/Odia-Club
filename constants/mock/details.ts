import { Itinerary } from '@/types/itinerary.type';

export const SAMPLE_ITINERARY_DETAILS: Itinerary = {
  services: [
    {
      id: '69bab13e-da26-418f-acda-2929935de5d1',
      index: 0,
      additional_info: 'Luxury apartment check-in',
      grouped: false,
      start_date: '2025-06-16',
      start_time: '14:00:00+00',
      end_time: '23:00:00+00',
      price: 1200,
      edited_description:
        "<p>The inviting Trocadero, boasting three spacious bedrooms, awaits you in one of Paris's most charming neighbourhoods, just a stone's throw away from the iconic Eiffel Tower.</p><p>Check-in Details:</p><p>&bullet; 24/7 concierge service</p><p>&bullet; Welcome champagne</p><p>&bullet; Apartment tour and amenities explanation</p><p>&bullet; Local area orientation</p><p>&bullet; Restaurant recommendations and bookings</p>",
      address: '17 Avenue Kléber, 75116 Paris, France',
      contact_name: 'Antoine Dubois',
      contact_phone_number: '+33 6 42 68 36 00',
      status: 'CONFIRMED',
      service: {
        title: 'Trocadero Luxury Apartment',
        images: [
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
          'https://images.unsplash.com/photo-1459535653751-d571815e906b',
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        ],
        category: {
          name: 'Luxury Apartment',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/building.svg',
        },
        headline: 'Your Luxury Home in Paris',
      },
    },
    {
      id: '70c130a0-4fe4-4d14-9849-058b76ede562',
      index: 1,
      additional_info: 'Private guided tour with expert local guide',
      grouped: false,
      start_date: '2025-06-16',
      start_time: '15:00:00+00',
      end_time: '19:00:00+00',
      price: 350,
      edited_description:
        '<p>This <b>4-hour private tour of Paris</b> is fully customizable to your interests. Our expert guide will create a perfect itinerary based on your preferences.</p><br><p>Popular themes include:</p><p>&bullet; Historical Paris</p><p>&bullet; Art & Architecture</p><p>&bullet; Food & Wine</p><p>&bullet; Fashion & Shopping</p><p>&bullet; Hidden Gems & Local Life</p><br><p>Inclusions:</p><p>&bullet; Hotel pickup and drop-off</p><p>&bullet; Professional licensed guide</p><p>&bullet; Luxury vehicle transport</p><p>&bullet; Water and snacks</p><p>&bullet; All taxes and insurance</p>',
      address: 'Pick up from your apartment',
      contact_name: 'Jean-Pierre Dubois',
      contact_phone_number: '+33 6 42 68 30 00',
      status: 'CONFIRMED',
      service: {
        title: 'Private Paris Discovery Tour',
        images: [
          'https://images.unsplash.com/photo-1431274172761-fca41d930114',
          'https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94',
          'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f',
          'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        ],
        category: {
          name: 'Guided Tours',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/walking.svg',
        },
        headline: 'Welcome to Paris Tour',
      },
    },
    {
      id: 'fb028059-217c-47cb-8ef8-4ac3e0da26b7',
      index: 0,
      additional_info: 'Morning market visit with chef',
      grouped: false,
      start_date: '2025-06-17',
      start_time: '09:00:00+00',
      end_time: '13:00:00+00',
      price: 245,
      edited_description:
        '<p><b>Market Tour & Cooking Class</b></p><p>Join our expert chef for a culinary journey:</p><p>&bullet; Visit to local markets</p><p>&bullet; Seasonal ingredient selection</p><p>&bullet; Hands-on cooking class</p><p>&bullet; Wine pairing lunch</p><p>&bullet; Recipe collection to take home</p>',
      address: '8 Rue du Marché Saint-Honoré, 75001 Paris',
      contact_name: 'Chef Marie Laurent',
      contact_phone_number: '+33 6 42 68 37 00',
      status: 'CONFIRMED',
      service: {
        title: 'Parisian Cooking Experience',
        images: [
          'https://images.unsplash.com/photo-1566838217578-1903568a76d9',
          'https://images.unsplash.com/photo-1576244348464-c7d393b6dfc0',
          'https://images.unsplash.com/photo-1628025799421-5b0d37fc0624',
          'https://images.unsplash.com/photo-1551218808-94e220e084d2',
        ],
        category: {
          name: 'Culinary Experience',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/utensils.svg',
        },
        headline: 'Market Tour & Cooking Class',
      },
      attachments: [
        {
          id: 'c869b719-f8f2-46ce-84c9-af6402624d22',
          created_at: '2025-02-24T15:05:56.262091+00:00',
          name: 'recipe-book.pdf',
          url: 'files/client/2025-02-24T15:05:55.634149Zrecipe_book.pdf',
        },
      ],
    },
    {
      id: 'b37f7b12-ebd9-4b7d-a09c-80bb8d78b6b0',
      index: 0,
      additional_info: '5-star luxury hotel in the heart of Paris',
      grouped: true,
      start_date: '2025-06-18',
      start_time: '14:00:00+00',
      end_time: '12:00:00+00',
      price: 475,
      edited_description:
        '<p>Le Grand Hotel Paris</p><br><p>Room Options:</p><p>&bullet; Chambre Caractere, 35sqm - Euros 475/night</p><p>&bullet; Chambre Prestige, 40sqm - Euros 555/night</p><p>&bullet; Pavillon Room, 35sqm - Euros 785/night</p><p>&bullet; Suite, 60sqm - Euros 755/night</p><p>&bullet; Village Suite, 60sqm - Euros 935/night</p><p>&bullet; Parc Suite, 65sqm - Euros 1,035/night</p><p>&bullet; Villa sur le Toit, 125sqm - Euros 1,640/night</p>',
      address: '15 Rue du Faubourg Saint-Honoré, 75008 Paris, France',
      contact_name: 'Marie Laurent',
      contact_phone_number: '+33 1 42 68 30 00',
      status: 'CONFIRMED',
      service: {
        title: 'Le Grand Hotel Paris',
        images: [
          'https://images.unsplash.com/photo-1493564738392-d148cfbd6eda',
          'https://images.unsplash.com/photo-1586987177718-54e088c798b6',
          'https://images.unsplash.com/photo-1536005566535-fc9a7a68f4c1',
          'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
        ],
        category: {
          name: 'Luxury Hotel',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/hotel.svg',
        },
        headline: 'Luxury 5-Star Hotel in Central Paris',
      },
      attachments: [
        {
          id: 'a859b719-f8f2-46ce-84c9-af6402624d22',
          created_at: '2025-02-24T15:05:56.262091+00:00',
          name: 'hotel-brochure.pdf',
          url: 'files/client/2025-02-24T15:05:55.634149Zhotel_brochure.pdf',
        },
        {
          id: 'b869b719-f8f2-46ce-84c9-af6402624d22',
          created_at: '2025-02-24T15:05:56.262091+00:00',
          name: 'spa-menu.pdf',
          url: 'files/client/2025-02-24T15:05:55.634149Zspa_menu.pdf',
        },
      ],
    },
    {
      id: '37e4da28-f117-470a-a7a2-23e9cf51ff58',
      index: 0,
      additional_info: 'Cultural walking tour with expert guide',
      grouped: false,
      start_date: '2025-06-19',
      start_time: '09:30:00+00',
      end_time: '13:30:00+00',
      price: 195,
      edited_description:
        '<p><b>HISTORY, LITERATURE, FASHION & FOOD TOUR</b></p><p>4-hour walking tour through Saint-Germain-des-Prés:</p><p>&bullet; Historic cafés and bookshops</p><p>&bullet; Artisanal chocolates and pastries</p><p>&bullet; Fashion boutiques</p><p>&bullet; Literary landmarks</p><p>&bullet; Maximum group size: 8 people</p>',
      address: 'Café de Flore, 172 Boulevard Saint-Germain, 75006 Paris',
      contact_name: 'Sophie Martin',
      contact_phone_number: '+33 6 42 68 32 00',
      status: 'CONFIRMED',
      service: {
        title: 'Saint-Germain Cultural Tour',
        images: [
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
          'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f',
          'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f',
          'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc',
        ],
        category: {
          name: 'Guided Tours',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/walking.svg',
        },
        headline: 'Literary and Culinary Journey Through Paris',
      },
    },
    {
      id: '4d5e490f-217d-4557-9d87-d3568c04802e',
      index: 1,
      additional_info: 'Michelin-starred dining experience',
      grouped: false,
      start_date: '2025-06-19',
      start_time: '19:30:00+00',
      end_time: '22:30:00+00',
      price: 450,
      edited_description:
        "<p><b>L'Epicure - 3 Michelin Stars Restaurant</b></p><p>Experience the epitome of French gastronomy at our legendary restaurant. Chef Eric Frechon's signature menu includes:</p><p>&bullet; Welcome champagne and amuse-bouche</p><p>&bullet; Seasonal tasting menu (8 courses)</p><p>&bullet; Wine pairing option available</p><p>&bullet; Vegetarian menu available upon request</p><br><p>Dress code: Formal (jacket required)</p>",
      address: '112 Rue du Faubourg Saint-Honoré, 75008 Paris',
      contact_name: "Restaurant L'Epicure",
      contact_phone_number: '+33 1 53 43 43 40',
      status: 'CONFIRMED',
      service: {
        title: "L'Epicure Restaurant",
        images: [
          'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3',
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
          'https://images.unsplash.com/photo-1559339352-11d035aa65de',
          'https://images.unsplash.com/photo-1560624052-449f5ddf0c31',
        ],
        category: {
          name: 'Fine Dining',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/utensils.svg',
        },
        headline: '3 Michelin Stars Dining Experience',
      },
      attachments: [
        {
          id: 'e869b719-f8f2-46ce-84c9-af6402624d22',
          created_at: '2025-02-24T15:05:56.262091+00:00',
          name: 'wine-list.pdf',
          url: 'files/client/2025-02-24T15:05:55.634149Zwine_list.pdf',
        },
        {
          id: 'f869b719-f8f2-46ce-84c9-af6402624d22',
          created_at: '2025-02-24T15:05:56.262091+00:00',
          name: 'menu.pdf',
          url: 'files/client/2025-02-24T15:05:55.634149Zmenu.pdf',
        },
      ],
    },
    {
      id: '6g7h8i9j-10k11-12l13-14m15-n16o17p18q19',
      index: 0,
      additional_info: 'Private museum tour before opening hours',
      grouped: false,
      start_date: '2025-06-20',
      start_time: '08:00:00+00',
      end_time: '10:00:00+00',
      price: 395,
      edited_description:
        '<p><b>Private Early Access Louvre Tour</b></p><p>Experience the Louvre before the crowds:</p><p>&bullet; Skip-the-line access</p><p>&bullet; Private expert guide</p><p>&bullet; See the Mona Lisa without crowds</p><p>&bullet; Focus on museum highlights</p><p>&bullet; Optional breakfast at Café Richelieu</p>',
      address: 'Rue de Rivoli, 75001 Paris',
      contact_name: 'Claire Dubois',
      contact_phone_number: '+33 6 42 68 35 00',
      status: 'CONFIRMED',
      service: {
        title: 'Early Access Louvre Tour',
        images: [
          'https://images.unsplash.com/photo-1544939514-aa98d908bc47',
          'https://images.unsplash.com/photo-1543536833-6d65fcc64f66',
          'https://images.unsplash.com/photo-1499426600726-a950358acf16',
          'https://images.unsplash.com/photo-1572537165377-627a37043464',
        ],
        category: {
          name: 'Museum Tour',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/landmark.svg',
        },
        headline: 'VIP Early Morning Louvre Experience',
      },
    },
    {
      id: '8i9j10k11-12l13-14m15-16n17-o18p19q20r21',
      index: 1,
      additional_info: 'Farewell dinner with Eiffel Tower views',
      grouped: false,
      start_date: '2025-06-20',
      start_time: '19:00:00+00',
      end_time: '22:00:00+00',
      price: 320,
      edited_description:
        '<p><b>Le Jules Verne - Eiffel Tower Restaurant</b></p><p>Culminate your Paris experience with dinner at the iconic Jules Verne:</p><p>&bullet; 5-course tasting menu</p><p>&bullet; Premium window table guaranteed</p><p>&bullet; Wine pairing available</p><p>&bullet; Special farewell dessert</p><p>&bullet; Skip-the-line Eiffel Tower access</p>',
      address: 'Eiffel Tower, Avenue Gustave Eiffel, 75007 Paris',
      contact_name: 'Le Jules Verne',
      contact_phone_number: '+33 1 45 55 61 44',
      status: 'CONFIRMED',
      service: {
        title: 'Le Jules Verne Restaurant',
        images: [
          'https://images.unsplash.com/photo-1551218808-94e220e084d2',
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
          'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9',
        ],
        category: {
          name: 'Fine Dining',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/utensils.svg',
        },
        headline: 'Farewell Dinner at Eiffel Tower',
      },
    },
    {
      id: '9k10l11m-13n14-15o16-17p18-q19r20s21t22',
      index: 1,
      additional_info: 'Afternoon tea and pastry experience',
      grouped: false,
      start_date: '2025-06-18',
      start_time: '15:30:00+00',
      end_time: '17:30:00+00',
      price: 125,
      edited_description:
        '<p><b>Luxury Afternoon Tea at Le Meurice</b></p><p>Indulge in a refined afternoon tea experience:</p><p>&bullet; Selection of premium teas</p><p>&bullet; Signature pastries by Cédric Grolet</p><p>&bullet; Savory finger sandwiches</p><p>&bullet; House-made scones</p><p>&bullet; Glass of champagne</p><br><p>Dress code: Smart casual</p>',
      address: '228 Rue de Rivoli, 75001 Paris',
      contact_name: 'Le Meurice Tea Room',
      contact_phone_number: '+33 1 44 58 10 10',
      status: 'CONFIRMED',
      service: {
        title: 'Le Meurice Afternoon Tea',
        images: [
          'https://images.unsplash.com/photo-1587080413959-06b859fb107d',
          'https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6',
          'https://images.unsplash.com/photo-1530610476181-d83430b64dcd',
          'https://images.unsplash.com/photo-1519676867240-f03562e64548',
        ],
        category: {
          name: 'Dining Experience',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/utensils.svg',
        },
        headline: 'Luxury Afternoon Tea Experience',
      },
    },
    {
      id: '10l11m12n-14o15-16p17-18q19-r20s21t22u23',
      index: 2,
      additional_info: 'Evening classical concert',
      grouped: false,
      start_date: '2025-06-18',
      start_time: '20:00:00+00',
      end_time: '22:00:00+00',
      price: 180,
      edited_description:
        '<p><b>Classical Concert at Sainte-Chapelle</b></p><p>Experience classical music in a stunning Gothic setting:</p><p>&bullet; Works by Mozart, Vivaldi, and Bach</p><p>&bullet; Premium seating</p><p>&bullet; Glass of champagne during intermission</p><p>&bullet; Program notes in English</p><p>&bullet; Skip-the-line entrance</p>',
      address: '8 Boulevard du Palais, 75001 Paris',
      contact_name: 'Concert Coordinator',
      contact_phone_number: '+33 1 42 34 27 10',
      status: 'CONFIRMED',
      service: {
        title: 'Sainte-Chapelle Concert',
        images: [
          'https://images.unsplash.com/photo-1543949806-2c9935e6aa78',
          'https://images.unsplash.com/photo-1559659133-8781d8f3b673',
          'https://images.unsplash.com/photo-1514119412350-e174d90d280e',
          'https://images.unsplash.com/photo-1507838153414-b4b713384a76',
        ],
        category: {
          name: 'Cultural Event',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/music.svg',
        },
        headline: 'Classical Concert in Gothic Masterpiece',
      },
      attachments: [
        {
          id: 'd869b719-f8f2-46ce-84c9-af6402624d22',
          created_at: '2025-02-24T15:05:56.262091+00:00',
          name: 'concert-program.pdf',
          url: 'files/client/2025-02-24T15:05:55.634149Zconcert_program.pdf',
        },
      ],
    },
    {
      id: '11m12n13o-15p16-17q18-19r20-s21t22u23v24',
      index: 1,
      additional_info: 'Luxury shopping experience',
      grouped: false,
      start_date: '2025-06-19',
      start_time: '14:00:00+00',
      end_time: '17:00:00+00',
      price: 0,
      edited_description:
        "<p><b>VIP Shopping Experience</b></p><p>Personal shopping service in Paris's most exclusive boutiques:</p><p>&bullet; Private styling consultation</p><p>&bullet; Priority access to new collections</p><p>&bullet; Champagne service in-store</p><p>&bullet; Tax-free shopping assistance</p><p>&bullet; Delivery to your hotel</p><br><p>Stores include: Louis Vuitton, Chanel, Hermès, and more</p>",
      address: 'Avenue Montaigne, 75008 Paris',
      contact_name: 'Sophie Laurent',
      contact_phone_number: '+33 6 42 68 38 00',
      status: 'CONFIRMED',
      service: {
        title: 'Luxury Shopping Experience',
        images: [
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
          'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0',
          'https://images.unsplash.com/photo-1445205170230-053b83016050',
        ],
        category: {
          name: 'Shopping',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/shopping-bag.svg',
        },
        headline: 'Personal Shopping in Paris',
      },
    },
    {
      id: 'c48g8c23-fce0-5b8e-b10d-91bb9e789f01',
      index: 0,
      additional_info: 'Historic palace hotel with Seine views',
      grouped: true,
      start_date: '2025-06-18',
      start_time: '14:00:00+00',
      end_time: '12:00:00+00',
      price: 595,
      edited_description:
        '<p>Ritz Paris</p><br><p>Room Options:</p><p>&bullet; Superior Room, 35sqm - Euros 595/night</p><p>&bullet; Deluxe Room, 40sqm - Euros 695/night</p><p>&bullet; Executive Suite, 60sqm - Euros 995/night</p><p>&bullet; Prestige Suite, 75sqm - Euros 1,295/night</p><p>&bullet; Grand Suite, 100sqm - Euros 1,895/night</p><p>&bullet; Imperial Suite, 150sqm - Euros 2,500/night</p>',
      address: '15 Place Vendôme, 75001 Paris, France',
      contact_name: 'Philippe Laurent',
      contact_phone_number: '+33 1 43 16 30 30',
      status: 'PENDING',
      service: {
        title: 'Ritz Paris',
        images: [
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
          'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e',
          'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427',
        ],
        category: {
          name: 'Luxury Hotel',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/hotel.svg',
        },
        headline: 'Iconic Luxury Palace Hotel',
      },
    },
    {
      id: 'd59h9d34-gdf1-6c9f-c21e-02cc0f890g12',
      index: 0,
      additional_info: 'Contemporary luxury in Le Marais',
      grouped: true,
      start_date: '2025-06-18',
      start_time: '14:00:00+00',
      end_time: '12:00:00+00',
      price: 425,
      edited_description:
        '<p>Hoxton Paris</p><br><p>Room Options:</p><p>&bullet; Cosy Room, 25sqm - Euros 425/night</p><p>&bullet; Roomy Room, 30sqm - Euros 525/night</p><p>&bullet; Biggy Room, 35sqm - Euros 625/night</p><p>&bullet; Roomy Terrace, 40sqm - Euros 725/night</p><p>&bullet; Biggy Terrace, 45sqm - Euros 825/night</p>',
      address: '30-32 Rue du Sentier, 75002 Paris, France',
      contact_name: 'Emma Bernard',
      contact_phone_number: '+33 1 85 65 75 00',
      status: 'PENDING',
      service: {
        title: 'Hoxton Paris',
        images: [
          'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
          'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
          'https://images.unsplash.com/photo-1590490359683-658d3d23f972',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
        ],
        category: {
          name: 'Luxury Hotel',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/hotel.svg',
        },
        headline: 'Contemporary Luxury in Historic District',
      },
    },
    {
      id: 'e60i0e45-heg2-7d0g-d32f-13dd1g901h23',
      index: 0,
      additional_info: 'Boutique hotel near Champs-Élysées',
      grouped: true,
      start_date: '2025-06-18',
      start_time: '14:00:00+00',
      end_time: '12:00:00+00',
      price: 395,
      edited_description:
        '<p>Maison Albar Hotels Le Pont-Neuf</p><br><p>Room Options:</p><p>&bullet; Classic Room, 22sqm - Euros 395/night</p><p>&bullet; Superior Room, 26sqm - Euros 495/night</p><p>&bullet; Deluxe Room, 30sqm - Euros 595/night</p><p>&bullet; Junior Suite, 35sqm - Euros 695/night</p><p>&bullet; Signature Suite, 45sqm - Euros 895/night</p>',
      address: '23-25 Rue du Pont Neuf, 75001 Paris, France',
      contact_name: 'Lucas Dubois',
      contact_phone_number: '+33 1 44 88 92 60',
      status: 'PENDING',
      service: {
        title: 'Maison Albar Hotels Le Pont-Neuf',
        images: [
          'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
          'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e',
          'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
        ],
        category: {
          name: 'Luxury Hotel',
          icon_url:
            'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/hotel.svg',
        },
        headline: 'Boutique Luxury in Central Paris',
      },
    },
  ],
};
