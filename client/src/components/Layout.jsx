import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingActions from './FloatingActions.jsx';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingActions />
  </div>
);

export default Layout;
