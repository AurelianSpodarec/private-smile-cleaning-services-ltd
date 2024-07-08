import React from 'react'
import { Navigation, Pagination, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'gatsby';

export default function AboutTestimonial() {
    const testimonialAbout = [
        {
            title: "Great cleaning services, lovely personnel",
            img:"/img/testimonial/t1.png",
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Indigo Violet"
        },
        {
            title: "Great cleaning services, lovely personnel",
            img:"/img/testimonial/t2.png",
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Hilary Ouse"
        },
        {
            title: "Great cleaning services, lovely personnel",
            img:"/img/testimonial/t3.png",
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Hilary Ouse"
        },
        {
            title: "Great cleaning services, lovely personnel",
            img:"/img/testimonial/t1.png",
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Indigo Violet"
        },
        {
            title: "Great cleaning services, lovely personnel",
            img:"/img/testimonial/t2.png",
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Hilary Ouse"
        },
        {
            title: "Great cleaning services, lovely personnel",
            img:"/img/testimonial/t3.png",
            desc: 'Matie boy it&#39;s your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo don&#39;t super.',
            name: "Brian Cumin"
        }
    ];
    return (
        <>
            {/* <!-- TESTIMONIAL START  --> */}
            <div className="testimonial-area bg1 pt-110 pb-110" style={{backgroundColor: "#EDE5F0"}}>
                <div className="testimonal_title">
                    <h2 className="section-title">Smiling Clients: Testimonials That Brighten Our Day</h2>
                </div>
                <div className="container">
                    <div className="row testimonial-active tp-dot-style">
                        <p className='text-center'>Discover why our clients smile about our exceptional cleaning services</p>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, FreeMode]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            freeMode={true}
                            className="custom-nav"
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    freeMode: false
                                },
                                992: {
                                    slidesPerView: 3,
                                    freeMode: false
                                }
                            }}
                        >
                            {testimonialAbout.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-item actve pt-55">
                                        <div className="item">
                                            <div className="clients_meta">
                                                <div className="clients_image">
                                                    <img src={item.img} alt='Testimonial for smile cleaning' />
                                                </div>
                                                <div className="clients_info">
                                                    <h4 className="p">{item.name}</h4>
                                                </div>
                                            </div>
                                            <h3 style={{color: "#2A2B2E"}}>{item.title}</h3>
                                            <span className="stars">⭐⭐⭐⭐⭐</span>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                    </div>
                    <div className='row pt-30'>
                        <div className='col text-center'>
                            <Link to='/sing-up' className='btn btn-primary'>Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- TESTIMONIAL END --> */}
        </>
    )
}
