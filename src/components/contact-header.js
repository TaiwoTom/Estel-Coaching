import React from 'react';
import './home_banner.css';
import './page_fancybox.css';
import './page_layout_stylesheet.css';
import './responsive_layout_header.css';
import './video_with_text.css';
import contactImage from '../assets/contact-bg.webp'
import './index.css';

function ContactHeader() {
    return (
        <div className="body-container-wrapper">
            <div className="body-container container-fluid">
                <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                    <div className="row-fluid ">
                        <div className="span12 widget-span widget-type-custom_widget banner-wrapper" data-widget-type="custom_widget" data-x={0} data-w={12}>
                            <div id="hs_cos_wrapper_module_166021560853958" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                <div className="home-banner" role="banner">
                                    <img className="banner-img-css" width="1600px" height="600px" alt="Contact bg" src={contactImage}></img>
                                    <div className="page-center">
                                        <div className="banner-caption">
                                            <h1>GET IN <strong>TOUCH</strong></h1>
                                            <h2>We are glad to respond to your questions!</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/*end widget-span */}
                    </div>{/*end row*/}
                </div>{/*end row-wrapper */}
            </div>
        </div>
    )
}

export default ContactHeader;