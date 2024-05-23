import React from 'react'
import { Link } from 'gatsby'

export default function NavBar() {
    return (
        <>
            <nav id="mobile-menu">
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/services"><a>Services</a></Link></li>
                    <li><Link href="/booking"><a>Booking</a></Link></li>
                    <li><Link href="/contact"><a>Contact us</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                </ul>
            </nav>

        </>
    )
}
