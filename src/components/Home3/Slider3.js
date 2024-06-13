import React, { useState } from 'react'
import { navigate } from 'gatsby';

export default function Slider3() {
    const [zipcode, setZipcode] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    // TODO: Make coverage areas manageable in wp?
    const coveredPostalCodes = [
        'E4', 'E17', 'E11', 'E10', 'E18', 'IG7', 'IG8', 'IG10', 'EN9'
    ];

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const prefix = zipcode.toUpperCase().substring(0, 3);
        if (coveredPostalCodes.includes(prefix)) {
        navigate('/start-booking', { state: { zipcode } });
        } else {
        setShowModal(true);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalSubmit = () => {
        console.log(`Email submitted for coverage notification: ${email}`);
        // TODO: add email to mailing list
        setShowModal(false);
    };

    return (
        <>
            {/* <!-- === SLIDER AREA START === --> */}
            <div className="app_slider app_slider_3 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8  col-md-8 ">
                            <div className="app_sliderContent slider3">
                                <h2 className="hero-two-title">Exceptional local <br /> Cleaning services.</h2>
                                <p>Charles tosser quaint twit bamboozled burke brown bread I naff I <br />don&#39;t want no agro
                                    say blimey.!!</p>
                                <div className="slider-btn">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                id="zipcode"
                                                placeholder="Your Postcode"
                                                value={zipcode}
                                                onChange={handleZipcodeChange}
                                            />
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

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Coverage Notification</h5>
                        <button type="button" className="close" aria-label="Close" onClick={handleModalClose}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Your postcode is not covered. Please enter your email to be notified when coverage is available:</p>
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
        </>
    )
}
