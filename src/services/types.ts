// Service interfaces will be defined here
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface DatabaseRecord {
  id: string;
  created_at: string;
  updated_at: string;
} 