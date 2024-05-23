import React from 'react'
import { Link } from 'gatsby'

export default function PurchaseArea2() {
    return (
        <>
            {/* <!-- === HOME-2 PURCHES AREA START  === --> */}
            <div className="purches-area pt-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="section_title_wrapper purches">
                                <h2 className="section-title purches_heading">Easy to access and making purchases.</h2>
                                <p>Happy days jolly good bonnet owt to do with me loo wind up bog-standard, starkers victoria.!</p>
                                <div className="row g-0 pt-20">
                                    <div className="col-xl-4 col-md-4 col-md-4 col-sm-4">
                                        <div className="purches_btn">
                                            <Link href="#"><a><i className="fas fa-user-robot"></i></a></Link>
                                            <div className="purches_text">
                                                <h6>Download on the</h6>
                                                <Link href="#"><a>Play Store</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4 col-md-4 col-sm-4">
                                        <div className="purches_btn btn_outline">
                                            <Link href="#"><a><i className="fab fa-apple"></i></a></Link>
                                            <div className="purches_text purches2">
                                                <h6>Download on the</h6>
                                                <Link href="#"><a>App Store</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="pay_image d-sm-none d-md-block d-none d-sm-block">
                                <img src="/img/home-2_shapes/pay.png" alt="pay_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === HOME-2 PURCHES AREA END  === -->   */}
        </>
    )
}
