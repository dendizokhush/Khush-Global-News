import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Category from '@/pages/Category';
import Article from '@/pages/Article';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import SearchPage from '@/pages/Search';
import { PrivacyPolicy, TermsOfService, Disclaimer } from '@/pages/Legal';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
