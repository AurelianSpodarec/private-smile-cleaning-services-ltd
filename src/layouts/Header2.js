import React, {useState} from 'react'
import NavBar from './NavBar'
import NavBarMobile from './NavBarMobile'
import { Link } from 'gatsby'

export default function Header2() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
            {/* <!-- HEADER START --> */}
            <header>
                <div id="header-sticky" className="header-area header-area-white transparent-header pt-10 pb-10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-10 d-flex align-items-center">
                                <div className="logo">
                                    <Link href="/"><a> <img src="/img/logo/home2.png" alt="" /> </a></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-4 col-8 d-none d-md-block">
                                <div className="header-btn f-right d-none d-md-block">
                                    <Link href="/login"><a className="btn btn-white"><i className="fal fa-lock-alt"></i>Sign In</a></Link>
                                </div>
                                <div className="main-menu colormenu d-lg-block d-none submenu-white">
                                    <NavBar />
                                </div>
                            </div>
                            <div className="col-2 col-md-2">
                                <div className="side-menu-icon bar-two d-lg-none text-end">
                                    <button onClick={toggleTrueFalse} className="side-toggle"><i className="far fa-bars"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- HEADER END --> */}

            <div className="fix">
                <div className={isToggled ? "side-info info-open":"side-info"}>
                    <button onClick={toggleTrueFalse} className="side-info-close"><i className="fal fa-times"></i></button>
                    <div className="side-info-content">
                        <div className="mobile-menu"><NavBarMobile/></div>
                    </div>
                </div>
            </div>
            <div onClick={toggleTrueFalse} className={isToggled ? "offcanvas-overlay overlay-open":"offcanvas-overlay"}></div>

        </>
    )
}
