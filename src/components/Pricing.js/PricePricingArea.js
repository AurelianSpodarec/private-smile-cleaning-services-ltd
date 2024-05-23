import React from 'react'
import { Link } from 'gatsby'

export default function PricePricingArea() {
    return (
        <>
            {/* <!-- pricing area start  --> */}
            <div className="pricing-area pt-105 pb-110 position-relative">
                <div className="pricing_shapes">
                    <img className="position-absolute price-1" src="/img/shape/left.png" alt="pricing_shapes" />
                    <img className="position-absolute price-2" src="/img/shape/shape7.png" alt="pricing_shapes" />
                    <img className="position-absolute price-3" src="/img/shape/shape2.png" alt="pricing_shapes" />
                </div>
                <div className="container">
                    <div className="section_title_wrapper text-center pb-50">
                        <h2 className="section-title pricing_title">Choose the offering that <br/>works best for you.</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" >
                            <div className="pricing mb-30">
                                <div className="pricing__header">
                                    <h4>Basic Package</h4>
                                    <h2><span>$</span>202</h2>
                                    <span>Monthly</span>
                                </div>
                                <div className="pricing__content">
                                    <ul>
                                        <li><i className="far fa-check"></i>Web Research & Analysis</li>
                                        <li><i className="far fa-check"></i>25 Analytics Campaign</li>
                                        <li><i className="far fa-check"></i>Content Optimization</li>
                                        <li><i className="far fa-check"></i>24/7 Online Support</li>
                                        <li><i className="far fa-check"></i>Free Marketing Tutorials</li>
                                    </ul>
                                </div>
                                <div className="pricing__footer">
                                    <Link href="/contact"><a>Choose Plan</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="pricing design1 mb-30">
                                <div className="pricing__header orange">
                                    <h4>Standard Package</h4>
                                    <h2><span>$</span>404</h2>
                                    <span>Monthly</span>
                                </div>
                                <div className="pricing__content">
                                    <ul>
                                        <li><i className="far fa-check"></i>Web Research & Analysis</li>
                                        <li><i className="far fa-check"></i>25 Analytics Campaign</li>
                                        <li><i className="far fa-check"></i>Content Optimization</li>
                                        <li><i className="far fa-check"></i>24/7 Online Support</li>
                                        <li><i className="far fa-check"></i>Free Marketing Tutorials</li>
                                    </ul>
                                </div>
                                <div className="pricing__footer">
                                    <Link href="/contact"><a>Choose Plan</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="pricing design2 mb-30">
                                <div className="pricing__header lightcolor">
                                    <h4>Advance Package</h4>
                                    <h2><span>$</span>909</h2>
                                    <span>Monthly</span>
                                </div>
                                <div className="pricing__content">
                                    <ul>
                                        <li><i className="far fa-check"></i>Web Research & Analysis</li>
                                        <li><i className="far fa-check"></i>25 Analytics Campaign</li>
                                        <li><i className="far fa-check"></i>Content Optimization</li>
                                        <li><i className="far fa-check"></i>24/7 Online Support</li>
                                        <li><i className="far fa-check"></i>Free Marketing Tutorials</li>
                                    </ul>
                                </div>
                                <div className="pricing__footer">
                                    <Link href="/contact"><a>Choose Plan</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- pricing area end -->    */}
        </>
    )
}
