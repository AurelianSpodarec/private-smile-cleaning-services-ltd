import React from 'react'
import { Link } from 'gatsby'

export default function Features3() {
    return (
        <>
          {/* <!-- === HOME-3 FETURES AREA START === --> */}
        <div className="fetures2 fetures3 pt-115 pb-120">
            <div className="fetures_shape_h3 d-none d-sm-block">
                <img className="shape_1_h3 posabsouluteh3" src="/img/shape/shape9.png" alt="shape" />
                <img className="shape_2_h3 posabsouluteh3" src="/img/shape/shape7.png" alt="shape" />
                <img className="shape_3_h3 posabsouluteh3" src="/img/shape/shape5.png" alt="shape" />
                <img className="shape_4_h3 posabsouluteh3" src="/img/shape/shape6.png" alt="shape" />
            </div>
            <div className="container">
                <div className="section_title_wrapper mb-60 text-center pt-80">
                    <h2 className="section-title">About Security Features Stunning <br/> Design,Powerful User Experience.
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4  col-md-6 ">
                        <div className="featurebox2 featurebox3 mb-30">
                            <div className="featurebox__img">
                                <img src="/img/home_3_shapes/color-balance.png" alt="" />
                            </div>
                            <div className="featurebox2__content">
                                <h3 className="fea-title">Database Management</h3>
                                <p className="text-start">The little rotter bevvy mush cras<br/> gormless I lost the plot
                                    bender<br/> wind.</p>
                                <Link href="/service"><a className="fea-link fea_link3 ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4  col-md-6 ">
                        <div className="featurebox2 featurebox3 mb-30">
                            <div className="featurebox__img">
                                <img src="/img/home_3_shapes/layers.png" alt="" />
                            </div>
                            <div className="featurebox2__content">
                                <h3 className="fea-title">Database Management</h3>
                                <p className="text-start">The little rotter bevvy mush cras<br/> gormless I lost the plot
                                    bender<br/> wind.</p>
                                <Link href="/service"><a className="fea-link fea_link3 ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4  col-md-6 ">
                        <div className="featurebox2 featurebox3 mb-30">
                            <div className="featurebox__img">
                                <img src="/img/home_3_shapes/aloe-vera.png" alt="" />
                            </div>
                            <div className="featurebox2__content">
                                <h3 className="fea-title">Database Management</h3>
                                <p className="text-start">The little rotter bevvy mush cras<br/> gormless I lost the plot
                                    bender<br/> wind.</p>
                                <Link href="/service"><a className="fea-link fea_link3 ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- === HOME-3 FETURES AREA END === -->   */}
        </>
    )
}
