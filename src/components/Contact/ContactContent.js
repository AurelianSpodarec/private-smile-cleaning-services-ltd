import React from 'react'

export default function ContactContent() {
    return (
        <>
            {/* <!-- contact form Start  --> */}
            <div className="contact__wrapper mt-115 mb-190">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact__info">
                                <h4 className="info_title">Office Address</h4>
                                <p>99, Kazi Nazrul Islam Avenue <br/> (Dhaka Trade Centre - 5th Floor) <br/>Kawran Bazar, Dhaka-1215.</p>
                                </div>
                                <div className="contact__form pt-70 pb-50">
                                <h4>Contact Info</h4>
                                <ul>
                                <li>Phone: (+012) 86874973</li>
                                <li>Fax: (+012) 86874973</li>
                                <li>Email: Ctloffice @gmail.com</li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="post-comment-form contact-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6">
                                                <div className="post-input contact-form">
                                                    <input type="text" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="post-input contact-form">
                                                    <input type="email" placeholder="Your Email"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="post-input contact-form">
                                                    <input type="text" placeholder="subject" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="post-input contact-form">
                                                    <textarea placeholder="Your Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="post-check mb-40">
                                                    <button type="submit" className="btn btn-comment">SEND MESSAGE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- contact form End  --> */}

                

            </>
            )
}
