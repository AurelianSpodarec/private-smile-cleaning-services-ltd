import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { getCountyCode } from '../Forms/countyCodes';

import { getServices } from '../../utils/launch27-client';
import * as styles from '../Forms/BookingForm.module.css';

const API_KEY = 'ak_lyflbtreoGGLHcAKHUlpc0NIdk0fO';
const URL = `https://api.ideal-postcodes.co.uk/v1/postcodes/`;

export default function NewHeroSection() {
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [postcode, setPostcode] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const [services, setServices] = useState(null);

  useEffect(() => {
    getServices()
        .then((response) => {
            setServices(response.data)
        })
}, [])

  // TODO: Make coverage areas manageable in wp?
  const coveredPostalCodes = [
      'E4', 'E17', 'E11', 'E10', 'E18', 'IG7', 'IG8', 'IG10', 'EN9'
  ];

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const zipCodeSupported = (candidate) => {
    const normalizedCandidate = candidate.replace(/\s+/g, '').toUpperCase();
    return coveredPostalCodes.some((code) => normalizedCandidate.startsWith(code));
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      
      //clear previous bookings
      localStorage.clear();

      // obtain residential cleaning
      const selectedService = services.filter(s => s.name == "Residential Cleaning").pop();

      //start fresh
      localStorage.setItem('selectedService', JSON.stringify(selectedService));

      if (zipCodeSupported(zipcode)) {
        navigate('/booking', { state: { zipcode } });
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

  const handlePostcodeChange = async (e) => {
    const inputValue = e.target.value;
    setPostcode(inputValue);

    if (inputValue.length >= 6) {
        try {
            const response = await fetch(`${URL}${inputValue}?api_key=${API_KEY}`);
            const data = await response.json();
            if (data.result) {
                setResults(data.result);
                setError(null);
            } else {
                setResults([]);
                setError('No results found');
            }
        } catch (err) {
            setResults([]);
            setError('Error fetching postcode');
        }
    } else {
        setResults([]);
    }
  };

  const handleSelectPostcode = (result) => {
    const address = `${result.line_1}, ${result.line_2}, ${result.line_3}, ${result.post_town}, ${result.postcode}`;
    const selectedAddress = {
        line1: result.line_1,
        line2: result.line_2,
        line3: result.line_3,
        city: result.post_town,
        postcode: result.postcode,
        county: getCountyCode(result.traditional_county)
    };
    localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
    setPostcode(address);
    setZipcode(selectedAddress.postcode);
    setResults([]);
  };

  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-9 ">
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
                      <label className='pb-2 label-code' htmlFor='zipcode' >Postcode</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="zipcode"
                        placeholder="Enter your postcode"
                        value={postcode}
                        onChange={handlePostcodeChange}
                      />
                      {results.length > 0 && (
                          <ul className={styles.postCode}>
                              {results.map((result, index) => (
                                  <li key={index} onClick={() => handleSelectPostcode(result)}>
                                      {result.line_1}, {result.line_2}, {result.line_3}, {result.post_town}, {result.postcode}
                                  </li>
                              ))}
                          </ul>
                      )}
                      {error && <p className={styles.postcodeError}>{error}</p>}
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
                  <span className="customers span-star">5,000+ Smiling Customers</span>
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
