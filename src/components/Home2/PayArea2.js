import React from 'react'
import { Link } from 'gatsby'

export default function PayArea2() {
    return (
        <>
            {/* <!-- === HOME-2 PAY AREA START  === --> */}
            <div className="pay_area mb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="details_content_h2 pt-200 wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <h2 className="section-title mb-20 pt-50">Simple and affordable. Pay as <br /> you go.</h2>
                                <p>Barmy porkies gormless blower zonked cuppa burke<br /> bugger all mate victoria sponge pardon me William<br /> are you taking the piss nice.</p>
                                <div className="details_btn_h2 pt-30">
                                    <div className="bg-blue">
                                        <img src="/img/home-2_shapes/smalllove.png" alt="smalllove.png" />
                                    </div>
                                    <div className="bg-white">
                                        <img src="/img/home-2_shapes/smallpersonk.png" alt="smallpersong.png" />
                                    </div>
                                </div>
                                <Link href="/service"><a className="fea-link fea-link-two">Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="Pay_images pt-130 wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <img className="pay_shape1 d-none d-sm-block" src="/img/home-2_shapes/Appz_home_01.png" alt="pay_image" />
                                <img className="pay_shape2 d-none d-sm-block" src="/img/home-2_shapes/Dashboard.png" alt="pay_image" />
                                <img className="pay_shape3 d-none d-sm-block" src="/img/home-2_shapes/circle1.png" alt="pay_image" />
                                <img className="pay_shape4 d-md-none d-lg-block d-none d-sm-block" src="/img/home-2_shapes/Polygon1.png" alt="pay_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === HOME-2 PAY AREA END  === --> */}

        </>
    )
}
