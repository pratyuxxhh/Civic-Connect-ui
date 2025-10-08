import React from 'react';
import '../../index.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-700 text-white flex items-center justify-between px-8 py-4 shadow z-50">
      <h1 className="text-2xl font-bold m-0">Civic Connect</h1>
      <div className="flex-1 flex justify-center">
        <nav className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold hover:underline${isActive ? ' underline' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold hover:underline${isActive ? ' underline' : ''}`
            }
          >
            About This Project
          </NavLink>

        </nav>
      </div>
      <div>

        <Link to="/signup">
          <button className="mr-4 px-5 py-2 bg-white text-blue-700 rounded font-semibold hover:bg-blue-100 transition">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="px-5 py-2 bg-white text-blue-700 rounded font-semibold hover:bg-blue-100 transition">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;