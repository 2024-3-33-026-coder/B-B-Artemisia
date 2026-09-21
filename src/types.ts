export interface Room {
  id: string;
  roomNumber: string;
  name: string;
  botanicalMeaning: string;
  bedSetup: string;
  capacity: number;
  capacityNote: string;
  bathroom: string;
  description: string;
  editorialQuote: string;
  features: string[];
  photos: string[];
  heroImage: string;
  accentColor?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'house' | 'rooms' | 'garden' | 'breakfast' | 'craft' | 'alghero';
  categoryLabel: string;
  url: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface GenuineReview {
  id: string;
  author: string;
  guestOrigin?: string;
  stayDate: string;
  rating: number;
  highlightTheme: 'Hospitality' | 'Cleanliness' | 'Breakfast' | 'Location' | 'Communication';
  excerpt: string;
  fullReview?: string;
}

export interface ExperienceCategory {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  localTips: string[];
}

export interface BookingInquiry {
  checkIn: string;
  checkOut: string;
  roomId: string;
  guests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  bicycleParking: boolean;
  motorcycleParking: boolean;
}
