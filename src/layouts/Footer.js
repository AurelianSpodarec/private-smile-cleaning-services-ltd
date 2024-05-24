import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Footer({className}) {
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
        <div className={`footer-area ${className}`}>
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-4">
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
              <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="footer_widget_design wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
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
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="footer_widget_design wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <div className="link_heading">
                    <h3 className="link_heading">Services</h3>
                  </div>
                  <div className="links">
                    <ul>
                      <li><Link to="/about"> Residential Cleaning </Link></li>
                      <li><Link to="/about"> Commercial Cleaning </Link></li>
                      <li><Link to="/contact"> End-of-Tenancy Cleaning </Link></li>
                      <li><Link to="/about"> Ironing & Laundry </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="footer_widget_design fixwidth wow  fadeInUp" data-wow-duration="2s"
                  data-wow-delay=".2s">
                  <div className="link_heading">
                    <h3 className="link_heading">Legal</h3>
                  </div>
                  <div className="links">
                    <ul>
                      <li><Link to="/page/terms-of-use"> Terms Of Use </Link></li>
                      <li><Link to="/page/privacy-policy" className="itsupport">Privacy Policy  </Link></li>
                      <li><Link to="/page/cookies-policy"> Cookies Policy </Link></li>
                      <li><Link to="/page/site-map"> Site Map  </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-4">
                <div className="footer_widget_design wow  fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <div className="link_heading">
                    <h3 className="link_heading linkspecail">Connect With Us</h3>
                  </div>
                  <div className="links special_widget_tp">
                    <ul>
                      <li><Link to="/contact"> <i className="far fa-email"></i><span
                        className="tp-spaceing">info@smile.cleaning</span> </Link></li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom pt-60 pb-15">
            <div className="container tp-border">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="copyright_text pt-20">
                    <p>@ 2024 All Copyright Reserved.</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer_social f-right">
                    <span>Follow us</span>
                    <Link to="#"> <i className="fab fa-twitter"></i> </Link>
                    <Link to="#"> <i className="fab fa-pinterest-p"></i> </Link>
                    <Link to="#"> <i className="fab fa-vimeo-v"></i> </Link>
                    <Link to="#"> <i className="fab fa-facebook-f"></i> </Link>
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
