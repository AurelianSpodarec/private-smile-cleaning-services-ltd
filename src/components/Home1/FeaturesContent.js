import React from 'react'
import { Link } from 'gatsby'

export default function FeaturesContent() {
    return (
        <>
        {/* <!-- FETURES CONTENT START --> */}
        <div className="homefeture_2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="features pt-105 wow fadeInLeft" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInLeft"}}>
                            <div className="features__content mb-30">
                                <h2 className="section-title">Revitalise Your Space, <br/> Premier Cleaning Services for Discerning Clients.
                                </h2>
                                <p>You mug dropped a clanger barmy David brown <br/>bread bleeding crikey say chimney pot
                                    me old <br/>mucker bugger super.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="app-image wow fadeInRight" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.3s","animationName":"fadeInRight"}}>
                            <img src="/img/about/about1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FETURES CONTENT END --> */}
        {/* <!-- FETURES CONTENT 2nd Part START --> */}
        <div className="app_image pt-150 pb-140">
            <div className="container">
                {/*
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="app-image wow fadeInUp" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInUp"}}>
                            <img src="/img/about/about2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="features pt-80 feturesCommon wow fadeInUp" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInUp"}}>
                            <div className="features__icon bgclr">
                                <img src="/img/fetures/leftIcon2.png" alt="" />
                            </div>
                            <div className="features__content">
                                <h2 className="section-title">Features that aren’t so commonplace.</h2>
                                <p>You mug dropped a clanger barmy David brown <br/>bread bleeding crikey say chimney pot
                                    me old <br/>mucker bugger super.</p>
                                <Link href="/service"><a>Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </div>
        {/* <!-- FETURES CONTENT START 2nd Part --> */}
            
        </>
    )
}
