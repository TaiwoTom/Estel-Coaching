import React from 'react';
import '../index.css';
import Navbar from '../navbar';
import ContactHeader from '../contact-header';
// import Form from '../form';
import ContactBody from '../contact-body'
import Footer from '../footer'

function ContactPage() {
    return (
        <div className="ServicesPage">
            <div class=" hs-content-id-35094289646 hs-site-page page hs-content-path- hs-content-name-home-page  ">
                <Navbar />
                <ContactHeader />
                <ContactBody />
                <Footer />

            </div>
        </div>
    );
}

export default ContactPage;

