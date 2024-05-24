import React, {useEffect} from 'react'
import MetisMenu from 'metismenujs';
import { Link } from 'gatsby'


export default function NavBarMobile({ metismenu }) {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);

    return (
        <>
            <nav className="mean-nav">
                <ul className={"metismenu"} id={"metismenu"}>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>

        </>
    )
}
