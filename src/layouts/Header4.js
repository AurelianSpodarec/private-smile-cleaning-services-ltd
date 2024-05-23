import React from 'react'
import NavBar from '../layouts/NavBar'
import NavBarMobile from '../layouts/NavBarMobile'
import { Link } from 'gatsby'
// import MetisMenu from 'metismenujs'
import { useState, useEffect } from 'react'

export default function Header4() {
    
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
            <header>
                <div id="header-sticky" className="header-area transparent-header font-color pt-10 pb-10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-10 d-flex align-items-center">
                                <div className="logo">
                                    <Link href="/"><a> <img src="/img/logo/home2WhiteLogo.png" alt="" /> </a></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-4 col-8 d-none d-md-block whitebg">
                                <div className="header-btn f-right d-none d-md-block">
                                    <Link href="/login"><a className="btn"><i className="fal fa-lock-alt"></i>Sign In</a></Link>
                                </div>
                                <div className="main-menu colormenu d-none d-lg-block">
                                    <NavBar />
                                </div>
                            </div>
                            <div className="col-2 col-md-2">
                                <div className="side-menu-icon d-lg-none text-end ">
                                    <button className="side-toggle" onClick={toggleTrueFalse}><i className="far fa-bars text-white"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- HEADER END --> */}

            <div className="fix">
                <div className={isToggled ? "side-info info-open" : "side-info" }>
                    <button onClick={toggleTrueFalse} className="side-info-close"><i className="fal fa-times"></i></button>
                    <div className="side-info-content">
                        <div className="mobile-menu">
                            <NavBarMobile/>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggleTrueFalse} className={isToggled ? "offcanvas-overlay overlay-open" : "offcanvas-overlay" }></div>

        </>
    )
}
