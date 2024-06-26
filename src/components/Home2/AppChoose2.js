import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function AppChoose2() {
    /*const App = [
        {
            img: (
                <StaticImage
                    src="/img/choose/choose1.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        },
        {
            img: (
                <StaticImage
                    src="/img/choose/choose2.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        },
        {
            img: (
                <StaticImage
                    src="/img/choose/choose3.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        },
        {
            img: (
                <StaticImage
                    src="/img/choose/choose4.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        },
        {
            img: (
                <StaticImage
                    src="/img/choose/choose5.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        },
        {
            img: (
                <StaticImage
                    src="/img/choose/choose1.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        },
        {
            img: (
                <StaticImage
                    src="/img/choose/choose2.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        },
        {
            img: (
                <StaticImage
                    src="/img/choose/choose3.png"
                    layout=""
                    width={280}
                    height={598}
                />
            ),
        }
    ]*/

    const App = [];
    return (
        <>
            {/* <!-- === HOME-2 APP CHOOSE START === --> */}
            <div className="app_choose pt-115 mt-130 pb-160">
                <div className="container-fluidd">
                    <div className="section_title_wrapper text-center pb-55">
                        <h2 className="section-title section-title-large">Choose the offering that<br /> works best for you.</h2>
                    </div>
                    <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y,]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            className="choose_active"
                            // pagination={{ clickable: true }}
                            breakpoints={{

                                // when window width is >= 768px
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    // when window width is >= 992px
                                    slidesPerView: 3,
                                },
                                992: {
                                    // when window width is >= 992px
                                    slidesPerView: 4,
                                },
                                1024: {
                                    // when window width is >= 992px
                                    slidesPerView: 5,
                                }
                            }}
                        // navigation={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            {App.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="choose_item d-flex justify-content-center">
                                        {item.img}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                </div>
            </div>
            {/* <!-- === HOME-2 APP CHOOSE END === --> */}

        </>
    )
}
