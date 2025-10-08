import React, { useState } from 'react';
import '../../index.css';

const SignUp = () => {
  const [form, setForm] = useState({
    userName: '',
    password: '',
    role: '',
    department: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/home/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        console.log(await response.text());

        alert('Sign up successful!');
      } else {
        alert('Sign up failed!');
      }
    } catch (error) {
      alert('An error occurred!' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] pt-24 pb-16 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="userName" className="block mb-2 font-semibold text-gray-700">UserName:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            required
            value={form.userName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block mb-2 font-semibold text-gray-700">Role:</label>
          <select
            id="role"
            name="role"
            required
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="worker">Worker</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {(form.role === "worker" || form.role === "admin") && (
          <div className="mb-6">
            <label htmlFor="department" className="block mb-2 font-semibold text-gray-700">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              required
              value={form.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;