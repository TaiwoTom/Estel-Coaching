import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"
import HomePage from './components/home/homePage';
import ServicesPage from './components/services/servicesPage';
import ContactPage from './components/contact/contactPage';
import HomeServices from './components/home_services';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<HomeServices />} />
          <Route path="services" element={<Footer />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

