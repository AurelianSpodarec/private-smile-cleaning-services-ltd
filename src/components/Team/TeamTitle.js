import React from 'react'
import { Link } from 'gatsby'

export default function TeamTitle() {
    return (
        <>
            {/* <!-- page title start  --> */}
            <section className="page__title  fix text-center mb-50">
                <div className="slider__shape">
                    <img className="shape triangle" src="/img/aboutpage/topElips.png" alt="topshape" />
                    <img className="shape dotted-square" src="/img/aboutpage/rightElips.png" alt="rightshape" />
                    <img className="shape solid-square" src="/img/aboutpage/circleElips.png" alt="solid-square" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-content pt-235">
                                <h2 className="page_title">Our Team . Member</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/"><a>Home - Team</a></Link></li>
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
