import React from 'react'
import { Link } from 'gatsby'

export default function SocialShare3() {
    return (
        <>
         {/* <!-- SOCIAL SHARE START  --> */}
        <div className="social_share mb-100">
            <div className="container">
                <div className="section_title_wrapper mb-80 text-center mt-115">
                    <h2 className="section-title mb-20">Shine the new<br/>light on the digital world</h2>
                    <p className="social_sub text-center">Charles tosser quaint twit bamboozled burke brown bread I naff I <br/>don&#39;t
                        want no agro say blimey.!!</p>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="share align-items-center mb-30">
                            <div className="share__icon">
                                <img src="/img/social/slack.png" alt="shareIcon" />
                            </div>
                            <div className="share__content">
                                <h4>Slack</h4>
                                <span>Messanger</span>
                            </div>
                            <div className="share__more text-end">
                                <Link href="#"><a><i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="share align-items-center mb-30">
                            <div className="share__icon">
                                <img src="/img/social/twitter.png" alt="shareIcon" />
                            </div>
                            <div className="share__content">
                                <h4>Twitter</h4>
                                <span>Messanger</span>
                            </div>
                            <div className="share__more text-end">
                                <Link href="#"><a><i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="share align-items-center mb-30">
                            <div className="share__icon">
                                <img src="/img/social/google-drive.png" alt="shareIcon" />
                            </div>
                            <div className="share__content">
                                <h4>Drive</h4>
                                <span>Messanger</span>
                            </div>
                            <div className="share__more text-end">
                                <Link href="#"><a><i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="share align-items-center mb-30">
                            <div className="share__icon">
                                <img src="/img/social/behance.png" alt="shareIcon" />
                            </div>
                            <div className="share__content">
                                <h4>Behance</h4>
                                <span>Messanger</span>
                            </div>
                            <div className="share__more text-end">
                                <Link href="#"><a><i className="fal fa-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- SOCIAL SHARE END  -->    */}
        </>
    )
}
