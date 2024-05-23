import React from 'react'
import { Link } from 'gatsby'

export default function Features2() {
    return (
        <>
            {/* <!-- === HOME-2 FETURES AREA START === --> */}
            <div className="fetures2 pt-115 pb-90">
                <div className="container">
                    <div className="section_title_wrapper mb-60 text-center fetures2">
                        <h2 className="section-title">Make Cool Landing Pages with Appz.</h2>
                        <p>We take great pride in the quality of our content. Our writers create original content<br/> that is free of ethical concerns.Wellies bender.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="featurebox2 mb-30  wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="featurebox2__img">
                                    <img src="/img/fetures/s3.png" alt="" />
                                </div>
                                <div className="featurebox2__content">
                                    <h3 className="fea-title">Security</h3>
                                    <p>The little rotter bevvy I gormless <br/> mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="featurebox2 mb-30  wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="featurebox2__img gradientorange">
                                    <img src="/img/fetures/s2.png" alt="" />
                                </div>
                                <div className="featurebox2__content">
                                    <h3 className="fea-title">Database</h3>
                                    <p>The little rotter bevvy I gormless <br/> mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="featurebox2 mb-30  wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="featurebox2__img gradientbrwon">
                                    <img src="/img/fetures/s1.png" alt="" />
                                </div>
                                <div className="featurebox2__content">
                                    <h3 className="fea-title">Pricing Range</h3>
                                    <p>The little rotter bevvy I gormless <br/> mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="featurebox2 mb-30  wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <div className="featurebox2__img gradientgreen">
                                    <img src="/img/fetures/s4.png" alt="" />
                                </div>
                                <div className="featurebox2__content">
                                    <h3 className="fea-title">Risk Protectable</h3>
                                    <p>The little rotter bevvy I gormless <br/> mush golly gosh cras.</p>
                                    <Link href="/service"><a className="fea-link">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === HOME-2 FETURES AREA END === --> */}

        </>
    )
}
