import React from 'react'
import { Link } from 'gatsby'

export default function Slider3() {
    return (
        <>
            {/* <!-- === SLIDER AREA START === --> */}
            <div className="app_slider app_slider_3 fix" style={{ "background": "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(237,229,240,1) 60%)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8  col-md-8 ">
                            <div className="app_sliderContent slider3">
                                <h2 className="hero-two-title">Exceptional local <br /> Cleaning services.</h2>
                                <p>Charles tosser quaint twit bamboozled burke brown bread I naff I <br />don&#39;t want no agro
                                    say blimey.!!</p>
                                <div className="slider-btn">
                                    <form>
                                        <div className="row">
                                            <div className="col">
                                            <input type="text" className="form-control form-control-lg" id="zipcode" placeholder="Your Postcode"></input>
                                            </div>
                                            <div className="col">
                                            <button type="submit" className="btn btn-primary">Book Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 d-none d-lg-none d-xl-block p-custom-rel">
                            <div className="slider3_main_image">
                                <img src="/img/home_3_shapes/vevtorobject.png" alt="slider_main_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- === SLIDER AREA END === -->   */}
        </>
    )
}
