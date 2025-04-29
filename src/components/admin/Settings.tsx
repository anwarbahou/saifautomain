import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">General Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input type="text" className="w-full border rounded-md px-3 py-2" defaultValue="Saifauto" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
              <input type="email" className="w-full border rounded-md px-3 py-2" defaultValue="info@saifauto.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full border rounded-md px-3 py-2" defaultValue="+1 234 567 890" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea className="w-full border rounded-md px-3 py-2" rows={3}>123 Main Street, City Center, New York, NY 10001</textarea>
            </div>
          </form>
        </div>
        
        {/* Booking Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Booking Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Booking Duration (days)</label>
              <input type="number" className="w-full border rounded-md px-3 py-2" defaultValue="1" min="1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Booking Duration (days)</label>
              <input type="number" className="w-full border rounded-md px-3 py-2" defaultValue="30" min="1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Advance Booking Period (days)</label>
              <input type="number" className="w-full border rounded-md px-3 py-2" defaultValue="90" min="1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cancellation Policy</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>Free cancellation up to 24 hours before</option>
                <option>Free cancellation up to 48 hours before</option>
                <option>Free cancellation up to 72 hours before</option>
              </select>
            </div>
          </form>
        </div>
        
        {/* Payment Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Payment Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Methods</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  PayPal
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Bank Transfer
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Deposit Amount (%)</label>
              <input type="number" className="w-full border rounded-md px-3 py-2" defaultValue="20" min="0" max="100" />
            </div>
          </form>
        </div>
        
        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Notifications</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  New Bookings
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Booking Cancellations
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Payment Receipts
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SMS Notifications</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Booking Reminders
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Return Reminders
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings; 