import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Team1() {
    const team = [
        {
            id: 1,
            img: (
                <StaticImage
                    src="/img/team/team1.jpg"
                    layout="responsive"
                    width={370}
                    height={400}
                />
            ),
            name: "Ahsan Riad",
            designation: "Software Developer"
        },
        {
            id: 2,
            img: (
                <StaticImage
                    src="/img/team/team3.jpg"
                    layout="responsive"
                    width={370}
                    height={400}
                />
            ),
            name: "Parsley Montana",
            designation: "Software Developer"
        },
        {
            id: 3,
            img: (
                <StaticImage
                    src="/img/team/team2.jpg"
                    layout="responsive"
                    width={370}
                    height={400}
                />
            ),
            name: "Rodney Artichoke",
            designation: "Software Developer"
        }
    ];

    return (
        <>
            {/* <!-- TEAM START --> */}
            <div className="team-area pb-200">
                <div className="container">
                    <div className="team_content text-center">
                        <h2 className="section-title team_title text-dark mb-65">Why Choose Smile Cleaning</h2>
                    </div>
                    {/* INFORMATIVE VIDEO */}
                    VIDEO
                </div>
            </div>
            {/* <!-- TEAM ENDE --> */}

        </>
    )
}
