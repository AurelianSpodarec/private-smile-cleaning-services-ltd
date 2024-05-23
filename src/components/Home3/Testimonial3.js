import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination]);

export default function Testimonial3() {
    const testimonial3 = [
        {
            img: (
                <StaticImage
                    src="/img/testimonial/test2.jpg"
                    layout=""
                    width={60}
                    height={60}
                />
            ),
            desc: ['Matie boy its your round amongst bodge vagabond absolutely bladdered crikey', 'well off his nut have it, goal you mug loo dont super Arse cheesed off cheers', 'vagabond tinkety tonk old fruit chinwag blimey Oxford sir,'],
            name: "Wisteria Ravenclaw",
            designation: "UI/UX Designer"
        }
    ];
    return (
        <>
            {/* <!-- TESTIMONIAL AREA START --> */}
            <div className={`testimonial_h3 pt-110`} >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="testimonialh3_active position-relative">
                                <Swiper
                                    // install Swiper modules
                                    // modules={[Navigation, Pagination,]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    className="custom-nav"
                                    navigation={{
                                        prevEl: ".custom_prev",
                                        nextEl: ".custom_next",
                                    }}
                                    
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


                                    {testimonial3.map((item, i) => (
                                        <SwiperSlide key={i}>

                                            <div className="testimonialh3 text-center">
                                                <div className="testimonialh3__image">
                                                    {item.img}
                                                </div>
                                                <div className="testimonialh3__content">
                                                    <h3>
                                                        {item.desc[0]}<br />
                                                        {item.desc[1]}<br />
                                                        {item.desc[2]}<br />
                                                    </h3>
                                                    <h4>{item.name} </h4>
                                                    <span>{item.designation}</span>
                                                </div>
                                            </div>


                                        </SwiperSlide>

                                    ))}
                                </Swiper>

                                <button type="button" className="slick-prev slick-arrow custom_prev" style={{ "display": "block" }}><i className="fal fa-long-arrow-left"></i>
                                </button>
                                <button type="button" className="slick-next slick-arrow custom_next" style={{ "display": "block" }}>
                                    <i className="fal fa-long-arrow-right"></i>
                                </button>

                                {/* <div className="testimonialh3 text-center">
                                <div className="testimonialh3__image">
                                    <img src="/img/testimonial/test2.jpg" alt="testimonial_image" />
                                </div>
                                <div className="testimonialh3__content">
                                    <h3>Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey<br/>
                                        well off his nut have it, goal you mug loo don&#39;t super Arse cheesed off
                                        cheers<br/> vagabond tinkety tonk old fruit chinwag blimey Oxford sir,</h3>
                                    <h4>Wisteria Ravenclaw</h4>
                                    <span>Ui/Ux Designer</span>
                                </div>
                            </div>
                            <div className="testimonialh3 text-center">
                                <div className="testimonialh3__image">
                                    <img src="/img/testimonial/test3.jpg" alt="testimonial_image" />
                                </div>
                                <div className="testimonialh3__content">
                                    <h3>Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey<br/>
                                        well off his nut have it, goal you mug loo don&#39;t super Arse cheesed off
                                        cheers<br/> vagabond tinkety tonk old fruit chinwag blimey Oxford sir,</h3>
                                    <h4>Wisteria Ravenclaw</h4>
                                    <span>Ui/Ux Designer</span>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- TESTIMONIAL AREA END -->   */}
        </>
    )
}
