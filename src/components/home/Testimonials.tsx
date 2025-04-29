import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  // Generate rating stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 sm:text-4xl text-white">What Our Customers Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-blue-900 rounded-xl p-8 md:p-10">
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <Quote size={48} className="text-blue-700" />
            </div>
            
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-700">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold">{testimonials[activeIndex].name}</h3>
              <p className="text-blue-200 mt-1">from {testimonials[activeIndex].location}</p>
              
              <div className="flex justify-center mt-2">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
            </div>
            
            <blockquote className="text-center text-lg text-blue-100 italic mb-8">
              "{testimonials[activeIndex].text}"
            </blockquote>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === activeIndex ? 'bg-white' : 'bg-blue-700'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;