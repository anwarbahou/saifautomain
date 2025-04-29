import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export interface Car {
  id: number;
  name: string;
  type: string;
  price_per_day: number;
  status: 'available' | 'rented' | 'maintenance';
  image_url: string;
  description: string;
  features: string[];
  year: number;
  mileage: number;
  transmission: string;
  fuel_type: string;
  seats: number;
  color: string;
  license_plate: string;
  created_at: string;
}

export const carService = {
  // Fetch all cars
  getAllCars: async (): Promise<Car[]> => {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }

    return data || [];
  },

  // Fetch a single car by ID
  getCarById: async (id: number): Promise<Car | null> => {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching car:', error);
      throw error;
    }

    return data;
  },

  // Fetch cars by type
  getCarsByType: async (type: string): Promise<Car[]> => {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('type', type)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching cars by type:', error);
      throw error;
    }

    return data || [];
  },

  // Fetch available cars
  getAvailableCars: async (): Promise<Car[]> => {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('status', 'available')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching available cars:', error);
      throw error;
    }

    return data || [];
  },

  // Update car status
  updateCarStatus: async (id: number, status: 'available' | 'rented' | 'maintenance'): Promise<void> => {
    const { error } = await supabase
      .from('cars')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Error updating car status:', error);
      throw error;
    }
  }
}; 