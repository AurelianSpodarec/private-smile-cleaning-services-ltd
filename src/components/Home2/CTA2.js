import React from 'react'
import { Link } from 'gatsby'

export default function CTA2() {
    return (
        <>
            {/* <!-- === HOME-2 CTA AREA START  === --> */}
            <div className="cta_area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="cta">
                                <h2 className="sub-title">Stunning Design,<br /> Powerful User Experience.</h2>
                                <p>Horse play argy-bargy me old mucker boot bog show off show off pick<br /> your nose and blow off sloshed my lady blow off mush cack, cras buggered say.</p>
                                <div className="cta__freeBtn">
                                    <Link href="/contact"><a className="cta_btn_2">Free Trail </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === HOME-2 CTA AREA END  === -->   */}
        </>
    )
}
