import React from 'react'
import { Link } from 'gatsby'

export default function Blog3() {
    return (
        <>
         {/* <!-- BLOG AREA START --> */}
        <div className="blog3">
            <div className="blog_shape_h3 d-none d-sm-block">
                <img className="blogshape3" src="/img/shape/shape1.png" alt="blog_shape" />
            </div>
            <div className="container">
                <div className="section_title_wrapper mb-60 text-center">
                    <h2 className="section-title team_title_h3">About Our Team Member We have <br/> Powerful User Experience.
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="blog">
                            <div className="blog__image">
                                <img src="/img/Blog/blog1.png" alt="blogImage" />
                            </div>
                            <div className="blog__meta">
                                <span>November 26, 2020</span>
                                <h3>The End of the Bonus Culture Is Coming to Wall Street</h3>
                                <Link href="/service"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="blog">
                            <div className="blog__image">
                                <img src="/img/Blog/blog2.png" alt="blogImage" />
                            </div>
                            <div className="blog__meta">
                                <span>November 26, 2020</span>
                                <h3>What to Expect From the 2020 Oscar Nominations</h3>
                                <Link href="/service"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="blog">
                            <div className="blog__image">
                                <img src="/img/Blog/blog3.png" alt="blogImage" />
                            </div>
                            <div className="blog__meta">
                                <span>November 26, 2020</span>
                                <h3>China State Firm’s $6 Billion Is Loss Among Nation’s.</h3>
                                <Link href="/service"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- BLOG AREA END -->    */}
        </>
    )
}
