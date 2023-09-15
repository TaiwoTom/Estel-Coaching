import React from 'react';
import './index.css';
import './home_banner.css';
import './page_fancybox.css';
import './page_layout_stylesheet.css';
import './responsive_layout_header.css';
import './video_with_text.css';
import AgileTransport from '../assets/AgileTransformation.webp';
import CareerCoaching from '../assets/career-coaching-icon-e63bc9d8.webp';
import Resume from '../assets/resume-linkedin-optimization-icon-09b11b67.webp';
import './services.css'


function HomeServices() {
    return (
        <div>
            <div className="row-fluid-wrapper row-depth-1 row-number-4 ">
                <div className="row-fluid ">
                    <div className="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x={0} data-w={12}>
                        <div id="hs_cos_wrapper_module_159488685660223" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                            <div className="services-area">
                                <div className="page-center">
                                    <div className="border-heading">
                                        <h2>Our Services</h2>
                                    </div>
                                    <div className="service-tab-row">
                                        <div className="service-tab">
                                            <img className="lazy" data-src="https://wallpapercave.com/wp/wp10306588.jpg" alt="scrum_transition" width={450} height={300} src="https://wallpapercave.com/wp/wp10306588.jpg" />
                                            <h3>Scrum Transition</h3>
                                            <p>Embarking on a career switch to a no-coding tech role as a Scrum Master
                                                holds significant promise. This role is in high
                                                demand, offering enticing perks and remarkable avenues for career
                                                advancement. With the surge in Agile methodology
                                                adoption by organizations, the trajectory of Scrum Master opportunities
                                                is projected to rise by 24% annually until 2026.
                                            </p>
                                            <a href="./services" rel="noferrrer" className="learn-more" target="_blank" aria-label="Scrum Transition, opens in new tab">Learn More</a>
                                        </div>
                                        <div className="service-tab">
                                            <img className="lazy" data-src={CareerCoaching} alt="career_coaching" width={450} height={300} src={CareerCoaching} />
                                            <h3>Career Coaching</h3>
                                            <p>Within this coaching program, you'll collaborate with a skilled career
                                                coach to refine your toolkit, hone essential
                                                skills, and bolster your self-assurance for triumph in the current job
                                                landscape. Mutual efforts will revolve around
                                                assessing both your immediate and long-term career aspirations.
                                            </p>
                                            <a href="./services" rel="noferrrer" className="learn-more" target="_blank" aria-label="Career Coaching, opens in new tab">Learn More</a>
                                        </div>
                                        <div className="service-tab">
                                            <img className="lazy" data-src="https://bluecowsoftware.com/wp-content/uploads/2018/02/Building-Your-Job-Search-Support-Team.jpg" alt="job_support" width={450} height={280} src="https://bluecowsoftware.com/wp-content/uploads/2018/02/Building-Your-Job-Search-Support-Team.jpg" />
                                            <h3>On the Job support</h3>
                                            <p>Embarking on the journey to become a Scrum Master is an exciting leap
                                                into the dynamic world of tech, and at Estel
                                                Coaching, we're here to ensure your success every step of the way. Our
                                                "On the Job Support" service is designed to be
                                                your guiding light as you transition into this pivotal role. We
                                                understand that theory and certification lay the
                                                groundwork, but practical application is where the real learning takes
                                                place.
                                            </p>
                                            <a href="./services" rel="noferrrer" className="learn-more" target="_blank" aria-label="Job Support, opens in new tab">Learn More</a>
                                        </div>
                                        <div className="service-tab">
                                            <img className="lazy" data-src="https://insightglobal.com/wp-content/uploads/2022/08/strategic-interview-questions.webp" alt="interviewing_preparation" width={450} height={280} src="https://insightglobal.com/wp-content/uploads/2022/08/strategic-interview-questions.webp" />
                                            <h3>Interview Preparation</h3>
                                            <p>Securing the role of a Scrum Master requires more than just
                                                qualifications; it demands exceptional interview performance
                                                that showcases your expertise and suitability for the position. At Estel
                                                Coaching, our "Interview Preparation" service
                                                is meticulously crafted to empower you for success. We recognize that
                                                the interview stage is a pivotal opportunity to
                                                shine, and our expert coaches are dedicated to helping you navigate it
                                                with confidence.
                                            </p>
                                            <a href="./services" rel="noferrrer" className="learn-more" target="_blank" aria-label="Interviewing Preparation, opens in new tab">Learn More</a>
                                        </div>
                                        <div className="service-tab">
                                            <img className="lazy" data-src={Resume} alt="resume_linkedin" width={450} height={300} src={Resume} />
                                            <h3>Resume Writing &amp; Linkedin Optimization</h3>
                                            <p>In today's competitive job market, the era of generic CVs has waned.
                                                Recruiters invest mere seconds scrutinizing each CV
                                                amidst intensifying competition for vacancies. Crafting a standout CV
                                                becomes pivotal, offering a gateway to secure your
                                                dream job. Yet, the art of curating an impeccable CV isn't always
                                                straightforward, prompting the relevance of CV review
                                                and writing services.
                                            </p>
                                            <a href="./services" rel="noferrrer" className="learn-more" target="_blank" aria-label="Resume Linkedin, opens in new tab">Learn More</a>
                                        </div>
                                        <div className="service-tab">
                                            <img className="lazy" data-src={AgileTransport} alt="agile_transformation" width={450} height={300} src={AgileTransport} />
                                            <h3>Agile Transformation</h3>
                                            <p>We offer the demonstrated expertise to support you on your Agile journey
                                                if you are thinking about undergoing an Agile
                                                transformation. Over the past four years, we have been instrumental in
                                                some significant transformations, such as the
                                                establishment of an Agile transformation coaching office at Liberty
                                                Mutual, a Fortune 75 firm with more than 280 Scrum
                                                Teams in the US.
                                            </p>
                                            <a href="./services" rel="noferrrer" className="learn-more" target="_blank" aria-label="Agile Transformation, opens in new tab">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*end widget-span */}
                </div>{/*end row*/}
            </div>{/*end row-wrapper */}
            
        </div>
    );
}

export default HomeServices;