import React from 'react';
import { handleLogout } from '../logout/Logout';
const AdminLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center mt-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 text-white font-semibold py-2 px-6 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminLayout;