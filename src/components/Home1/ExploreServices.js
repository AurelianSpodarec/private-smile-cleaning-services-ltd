import { Link } from "gatsby";
import React from "react";

export default function ExploreServices() {
  return (
    <>
        <div className="homefeture_1 pt-115 pb-130">
            <div className="container">
                <div className="section_title_wrapper wow fadeInUp" data-wow-delay="0.3s"
                    style={{"visibility":"visible","animationDelay":"0.3s","animationName":"fadeInUp"}}>
                    <h1 className="section-title">Top-Rated Residential and Commercial<br/> Cleaning Services with a Smile</h1>
                </div>
                <div className="row">
                    <div className="col centered-text">
                        <span>
                            Our dedicated team of professional cleaners ensures every corner of your home<br/>
                            or office is meticulously cleaned, providing you with a stress-free and hygienic<br/>
                            environment. Discover the range of services we offer:
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 service">
                        <img src="/img/residential.png" />
                        <div className="descriptor">
                            <h3>Residential Cleaning</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link to="/residential-cleaning">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 service">
                        <img src="/img/commercial.png" />
                        <div className="descriptor">
                            <h3>Commercial Cleaning</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link to="/commercial-cleaning">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 service">
                        <img src="/img/eot.png" />
                        <div className="descriptor">
                            <h3>End Of Tenancy Cleaning</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link to="/eot-cleaning">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 service">
                        <img src="/img/ironing-laundry.png" />
                        <div className="descriptor">
                            <h3>Ironging & Laundry</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link to="/ironing-laundry">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 text-center">
                        <Link to="/sign-up" className="btn btn-primary" style={{width: "217px"}}>Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};