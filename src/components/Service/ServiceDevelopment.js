import React, {useState} from 'react'

export default function ServiceDevelopment() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
        console.log("click");
    };
    return (
        <>
            {/* <!-- development-platform start  --> */}
            <div className="tab-area pt-180 mb-200">
                <div className="container">
                    <div className="section_title_wrapper mb-60">
                        <h2 className="section-title service-padding">Dedicated app <br />development platform</h2>
                        <p>We take great pride in the quality of our<br /> content. Our writers create original content that is free of ethical<br /> concerns.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="tab-menu">
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button className={activeIndex ===1 ? "nav-link active" :"nav-link"} onClick={() => handleOnClick(1)}><i className="fal fa-lightbulb"></i>Creative Ideas</button>
                                    <button className={activeIndex ===2 ? "nav-link active" :"nav-link"}  onClick={() => handleOnClick(2)}><i className="fal fa-key"></i>Innovative Ideas</button>
                                    <button className={activeIndex ===3 ? "nav-link active" :"nav-link"}  onClick={() => handleOnClick(3)}><i className="fal fa-lock-alt"></i>Secure Planing</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12 d-none d-lg-block">
                            <div className="tab-item pt-100">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="tab_contentt d-md-none d-lg-block">
                                            <img className="bigshape" src="/img/service-page/shapeBig.png" alt="shape" />
                                            <img className="mobilesmall" src="/img/service-page/mobileIcon.png" alt="shape" />
                                            <img className="mobilebig" src="/img/service-page/mobile2.png" alt="shape" />
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="tab2" role="tabpanel">
                                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="tab_contentt d-md-none d-lg-block">
                                                <img className="bigshape" src="/img/service-page/shapeBig.png" alt="shape" />
                                                <img className="mobilesmall" src="/img/service-page/mobileIcon.png" alt="shape" />
                                                <img className="mobilebig" src="/img/service-page/mobile2.png" alt="shape" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"} id="tab3" role="tabpanel" >
                                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="tab_contentt d-md-none d-lg-block">
                                                <img className="bigshape" src="/img/service-page/shapeBig.png" alt="shape" />
                                                <img className="mobilesmall" src="/img/service-page/mobileIcon.png" alt="shape" />
                                                <img className="mobilebig" src="/img/service-page/mobile2.png" alt="shape" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- APP DETAILS START --> */}
            <div className="app_details mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-lg-6 col-md-6 d-none d-sm-block">
                            <div className="details_image wow zoomIn leftImag pt-80 f-left" data-wow-delay=".3s" style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "zoomIn" }}>
                                <img src="/img/fetures/mockup.png" alt="blogshape" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 pl--50">
                            <div className="details_content pb-70 pt-120">
                                <h2 className="section-title">A new way to manage your work, tasks and projects.</h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="feature3">
                                        <div className="feature3__image">
                                            <img className="pb-30" src="/img/service/s7.png" alt="details" />
                                        </div>
                                        <div className="feature3__content">
                                            <h4 className="content_title">Security Maintenance</h4>
                                            <p>The little rotter bevvy I gormless  mush golly gosh cras.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="feature3">
                                        <div className="feature3__image febg1">
                                            <img className="pb-30" src="/img/fetures/s2.png" alt="details" />
                                        </div>
                                        <div className="feature3__content">
                                            <h4 className="content_title">Backup Database</h4>
                                            <p>The little rotter bevvy I gormless  mush golly gosh cras.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="feature3">
                                        <div className="feature3__image febg2">
                                            <img className="pb-30" src="/img/fetures/s3.png" alt="details" />
                                        </div>
                                        <div className="feature3__content">
                                            <h4 className="content_title">Server Maintenance</h4>
                                            <p>The little rotter bevvy I gormless  mush golly gosh cras.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="feature3">
                                        <div className="feature3__image febg3">
                                            <img className="pb-30" src="/img/fetures/s4.png" alt="details" />
                                        </div>
                                        <div className="feature3__content">
                                            <h4 className="content_title">No Risk Protectable</h4>
                                            <p>The little rotter bevvy I gormless  mush golly gosh cras.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- APP DETAILS END --> */}
            {/* <!-- development-platform end  --> */}
        </>
    )
}
