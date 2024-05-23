import React from 'react'

export default function AppDetails3() {
    return (
        <>
          {/* <!-- APP DETAILS START --> */}
        <div className="app_details pb-100 pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="details_content  pb-70">
                            <h2 className="section-title section-title-large">A new way to manage your work, tasks and
                                projects.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 mb-50">
                                    <div className="feature3__image bgwhite">
                                        <img className="pb-30" src="/img/fetures/f1.png" alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title content-title-three">Security Maintenance</h4>
                                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 mb-50 pl-40">
                                    <div className="feature3__image febg1 bgwhite">
                                        <img className="pb-30" src="/img/fetures/f2.png" alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title content-title-three">Backup Database</h4>
                                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 mb-50">
                                    <div className="feature3__image febg2 bgwhite">
                                        <img className="pb-30" src="/img/fetures/maintenance.png" alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title content-title-three">Server Maintenance</h4>
                                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 mb-50 pl-40">
                                    <div className="feature3__image febg3 bgwhite">
                                        <img className="pb-30" src="/img/fetures/f4.png" alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title content-title-three">No Risk Protectable</h4>
                                        <p>The little rotter bevvy I gormless mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-lg-6 col-lg-6 col-md-12 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block">
                        <div className="details_image wow zoomIn" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"zoomIn"}}>
                            <img src="/img/fetures/mockup.png" alt="blogshape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- APP DETAILS END -->   */}
        </>
    )
}
