import React from 'react';
import { X, Camera } from 'lucide-react';

const UploadIssueModal = ({ isDarkMode, isOpen, onClose }) => {
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
        } bg-gradient-to-r ${isDarkMode ? 'from-blue-600/10 to-purple-600/10' : 'from-blue-50 to-purple-50'} backdrop-blur-sm`}>
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h3 className={`text-3xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Report New Issue</h3>
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
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Basic Information */}
            <div className="space-y-6">
              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Issue Title *</label>
                <input
                  type="text"
                  placeholder="Brief description of the issue"
                  className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg`}
                />
              </div>
              
              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Description *</label>
                <textarea
                  rows={6}
                  placeholder="Detailed description of the issue..."
                  className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Category *</label>
                  <select className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg`}>
                    <option>Infrastructure</option>
                    <option>Road Maintenance</option>
                    <option>Sanitation</option>
                    <option>Utilities</option>
                    <option>Public Facilities</option>
                    <option>Traffic</option>
                    <option>Environment</option>
                    <option>Safety</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Priority *</label>
                  <select className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg`}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Location *</label>
                <input
                  type="text"
                  placeholder="Enter location or address"
                  className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg`}
                />
              </div>
            </div>

            {/* Right Column - Photos and Additional Info */}
            <div className="space-y-6">
              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Upload Photos</label>
                <div className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'border-gray-600 hover:border-gray-500 bg-gray-700/20' 
                    : 'border-gray-300 hover:border-gray-400 bg-gray-50/50'
                }`}>
                  <Camera className={`h-20 w-20 mx-auto mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <p className={`mb-2 font-medium text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Click to upload photos or drag and drop</p>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>PNG, JPG up to 10MB each (Max 5 photos)</p>
                </div>
              </div>

              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Additional Information</label>
                <textarea
                  rows={4}
                  placeholder="Any additional details, suggestions, or context..."
                  className={`w-full px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 backdrop-blur-sm' 
                      : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
                  } shadow-lg text-lg`}
                />
              </div>

              <div>
                <label className={`block text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Contact Preference</label>
                <div className="space-y-3">
                  <label className={`flex items-center space-x-3 cursor-pointer ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <input type="radio" name="contact" value="email" defaultChecked className="w-5 h-5 text-blue-600" />
                    <span className="text-lg">Email updates</span>
                  </label>
                  <label className={`flex items-center space-x-3 cursor-pointer ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <input type="radio" name="contact" value="phone" className="w-5 h-5 text-blue-600" />
                    <span className="text-lg">Phone updates</span>
                  </label>
                  <label className={`flex items-center space-x-3 cursor-pointer ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <input type="radio" name="contact" value="none" className="w-5 h-5 text-blue-600" />
                    <span className="text-lg">No updates needed</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className={`sticky bottom-0 z-10 p-6 border-t transition-all duration-500 ${
          isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
        } bg-gradient-to-r ${isDarkMode ? 'from-gray-800/90 to-gray-900/90' : 'from-white/90 to-gray-50/90'} backdrop-blur-sm`}>
          <div className="max-w-4xl mx-auto flex justify-end space-x-4">
            <button 
              onClick={onClose}
              className={`px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-300 border border-gray-600/50 hover:bg-gray-700/50 hover:text-white' 
                  : 'text-gray-700 border border-gray-200/50 hover:bg-gray-50/80 hover:text-gray-900'
              } font-semibold text-lg`}
            >
              Cancel
            </button>
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg hover:shadow-xl text-lg">
              Submit Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadIssueModal;
