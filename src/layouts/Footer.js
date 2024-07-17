import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
        wpMediaItem(title: {eq:"smile_logo_original"}) {
        localFile {
                childImageSharp {
                    fixed(width: 123, height: 49) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            altText
        }
    }
    `);

    return (
        <>
        {/* <!-- FOOTER START --> */}
        <div className={`footer-area`}>
          <div className="container pt-50">
            <div className="row d-sm-flex">
              <div className="col-xl-8 col-lg-8 col-sm-12 ">
                <div className="footer_logo">
                  <Link to="/">
                    <Img
                      fixed={data.wpMediaItem.localFile.childImageSharp.fixed}
                      alt={data.wpMediaItem.altText}
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6 foot-area-2">
                <div className="link_heading">
                  <h3 className="link_heading">Company</h3>
                </div>
                <div className="links">
                  <ul>
                    <li><Link to="/"> About Us  </Link></li>
                    <li><Link to="/about"> Carrers </Link></li>
                    <li><Link to="/service"> Our Blog </Link></li>
                    <li><Link to="/blog"> Contact Us </Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6 foot-area-2">
                <div className="link_heading">
                  <h3 className="link_heading">Services</h3>
                </div>
                <div className="links">
                  <ul>
                    <li><Link to="/about">Residential Cleaning</Link></li>
                    <li><Link to="/about"> Commercial Cleaning </Link></li>
                    <li><Link to="/contact"> End-of-Tenancy Cleaning </Link></li>
                    <li><Link to="/about"> Ironing & Laundry </Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom pt-60 pb-15">
            <div className="container tp-border">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6"> {/*Here there was a col-md-6 / breakpoint 992 to 768*/}
                  <div className="copyright_text pt-20">
                    <span className="greyCS hide-on-mobile">@ 2024 All Copyright Reserved </span>
                    <span>  info@smile.cleaning</span>
                    <div className='social_links_footer'>
                      <Link to="#"> <i className="fab fa-twitter"></i> </Link>
                      <Link to="#"> <i className="fab fa-instagram"></i> </Link>
                      <Link to="#"> <i className="fab fa-facebook"></i> </Link>
                    </div>
                  </div>
                </div>
                <div className='tp-border-2'></div>
                 <div className="col-xl-6 col-lg-6"> {/*Here there was a col-md-6  */}
                  <div className="f-right pt-20">
                    <ul className="footer_links">
                      <li><Link to="/page/terms-of-use"> Terms Of Use </Link></li>
                      <li><Link to="/page/privacy-policy" className="itsupport">Privacy Policy</Link></li>
                      <li><Link to="/page/cookies-policy"> Cookies Policy </Link></li>
                      <li><Link to="/page/site-map"> Site Map</Link></li>
                    </ul>
                    <span className='greyCS display-min'>@ 2024 All Copyright Reserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FOOTER END --> */}
        </>
    )
}
