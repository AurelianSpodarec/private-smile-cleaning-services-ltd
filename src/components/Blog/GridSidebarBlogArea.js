import React from 'react'
import { Link } from 'gatsby'

export default function GridSidebarBlogArea() {
    return (
        <>
            {/* <!-- blog grid area start  --> */}
            <div className="blog-classic mt-80 mb-150">
                <div className="container">
                    <div className="blog-wrapper">
                        <div className="row">
                            <div className="col-xxl-8">
                                <div className="blog-box mb-60">
                                    <div className="blog-left d-none d-sm-block">
                                        <div className="blog_date">
                                            <h4>12</h4>
                                            <span>Nov</span>
                                        </div>
                                        <div className="blog_links">
                                            <h4>Links :</h4>
                                            <ul>
                                                <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                                <li><Link href="#"><a><i className="fab fa-vimeo-v"></i></a></Link></li>
                                                <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-right">
                                        <div className="main_blog">
                                            <div className="blog_image_classic">
                                                <img src="/img/Blog/bloglarge.png" alt="blog_image" />
                                                <div className="blog_meta">
                                                    <Link href="#"><a><i className="fad fa-comments"></i>4 Comments</a></Link>
                                                    <Link href="#"><a><i className="far fa-pen"></i>Business & Marketing</a></Link>
                                                </div>
                                                <div className="blog_classic_content">
                                                    <h3><Link href="/singleblog"><a>The End of the Bonus Culture Is Coming <br /> to Wall
                                                        Street</a></Link></h3>
                                                    <p>Appzz is a Web Landing Page Template. Its is fully responsive and User
                                                        friendly app showcase HTML template. Appz This template is highly
                                                        suitable App Landing Page is better way to present your app or product.
                                                    </p>
                                                    <Link href="/singleblog"><a>Read More<i className="fal fa-arrow-right"></i></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="client_qoute">
                                            <p>The End of the Bonus Culture Is Coming to Wall Street What to <br /> Expect From
                                                the 2020 Oscar.</p>
                                            <span>Will Barrow</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-box mb-60">
                                    <div className="blog-left d-none d-sm-block">
                                        <div className="blog_date">
                                            <h4>12</h4>
                                            <span>Nov</span>
                                        </div>
                                        <div className="blog_links">
                                            <h4>Links :</h4>
                                            <ul>
                                                <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                                <li><Link href="#"><a><i className="fab fa-vimeo-v"></i></a></Link></li>
                                                <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-right">
                                        <div className="main_blog">
                                            <div className="blog_image_classic">
                                                <img src="/img/Blog/bloglarge.png" alt="blog_image" />
                                                <div className="blog_meta">
                                                    <Link href="#"><a><i className="fad fa-comments"></i>4 Comments</a></Link>
                                                    <Link href="#"><a><i className="far fa-pen"></i>Business & Marketing</a></Link>
                                                </div>
                                                <div className="blog_classic_content">
                                                    <h3><Link href="/singleblog"><a>The End of the Bonus Culture Is Coming <br /> to Wall
                                                        Street</a></Link></h3>
                                                    <p>Appzz is a Web Landing Page Template. Its is fully responsive and User
                                                        friendly app showcase HTML template. Appz This template is highly
                                                        suitable App Landing Page is better way to present your app or product.
                                                    </p>
                                                    <Link href="/singleblog"><a>Read More<i className="fal fa-arrow-right"></i></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="client_qoute">
                                            <p>The End of the Bonus Culture Is Coming to Wall Street What to <br /> Expect From
                                                the 2020 Oscar.</p>
                                            <span>Will Barrow</span>
                                        </div>
                                        <div className="paginati classic_pagination">
                                            <ul>
                                                <li><Link href="#"><a>1</a></Link></li>
                                                <li><Link href="#"><a>2</a></Link></li>
                                                <li><Link href="#"><a>3</a></Link></li>
                                                <li><Link href="#"><a>&#62;</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4">
                                {/* <!-- sidebar Start --> */}
                                <div className="sidebar">
                                    <div className="others_info pl-20">
                                        <div className="search_box mb-10">
                                            <input type="search" name="search" placeholder="Search" />
                                            <i className="fad fa-search"></i>
                                        </div>
                                        <div className="category_widget">
                                            <h4 className="cate_title">Categories</h4>
                                            <ul>
                                                <li><Link href="#"><a>Project Management (06)</a></Link></li>
                                                <li><Link href="#"><a>Consulting (04)</a></Link></li>
                                                <li><Link href="#"><a>Finacial News (09)</a></Link></li>
                                                <li><Link href="#"><a>Ideas &amp; Strategies (07)</a></Link></li>
                                                <li><Link href="#"><a>News (22)</a></Link></li>
                                                <li><Link href="#"><a>Trending (51)</a></Link></li>
                                            </ul>
                                        </div>
                                        <div className="post_widget">
                                            <h4 className="cate_title">Recent Post</h4>
                                            <div className="post d-flex align-items-center">
                                                <div className="post__thumb">
                                                    <img src="/img/Blog/r1.png" alt="thumb_image" />
                                                </div>
                                                <div className="post__content pl-15">
                                                    <h6>November 26, 2020</h6>
                                                    <h4>Building a New Successful<br /> Hostel Campaign</h4>
                                                </div>
                                            </div>
                                            <div className="post d-flex align-items-center">
                                                <div className="post__thumb">
                                                    <img src="/img/Blog/r2.png" alt="thumb_image" />
                                                </div>
                                                <div className="post__content pl-15">
                                                    <h6>November 26, 2020</h6>
                                                    <h4>Building a New Successful<br /> Hostel Campaign</h4>
                                                </div>
                                            </div>
                                            <div className="post d-flex align-items-center">
                                                <div className="post__thumb">
                                                    <img src="/img/Blog/r3.png" alt="thumb_image" />
                                                </div>
                                                <div className="post__content pl-15">
                                                    <h6>November 26, 2020</h6>
                                                    <h4>Building a New Successful<br /> Hostel Campaign</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="others_info pl-20">
                                            <div className="category_widget">
                                                <h4 className="cate_title">Recent Comments</h4>
                                            </div>
                                            <div className="post_widget">
                                                <div className="post d-flex align-items-center">
                                                    <div className="post__thumb">
                                                        <Link href="#"><a><i className="fad fa-comments"></i></a></Link>
                                                    </div>
                                                    <div className="post__content pl-15">
                                                        <h6>Natalya</h6>
                                                        <h4>on How to Win The Attention of<br /> New Clients: Tips & Tricks</h4>
                                                    </div>
                                                </div>
                                                <div className="post d-flex align-items-center">
                                                    <div className="post__thumb">
                                                        <Link href="#"><a><i className="fad fa-comments"></i></a></Link>
                                                    </div>
                                                    <div className="post__content pl-15">
                                                        <h6>Natalya</h6>
                                                        <h4>on How to Win The Attention of<br /> New Clients: Tips & Tricks</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="others_info pl-20">
                                            <div className="category_widget">
                                                <h4 className="cate_title">Tags</h4>
                                            </div>
                                            <div className="Tag_widget">
                                                <div className="tag">
                                                    <Link href="#"><a>UI/Ux</a></Link>
                                                    <Link href="#"><a>Web Template</a></Link>
                                                    <Link href="#"><a>Design</a></Link>
                                                    <Link href="#"><a>Landing Page</a></Link>
                                                    <Link href="#"><a>Update</a></Link>
                                                    <Link href="#"><a>Web Template</a></Link>
                                                </div>
                                            </div>
                                            <div className="instagram_feeds mb-60">
                                                <h4 className="cate_title">Instagram</h4>
                                                <img src="/img/instagram/i1.png" alt="instagram feeds" />
                                                <img src="/img/instagram/i2.png" alt="instagram feeds" />
                                                <img src="/img/instagram/i3.png" alt="instagram feeds" />
                                                <img src="/img/instagram/i4.png" alt="instagram feeds" />
                                                <img src="/img/instagram/i5.png" alt="instagram feeds" />
                                                <img src="/img/instagram/i6.png" alt="instagram feeds" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- sidebar End --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
