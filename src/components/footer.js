import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import './home_banner.css';
import './page_fancybox.css';
import './page_layout_stylesheet.css';
import './responsive_layout_header.css';
import './video_with_text.css';
import './footer.css';
import logo from '../assets/EstelLogo.png';
import Email from '../assets/email-5a59065e.svg';
import Phone from '../assets/phone.png'


function Footer() {
    return (

        <div className="footer-container-wrapper">
            <div className="footer-container container-fluid">
                <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                    <div className="row-fluid ">
                        <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x={0} data-w={12}>
                            <div id="hs_cos_wrapper_module_1599138159693382" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                <footer className="footer-area">
                                    <div className="footer-top">
                                        <div className="page-center">
                                            <div className="footer-tab-row">
                                                <div className="footer-tab1">
                                                    <div className="f-logo">
                                                        <a href="https://estelcoaching.com/?hsLang=en">
                                                            <div style={{ display: 'flex' }}>
                                                                <img src={logo} alt="Estel Coaching Logo" width={280} height={292} style={{ maxWidth: '100%', height: 'auto' }} />                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="f-about-text">
                                                        <p>Gain Scrum Master certification and interview prowess
                                                            with our
                                                            expert coaching.
                                                            <br /><br />Estel Coaching is your path to Scrum Master
                                                            excellence. Unlock Agile mastery, leadership skills, and
                                                            project
                                                            success
                                                            through tailored training.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="footer-tab2">
                                                    <h2>LOCATION</h2>
                                                    <div>
                                                        <ul className="demo at-tabs-when-possible bbq clearfix at-accordion-or-tabs at-accordion-closed" data-tabset-id="tabset_0">
                                                            <li>
                                                                <p aria-controls="sect_tabset_0_2" id="accordion_tabset_0_2" aria-expanded="false">
                                                                    <span className="at-tab-one-pixel-fix-left" /><span className="at-tab-one-pixel-fix-right" />16,
                                                                    Azikiwe
                                                                    Street,
                                                                    <br />Lagos, <br />Nigeria.<br />
                                                                    <strong>Time:</strong> 8am - 6pm
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="get-connected">
                                                        <h2>GET CONNECTED</h2>
                                                        <a href="mailto:fiyinfoluwa1000@gmail.com" target="_blank" rel="noopener" aria-label="Email; opens in new tab." linktext><img src={Email} alt="Email" width={30} height={30} loading="lazy" sizes="(max-width: 30px) 100vw, 30px" /></a> <a href="mailto:fiyinfoluwa1000@gmail.com" target="_blank" rel="noopener" aria-label="Email; opens in new tab.">
                                                            
                                                            <p sizes="(max-width: 30px) 100vw, 30px">
                                                                fiyinfoluwa1000@gmail.com</p>
                                                        </a>
                                                        <br />
                                                        <br />
                                                        <a href="tel:+2348175863420" target="_blank" rel="noopener" aria-label="Phone; opens in new tab."><img src={Phone} alt="Phone" width={30} height={30} loading="lazy" sizes="(max-width: 30px) 100vw, 30px" /></a> <a href="tel:+2348175863420" target="_blank" rel="noopener" aria-label="Phone; opens in new tab.">
                                                            <p sizes="(max-width: 30px) 100vw, 30px"> +2348175863420
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="footer-tab3">
                                                    <h2>QUICK LINKS</h2>
                                                    <span id="hs_cos_wrapper_module_1599138159693382_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu" data-hs-cos-general-type="widget" data-hs-cos-type="menu">
                                                        <div id="hs_menu_wrapper_module_1599138159693382_" className="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="default" data-menu-id={32501009001} aria-label="Navigation Menu">
                                                            <ul role="menu">
                                                                <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="/services.html" role="menuitem">Scrum Transition</a></li>
                                                                <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="/services.html" role="menuitem">Career coaching</a></li>
                                                                <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="/services.html" role="menuitem">On the Job support</a></li>
                                                                <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="/services.html" role="menuitem">Interview Preparation</a>
                                                                </li>
                                                                <li className="hs-menu-item hs-menu-depth-1" role="none"><a href="/services.html" role="menuitem">Agile Transformation</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="copyright" style={{}}>
                                        <div className="page-center">
                                            <p>Copyright © 2023 Estel Coaching. All Rights Reserved</p>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>{/*end widget-span */}
                    </div>{/*end row*/}
                </div>{/*end row-wrapper */}
            </div>{/*end footer */}
        </div>
    ); {/*end footer wrapper */ }
}


export default Footer;