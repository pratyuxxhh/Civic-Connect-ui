import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Header from './Header';
import SlideMenu from './SlideMenu';
import TabNavigation from './TabNavigation';
import SearchAndFilter from './SearchAndFilter';
import MyIssues from './MyIssues';
import NearbyTasks from './NearbyTasks';
import UploadIssueModal from './UploadIssueModal';
import ProfileModal from './ProfileModal';
import ContactAdminModal from './ContactAdminModal';

const UserDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isContactAdminModalOpen, setIsContactAdminModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('my-tasks');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sample user profile data
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    dateOfBirth: "1990-05-15",
    bio: "Passionate about community improvement and civic engagement. Love helping neighbors and making our city a better place to live.",
    role: "Community Member",
    joinDate: "January 2023",
    issuesReported: 12,
    issuesResolved: 8,
    communityScore: 85,
    recentActivity: [
      {
        type: "report",
        description: "Reported broken street light on Main Street",
        date: "2 days ago"
      },
      {
        type: "resolve",
        description: "Helped resolve pothole issue near school",
        date: "1 week ago"
      },
      {
        type: "report",
        description: "Reported garbage collection issue",
        date: "2 weeks ago"
      },
      {
        type: "resolve",
        description: "Participated in community cleanup",
        date: "3 weeks ago"
      }
    ]
  });

  // Sample data for demonstration
  const myTasks = [
    {
      id: 1,
      title: "Broken Street Light on Main St",
      description: "Street light has been flickering for 3 days",
      status: "In Progress",
      priority: "High",
      date: "2024-01-15",
      location: "Main Street, Block 2",
      category: "Infrastructure"
    },
    {
      id: 2,
      title: "Pothole Near School",
      description: "Large pothole causing traffic issues",
      status: "Pending",
      priority: "Medium",
      date: "2024-01-14",
      location: "School Road, Block 5",
      category: "Road Maintenance"
    },
    {
      id: 3,
      title: "Garbage Collection Issue",
      description: "Garbage not collected for 2 weeks",
      status: "Completed",
      priority: "Low",
      date: "2024-01-10",
      location: "Residential Area, Block 3",
      category: "Sanitation"
    }
  ];

  const nearbyTasks = [
    {
      id: 4,
      title: "Water Leak in Park",
      description: "Water pipe leaking near playground",
      status: "Open",
      priority: "High",
      distance: "0.5 km",
      location: "Central Park",
      category: "Utilities",
      reportedBy: "Community Member"
    },
    {
      id: 5,
      title: "Damaged Bench",
      description: "Bench in park needs repair",
      status: "Open",
      priority: "Low",
      distance: "0.8 km",
      location: "Central Park",
      category: "Public Facilities",
      reportedBy: "Park Visitor"
    },
    {
      id: 6,
      title: "Traffic Signal Malfunction",
      description: "Traffic light not working properly",
      status: "Open",
      priority: "High",
      distance: "1.2 km",
      location: "Main Intersection",
      category: "Traffic",
      reportedBy: "Driver"
    }
  ];

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleOpenUploadModal = () => {
    setIsUploadModalOpen(!isUploadModalOpen);
  };

  const handleOpenProfile = () => {
    setIsProfileModalOpen(true);
    setIsMenuOpen(false); // Close the menu when opening profile
  };

  const handleCloseProfile = () => {
    setIsProfileModalOpen(false);
  };

  const handleOpenContactAdmin = () => {
    setIsContactAdminModalOpen(true);
    setIsMenuOpen(false); // Close the menu when opening contact admin
  };

  const handleCloseContactAdmin = () => {
    setIsContactAdminModalOpen(false);
  };

  const handleSaveProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    // Here you would typically save to backend
    console.log('Profile saved:', updatedProfile);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Header */}
      <Header 
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenMenu={handleOpenMenu}
      />

      {/* Slide Menu */}
      <SlideMenu 
        isDarkMode={isDarkMode}
        isOpen={isMenuOpen}
        onClose={handleOpenMenu}
        onOpenProfile={handleOpenProfile}
        onOpenContactAdmin={handleOpenContactAdmin}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className={`p-6 rounded-2xl transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50' 
              : 'bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50'
          }`}>
            <h2 className={`text-4xl font-bold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Welcome back! 👋</h2>
            <p className={`text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Stay connected with your community and track local issues.</p>
          </div>
        </div>

        {/* Upload New Issue Button */}
        <div className="mb-8">
          <button 
            onClick={handleOpenUploadModal}
            className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 font-semibold hover:scale-105 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700"
          >
            <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
              <Plus className="h-5 w-5" />
            </div>
            <span>Upload New Issue</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <TabNavigation 
          isDarkMode={isDarkMode}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          myTasksCount={myTasks.length}
          nearbyTasksCount={nearbyTasks.length}
        />

        {/* Search and Filter */}
        <SearchAndFilter isDarkMode={isDarkMode} />

        {/* Tasks Content */}
        <div className="space-y-6">
          {activeTab === 'my-tasks' && (
            <MyIssues isDarkMode={isDarkMode} myTasks={myTasks} />
          )}

          {activeTab === 'nearby-tasks' && (
            <NearbyTasks isDarkMode={isDarkMode} nearbyTasks={nearbyTasks} />
          )}
        </div>
      </main>

      {/* Upload Issue Modal */}
      <UploadIssueModal 
        isDarkMode={isDarkMode}
        isOpen={isUploadModalOpen}
        onClose={handleOpenUploadModal}
      />

      {/* Profile Modal */}
      <ProfileModal 
        isDarkMode={isDarkMode}
        isOpen={isProfileModalOpen}
        onClose={handleCloseProfile}
        userProfile={userProfile}
        onSaveProfile={handleSaveProfile}
      />

      {/* Contact Admin Modal */}
      <ContactAdminModal 
        isDarkMode={isDarkMode}
        isOpen={isContactAdminModalOpen}
        onClose={handleCloseContactAdmin}
      />
    </div>
  );
};

export default UserDashboard;