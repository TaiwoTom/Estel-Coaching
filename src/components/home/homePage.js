import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../services.css'
import Navbar from '../navbar';
import HomeHeadAbout from '../home-header-about';
import HomeServices from '../home_services';
import Testimonials from '../testimonials';
import Footer from '../footer';


function HomePage() {
    return (
        <div className="App">
            <body class=" hs-content-id-35094289646 hs-site-page page hs-content-path- hs-content-name-home-page  ">
                <Navbar />
                <HomeHeadAbout />
                <HomeServices />
                <Testimonials />
                <Footer />
            </body>
        </div>
    );
}

export default HomePage;