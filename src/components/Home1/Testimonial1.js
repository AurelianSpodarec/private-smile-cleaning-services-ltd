import React from 'react'
import { Link } from "gatsby";

export default function Testimonial1() {
    return (
        <>
            {/* <!-- TESTIMONIAL START  --> */}
            <div className="testimonial-area bg1 pt-110 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 pb-50">
                            <div className="section-wrapper">
                                <h2 className="section-title">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                            <div className='center-text'>
                                <h1>Frequently Asked Questions</h1>
                                <p>
                                Your Path to Easy Cleaning Solutions
                                </p>
                                <p>
                                Need More Info? <Link to="/contact">Reach Out Here</Link>
                                </p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Do Cleaners at Smile Cleaning work as employees or contractors?
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        At Smile Cleaning, our cleaners are employed directly by us, not as independent contractors. We take pride in having our own team of fully trained and
                                        dedicated professionals. Our employees undergo thorough vetting processes and
                                        are covered by public liability insurance, ensuring both client and employee safety.
                                        We value our team members and invest in their development, offering competitive remuneration packages to reward their hard work. This approach fosters a motivated and loyal workforce dedicated to delivering unparalleled quality and reliability in our cleaning services. By employing our cleaners, we ensure superior service for our customers, setting us apart from the competition.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How is pricing determined for Smile Cleaning services?
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Is the suggested booking duration always fully utilised?
                                    </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Will I have the same cleaner for each appointment?
                                    </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Are there any contractual obligations with Smile Cleaning?
                                    </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
            {/* <!-- TESTIMONIAL END --> */}
        </>
    )
}
