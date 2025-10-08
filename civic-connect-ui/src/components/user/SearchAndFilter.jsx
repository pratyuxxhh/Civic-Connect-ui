import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchAndFilter = ({ isDarkMode }) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-400'
        }`} />
        <input
          type="text"
          placeholder="Search tasks..."
          className={`w-full pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 backdrop-blur-sm' 
              : 'bg-white/80 border border-gray-200/50 backdrop-blur-sm'
          } shadow-lg hover:shadow-xl`}
        />
      </div>
      <button className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
        isDarkMode 
          ? 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-white backdrop-blur-sm' 
          : 'bg-white/80 border border-gray-200/50 text-gray-700 hover:bg-gray-50/80 hover:text-gray-900 backdrop-blur-sm'
      } shadow-lg hover:shadow-xl`}>
        <Filter className="h-5 w-5" />
        <span className="font-medium">Filter</span>
      </button>
    </div>
  );
};

export default SearchAndFilter;
