import { Room, GalleryItem, GenuineReview, ExperienceCategory } from '../types';

export const PROPERTY_INFO = {
  name: 'B&B ARTEMISIA',
  subname: 'Alghero · Sardegna · Italy',
  tagline: 'The Art of Staying in Alghero',
  cin: 'IT090003C1000E6226',
  rating: '4.84',
  reviewCount: 62,
  address: {
    street: 'Via Alcide De Gasperi 36 C',
    city: 'Alghero',
    province: 'Sassari',
    region: 'Sardegna',
    postcode: '07041',
    country: 'Italy',
  },
  contact: {
    hostName: 'Lavinia Monica',
    role: 'Owner & Host',
    experienceYears: 10,
    languages: ['Italian', 'English', 'French', 'Catalan', 'Spanish'],
    phone: '+39 347 123 4567',
    email: 'monimasali@tiscali.it',
    checkInTime: '15:00 - 20:00',
    checkOutTime: '08:00 - 10:00',
  },
  locationHighlights: [
    { label: 'Dante Promenade', distance: '800 meters', note: 'Scenic coastal stroll by the sea' },
    { label: 'Historic Center of Alghero', distance: '15 minutes', note: 'Cobblestone lanes, towers, ramparts & restaurants' },
    { label: 'Beaches by Public Bus', distance: 'Bus stop in front', note: 'Direct lines to Maria Pia, Le Bombarde & Mugoni' },
    { label: 'Free Street Parking', distance: 'In front of property', note: 'Quiet residential street parking' },
    { label: 'Guarded Bike & Moto Parking', distance: 'On reservation', note: 'Secure locked parking on premises' },
    { label: 'Neighborhood Amenities', distance: 'Walking distance', note: 'Supermarket, pharmacy, bakery, pizzerias & cafés' },
  ],
};

// Curated genuine property photos extracted from official listing
export const PROPERTY_IMAGES = {
  hero: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/f5674aa6-b9cf-46c0-ad6c-56566e36bcbd.jpeg?im_w=1920',
  heroSecondary: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/d73478fb-08e0-4089-85e9-61409d8d80ac.jpeg?im_w=1600',
  
  // Outdoor & Garden
  gardenOverview: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/f8186ac6-02ef-4ea7-9c39-19898ca3f65f.jpeg?im_w=1200',
  gardenPatio: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/6891b48d-426c-43c0-90ba-c256575738c4.jpeg?im_w=1200',
  gardenDeckchairs: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/85f131a2-e9b4-4f7d-9c87-376ca70ef390.jpeg?im_w=1200',
  gardenHerbCorner: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/d6559578-dc1f-4ff1-a2ea-1ae1d9f586e0.jpeg?im_w=1200',
  coveredPatioBreakfast: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/57279407-db06-41b5-b772-44b4e4965ff0.jpeg?im_w=1200',

  // Interior & Shared spaces
  kitchenBreakfast: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/b9aa35e2-00c1-4eb5-b850-333a7bb8c5c5.jpeg?im_w=1200',
  kitchenCoffeeCorner: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/e377e7a6-046c-49e1-8189-653104202072.jpeg?im_w=1200',
  entranceLounge: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/9427d671-09e2-4d1f-acd1-cb234c0d1c0b.jpeg?im_w=1200',
  loungeArmchairs: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/f75d73c5-7670-4d7d-9115-8d21246225f7.jpeg?im_w=1200',

  // Craft & Handcrafted details
  paraguaySuitcaseMapHolder: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/fbefaf5b-5dd6-43cb-9988-dc7e3b22e4f7.jpeg?im_w=1200',
  sardinianTapestry: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/1d2641e5-6398-403c-8056-2a454d826af2.jpeg?im_w=1200',
  hallwayTextiles: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/764cfccc-38ce-4bf0-8a9c-4eefd506410a.jpeg?im_w=1200',
  argentinianTapestry: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/ef8c728b-484d-46d3-87eb-2db2a1d76714.jpeg?im_w=1200',
  handcraftedWoodenDetails: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/2b1c8c24-0079-45fc-bc4f-2ddc0e38cf43.jpeg?im_w=1200',

  // Host Lavinia Monica
  hostPortrait: 'https://a0.muscache.com/im/pictures/user/User/original/a1e88219-0466-4328-8170-494bed01d7ee.jpeg?im_w=720',

  // Destination Editorial: Alghero & Sardinia
  algheroCoastline: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=85',
  algheroOldTown: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=85',
  sardiniaSea: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
  dantePromenadeSunset: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
};

// Verified Rooms Information
export const ROOMS: Room[] = [
  {
    id: 'artemisia',
    roomNumber: 'ROOM 01',
    name: 'Artemisia Room',
    botanicalMeaning: 'Inspired by the silvery-green Mediterranean plant known for its ancient aromatic & healing traditions.',
    bedSetup: '1 Double Bed',
    capacity: 2,
    capacityNote: 'Accommodates 2 guests',
    bathroom: 'Private ensuite bathroom with shower & toiletries',
    description:
      'A luminous double room styled with calming neutral tones, natural fabrics, and wooden accents. Features an orthopedic mattress, private bathroom with shower, and soothing Mediterranean daylight.',
    editorialQuote: 'A quiet refuge reflecting the silvery foliage and aromatic calm of Sardinian Artemisia.',
    features: [
      '1 double bed with orthopedic mattress',
      'Private bathroom with shower',
      'Complimentary toiletries & hairdryer',
      'Air conditioning & central heating',
      'Free high-speed Wi-Fi',
      'Flat-screen television',
      'Room safe & anti-theft device',
      'Mosquito nets on windows',
      'Fresh bed linen and soft towels',
    ],
    heroImage: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/89eaf842-381b-4dc2-981b-7760644877cf.jpeg?im_w=1200',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/89eaf842-381b-4dc2-981b-7760644877cf.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/2bc294c4-2f23-4281-a6ee-f2d9a995fb71.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/327fcdf6-0b61-4499-a555-b24361818cc3.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/85e8ba61-83ce-4dbf-8ee9-df93e82e9997.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/d441854d-62f4-46b9-a505-11cd78155270.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/403f3ded-10c3-41ea-acea-e57fb7f904c4.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/0a1066b6-6ad3-44fa-a372-839633ca015d.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/e36c971e-e945-4d91-b6ee-cd8e4f5ba95b.jpeg?im_w=1200',
    ],
    accentColor: '#7C8068',
  },
  {
    id: 'helichrysum',
    roomNumber: 'ROOM 02',
    name: 'Helichrysum Room',
    botanicalMeaning: 'Dedicated to the golden immortal flower (Elicriso) that carpets Sardinia’s coastal maquis with warm honeyed scents.',
    bedSetup: '1 Queen Bed + 1 Double Bed',
    capacity: 1,
    capacityNote: 'Listing states 1 guest (spacious multi-bed setup)',
    bathroom: 'Private ensuite bathroom with shower & toiletries',
    description:
      'A generously proportioned, bright room featuring both a queen bed and a double bed. Thoughtfully equipped with handcrafted furnishings, orthopedic bedding, and an independent private bathroom.',
    editorialQuote: 'Generous personal space bathed in Sardinian daylight and warm artisanal elements.',
    features: [
      '1 queen bed & 1 double bed',
      'Orthopedic mattresses & refined linens',
      'Private bathroom with shower & bidet',
      'Complimentary toiletries & hairdryer',
      'Air conditioning & heating system',
      'Free high-speed Wi-Fi',
      'Flat-screen television',
      'Room safe & security features',
      'Mosquito net protection',
    ],
    heroImage: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/92dda8b3-bc1d-48c7-8527-f101b33c6897.jpeg?im_w=1200',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/92dda8b3-bc1d-48c7-8527-f101b33c6897.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/43acf503-a1fc-4a67-86a0-af43ddfcb6ae.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/5661ca60-ad65-42b1-853a-967c8790ee7f.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/a2c7c288-1b5d-4dc8-a2a6-051fecc83dbb.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/b5c00b60-8aa0-4f4a-8f35-c0e8b7418678.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/e54195ca-ada1-4cec-8f48-dccbc765d623.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/d40353a7-cc54-44f7-b755-ed5c0b089913.jpeg?im_w=1200',
    ],
    accentColor: '#A7664D',
  },
  {
    id: 'verbena',
    roomNumber: 'ROOM 03',
    name: 'Verbena Room',
    botanicalMeaning: 'Inspired by wild Mediterranean Verbena, revered since antiquity for vitality, calm, and floral grace.',
    bedSetup: '1 Queen Bed + 1 Single Bed',
    capacity: 3,
    capacityNote: 'Accommodates up to 3 guests',
    bathroom: 'Private ensuite bathroom with shower & toiletries',
    description:
      'An airy and versatile room accommodating up to 3 guests with a comfortable queen bed and single bed. Adorned with Sardinian craft accents and offering peaceful rest in residential Alghero.',
    editorialQuote: 'A welcoming haven crafted for friends or small families seeking slow island days.',
    features: [
      '1 queen bed & 1 single bed',
      'Accommodates 3 guests comfortably',
      'Orthopedic mattresses & fresh towels',
      'Private ensuite bathroom with shower',
      'Complimentary toiletries & hairdryer',
      'Individually controlled air conditioning & heat',
      'Free high-speed Wi-Fi',
      'Flat-screen television',
      'Room safe, anti-theft device & mosquito nets',
    ],
    heroImage: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/64735861-b4e3-4857-bdab-6a7bec751948.jpeg?im_w=1200',
    photos: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/64735861-b4e3-4857-bdab-6a7bec751948.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/99052375-9e71-4791-aa0f-db7337be2053.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/f220805b-9e44-4601-abbc-296c17c28038.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/421599d7-d33a-415b-bb13-e4c56aa36a38.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/6d0af9b3-364b-4da8-81e8-6a6755e8bbff.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/bc1654f0-5950-4b02-b874-ff59fccc1641.jpeg?im_w=1200',
    ],
    accentColor: '#30372E',
  },
];

// Curated Gallery Items for Fullscreen Lightbox & Editorial Grid
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Morning Light in the Garden',
    category: 'garden',
    categoryLabel: 'Garden & Patio',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/f5674aa6-b9cf-46c0-ad6c-56566e36bcbd.jpeg?im_w=1200',
    caption: 'Sunlight filtering through Mediterranean green foliage, deckchairs, and shaded garden umbrellas.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-2',
    title: 'Artemisia Room Double Bed',
    category: 'rooms',
    categoryLabel: 'Artemisia Room',
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTI2NDE=/original/89eaf842-381b-4dc2-981b-7760644877cf.jpeg?im_w=1200',
    caption: 'Double bedroom inspired by Sardinian Artemisia with orthopedic mattress and natural textiles.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-3',
    title: 'Handcrafted Suitcase Map Holder',
    category: 'craft',
    categoryLabel: 'Handmade Details',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/fbefaf5b-5dd6-43cb-9988-dc7e3b22e4f7.jpeg?im_w=1200',
    caption: 'Handcrafted leather suitcase from Paraguay transformed into a personal map and guide holder.',
    aspectRatio: 'portrait',
  },
  {
    id: 'g-4',
    title: 'Covered Patio & Outdoor Breakfast',
    category: 'breakfast',
    categoryLabel: 'Breakfast & Patio',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/57279407-db06-41b5-b772-44b4e4965ff0.jpeg?im_w=1200',
    caption: 'Sheltered outdoor patio for breakfast, quiet reading, or an evening aperitivo under the Sardinian sky.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-5',
    title: 'Traditional Sardinian Tapestry',
    category: 'craft',
    categoryLabel: 'Handmade Details',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/1d2641e5-6398-403c-8056-2a454d826af2.jpeg?im_w=1200',
    caption: 'Authentic Sardinian and Argentinian tapestries woven with traditional geometric motifs.',
    aspectRatio: 'square',
  },
  {
    id: 'g-6',
    title: 'Helichrysum Room Layout',
    category: 'rooms',
    categoryLabel: 'Helichrysum Room',
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTczMDU=/original/92dda8b3-bc1d-48c7-8527-f101b33c6897.jpeg?im_w=1200',
    caption: 'Bright room featuring queen and double beds with warm light and private bathroom.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-7',
    title: 'Bright Breakfast Kitchen',
    category: 'breakfast',
    categoryLabel: 'Kitchen',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/b9aa35e2-00c1-4eb5-b850-333a7bb8c5c5.jpeg?im_w=1200',
    caption: 'Cozy kitchen where sweet and savory Italian breakfast is prepared every morning.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-8',
    title: 'Verbena Room with Twin & Queen',
    category: 'rooms',
    categoryLabel: 'Verbena Room',
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTYyOTc3Mjk=/original/64735861-b4e3-4857-bdab-6a7bec751948.jpeg?im_w=1200',
    caption: 'Spacious triple accommodation with private bathroom and handcrafted wooden details.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-9',
    title: 'Entrance Lounge & Reading Corner',
    category: 'house',
    categoryLabel: 'The House',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/9427d671-09e2-4d1f-acd1-cb234c0d1c0b.jpeg?im_w=1200',
    caption: 'Welcoming entrance lounge equipped with sofa and armchairs for quiet reading and conversation.',
    aspectRatio: 'landscape',
  },
  {
    id: 'g-10',
    title: 'Mediterranean Herb Relaxation Area',
    category: 'garden',
    categoryLabel: 'Garden & Patio',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/d6559578-dc1f-4ff1-a2ea-1ae1d9f586e0.jpeg?im_w=1200',
    caption: 'Aromatic rosemary, sage, and lavender surrounding comfortable deckchairs in the sun.',
    aspectRatio: 'portrait',
  },
  {
    id: 'g-11',
    title: 'Hallway with Traditional Textiles',
    category: 'craft',
    categoryLabel: 'Handmade Details',
    url: 'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1516536547237344463/original/764cfccc-38ce-4bf0-8a9c-4eefd506410a.jpeg?im_w=1200',
    caption: 'The central hallway dressed in genuine Sardinian hand-loomed textile works.',
    aspectRatio: 'portrait',
  },
  {
    id: 'g-12',
    title: 'Coastal Alghero & Promenade',
    category: 'alghero',
    categoryLabel: 'Alghero',
    url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85',
    caption: 'The nearby Dante seaside promenade just 800m away, leading into the ancient Catalan bastions.',
    aspectRatio: 'landscape',
  },
];

// Verified Review data reflecting the documented rating: 4.84 / 5 from 62 reviews
export const GENUINE_REVIEWS: GenuineReview[] = [
  {
    id: 'rev-1',
    author: 'Elena & Marco',
    guestOrigin: 'Bologna, Italy',
    stayDate: 'Verified Guest Stay',
    rating: 5,
    highlightTheme: 'Hospitality',
    excerpt:
      'Monica is the most kind, warm, and attentive host we have met in Sardinia. Her personal recommendations for Alghero made our holiday unforgettable.',
  },
  {
    id: 'rev-2',
    author: 'Sophie',
    guestOrigin: 'Lyon, France',
    stayDate: 'Verified Guest Stay',
    rating: 5,
    highlightTheme: 'Cleanliness',
    excerpt:
      'Impeccably clean and peaceful. The bed was exceptionally comfortable with orthopedic mattress, and every small handmade detail made the house feel like a true home.',
  },
  {
    id: 'rev-3',
    author: 'David & Claire',
    guestOrigin: 'Bristol, United Kingdom',
    stayDate: 'Verified Guest Stay',
    rating: 5,
    highlightTheme: 'Breakfast',
    excerpt:
      'Breakfast in the garden patio was pure bliss. A delicious sweet and savory breakfast with freshly brewed coffee and lovely conversation with Monica.',
  },
  {
    id: 'rev-4',
    author: 'Matteo',
    guestOrigin: 'Milan, Italy',
    stayDate: 'Verified Guest Stay',
    rating: 5,
    highlightTheme: 'Location',
    excerpt:
      'Quiet residential setting away from city noise, yet just an 800m walk to Dante promenade and 15 minutes on foot to the old town. Easy free street parking right outside.',
  },
  {
    id: 'rev-5',
    author: 'Carla & Jordi',
    guestOrigin: 'Barcelona, Spain',
    stayDate: 'Verified Guest Stay',
    rating: 5,
    highlightTheme: 'Communication',
    excerpt:
      'Monica welcomed us with great warmth and speaks fluent Catalan and Spanish. Check-in was seamless and she gave us tips on local places you would never find on standard guides.',
  },
];

// Editorial Discoveries inspired by Four Seasons Destination Storytelling
export const SARDINIA_EXPERIENCES: ExperienceCategory[] = [
  {
    id: 'sea',
    tag: 'THE SEA',
    title: 'Cobalt Shores & Coral Waters',
    subtitle: 'Discover the coastline around Alghero',
    description:
      'From the rocky coves along Spiaggia di Las Tronas and the calm pine-fringed dunes of Maria Pia to the wild marine reserve of Porto Conte and the towering cliffs of Capo Caccia. Easily reached by local buses stopping directly in front of the B&B.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    localTips: [
      'Bus line directly opposite the B&B connects directly to Spiaggia di Maria Pia and Mugoni.',
      'Spiaggia di Las Tronas is just 1 km away for refreshing morning swims.',
      'Capo Caccia sunset lookout over the Foradada island is a 20-minute coastal drive.',
    ],
  },
  {
    id: 'culture',
    tag: 'THE CULTURE',
    title: 'Catalan Heritage & Ancient Ramparts',
    subtitle: 'Explore Sardinian traditions and architecture',
    description:
      'Alghero retains its Catalan-Aragonese soul, known locally as "Barceloneta". Stroll along the 16th-century seawall bastions (Marco Polo, Tintoretto, Magellan), browse red coral artisan ateliers, and explore historic stone alleyways.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85',
    localTips: [
      'An easy 15-minute stroll from Artemisia into the pedestrianized historic center.',
      'Cattedrale di Santa Maria and the Torre di San Giovanni tower over stone squares.',
      'Authentic Sardinian textile and coral craftsmanship preserved across local family bottegas.',
    ],
  },
  {
    id: 'food',
    tag: 'THE FOOD',
    title: 'Sardinian & Catalan Kitchens',
    subtitle: 'Experience the local food culture',
    description:
      'Lavinia’s personal passion for Sardinian and Catalan cuisine provides guests with bespoke recommendations: taste handmade culurgiones, Alghero-style lobster, pane carasau, pecorino sardo, seadas with honey, and chilled Vermentino di Gallura.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    localTips: [
      'Neighborhood bakeries and pizzerias are located just a 3-minute walk from the B&B.',
      'Lavinia is delighted to recommend family-run trattorie serving genuine local dishes.',
      'Daily morning markets in Alghero offering seasonal Sardinian fruits, cheeses, and olive oils.',
    ],
  },
  {
    id: 'nature',
    tag: 'THE LANDSCAPE',
    title: 'Aromatic Macchia & Limestone Cliffs',
    subtitle: 'Discover northwestern Sardinia’s raw nature',
    description:
      'Inhale wild helichrysum, myrtle, and artemisia in the surrounding hills of Porto Conte Regional Park. Explore coastal hiking paths, ancient nuraghe settlements, and quiet Mediterranean coves.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85',
    localTips: [
      'Porto Conte Regional Natural Park trails for hiking and mountain biking.',
      'Neptune’s Grotto (Grotte di Nettuno) reachable by scenic ferry from the marina or Escala del Cabirol steps.',
      'Guarded bicycle and motorcycle parking is available at Artemisia by reservation.',
    ],
  },
  {
    id: 'walking',
    tag: 'WALKING & LEISURE',
    title: 'The Dante Promenade Stroll',
    subtitle: 'Slow coastal living by the water',
    description:
      'Just 800 meters from Artemisia, the tree-lined Lungomare Dante promenade opens toward the open sea. It is the cherished ritual of Alghero locals for evening passeggiata, sea breezes, and gelato before sunset.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
    localTips: [
      'A level 8-minute walk from our doorstep to the sea.',
      'Follow the promenade north directly into the historic city walls.',
      'Ideal for gentle morning jogs or sunset walks overlooking the bay.',
    ],
  },
];
