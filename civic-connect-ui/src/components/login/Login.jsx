import React, { useState } from 'react';
import getUserRole from '../security-helper/getUserRole';
import { useNavigate } from 'react-router-dom'; // Add this import

const Login = () => {
  const [form, setForm] = useState({ userName: '', password: '' });
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/home/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        // Handle successful login (e.g., redirect, show message)
        const token = await response.text();
        console.log('Login successful. Token:', token);
        localStorage.setItem("token", token);
        let data = getUserRole();
        if (data === "ROLE_ADMIN") navigate("/admin");
        else if (data === "ROLE_USER") navigate("/user");
        else if (data === "ROLE_WORKER") navigate("/worker");
        else navigate("/");
      } else {
        // Handle error
        alert('Login failed!');
      }
    } catch (error) {
      console.log('An error occurred:', error.message);
      alert('An error occurred!' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] pt-24 pb-16 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold text-gray-700">
            UserName
          </label>
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
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">
            Password:
          </label>
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
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;