import React from "react";
import "./index.css";
import "./home_banner.css";
import "./page_fancybox.css";
import "./page_layout_stylesheet.css";
import "./responsive_layout_header.css";
import "./video_with_text.css";
import logo from "../assets/EstelLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const openNav = () => {
    document.getElementById("openMenu").style.display = "block";
  };

  const closeNav = () => {
    document.getElementById("openMenu").style.display = "none";
  };

  return (
    <div className="header-container-wrapper tab-nav">
      <div className="header-container container-fluid">
        <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
          <div className="row-fluid ">
            <div
              className="span12 widget-span widget-type-global_group top-header-section top_bar_left"
              data-widget-type="global_group"
              data-x={0}
              data-w={12}
            >
              <div className="row-fluid-wrapper row-depth-1 row-number-2 ">
                <div className="row-fluid ">
                  <div
                    id="mobile-nav"
                    className="span12 widget-span widget-type-cell page-center"
                    data-widget-type="cell"
                    data-x={0}
                    data-w={12}
                  >
                    <div className="row-fluid-wrapper row-depth-1 row-number-3 ">
                      <div className="row-fluid ">
                        <div
                          className="span3 widget-span widget-type-custom_widget company-logo"
                          data-widget-type="custom_widget"
                          data-x={0}
                          data-w={3}
                        >
                          <div
                            id="hs_cos_wrapper_module_1658844422973293"
                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                            data-hs-cos-general-type="widget"
                            data-hs-cos-type="module"
                          >
                            <div className="header-logo-wrapper">
                              <Link to="/">
                                <img
                                  src={logo}
                                  alt="Estel Coaching Logo"
                                  width={280}
                                  height={292}
                                  style={{ maxWidth: "100%", height: "auto" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/*end widget-span */}

                        {/* <span className="navmenu" onClick={openNav}>&#9776;</span> */}
                        <span
                          id="hs_cos_wrapper_module_14588124460843"
                          onClick={openNav}
                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu "
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="menu"
                        >
                          <a className="mobile-trigger new_nav">
                            <i className="icon-menu new_icon" />
                          </a>
                        </span>
                        <div className="col-sm-3 icon" id="openMenu">
                          <div className="m-3">
                            <span className="close" onClick={closeNav}>
                              &times;
                            </span>
                            <ul className="navbar-nav justify-content-around">
                              <li className="nav-item">
                                <Link to="/" className="nav-link">
                                  <span className="nav-mobile">HOME</span>
                                </Link>
                                <hr />
                              </li>
                              <li className="nav-item">
                                <Link to="/services" className="nav-link">
                                  <span className="nav-mobile">
                                    OUR SERVICES
                                  </span>
                                </Link>
                                <hr />
                              </li>
                              <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                  <span className="nav-mobile">CONTACT</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div
                          className="span9 widget-span widget-type-menu custom-menu-primary js-enabled"
                          style={{ display: "block" }}
                          data-widget-type="menu"
                          data-x={3}
                          data-w={9}
                        >
                          <div className="cell-wrapper layout-widget-wrapper">
                            <span
                              id="hs_cos_wrapper_module_14588124460843"
                              className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu old_nav"
                              data-hs-cos-general-type="widget"
                              data-hs-cos-type="menu"
                            >
                              <a className="mobile-trigger">
                                <i className="icon-menu" />
                              </a>
                              <div
                                id="hs_menu_wrapper_module_14588124460843"
                                className="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal"
                                role="navigation"
                                data-menu-id={4021202453}
                                aria-label="Navigation Menu"
                              >
                                <ul role="menu">
                                  <li
                                    className="hs-menu-item hs-menu-depth-1"
                                    role="none"
                                  >
                                    <Link to="/">HOME</Link>
                                  </li>
                                  <li
                                    className="hs-menu-item hs-menu-depth-1 hs-item-has-children"
                                    role="none"
                                  >
                                    <Link to="/services">OUR SERVICES</Link>
                                  </li>
                                  <li
                                    className="hs-menu-item hs-menu-depth-1"
                                    role="none"
                                  >
                                    <Link to="/contact">CONTACT US</Link>
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </div>
                          {/*end layout-widget-wrapper */}
                        </div>
                        {/*end widget-span */}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end row-wrapper */}
                  </div>
                  {/*end widget-span */}
                </div>
                {/*end row*/}
              </div>
              {/*end row-wrapper */}
            </div>
            {/*end widget-span */}
          </div>
          {/*end row*/}
        </div>
        {/*end row-wrapper */}
      </div>
      {/*end header */}
    </div>
  );
  {
    /*end header wrapper */
  }
}

export default Navbar;

