import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "gatsby";


const slides = [
    {
        image: "/img/mega-slider/living-reception-rooms.png",
        title: "Living & Reception Rooms",
        list: [
            "Dust ceiling fans and light fixtures",
            "Dust blinds, windowsills, and lock ledges",
            "Dust lampshades and lamps",
            "Dust and hand wipe wood furniture",
            "Vacuum furniture, including sofa pillows and armchair covers",
            "Vacuum accessible areas under furniture",
            "Dust surfaces including shelves, curios, and picture frames",
            "Vacuum carpets and dust/damp mop hard floors"
        ]
    },
    {
        image: "/img/mega-slider/office-space.png",
        title: "Office Space",
        list: [
            "Dust desk and office equipment (computers, printers, etc.)",
            "Organise papers and documents if requested",
            "Wipe down keyboard and mouse",
            "Dust bookshelves and office supplies",
            "Vacuum carpets and dust/damp mop hard floors"
        ]
    }, 
    {
        image: "/img/mega-slider/kitchen.png",
        title: "Kitchen",
        list: [
            "Dust chair rails, cabinets, door panels, and baseboards",
            "Dust blinds, windowsills, and ceiling fan",
            "Dust small objects and picture frames",
            "Clean and disinfect kitchen table and chairs",
            "Clean and disinfect countertops",
            "Clean and disinfect microwave inside and out",
            "Clean and shine outside of oven and range",
            "Clean and shine outside of range hood",
            "Clean, disinfect, and shine outside/top of refrigerator",
            "Clean and disinfect doorknobs and switch plates",
            "Clean, disinfect, and shine outside of dishwasher",
            "Clean and disinfect sink",
            "Clean cabinet fronts, empty trash",
            "Vacuum and damp mop floors"
        ]
    },
    {
        image: "/img/mega-slider/bedroom.png",
        title: "Bedroom",
        list: [
            "Dust ceiling fans and light fixtures",
            "Remove cobwebs from baseboards and ceiling corners",
            "Dust blinds, windowsills, and lock ledges",
            "Dust surfaces including shelves, curios, and picture frames",
            "Clean and shine mirrors",
            "Dust lampshades and lamps",
            "Change sheets if clean sheets are provided",
            "Dust and hand wipe wood furniture",
            "Vacuum accessible areas under furniture",
            "Vacuum carpets and dust/damp mop hard floors"
        ]
    }, 
    {
        image: "/img/mega-slider/bathroom.png",
        title: "Bathroom",
        list: [
            "Remove cobwebs",
            "Clean and shine sink",
            "Clean and disinfect vanity, countertop, and doors",
            "Dust surfaces including shelves and picture frames",
            "Clean and shine mirrors and chrome fixtures",
            "Clean knickknacks individually",
            "Clean and disinfect toilets inside and out",
            "Clean, disinfect, and shine showers and tubs",
            "Clean and shine shower doors",
            "Clean and disinfect toilets inside and out",
            "Vacuum carpets, mop, and disinfect floors"
        ]
    }
]

export default function MegaSlider() {
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return(
        <>
            <div className="container pt-80">
                <div className="row">
                    <div className='col'>
                        <div className='center-text'>
                            <h1>Thorough Cleaning Checklists That Will Keep You Smiling!</h1>
                            <p>
                            Experience professional room-by-room cleaning services with our detailed checklists for a sparkling and spotless home, guaranteed to meet your <br/>
                            highest standards of cleanliness
                            </p>
                        </div>
                    </div>
                    <div className='col'>
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
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                }
                            }}
                        >

                            {slides.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='mega-slider-item'>
                                        <img src={item.image} alt={item.title} />
                                        <h1>{item.title}</h1>
                                        <ul>
                                            {item.list.slice(0, showAll ? item.list.length : 5).map((listItem, i) => (
                                                <li key={i}>{listItem}</li>
                                            ))}
                                        </ul>
                                        {item.list.length >= 5 && (
                                            <button onClick={handleToggle} className="toggle-btn">
                                            {showAll ? 'See Less' : 'See More'}
                                            </button>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-xl-12 col-lg-12 col-md-12 mt-30 service">
                        <Link to="/booking" className="btn btn-primary" style={{width: "217px"}}>Book Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}