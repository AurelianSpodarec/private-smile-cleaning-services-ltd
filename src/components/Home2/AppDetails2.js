import React from 'react'
import { Link } from 'gatsby'

export default function AppDetails2() {
    return (
        <>
        {/* <!-- === HOME-2 APP DETAILS START === --> */}
    <div className="app_details_h2">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="app_images_h2 wow  fadeInUp"  data-wow-duration="2s" data-wow-delay=".4s">
                        <img className="bgphone d-none d-sm-block" src="/img/home-2_shapes/bgphone.png" alt="bighphone.png"/>
                        <div className="shape_design_h2">
                            <img className="home2FlatIphone_h2 d-none d-sm-block" src="/img/about/home2FlatIphone.png" alt="home2shape.png"/>
                            <img className="home2IphoneX_h2 d-none d-sm-block" src="/img/about/home2IphoneX.png" alt="iphone.png"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center">
                    <div className="details_content_h2 pl-100 wow  fadeInUp"  data-wow-duration="2s" data-wow-delay=".2s">
                        <h2 className="section-title mb-20">Get paid and use the cash. All<br/> with Front Pay.</h2>
                        <p>Barmy porkies gormless blower zonked cuppa burke<br/> bugger all mate victoria sponge pardon me William<br/> are you taking the piss nice.</p>
                        <div className="details_btn_h2 pt-30">
                            <div className="bg-blue">
                                <img src="/img/home-2_shapes/smalllove.png" alt="smalllove.png"/>
                            </div>
                            <div className="bg-white">
                                <img src="/img/home-2_shapes/smallpersonk.png" alt="smalllove.png"/>
                            </div>   
                        </div>
                        <Link href="/service"><a className="fea-link fea-link-two">Read More<i className="fal fa-arrow-right"></i></a></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <!-- === HOME-2 APP DETAILS END === --> */}
            
        </>
    )
}
