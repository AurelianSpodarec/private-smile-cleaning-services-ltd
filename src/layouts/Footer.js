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
                      <li><Link href="/"><a>About Us </a></Link></li>
                      <li><Link href="/about"><a>Carrers</a></Link></li>
                      <li><Link href="/service"><a>Our Blog</a></Link></li>
                      <li><Link href="/blog"><a>Contact Us</a></Link></li>
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
                      <li><Link href="/about"><a>Residential Cleaning</a></Link></li>
                      <li><Link href="/about"><a>Commercial Cleaning</a></Link></li>
                      <li><Link href="/contact"><a>End-of-Tenancy Cleaning</a></Link></li>
                      <li><Link href="/about"><a>Ironing & Laundry</a></Link></li>
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
                      <li><Link href="/page/terms-of-use"><a>Terms Of Use</a></Link></li>
                      <li><Link href="/page/privacy-policy"><a className="itsupport">Privacy Policy </a></Link></li>
                      <li><Link href="/page/cookies-policy"><a>Cookies Policy</a></Link></li>
                      <li><Link href="/page/site-map"><a>Site Map </a></Link></li>
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
                      <li><Link href="/contact"><a><i className="far fa-map-marker-alt"></i><span
                        className="tp-spaceing">info@smile.cleaning</span></a></Link></li>
                      
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
                    <Link href="#"><a><i className="fab fa-twitter"></i></a></Link>
                    <Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link>
                    <Link href="#"><a><i className="fab fa-vimeo-v"></i></a></Link>
                    <Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link>
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
