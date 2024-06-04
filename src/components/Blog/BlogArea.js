import React from "react"
import { Link, graphql } from "gatsby"

// DO NOT USE! check ./blog-posts.js
export default function BlogArea() {
  // console.log("BlogArea data:", data) // Verifica los datos en la consola

  return (
    <>
      {/* <!-- BLOG AREA START --> */}
      <div className="BLOG mb-150 mt-100">
        <div className="section_title_wrapper mb-60 text-center">
          <h2 className="section-title team_title_h3">
            About Our Team Member We have <br /> Powerful User Experience.
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {/* <!-- FOR LOOP FROM POSTS --> */}
            {/* <BlogEntry  data={data} pageContext={pageContext}/> */}
            {/* <!-- END LOOP --> */}
          </div>
          <div className="paginati">
            <ul>
              <li>
                <Link to="/blog">1</Link>
              </li>
              <li>
                <Link to="/blog">2</Link>
              </li>
              <li>
                <Link to="/blog">3</Link>
              </li>
              <li>
                <Link to="/blog">&#62;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- BLOG AREA END --> */}
    </>
  )
}