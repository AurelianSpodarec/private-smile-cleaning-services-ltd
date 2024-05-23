import React from 'react'
import { Link } from 'gatsby'

export default function BlogArea() {
    return (
        <>
            {/* <!-- BLOG AREA START --> */}
            <div className="BLOG mb-150 mt-100">
                <div className="section_title_wrapper mb-60 text-center">
                    <h2 className="section-title team_title_h3">About Our Team Member We have <br /> Powerful User Experience.</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="blog">
                                <div className="blog__image">
                                    <img src="/img/Blog/blog1.png" alt="blogImage" />
                                </div>
                                <div className="blog__meta">
                                    <span>November 26, 2021</span>
                                    <h3>The End of the Bonus Culture Is Coming to Wall Street</h3>
                                    <Link href="/singleblog"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="blog">
                                <div className="blog__image">
                                    <img src="/img/Blog/blog2.png" alt="blogImage" />
                                </div>
                                <div className="blog__meta">
                                    <span>November 26, 2020</span>
                                    <h3>What to Expect From the 2020 Oscar Nominations</h3>
                                    <Link href="/singleblog"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="blog">
                                <div className="blog__image">
                                    <img src="/img/Blog/blog3.png" alt="blogImage" />
                                </div>
                                <div className="blog__meta">
                                    <span>November 26, 2020</span>
                                    <h3>China State Firm’s $6 Billion Is Loss  Among Nation’s.</h3>
                                    <Link href="/singleblog"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="blog">
                                <div className="blog__image">
                                    <img src="/img/Blog/blog4.png" alt="blogImage" />
                                </div>
                                <div className="blog__meta">
                                    <span>November 26, 2020</span>
                                    <h3>A brand for a company is like a reputation person.</h3>
                                    <Link href="/singleblog"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="blog">
                                <div className="blog__image">
                                    <img src="/img/Blog/blog5.png" alt="blogImage" />
                                </div>
                                <div className="blog__meta">
                                    <span>November 26, 2020</span>
                                    <h3>10 days quick challange for boost your online visitors.</h3>
                                    <Link href="/singleblog"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="blog">
                                <div className="blog__image">
                                    <img src="/img/Blog/blog6.png" alt="blogImage" />
                                </div>
                                <div className="blog__meta">
                                    <span>November 26, 2020</span>
                                    <h3>The Belgian Exodus of World War One.</h3>
                                    <Link href="/singleblog"><a className="fea-link blog_link ">Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paginati">
                        <ul>
                            <li><Link href="#"><a>1</a></Link></li>
                            <li><Link href="#"><a>2</a></Link></li>
                            <li><Link href="#"><a>3</a></Link></li>
                            <li><Link href="#"><a>&#62;</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- BLOG AREA END -->    */}
        </>
    )
}
