import React from 'react'
import { Link } from 'gatsby'

export default function Slider2() {
    return (
        <>
            {/* <!-- === SLIDER AREA START === --> */}
            <div className="slider_2" style={{ "backgroundImage": "url(/img/home-2_shapes/home2bg.png)" }}>
                <div className="slider_2_shapes">
                    <img className="h2_shape4" src="/img/home-2_shapes/home_2_shape4.png" alt="" />
                    <img className="h2_sh_1 d-none d-sm-block" src="/img/home-2_shapes/borderShape.png" alt="" />
                    <img className="h2_sh_2 d-none d-sm-block" src="/img/home-2_shapes/home2shape2.png" alt="" />
                    <img className="h2_sh_3 d-none d-sm-block" src="/img/home-2_shapes/h2shap3.png" alt="" />
                    <img className="h2_sh_4 d-none d-sm-block" src="/img/home-2_shapes/h2shape2.png" alt="" />
                    <img className="h2_sh_5 d-none d-sm-block" src="/img/home-2_shapes/home_2_shape.png" alt="" />
                    <img className="h2_sh_6 d-none d-sm-block" src="/img/home-2_shapes/home_2_shape7.png" alt="" />
                    <img className="h2_sh_7 d-none d-sm-block" src="/img/home-2_shapes/border2shape.png" alt="" />
                    <img className="h2_sh_8 d-none d-sm-block" src="/img/home-2_shapes/" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="slider_2__content">
                                <h2 className="home2_title hero-title">Get things done with this beautiful app.</h2>
                                <p>Charles tosser quaint twit bamboozled burke brown bread I naff I <br />don&#39;t want no agro say blimey.!!</p>
                                <Link href="/contact"><a className="tp_white_border" >Free Trail</a></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="slider_2_image">
                                <div className="home2_shapes">
                                    <img className="h2_love" src="/img/home-2_shapes/loveshape.png" alt="loveShape" />
                                </div>
                                <img className="H2_iphonex d-sm-none d-md-block d-none d-sm-block" src="/img/home-2_shapes/home_2_shape8.png" alt="iphoneX" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === SLIDER AREA END === --> */}

        </>
    )
}
