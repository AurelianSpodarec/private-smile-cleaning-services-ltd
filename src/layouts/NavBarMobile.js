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
