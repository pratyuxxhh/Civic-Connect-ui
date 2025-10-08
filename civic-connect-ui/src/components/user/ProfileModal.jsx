import React, { useState } from 'react';
import { X } from 'lucide-react';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';

const ProfileModal = ({ isDarkMode, isOpen, onClose, userProfile, onSaveProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(userProfile);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedProfile) => {
    setCurrentProfile(updatedProfile);
    onSaveProfile(updatedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleClose = () => {
    setIsEditing(false);
    onClose();
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
        } bg-gradient-to-r ${isDarkMode ? 'from-blue-600/10 to-purple-600/10' : 'from-blue-50 to-purple-50'} backdrop-blur-sm`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h3 className={`text-3xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {isEditing ? 'Edit Profile' : 'My Profile'}
            </h3>
            <div className="flex items-center space-x-4">
              {!isEditing && (
                <button 
                  onClick={handleEdit}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-600/30' 
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200 border border-blue-200'
                  } font-semibold text-lg`}
                >
                  Edit Profile
                </button>
              )}
              <button 
                onClick={handleClose}
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
        </div>
        
        {/* Content */}
        <div className="max-w-6xl mx-auto p-6">
          {isEditing ? (
            <EditProfile 
              isDarkMode={isDarkMode}
              userProfile={currentProfile}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <ViewProfile 
              isDarkMode={isDarkMode}
              userProfile={currentProfile}
              onEdit={handleEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
