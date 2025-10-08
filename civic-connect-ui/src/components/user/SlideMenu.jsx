import React from 'react';
import { X, User, Settings, Bell, LogOut, MessageCircle } from 'lucide-react';
import { handleLogout } from '../logout/Logout';

const SlideMenu = ({ isDarkMode, isOpen, onClose, onOpenProfile, onOpenContactAdmin }) => {
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          isOpen ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'
        }`} 
        onClick={onClose}
      ></div>
      <div className={`relative flex flex-col w-80 h-full shadow-2xl transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-white via-gray-50 to-white'
      } border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        {/* Menu Header with Profile */}
        <div className={`p-6 border-b transition-all duration-500 ${
          isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
        } bg-gradient-to-r ${isDarkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-50 to-purple-50'}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Menu</h2>
            <button 
              onClick={onClose}
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
              }`}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Profile Section */}
          <div className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-50/80'
          }`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'
            }`}>
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className={`font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>John Doe</p>
              <p className={`text-sm transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>john.doe@email.com</p>
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="flex-1 p-6">
          <div className="space-y-2">
            <button 
              onClick={onOpenProfile}
              className={`w-full flex items-center space-x-3 p-4 text-left rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:shadow-lg hover:shadow-gray-700/20' 
                  : 'text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-200/20'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                <User className="h-5 w-5" />
              </div>
              <span className="font-medium">Profile</span>
            </button>
            
            <button className={`w-full flex items-center space-x-3 p-4 text-left rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:shadow-lg hover:shadow-gray-700/20' 
                : 'text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-200/20'
            }`}>
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
              }`}>
                <Settings className="h-5 w-5" />
              </div>
              <span className="font-medium">Settings</span>
            </button>

            <button 
              onClick={onOpenContactAdmin}
              className={`w-full flex items-center space-x-3 p-4 text-left rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:shadow-lg hover:shadow-gray-700/20' 
                  : 'text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-200/20'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-purple-600/20 text-purple-400' : 'bg-purple-100 text-purple-600'
              }`}>
                <MessageCircle className="h-5 w-5" />
              </div>
              <span className="font-medium">Contact Nearby Admin</span>
            </button>
            
            <button className={`w-full flex items-center space-x-3 p-4 text-left rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:shadow-lg hover:shadow-gray-700/20' 
                : 'text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-200/20'
            }`}>
              <div className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-yellow-600/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
              }`}>
                <Bell className="h-5 w-5" />
              </div>
              <span className="font-medium">Notifications</span>
              <span className="ml-auto px-2 py-1 bg-red-500 text-white text-xs rounded-full">3</span>
            </button>
          </div>
        </div>
        
        {/* Logout Section */}
        <div className={`p-6 border-t transition-all duration-500 ${
          isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
        }`}>
          <button className={`w-full flex items-center space-x-3 p-4 text-left rounded-xl transition-all duration-300 hover:scale-[1.02] ${
            isDarkMode 
              ? 'text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:shadow-lg hover:shadow-red-500/20' 
              : 'text-red-600 hover:bg-red-50/80 hover:text-red-700 hover:shadow-lg hover:shadow-red-200/20'
          }`}>
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-red-600/20 text-red-400' : 'bg-red-100 text-red-600'
            }`}
            onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </div>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
