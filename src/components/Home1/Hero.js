import React, { useState } from 'react';
import { navigate } from 'gatsby';

export default function NewHeroSection() {
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
      navigate('/sign-up', { state: { zipcode } });
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
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9  col-md-9 ">
              <div className="hero-image">
                <img alt="Smile Cleaning" src="/img/home-hero.png" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 hero-content-conatiner">
              <div className="hero-content">
                <h2>Professional Home Cleaning Services Near You</h2>
                <p>Experience a sparkling clean home with our trusted, local cleaners who deliver exceptional results every time</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                          <label className='pb-2' htmlFor='zipcode' style={{color: "#2A2B2E"}}>Postcode</label>
                          <input
                              type="text"
                              className="form-control form-control-lg"
                              id="zipcode"
                              placeholder="Enter your location or postcode"
                              value={zipcode}
                              onChange={handleZipcodeChange}
                          />
                        </div>
                    </div>
                    <div className="row pt-10">
                        <div className="col">
                          <button type="submit" className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </form>
                <div className="rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="customers">5,000+ Smiling Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" aria-label="Close" onClick={handleModalClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className='foto-modal'></div>
              <h5 className="modal-title text-center">We’re coming soon to your area</h5>
              <p className='text-center'>Get notified when we’re on your area</p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email.example@email.com"
                  value={email}
                  onChange={handleEmailChange}
                />
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button> */}
              <button type="button" className="btn btn-primary btn-modal" onClick={handleModalSubmit}>Notify Me</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
    </> 
  );
}
