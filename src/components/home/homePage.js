import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../services.css'
import Navbar from '../navbar';
import HeadAbout from '../home-header-about';
import Services from '../services';
import Testimonials from '../testimonials';
import Footer from '../footer';


function HomePage() {
    return (
        <div className="App">
            <body class="   hs-content-id-35094289646 hs-site-page page hs-content-path- hs-content-name-home-page  ">
                <Navbar />
                <HeadAbout />
                <Services />
                <Testimonials />
                <Footer />
            </body>
        </div>
    );
}

export default HomePage;