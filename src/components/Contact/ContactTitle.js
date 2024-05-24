import React from 'react'
import { Link } from 'gatsby'

export default function ContactTitle() {
    return (
        <>
            {/* <!-- page title start  --> */}
            <section className="fix text-center" >
                <div className="slider__shape">
                    
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="page__title-content pt-200">
                                            <h2 className="page_title" style={{color: "#eca869"}}>Contact Us</h2>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><Link to="/">Home - Contact us</Link></li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- page title end  --> */}
                    </>
                    )
}
