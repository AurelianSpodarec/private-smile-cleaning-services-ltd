import React from 'react'

export default function StaticContentTitle({ title }) {
    return (
        <>
            {/* <!-- page title start  --> */}
            <section className="fix text-center" >
            
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="page__title-content pt-235">
                        <h2 className="page_title" style={{color: "#eca869"}}>{title}</h2>
                     </div>
                  </div>
               </div>
            </div>
            </section>

            {/* <!-- page title end  --> */}
        </>
    )
}