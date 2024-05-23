import React from 'react'

export default function AboutFeatures() {
    return (
        <>
            {/* <!-- FETURES START --> */}
            <div className="homefeture_1 pt-115 pb-90">
                <div className="container">
                    <div className="app_left_shape">
                        <img className="leftanimation" src="/img/shape/left.png" alt="leftshape" />
                        <img src="/img/shape/shape7.png" alt="leftshape" />
                    </div>
                    <div className="App_title text-center wow fadeInUp mb-70" data-wow-delay="0.3s" style={{ "visibility": "visible", "animationDelay": "0.3s", "animationName": "fadeInUp" }}>
                        <h2 className="section-title">Shine the new<br /> light on the digital world</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="feabox mb-30">
                                <div className="feabox__img mb-50">
                                    <img src="/img/fetures/Forma1.png" alt="form1" />
                                </div>
                                <div className="feabox__content">
                                    <h3 className="feabox-title tcolor0">Premium Plugins</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="feabox clr1 mb-30">
                                <div className="feabox__img img1 mb-50">
                                    <img src="/img/fetures/Forma2.png" alt="form2" />
                                </div>
                                <div className="feabox__content">
                                    <h3 className="feabox-title tcolor1">Premium Plugins</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="feabox clr2 mb-30">
                                <div className="feabox__img img2 mb-50">
                                    <img src="/img/fetures/Forma3.png" alt="form3" />
                                </div>
                                <div className="feabox__content">
                                    <h3 className="feabox-title tcolor2">Premium Plugins</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="feabox clr3 mb-30">
                                <div className="feabox__img img3 mb-50">
                                    <img src="/img/fetures/Forma4.png" alt="form4" />
                                </div>
                                <div className="feabox__content">
                                    <h3 className="feabox-title tcolor3">Premium Plugins</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FETURES END -->   */}
        </>
    )
}
