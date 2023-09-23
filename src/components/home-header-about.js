import React from 'react';
import './home_banner.css';
import './page_fancybox.css';
import './page_layout_stylesheet.css';
import './responsive_layout_header.css';
import './video_with_text.css';
import homeBg from '../assets/home-bg.webp';
import thinkingAboutImage from '../assets/thinking-promising-project.webp';
import './index.css';

function HomeHeadAbout() {
    return (
        <div className="body-container-wrapper">
            <div className="body-container container-fluid">
                <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                    <div className="row-fluid ">
                        <div className="span12 widget-span widget-type-custom_widget banner-wrapper" data-widget-type="custom_widget" data-x={0} data-w={12}>
                            <div id="hs_cos_wrapper_module_166021560853958" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                <div className="home-banner" role="banner">
                                    {/* <video className="banner-img-css" autoPlay width="1600px" height="800px" alt="home_bg video">
                                        <source type="video/mp4" src={ItVideo} />
                                    </video> */}
                                    <img className="banner-img-css" width="1600px" height="800px" alt="home_bg video" src={homeBg}></img>
                                    <div className="page-center">
                                        <div className="banner-caption">
                                            <h1>COACHING <strong>FOR SCRUM MASTERS</strong></h1>
                                            <h2>People Who Love Scrum Methodologies As Much As You Do</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/*end widget-span */}
                    </div>{/*end row*/}
                </div>{/*end row-wrapper */}
                <div className="row-fluid-wrapper row-depth-1 row-number-2 ">
                    <div className="row-fluid ">
                        <div id="main_content" tabIndex={-1} style={{ scrollMarginTop: '68px' }}>
                            <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x={0} data-w={12}>
                                <div id="hs_cos_wrapper_module_1594826788803235" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                    <link rel="stylesheet" href="/page_fancybox.css" />
                                    <div className="video-area">
                                        <div className="img-holder" data-background={thinkingAboutImage} style={{
                                            backgroundImage: `url(${thinkingAboutImage})`
                                        }}>
                                            <div className="right-video">
                                            </div>
                                        </div>
                                        <div className="page-center">
                                            <div className="row-fluid">
                                                <div className="span6">
                                                    <div className="video-left-text">
                                                        <div className="border-heading">
                                                            <h2><strong>ARE YOU LOOKING TO PIVOT TO TECH ROLES?</strong>
                                                            </h2>
                                                        </div>
                                                        <p><span>In the evolving landscape of non-coding IT roles, a fresh
                                                            perspective has emerged regarding the accessibility of
                                                            becoming a Scrum Master. Unlike traditional notions, the
                                                            prerequisites for entering these roles are now notably more
                                                            achievable. While some individuals possess theoretical
                                                            expertise acquired through professional exams, a crucial
                                                            realization has surfaced: practical experience remains a
                                                            vital catalyst for comprehending these roles holistically.
                                                            <br /><br /> Estel Coaching, our mission transcends
                                                            conventional training. Not only do we equip you with the
                                                            knowledge essential
                                                            to becoming a Certified Scrum Master, but we also extend our
                                                            commitment to guide you throughout your entire career
                                                            transition journey. Our approach acknowledges that while
                                                            theoretical foundations lay the groundwork, hands-on
                                                            application is indispensable for a profound understanding of
                                                            Agile methodologies and the Scrum framework. By
                                                            intertwining comprehensive training with real-world
                                                            involvement, we empower you to navigate the intricacies of
                                                            non-coding IT roles with confidence.
                                                            <br /><br /> Our unique proposition is not just about
                                                            instruction; it's about fostering a seamless transition. We
                                                            stand as a pillar
                                                            of support from the initial stages of learning, through the
                                                            pivotal certification process, and onwards into the dynamic
                                                            realm of practical implementation. Your success as a Scrum
                                                            Master is not solely about what you know, but also about the
                                                            skillful fusion of knowledge and experience. Estel Coaching
                                                            is dedicated to being your partner in this transformative
                                                            journey, ensuring you possess the tools and guidance needed
                                                            to thrive in the realm of non-coding IT and excel as a
                                                            Certified Scrum Master.</span></p>
                                                    </div>
                                                </div>
                                                <div className="span6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*end widget-span */}
                        </div>
                    </div>{/*end row*/}
                </div>{/*end row-wrapper */}
            </div>
        </div>
    )
}

export default HomeHeadAbout;