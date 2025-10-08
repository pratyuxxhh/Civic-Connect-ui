import React from 'react';
import { MapPin, Clock, AlertCircle, Trash2 } from 'lucide-react';

const MyIssues = ({ isDarkMode, myTasks, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Open': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {myTasks.map((task) => (
        <div key={task.id} className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border hover:scale-105 ${isDarkMode
            ? 'bg-gradient-to-br from-gray-800/80 to-gray-700/80 border-gray-600/50 hover:shadow-gray-900/30 backdrop-blur-sm'
            : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 hover:shadow-gray-200/50 backdrop-blur-sm'
          }`}>
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{task.title}</h3>
              <p className={`text-sm mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{task.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
              {task.status}
            </span>
          </div>

          <div className="space-y-3 mb-6">
            <div className={`flex items-center text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              <div className={`p-2 rounded-lg mr-3 ${isDarkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                <MapPin className="h-4 w-4" />
              </div>
              <span>{task.location}</span>
            </div>
            <div className={`flex items-center text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              <div className={`p-2 rounded-lg mr-3 ${isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                <Clock className="h-4 w-4" />
              </div>
              <span>{task.date}</span>
            </div>
            <div className="flex items-center text-sm">
              <div className={`p-2 rounded-lg mr-3 ${task.priority === 'High'
                  ? isDarkMode ? 'bg-red-600/20 text-red-400' : 'bg-red-100 text-red-600'
                  : task.priority === 'Medium'
                    ? isDarkMode ? 'bg-yellow-600/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                    : isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                <AlertCircle className="h-4 w-4" />
              </div>
              <span className={getPriorityColor(task.priority)}>{task.priority} Priority</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 text-xs rounded-full font-medium transition-colors duration-300 ${isDarkMode
                ? 'bg-gray-700/50 text-gray-300'
                : 'bg-gray-100 text-gray-700'
              }`}>
              {task.category}
            </span>
            <div className="flex items-center gap-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors duration-300 hover:underline">
                View Details →
              </button>
              <button
                className="ml-2 text-red-500 hover:text-red-700 p-1 rounded transition-colors duration-200"
                title="Delete"
                onClick={() => onDelete && onDelete(task.id)}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyIssues;