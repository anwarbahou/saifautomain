export interface Car {
  id: number;
  name: string;
  type: string;
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  available: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}