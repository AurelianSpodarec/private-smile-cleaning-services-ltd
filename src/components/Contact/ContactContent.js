import React from 'react'
import ContactForm from './ContactForm'

export default function ContactContent() {
    return (
        <>
            {/* <!-- contact form Start  --> */}
            <div className="contact__wrapper mb-190">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact__info">
                                </div>
                                <div className="contact__form pt-70 pb-50">
                                <h4>Contact Info</h4>
                                <ul>
                                <li>Email: info@smile.cleaning</li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="post-comment-form contact-form">
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- contact form End  --> */}

                

            </>
            )
}
