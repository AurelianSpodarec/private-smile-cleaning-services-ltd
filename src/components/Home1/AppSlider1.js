import React from 'react'
import { Link } from 'gatsby'

export default function AppSlider1() {
    return (
        <>
        {/* App Slider Start */}
        <div className="app_slider  d-flex align-items-center fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="App_shape wow fadeInLeft  d-sm-none d-md-block d-none d-sm-block"
                  data-wow-delay="0.1s"
                  style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInLeft" }}>
                  <img src="/img/shape/mainshape.png" alt="" />
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex align-items-center">
                <div className="app_sliderContent">
                  <div className="shapeesright">
                   
                  </div>
                  <h2 className="hero-two-title">Exceptional local cleaning <br /> Services.</h2>
                  <p>Charles tosser quaint twit bamboozled burke brown bread I naff I <br /> don&#39;t want no agro
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
            </div>
          </div>
        </div>
        {/* App Slider End */}
            
        </>
    )
}
