import React, { useState } from 'react';
import { Button } from '../common';
import { Lock, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/auth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { user, error } = await auth.signIn(formData.email, formData.password);
      
      if (error) {
        setError(error.message);
        return;
      }

      if (user) {
        // Redirect to admin dashboard on successful login
        navigate('/admin');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Car size={300} className="text-blue-950" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <Car size={250} className="text-blue-800" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Car size={200} className="text-blue-700" />
        </div>
      </div>
      
      {/* Login Form */}
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg z-10">
        <div>
          <h2 className="text-center text-3xl font-bold text-blue-950">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in to access the admin dashboard
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              icon={Lock}
              iconPosition="left"
              isLoading={isLoading}
              disabled={isLoading}
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 