import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Contact Us
      </h1>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
              aria-label="Your name"
            />
          </div>

          <div>
            <label 
              htmlFor="email"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
              aria-label="Your email address"
            />
          </div>

          <div>
            <label 
              htmlFor="message"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
              aria-label="Your message"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white text-xl font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="h-6 w-6" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
            {/* Copyright Footer */}
     <footer className="mt-16 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumos Learn. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;