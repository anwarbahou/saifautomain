import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../common';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6 text-blue-950">Get In Touch</h3>
      
      {submitStatus && (
        <div 
          className={`mb-6 p-4 rounded-md ${
            submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select 
            id="subject"
            name="subject"
            className="input-field"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select a subject</option>
            <option value="reservation">Reservation Inquiry</option>
            <option value="support">Customer Support</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Business Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea 
            id="message"
            name="message"
            rows={4}
            className="input-field"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          variant="primary"
          fullWidth
          size="lg"
          isLoading={isSubmitting}
          icon={Send}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;