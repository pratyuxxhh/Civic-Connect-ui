import React from 'react';

const TabNavigation = ({ isDarkMode, activeTab, onTabChange, myTasksCount, nearbyTasksCount }) => {
  return (
    <div className="mb-8">
      <div className={`p-1 rounded-2xl transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' 
          : 'bg-gray-100/80 backdrop-blur-sm border border-gray-200/50'
      }`}>
        <nav className="flex space-x-2">
          <button
            onClick={() => onTabChange('my-tasks')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'my-tasks'
                ? isDarkMode 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                  : 'bg-white text-blue-600 shadow-lg shadow-gray-200/50'
                : isDarkMode 
                  ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            My Tasks ({myTasksCount})
          </button>
          <button
            onClick={() => onTabChange('nearby-tasks')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'nearby-tasks'
                ? isDarkMode 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                  : 'bg-white text-blue-600 shadow-lg shadow-gray-200/50'
                : isDarkMode 
                  ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            Nearby Tasks ({nearbyTasksCount})
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;
