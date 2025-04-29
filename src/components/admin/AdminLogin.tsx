import React, { useEffect, useState } from 'react';
import { Button } from '../common';
import { LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/auth';
import { User as SupabaseUser } from '@supabase/supabase-js';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await auth.getCurrentUser();
      setUser(user);
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);
    await auth.signOut();
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-950"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-blue-950">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Welcome to the admin dashboard
          </p>
        </div>

        {user && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <User size={20} className="text-blue-800" />
              </div>
              <div>
                <p className="font-medium text-blue-950">{user.email}</p>
                <p className="text-xs text-blue-700">Administrator</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Button
            variant="secondary"
            fullWidth
            icon={LogOut}
            iconPosition="left"
            onClick={handleLogout}
          >
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 