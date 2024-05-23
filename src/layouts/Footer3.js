import React from 'react'
import { Link } from 'gatsby'

export default function Footer3() {
    return (
        <>
            {/* <!-- FOOTER START --> */}
            <div className="footer-area padding-remove footertext-hover2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer_logo">
                                <img src="/img/logo/logomain.png" alt="logo" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer_widget_design wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="link_heading">
                                    <h3 className="link_heading">Useful Links</h3>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><Link href="/"><a>Home </a></Link></li>
                                        <li><Link href="/about"><a>About</a></Link></li>
                                        <li><Link href="/service"><a>Service</a></Link></li>
                                        <li><Link href="/blog"><a>Blog</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer_widget_design wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="link_heading">
                                    <h3 className="link_heading">Resources</h3>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><Link href="/service"><a>Project</a></Link></li>
                                        <li><Link href="/about"><a>About</a></Link></li>
                                        <li><Link href="/contact"><a>Help</a></Link></li>
                                        <li><Link href="/about"><a>Privacy</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer_widget_design fixwidth wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="link_heading">
                                    <h3 className="link_heading">Service</h3>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><Link href="#"><a>Managed IT</a></Link></li>
                                        <li><Link href="/service"><a className="itsupport">IT Support </a></Link></li>
                                        <li><Link href="/service"><a>Cecurity</a></Link></li>
                                        <li><Link href="/about"><a>FAQ’s </a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-4">
                            <div className="footer_widget_design wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="link_heading">
                                    <h3 className="link_heading linkspecail">Office Location</h3>
                                </div>
                                <div className="links special_widget_tp">
                                    <ul>
                                        <li><Link href="/contact"><a><i className="far fa-map-marker-alt"></i><span className="tp-spaceing">99, Kazi Nazrul Islam Avenue (Dhaka Trade Centre - 5th Floor) Kawran Bazar, Dhaka-1215.</span></a></Link></li>
                                        <li><Link href="tel:+8801821243622"><a><i className="fad fa-phone-alt"></i>+880 1821 243 622</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom pt-60 pb-15">
                    <div className="container tp-border">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="copyright_text pt-20">
                                    <p>@ 2021 All Copyright Reserved. Design by <span className="colorblue">Theme_Pure</span></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="footer_social f-right">
                                    <span>Follow us</span>
                                    <Link href="#"><a><i className="fab fa-twitter"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-vimeo-v"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FOOTER END -->   */}
        </>
    )
}
