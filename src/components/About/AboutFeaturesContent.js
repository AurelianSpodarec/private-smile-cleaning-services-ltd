import React from 'react'
import { Link } from 'gatsby'

export default function AboutFeaturesContent() {
    return (
        <>
            {/* <!-- FETURES CONTENT START --> */}
            <div className="app_image app_image3 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="app_image_shape_h3">
                                <img className="posabsouluteh3 app1" src="/img/shape/dark1.png" alt="shape_missing" />
                                <img className="posabsouluteh3 app2 d-none d-lg-block" src="/img/shape/shape5.png" alt="shape_missing" />
                                <img className="posabsouluteh3 app3" src="/img/shape/shape5.png" alt="shape_missing" />
                                <img className="posabsouluteh3 app4" src="/img/shape/lightshape.png" alt="shape_missing" />
                                <img className="posabsouluteh3 app5" src="/img/shape/verysmall.png" alt="shape_missing" />
                                <img className="posabsouluteh3 app6" src="/img/shape/shape8.png" alt="shape_missing" />
                                <img className="posabsouluteh3 app7" src="/img/shape/shape3.png" alt="shape_missing" />
                            </div>
                            <div className="app-image wow fadeInUp" data-wow-delay=".3s" style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                <img className="img-fluid" src="/img/about/appabout.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="features feturesCommon wow fadeInUp pt-90 pl-50 remove-pad" data-wow-delay=".3s" style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                <div className="features__icon h3_shape">
                                    <img className="img-fluid" src="/img/fetures/fetures3.png" alt=""/>
                                </div>
                                <div className="features__content h3_content">
                                    <h2 className="section-title">We Create innovative solution that works pragmatically.</h2>
                                    <p>You mug dropped a clanger barmy David brown <br />bread bleeding crikey say chimney pot me old <br />mucker bugger super.</p>
                                    <Link href="/service"><a>Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FETURES CONTENT START --> */}
            {/* <!-- FETURES CONTENT START --> */}
            <div className="homefeture_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="features pt-105 wow fadeInLeft" data-wow-delay=".3s" style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInLeft" }}>
                                <div className="features__icon">
                                    <img className="img-fluid" src="/img/fetures/leftIcon.png" alt=""/>
                                </div>
                                <div className="features__content">
                                    <h2 className="section-title">We Create innovative solution that works pragmatically.</h2>
                                    <p>You mug dropped a clanger barmy David brown <br />bread bleeding crikey say chimney pot me old <br />mucker bugger super.</p>
                                    <Link href="/service"><a>Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="app-image wow fadeInRight" data-wow-delay=".3s" style={{ "visibility": "visible", "animationDelay": "0.3s", "animationName": "fadeInRight" }}>
                                <img className="img-fluid" src="/img/about/about1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FETURES CONTENT END -->    */}
        </>
    )
}
