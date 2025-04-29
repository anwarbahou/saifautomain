import React from 'react';
import { locations } from '../../data/locations';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationsMap: React.FC = () => {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Our Locations</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-96">
            {/* This would typically be a real map integration like Google Maps or Mapbox */}
            <div className="relative w-full h-full bg-gray-200">
              <iframe 
                title="Saifauto Locations Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304614!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1658267433119!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-silver-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-blue-950">Our Rental Points</h3>
            
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.id} className="flex space-x-4">
                  <div className="mt-1">
                    <MapPin className="h-6 w-6 text-blue-950" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{location.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{location.name.toLowerCase().replace(/\s+/g, '.')}@saifauto.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#booking" className="btn btn-primary w-full">
                Book at Any Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;