import React from 'react'
import { Link } from 'gatsby'

export default function BlogPageTitle() {
    return (
        <>
            {/* <!-- page title start  --> */}
            <section className="fix text-center">
                
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-content pt-235">
                                <h2 className="page_title" style={{color: "#eca869"}}>Our Blog </h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/"><a>Home - Grid</a></Link></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- page title end  -->    */}
        </>
    )
}
