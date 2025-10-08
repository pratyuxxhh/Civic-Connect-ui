import React, { useState } from 'react';
import { X, Send, MapPin, Phone, Mail, Clock, User } from 'lucide-react';

const ContactAdminModal = ({ isDarkMode, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    priority: 'Medium',
    contactMethod: 'email'
  });

  const [errors, setErrors] = useState({});

  // Sample nearby admins data
  const nearbyAdmins = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "District Administrator",
      location: "Downtown District",
      distance: "0.8 km",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@city.gov",
      availability: "Mon-Fri 9AM-5PM",
      responseTime: "Within 2 hours"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Manager",
      location: "Northside District",
      distance: "1.2 km",
      phone: "+1 (555) 234-5678",
      email: "michael.chen@city.gov",
      availability: "Mon-Fri 8AM-6PM",
      responseTime: "Within 1 hour"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Public Services Coordinator",
      location: "Eastside District",
      distance: "1.5 km",
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@city.gov",
      availability: "Mon-Fri 9AM-4PM",
      responseTime: "Within 3 hours"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the message to the admin
      console.log('Message sent:', formData);
      alert('Message sent successfully! You will receive a response soon.');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className={`h-full w-full overflow-y-auto transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 z-10 p-6 border-b transition-all duration-500 ${
          isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
        } bg-gradient-to-r ${isDarkMode ? 'from-purple-600/10 to-blue-600/10' : 'from-purple-50 to-blue-50'} backdrop-blur-sm`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h3 className={`text-3xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Contact Nearby Admin</h3>
            <button 
              onClick={onClose}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
              }`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-6xl mx-auto p-6 space-y-8">
          {/* Nearby Admins */}
          <div className={`p-8 rounded-2xl transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
              : 'bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
          }`}>
            <h4 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Available Administrators</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyAdmins.map((admin) => (
                <div key={admin.id} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600/50' 
                    : 'bg-white/50 hover:bg-white/80 border border-gray-200/50'
                }`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-gradient-to-br from-purple-500 to-blue-600' : 'bg-gradient-to-br from-purple-400 to-blue-500'
                    }`}>
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h5 className={`font-bold transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{admin.name}</h5>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{admin.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className={`h-4 w-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{admin.location} ({admin.distance})</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className={`h-4 w-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                      <span className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{admin.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Send className={`h-4 w-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                      <span className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{admin.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
              : 'bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
          }`}>
            <h4 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Send Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your inquiry"
                  className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg ${errors.subject ? 'border-red-500' : ''}`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Describe your issue or inquiry in detail..."
                  className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border border-gray-600/50 text-white backdrop-blur-sm' 
                        : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                    } shadow-lg text-lg`}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Preferred Contact Method</label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border border-gray-600/50 text-white backdrop-blur-sm' 
                        : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                    } shadow-lg text-lg`}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="sms">SMS</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-6">
                <button 
                  type="button"
                  onClick={onClose}
                  className={`px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-gray-300 border border-gray-600/50 hover:bg-gray-700/50 hover:text-white' 
                      : 'text-gray-700 border border-gray-200/50 hover:bg-gray-50/80 hover:text-gray-900'
                  } font-semibold text-lg`}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  <Send className="h-5 w-5 inline mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdminModal;
