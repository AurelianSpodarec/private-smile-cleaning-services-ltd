import React, { useState } from 'react'
import { Link } from "gatsby";

const featureBoxes = [
        {
          title: '1 Hour Cleaning',
          image: '/img/featurebox/1hcleaning.png',
          content: 'The Deep Cleaning package provides an intensive, comprehensive cleaning experience. We\'ll pay extra attention to those easy-to-miss areas, removing stubborn dirt and leaving your space refreshingly clean from top to bottom.',
        },
        {
          title: '2 Hour Cleaning',
          image: '/img/featurebox/2hcleaning.png',
          content: 'The Deep Cleaning package provides an intensive, comprehensive cleaning experience. We\'ll pay extra attention to those easy-to-miss areas, removing stubborn dirt and leaving your space refreshingly clean from top to bottom.',
        },
        {
          title: '3 Hour Cleaning',
          image: '/img/featurebox/3hcleaning.png',
          content: 'The Deep Cleaning package provides an intensive, comprehensive cleaning experience. We\'ll pay extra attention to those easy-to-miss areas, removing stubborn dirt and leaving your space refreshingly clean from top to bottom.',
        },
        {
          title: 'Deep Cleaning',
          image: '/img/featurebox/deep-cleaning.png',
          content: 'The Deep Cleaning package provides an intensive, comprehensive cleaning experience. We\'ll pay extra attention to those easy-to-miss areas, removing stubborn dirt and leaving your space refreshingly clean from top to bottom.',
        },
        {
          title: 'End-of-tenancy Cleaning',
          image: '/img/featurebox/end-of-tenancy.png',
          content: 'The Deep Cleaning package provides an intensive, comprehensive cleaning experience. We\'ll pay extra attention to those easy-to-miss areas, removing stubborn dirt and leaving your space refreshingly clean from top to bottom.',
        },
        {
          title: '30 Minutes of Ironing',
          image: '/img/featurebox/30mins-ironing.png',
          content: 'The Deep Cleaning package provides an intensive, comprehensive cleaning experience. We\'ll pay extra attention to those easy-to-miss areas, removing stubborn dirt and leaving your space refreshingly clean from top to bottom.',
        },
    ];

export default function Download1() {
    

    const [showModal, setShowModal] = useState(false);
    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (index) => {
        setSelectedBox(featureBoxes[index]);
        setShowModal(true);
    };
  
    const handleModalClose = () => {
        setShowModal(false);
        setSelectedBox(null);
    };


    return (
        <>
        {/* <!-- DOWNLOAD START  --> */}
        <div className="download-area pb-40" style={{backgroundColor: "#FBD9BA"}}>
            <div className="container cont-area">
                <div className="row mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-10 col-sm-12">
                        <div className="download_content pl-105 pt-90 text-center">
                            <h2 className="section-title">What you can expect or professional Smile agents to acheive</h2>
                            <p>
                            Experience the Magic of Smile Cleaning Agents, Transforming Your Space into a Sparkling Oasis Every Time
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12">
                        <div className="featurebox2 featurebox3 mb-30" onClick={() => handleBoxClick(0)}>
                            <div>
                                <h3><i className="fal fa-watch"></i>  &nbsp;1 Hour Cleaning</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12" onClick={() => handleBoxClick(1)}>
                        <div className="featurebox2 featurebox3 mb-30">
                            <div>
                                <h3><i className="far fa-clock"></i>  &nbsp;2 Hours Cleaning</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12" onClick={() => handleBoxClick(2)}>
                        <div className="featurebox2 featurebox3 mb-30">
                            <div>
                                <h3><i className="far fa-clock"></i>  &nbsp;3 Hours Cleaning</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12" onClick={() => handleBoxClick(3)}>
                        <div className="featurebox2 featurebox3">
                            <div>
                                <h3><i className="far fa-hand-sparkles"></i> For a Deep Clean</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12" onClick={() => handleBoxClick(4)}>
                        <div className="featurebox2 featurebox3">
                            <div>
                                <h3><i className="far fa-house-leave"></i> For End-of-tenancy</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12" onClick={() => handleBoxClick(5)}>
                        <div className="featurebox2 featurebox3">
                            <div>
                                <h3><i className="far fa-washer"></i> For Ironing & Laundary</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className="col-xl-12 col-lg-12 col-md-12 mt-30 service">
                        <Link to="/sign-up" className="btn btn-primary style-btn" >Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- DOWNLOAD END  --> */}


        {/* Modal */}
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            style={{ display: showModal ? 'block' : 'none' }}
            tabIndex="-1"
            role="dialog"
        >
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className='feature-box-holder'>
                        <img src={selectedBox?.image} alt={selectedBox?.title} className="img-fluid mb-3 feature-box-img" />
                    </div>
                    <div className='center-text pt-20'>
                        <h1>{selectedBox?.title}</h1>
                        <p>{selectedBox?.content}</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleModalClose}
                        style={{width:"100%"}}
                    >
                        Okay
                    </button>
                </div>
            </div>
            </div>
        </div>
        <div
            className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
            style={{ display: showModal ? 'block' : 'none' }}
        ></div>
            
        </>
    )
}
