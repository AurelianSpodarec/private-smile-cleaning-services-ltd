import * as React from "react"

import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { useState} from 'react'
import NavBar from './NavBar'
import NavBarMobile from './NavBarMobile'

export default function Header() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

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
            {/* Header Start */}
            <header>
                <div id="header-sticky" className="header-area transparent-header pt-10 pb-10" style={{background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(176,139,187,0.7315301120448179) 100%)"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-7 col-10 d-flex align-items-center">
                                <div className="logo">
                                <Link to="/">
                                    <Img
                                        fixed={data.wpMediaItem.localFile.childImageSharp.fixed}
                                        alt={data.wpMediaItem.altText}
                                        className="img-fluid"
                                    />
                                </Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-4 col-8 d-none d-md-block">
                                <div className="header-btn f-right d-none d-md-block">
                                    <Link href="/login"><a className="btn"><i className="fal fa-lock-alt"></i>Sign In</a></Link>
                                </div>
                                <div className="main-menu colormenu d-none d-lg-block">
                                    <NavBar />
                                </div>
                            </div>
                            <div className="col-2 col-md-1">
                                <div className="side-menu-icon d-lg-none text-end">
                                    <button onClick={toggleTrueFalse} className="side-toggle"><i className="far fa-bars"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}

            <div className="fix">
                <div className={`side-info ${isToggled ? "info-open" : ""}`}>
                    <button onClick={toggleTrueFalse} className="side-info-close"><i className="fal fa-times"></i></button>
                    <div className="side-info-content">
                        <div className={`mobile-menu`}>
                            <NavBarMobile/>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggleTrueFalse} className={`offcanvas-overlay ${isToggled ? "overlay-open" : ""}`}></div>


        </>
    )
}
