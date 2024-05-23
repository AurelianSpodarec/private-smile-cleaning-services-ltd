import React from 'react'
import { Link } from 'gatsby'

export default function Slider3() {
    return (
        <>
            {/* <!-- === SLIDER AREA START === --> */}
            <div className="app_slider app_slider_3 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8  col-md-8 ">
                            <div className="app_sliderContent slider3">
                                <div className="shapeesright d-none d-sm-block">
                                    <img className="shape4" src="/img/shape/shape4.png" alt="" />
                                    <img className="shape5" src="/img/shape/shape5.png" alt="" />
                                    <img className="shape6" src="/img/shape/shape6.png" alt="" />
                                    <img className="shape7" src="/img/shape/shape7.png" alt="" />
                                    <img className="shape8" src="/img/shape/shape8.png" alt="" />
                                    <img className="shape9" src="/img/shape/shape9.png" alt="" />
                                    <img className="shape11" src="/img/shape/shape5.png" alt="" />
                                </div>
                                <h2 className="hero-two-title">Creative Appz Landing<br /> in the market.</h2>
                                <p>Charles tosser quaint twit bamboozled burke brown bread I naff I <br />don&#39;t want no agro
                                    say blimey.!!</p>
                                <div className="slider-btn">
                                    <Link href="/contact"><a className="btn-outline btn-outline3">Free Trail</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 d-none d-lg-none d-xl-block p-custom-rel">
                            <div className="slider3_main_image">
                                <img src="/img/home_3_shapes/vevtorobject.png" alt="slider_main_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === SLIDER AREA END === -->   */}
        </>
    )
}
