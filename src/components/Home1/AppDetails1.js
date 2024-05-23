import React from 'react'

export default function AppDetails1() {
    return (
        <>
        {/* <!-- APP DETAILS START --> */}
        
        <div className="app_details pt-120 pb-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 col-md-12">
                        <div className="details_content  pb-70">
                            <h2 className="section-title section_title_large">A new way to manage your cleaning services.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3">
                                    <div className="feature3__image">
                                        <i class="far fa-phone-laptop" style={{bottom:'10px', position: 'relative'}}></i>
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">Mobile & Tablet friendly website</h4>
                                        <p>The little rotter bevvy I gormless <br/> mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 pl-40">
                                    <div className="feature3__image febg1">
                                    <i class="far fa-calendar-check" style={{bottom:'10px', position: 'relative'}}></i>
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">Manage bookings anywhere</h4>
                                        <p>The little rotter bevvy I gormless <br/> mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3">
                                    <div className="feature3__image febg2">
                                        <i class="far fa-smile" style={{bottom:'10px', position: 'relative'}}></i>
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">Smiles Guaranteed</h4>
                                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 pl-40">
                                    <div className="feature3__image febg3">
                                        <i class="far fa-sack-dollar" style={{bottom:'10px', position: 'relative'}}></i>
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">Low Risk, High Satisfaction</h4>
                                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-5 col-lg-6 col-lg-6 col-md-12 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block">
                        <div className="details_image wow zoomIn" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"zoomIn"}}>
                            <img src="/img/fetures/mockup.png" alt="blogshape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- APP DETAILS END --> */}
            
        </>
    )
}
