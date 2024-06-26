import React from 'react'

export default function StaticContent({ content }) {
    return (
        <>
        <div className="blog-classic mt-80">
            <div className="container">
                <div className="blog-wrapper">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                            <div className="blog-box mb-150 text-justify">
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}