import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function TestimonialTwo() {
    const testimonial = [
        {
            img: (
                <StaticImage
                    src="/img/testimonial/h2_test_1.png"
                    layout=""
                    width={150}
                    height={150}
                />
            ),
            desc:"The little rotter Richard bobby skive off arse over tit cracking goal boot super a load of old tosh pukka, naff crikey cockup ummm I&#39;m telling say barmy chip shop porkies",
            name:"Nathaneal Down",
            designation:"UI/UX Designer"
        },
        {
            img: (
                <StaticImage
                    src="/img/testimonial/h2_test_1.png"
                    layout=""
                    width={150}
                    height={150}
                />
            ),
            desc:"The little rotter Richard bobby skive off arse over tit cracking goal boot super a load of old tosh pukka, naff crikey cockup ummm I&#39;m telling say barmy chip shop porkies",
            name:"Nathaneal Down",
            designation:"UI/UX Designer"
        },
    ];
    return (
        <>
            {/* <!-- === HOME-2 TESTIMONIAL AREA START  === --> */}
            <div className="testimonial-area testimonial2 pt-200 pb-220 fix">
                <div className="testimonial_person d-md-none d-lg-block d-lg-none d-xl-block d-sm-none">
                    <img className="testimonial1_h2 d-none d-sm-block" src="/img/testimonial/1.png" alt="" />
                    <img className="testimonial2_h2 d-none d-sm-block" src="/img/testimonial/2.png" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="testimonial-active2 tp-dot-style">

                            <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination,]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            className="choose_active"
                            // navigation={{ clickable: true }}
                            // pagination={{ clickable: true }}
                            // breakpoints={{

                            //     // when window width is >= 768px
                            //     576: {
                            //         slidesPerView: 2,
                            //     },
                            //     768: {
                            //         // when window width is >= 992px
                            //         slidesPerView: 3,
                            //     },
                            //     992: {
                            //         // when window width is >= 992px
                            //         slidesPerView: 4,
                            //     },
                            //     1024: {
                            //         // when window width is >= 992px
                            //         slidesPerView: 5,
                            //     }
                            // }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            {testimonial.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-items">
                                    <div className="items">
                                        <div className="clients_meta">
                                            <div className="clients_image">
                                                {item.img}
                                            </div>
                                        </div>
                                        <div className="clients_info-two">
                                            <p>{item.desc}</p>
                                            <div className="clients_info info2">
                                                <h4>{item.name}</h4>
                                                <span>{item.designation}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                                {/* <div className="testimonial-items">
                                    <div className="items">
                                        <div className="clients_meta">
                                            <div className="clients_image">
                                                <img src="/img/testimonial/h2_test_1.png" alt="clients_image" />
                                            </div>
                                        </div>
                                        <div className="clients_info-two">
                                            <p>The little rotter Richard bobby skive off arse over tit cracking goal boot super a load of old tosh pukka, naff crikey cockup<br /> ummm I&#39;m telling say barmy chip shop porkies</p>
                                            <div className="clients_info info2">
                                                <h4>Nathaneal Down</h4>
                                                <span>UI/UX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-items">
                                    <div className="items">
                                        <div className="clients_meta">
                                            <div className="clients_image">
                                                <img src="/img/testimonial/h2_test_1.png" alt="clients_image" />
                                            </div>
                                        </div>
                                        <div className="clients_info-two">
                                            <p>The little rotter Richard bobby skive off arse over tit cracking<br /> goal boot super a load of old tosh pukka, naff crikey cockup<br /> ummm I&#39;m telling say barmy chip shop porkies</p>
                                            <div className="clients_info info2">
                                                <h4>Nathaneal Down</h4>
                                                <span>UI/UX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === HOME-2 TESTIMONIAL AREA END  === --> */}

        </>
    )
}
