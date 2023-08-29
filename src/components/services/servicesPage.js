import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../services.css'
import Navbar from '../navbar';
import ServicesHeader from '../services-header';
import Services from '../services';

import Footer from '../footer'

function ServicesPage() {
    return (
        <div className="ServicesPage">
            <body class=" hs-content-id-35094289646 hs-site-page page hs-content-path- hs-content-name-home-page  ">
                <Navbar />
                <ServicesHeader />
                <Services />
                <Footer />
            </body>
        </div>
    );
}

export default ServicesPage;