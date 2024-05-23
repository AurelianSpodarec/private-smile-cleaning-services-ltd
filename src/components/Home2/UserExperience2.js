import React from 'react'
import { Link } from 'gatsby'

export default function UserExperience2() {
    return (
        <>
            {/* <!-- === HOME-2 USER EXPERIENCE AREA START  === --> */}
            <div className="experience_area">
                <div className="container">
                    <div className="section_title_wrapper text-center mb-70 mt-50">
                        <h2 className="section-title">About Security Features Stunning <br/> Design,Powerful User Experience.</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service">
                                <div className="service__icon">
                                    <img src="/img/service/s1.png" alt="service_image" />
                                </div>
                                <div className="service__content">
                                    <h4>Maintenance</h4>
                                    <p>The little rotter bevvy I gormless <br/>mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service">
                                <div className="service__icon">
                                    <img src="/img/service/s2.png" alt="service_image" />
                                </div>
                                <div className="service__content">
                                    <h4>Database</h4>
                                    <p>The little rotter bevvy I gormless <br/>mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service">
                                <div className="service__icon">
                                    <img src="/img/service/s3.png" alt="service_image" />
                                </div>
                                <div className="service__content">
                                    <h4>Server</h4>
                                    <p>The little rotter bevvy I gormless <br/>mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service">
                                <div className="service__icon">
                                    <img src="/img/service/s4.png" alt="service_image" />
                                </div>
                                <div className="service__content">
                                    <h4>Cost Flexibility</h4>
                                    <p>The little rotter bevvy I gormless <br/>mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service">
                                <div className="service__icon">
                                    <img src="/img/service/s5.png" alt="service_image" />
                                </div>
                                <div className="service__content">
                                    <h4>Risk Protectable</h4>
                                    <p>The little rotter bevvy I gormless <br/>mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service">
                                <div className="service__icon">
                                    <img src="/img/service/s6.png" alt="service_image" />
                                </div>
                                <div className="service__content">
                                    <h4>Clients Feedback</h4>
                                    <p>The little rotter bevvy I gormless <br/>mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === HOME-2 USER EXPERIENCE AREA END  === --> */}

        </>
    )
}
