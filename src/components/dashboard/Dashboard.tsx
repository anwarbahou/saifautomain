import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../common/Tabs';
import BookingsTab from './BookingsTab';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="cars">Cars</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bookings">
          <BookingsTab />
        </TabsContent>
        
        <TabsContent value="cars">
          <div className="text-center py-10 text-gray-500">
            Cars management coming soon...
          </div>
        </TabsContent>
        
        <TabsContent value="users">
          <div className="text-center py-10 text-gray-500">
            Users management coming soon...
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="text-center py-10 text-gray-500">
            Settings coming soon...
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard; 