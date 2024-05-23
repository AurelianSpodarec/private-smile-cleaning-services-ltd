import React from 'react'
import { Link } from 'gatsby'

export default function Download3() {
    return (
        <>
         {/* <!-- DOWNLOAD START  --> */}
        <div className="download-area pt-50 mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 d-sm-none d-md-block">
                        <div className="download_image">
                            <img className="dw d-none d-sm-block" src="/img/shape/iphon2.png" alt="download_shape" />
                            <img className="downloadpos  d-md-none d-lg-block float-bob d-none d-sm-block"
                                src="/img/shape/iphone3.png" alt="download_shape" />
                            <img className="downloadpos2 d-md-none d-lg-block d-none d-sm-block"
                                src="/img/shape/circle.png" alt="download_shape" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                        <div className="download_content pl-105 pt-90">
                            <h2 className="download_title">Download Your Amazing App Available Now.</h2>
                            <p>Horse play argy-bargy me old mucker boot bog show off show off pick your nose and blow
                                off cack, cras buggered say.</p>
                            <div className="download-btn">
                                <Link href="#"><a className="tp_download"><i className="fab fa-apple"></i></a></Link>
                                <Link href="#"><a className="bg-android"><i className="fal fa-user-robot"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- DOWNLOAD END  -->    */}
        </>
    )
}
