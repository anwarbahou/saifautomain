import { supabase } from './supabase';
import { User } from '@supabase/supabase-js';

export interface AuthError {
  message: string;
}

export interface AuthResponse {
  user: User | null;
  error: AuthError | null;
}

export const auth = {
  /**
   * Sign in with email and password
   */
  signIn: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return {
          user: null,
          error: { message: error.message },
        };
      }

      return {
        user: data.user,
        error: null,
      };
    } catch (error) {
      return {
        user: null,
        error: { message: 'An unexpected error occurred' },
      };
    }
  },

  /**
   * Sign out the current user
   */
  signOut: async (): Promise<AuthResponse> => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        return {
          user: null,
          error: { message: error.message },
        };
      }

      return {
        user: null,
        error: null,
      };
    } catch (error) {
      return {
        user: null,
        error: { message: 'An unexpected error occurred' },
      };
    }
  },

  /**
   * Get the current authenticated user
   */
  getCurrentUser: async (): Promise<AuthResponse> => {
    try {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        return {
          user: null,
          error: { message: error.message },
        };
      }

      return {
        user: data.user,
        error: null,
      };
    } catch (error) {
      return {
        user: null,
        error: { message: 'An unexpected error occurred' },
      };
    }
  },

  /**
   * Check if the user is authenticated
   */
  isAuthenticated: async (): Promise<boolean> => {
    const { user } = await auth.getCurrentUser();
    return !!user;
  },
}; 