import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../public/Header';
import Footer from '../public/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;