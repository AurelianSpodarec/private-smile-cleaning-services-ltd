import React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
    return (
        <>
            <nav id="mobile-menu">
                <ul>
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
