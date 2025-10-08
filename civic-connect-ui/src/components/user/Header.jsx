import React from 'react';
import { Sun, Moon, Bell, Menu } from 'lucide-react';

const Header = ({ isDarkMode, onToggleDarkMode, onOpenMenu }) => {
  return (
    <header className={`backdrop-blur-md shadow-xl border-b transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gray-900/80 border-gray-700/50' 
        : 'bg-white/80 border-gray-200/50'
    } sticky top-0 z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Civic Connect</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={onToggleDarkMode}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:bg-yellow-400/10 hover:shadow-yellow-400/20' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
              } hover:shadow-lg`}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white hover:bg-gray-700/50 hover:shadow-gray-300/20' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
            } hover:shadow-lg relative`}>
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <button 
              onClick={onOpenMenu}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50 hover:shadow-gray-300/20' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
              } hover:shadow-lg`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
