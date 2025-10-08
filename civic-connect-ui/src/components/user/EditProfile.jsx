import React, { useState } from 'react';
import { Save, X, Camera, User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const EditProfile = ({ isDarkMode, userProfile, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: userProfile.name || '',
    email: userProfile.email || '',
    phone: userProfile.phone || '',
    location: userProfile.location || '',
    dateOfBirth: userProfile.dateOfBirth || '',
    bio: userProfile.bio || ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formData.phone && !/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Profile Picture Section */}
      <div className={`p-8 rounded-2xl transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
          : 'bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Profile Picture</h3>
        
        <div className="flex items-center space-x-8">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
            isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'
          }`}>
            <User className="h-16 w-16 text-white" />
          </div>
          <div>
            <button 
              type="button"
              className={`px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-600/30' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200 border border-blue-200'
              } font-semibold text-lg`}
            >
              <Camera className="h-5 w-5 inline mr-2" />
              Change Photo
            </button>
            <p className={`text-sm mt-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>JPG, PNG up to 5MB</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className={`p-8 rounded-2xl transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
          : 'bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Personal Information</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <User className="h-5 w-5 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                  : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
              } shadow-lg text-lg ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Mail className="h-5 w-5 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                  : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
              } shadow-lg text-lg ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Phone className="h-5 w-5 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                  : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
              } shadow-lg text-lg ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <MapPin className="h-5 w-5 inline mr-2" />
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                  : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
              } shadow-lg text-lg`}
              placeholder="Enter your location"
            />
          </div>

          <div>
            <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <Calendar className="h-5 w-5 inline mr-2" />
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700/50 border border-gray-600/50 text-white backdrop-blur-sm' 
                  : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
              } shadow-lg text-lg`}
            />
          </div>
        </div>

        <div className="mt-8">
          <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
            } shadow-lg text-lg`}
            placeholder="Tell us about yourself..."
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-6">
        <button 
          type="button"
          onClick={onCancel}
          className={`px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode 
              ? 'text-gray-300 border border-gray-600/50 hover:bg-gray-700/50 hover:text-white' 
              : 'text-gray-700 border border-gray-200/50 hover:bg-gray-50/80 hover:text-gray-900'
          } font-semibold text-lg`}
        >
          <X className="h-5 w-5 inline mr-2" />
          Cancel
        </button>
        <button 
          type="submit"
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg hover:shadow-xl text-lg"
        >
          <Save className="h-5 w-5 inline mr-2" />
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
