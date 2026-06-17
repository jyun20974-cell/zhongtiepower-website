import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import DownloadsPage from './components/DownloadsPage.jsx';
import ContactPage from './components/ContactPage.jsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

const App = () => (
  <Layout>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/downloads" element={<DownloadsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </Layout>
);

export default App;
