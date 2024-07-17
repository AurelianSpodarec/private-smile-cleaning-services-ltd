import React from 'react'
import { Link } from "gatsby";

export default function WhyChoose() {
    return(
        <>
            <div className="container pt-50 pb-20">
                <div className='row centered-text'>
                    <div className='col'>
                        <h1 style={{color: "#2A2B2E"}}>Experience the Difference with Smile Cleaning</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='center-image'></div>
                    </div>
                </div>
                <div className='row pb-20 mar-exp'>
                    <div className='col pt-50 left-expe'>
                        <div className='row'>
                            <div className='col'>
                               <i className="fal fa-star"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>Professional and Trusted Cleaners</b><br/>
                                Our team consists of highly trained and vetted professionals.<br/><br/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <i className="far fa-leaf"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>Eco-Friendly Products</b><br/>
                                We provide only eco-friendly and non-toxic cleaning products.<br/><br/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <i className="fal fa-book-alt"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>Customisable Cleaning Plans</b><br/>
                                Choose the services that best fit your needs and schedule.<br/><br/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <i className="fal fa-check"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>100% Satisfaction Guarantee</b><br/>
                                If you're not completely satisfied, we'll make it right.<br/><br/>
                            </div>
                        </div>
                    </div>
                    <div className='col pt-50 left-expe'>
                        <div className='row'>
                            <div className='col'>
                                <i className="far fa-clock"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>Flexible Scheduling</b><br/>
                                We offer convenient scheduling options to fit your busy life.<br/><br/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <i className="far fa-tag"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>Affordable Pricing</b><br/>
                                Get top-quality cleaning services at competitive rates.<br/><br/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <i className="fal fa-search"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>Detailed Cleaning</b><br/>
                                We pay attention to every detail, ensuring a thorough clean.<br/><br/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <i className="far fa-shield"></i>
                            </div>
                            <div className='col-11' style={{paddingLeft:"0px"}}>
                                <b>Reliable Service</b><br/>
                                Count on us for consistent and dependable cleaning.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <hr style={{borderBottom: "1px solid #6c757d"}} />
                    </div>
                </div>

                <div className='continer-conven'>
                    <div className='row centered-text'>
                        <div className='col'>
                            <h1 style={{color: "#2A2B2E"}}>Convenience and Delight that Bring Smiles</h1>
                        </div>
                    </div>
                    <div className='row mb-50 grid-one'>
                        <div className='features-container col'>
                            <div className='row-why'>
                                <div className='row pb-20'>
                                    <div className='col icon-why'>
                                        <i className="far fa-tablet"></i>
                                    </div>
                                    <div className='col-11' style={{paddingLeft:"0px"}}>
                                        <b>Optimized for All Devices</b><br/>
                                        Our website is fully responsive, ensuring a seamless experience whether you're on a mobile, tablet, or desktop.
                                    </div>
                                </div>
                                <div className='row pb-20'>
                                    <div className='col icon-why'>
                                        <i className="fal fa-calendar"></i>
                                    </div>
                                    <div className='col-11' style={{paddingLeft:"0px"}}>
                                        <b>Manage Bookings Anytime, Anywhere</b><br/>
                                        Conveniently book and manage your cleaning services from any device, no matter where you are.
                                    </div>
                                </div>
                                <div className='row pb-20'>
                                    <div className='col icon-why'>
                                        <i className="fal fa-smile"></i>
                                    </div>
                                    <div className='col-11' style={{paddingLeft:"0px"}}>
                                        <b>Smiles Guaranteed</b><br/>
                                        We are committed to providing a service that leaves you smiling every time.
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 mb-50 mt-30 text-center">
                                <Link to="/sign-up" className="btn btn-primary btn-explore">Book Now</Link>
                            </div>
                        </div>
                        <div className='col div-why'>
                            <div className='center-image-2'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}