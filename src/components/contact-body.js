import React from "react";
import "./index.css";
import "./home_banner.css";
import "./page_fancybox.css";
import "./page_layout_stylesheet.css";
import "./responsive_layout_header.css";
import "./video_with_text.css";
import "./contact_address.css";
import "./contact_stylesheet.css";
import "./contact-form.css";
import Email from "../assets/email-5a59065e.webp";
import Internet from "../assets/internet.webp";
import { useForm, ValidationError } from '@formspree/react';

function ContactBody() {
  const [state, handleSubmit] = useForm("moqowpnd");
  if (state.succeeded) {
    return <p className="form-success-msg">Thanks for Contacting Estel Coaching!</p>;
  }

  return (
    <div className="row-fluid-wrapper row-depth-1 row-number-2 contact-body">
      <div className="row-fluid ">
        <div
          id="main_content"
          className="span12 widget-span widget-type-cell "
          style={{}}
          data-widget-type="cell"
          data-x={0}
          data-w={12}
        >
          <div className="row-fluid-wrapper row-depth-1 row-number-3 ">
            <div className="row-fluid ">
              <div
                className="span12 widget-span widget-type-custom_widget "
                style={{}}
                data-widget-type="custom_widget"
                data-x={0}
                data-w={12}
              >
                <div
                  id="hs_cos_wrapper_module_1598350511705596"
                  className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                  data-hs-cos-general-type="widget"
                  data-hs-cos-type="module"
                >
                  <div className="contact-form-area">
                    <div className="page-center">
                      <div className="row-fluid">
                        <div className="span4">
                          <div className="form-left-text get-connected">
                            <h2>Estel Coaching</h2>
                  

                            <ul>
                              <li>
                                <a
                                  href="mailto:learn@estelcoaching.com;fiyin@estelcoaching"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="Email; opens in new tab."
                                  className="contact-email"
                                  linktext
                                >
                                  <img
                                    src={Email}
                                    alt="Email"
                                    width={25}
                                    height={25}
                                    loading="lazy"
                                    sizes="(max-width: 25px) 100vw, 25px"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://estelcoaching.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="Phone; opens in new tab."
                                  className="contact-phone"
                                  linktext
                                >
                                  <img
                                    src={Internet}
                                    alt="Phone"
                                    width={22}
                                    height={22}
                                    loading="lazy"
                                    sizes="(max-width: 22px) 100vw, 22px"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* FORM SECTION*/}
                        <section id="contact">
                          <div className="container pb-5">
                            <h2 class="pt-5">Contact Us</h2>
                            <form
                              onSubmit={handleSubmit}
                              
                            >
                              <div id="name">
                                <div className="form-group">
                                  <div>
                                  <input
                                    type="text"
                                    id="firstname"
                                    name="first name"
                                    className="form-control"
                                    placeholder="First Name*"
                                    required
                                  />
                                  </div>
                                </div>
                             
                                <div className="form-group">
                                  <input
                                    type="text"
                                    id="lastname"
                                    name="last name"
                                    className="form-control"
                                    placeholder="Last Name*"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="form-group">

                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="Email*"
                                  
                                />
                                <ValidationError
                                  prefix="Email"
                                  field="email"
                                  errors={state.errors}
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="phone"
                                  id="phone"
                                  name="phone"
                                  className="form-control"
                                  placeholder="Phone No."
                                  
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  id="message"
                                  rows={6}
                                  cols={30} 
                                  name="message"
                                  className="form-control"
                                  placeholder="Message"
                                  
                                  defaultValue={""}
                                />
                                <ValidationError
                                  prefix="Message"
                                  field="message"
                                  errors={state.errors}
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary mt-3"                               
                              >
                                Send
                              </button>
                            </form>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
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
  );
  
    /*end row-wrapper */
  
}

export default ContactBody;
