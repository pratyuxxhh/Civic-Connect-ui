import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Shield, Award } from 'lucide-react';

const ViewProfile = ({ isDarkMode, userProfile, onEdit }) => {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className={`p-8 rounded-2xl transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
          : 'bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
      }`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'
            }`}>
              <User className="h-16 w-16 text-white" />
            </div>
            <div>
              <h2 className={`text-4xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{userProfile.name}</h2>
              <p className={`text-xl transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{userProfile.email}</p>
              <div className="flex items-center space-x-3 mt-3">
                <span className={`px-4 py-2 rounded-full text-lg font-medium ${
                  isDarkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {userProfile.role}
                </span>
                <span className={`px-4 py-2 rounded-full text-lg font-medium ${
                  isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  Member since {userProfile.joinDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Information */}
        <div className={`p-8 rounded-2xl transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
            : 'bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Personal Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                isDarkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Email</p>
                <p className={`text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{userProfile.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
              }`}>
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Phone</p>
                <p className={`text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{userProfile.phone || 'Not provided'}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                isDarkMode ? 'bg-purple-600/20 text-purple-400' : 'bg-purple-100 text-purple-600'
              }`}>
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Location</p>
                <p className={`text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{userProfile.location || 'Not provided'}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                isDarkMode ? 'bg-yellow-600/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
              }`}>
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Date of Birth</p>
                <p className={`text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{userProfile.dateOfBirth || 'Not provided'}</p>
              </div>
            </div>

            {userProfile.bio && (
              <div className="mt-6">
                <p className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Bio</p>
                <p className={`text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{userProfile.bio}</p>
              </div>
            )}
          </div>
        </div>

        {/* Activity & Stats */}
        <div className={`p-8 rounded-2xl transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
            : 'bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Activity & Stats</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Issues Reported</p>
                  <p className={`text-3xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{userProfile.issuesReported}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-teal-500/10">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Issues Resolved</p>
                  <p className={`text-3xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{userProfile.issuesResolved}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-purple-600/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                }`}>
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Community Score</p>
                  <p className={`text-3xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{userProfile.communityScore}/100</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={`p-8 rounded-2xl transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
            : 'bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Recent Activity</h3>
          
          <div className="space-y-4">
            {userProfile.recentActivity.map((activity, index) => (
              <div key={index} className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-700/30 hover:bg-gray-700/50' : 'bg-gray-50/50 hover:bg-gray-100/50'
              }`}>
                <div className={`p-2 rounded-lg ${
                  activity.type === 'report' 
                    ? isDarkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    : activity.type === 'resolve'
                    ? isDarkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-600'
                    : isDarkMode ? 'bg-yellow-600/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {activity.type === 'report' ? <Award className="h-5 w-5" /> : 
                   activity.type === 'resolve' ? <Shield className="h-5 w-5" /> : 
                   <User className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <p className={`text-base transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{activity.description}</p>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
