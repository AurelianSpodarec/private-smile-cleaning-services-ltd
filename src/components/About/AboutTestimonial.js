import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function AboutTestimonial() {
    const testimonialAbout = [
        {
            img: (
                <StaticImage
                    src="/img/testimonial/test1.jpg"
                    layout=""
                    width={60}
                    height={60}
                />
            ),
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Indigo Violet",
            designation: "UI/UX Designer"
        },
        {
            img: (
                <StaticImage
                    src="/img/testimonial/test2.jpg"
                    layout=""
                    width={60}
                    height={60}
                />
            ),
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Hilary Ouse",
            designation: "UI/UX Designer"
        },
        {
            img: (
                <StaticImage
                    src="/img/testimonial/test3.jpg"
                    layout=""
                    width={60}
                    height={60}
                />
            ),
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Hilary Ouse",
            designation: "UI/UX Designer"
        },
        {
            img: (
                <StaticImage
                    src="/img/testimonial/test1.jpg"
                    layout=""
                    width={60}
                    height={60}
                />
            ),
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Indigo Violet",
            designation: "UI/UX Designer"
        },
        {
            img: (
                <StaticImage
                    src="/img/testimonial/test2.jpg"
                    layout=""
                    width={60}
                    height={60}
                />
            ),
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Hilary Ouse",
            designation: "UI/UX Designer"
        },
        {
            img: (
                <StaticImage
                    src="/img/testimonial/test3.jpg"
                    layout=""
                    width={60}
                    height={60}
                />
            ),
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Brian Cumin",
            designation: "UI/UX Designer"
        }
    ];
    return (
        <>
            {/* <!-- TESTIMONIAL START  --> */}
            <div className="testimonial-area bg1 pt-110">
                <div className="testimonial_shape">
                    <img className="t-1" src="/img/shape/shape8.png" alt="shape" />
                    <img className="t-2" src="/img/shape/shape2.png" alt="shape" />
                </div>
                <div className="testimonal_title">
                    <h2 className="section-title">About Our Team Member We have<br /> Powerful User Experience.</h2>
                </div>
                <div className="container">
                    <div className="row testimonial-active tp-dot-style">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination,]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            className="custom-nav"
                            pagination={{ clickable: true }}
                            breakpoints={{

                                // when window width is >= 768px

                                768: {
                                    // when window width is >= 992px
                                    slidesPerView: 2,
                                },
                                992: {
                                    // when window width is >= 992px
                                    slidesPerView: 3,
                                }
                            }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >


                            {testimonialAbout.map((item, i) => (
                                <SwiperSlide key={i}>


                                    <div className="testimonial-item actve pt-55">
                                        <div className="item">
                                            <p>{item.desc}</p>
                                            <div className="clients_meta">
                                                <div className="clients_image">
                                                    {item.img}
                                                </div>
                                                <div className="clients_info">
                                                    <h4 className="p">{item.name}</h4>
                                                    <span>{item.designation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>

                            ))}
                        </Swiper>                       
                    </div>
                </div>
            </div>
            {/* <!-- TESTIMONIAL END --> */}
        </>
    )
}
