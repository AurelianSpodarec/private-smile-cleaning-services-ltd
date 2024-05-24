import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Video from './Video'
import { Link } from 'gatsby'

export default function FeaturesContent() {
    const placeholderVideo = useStaticQuery(graphql`
    {
        wpMediaItem( 
          mimeType: {eq: "video/mp4"}, 
          title: {eq: "placeholder_video"} ) {
            mediaItemUrl
          }
      }
    `);

    return (
        <>
        {/* <!-- FETURES CONTENT START --> */}
        <div className="homefeture_2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="features pt-50 wow fadeInLeft" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInLeft"}}>
                            <div className="features__content mb-30">
                                <h2 className="section-title">Revitalise Your Space, <br/> Premier Cleaning Services for Discerning Clients.
                                </h2>
                                <p>You mug dropped a clanger barmy David brown <br/>bread bleeding crikey say chimney pot
                                    me old <br/>mucker bugger super.</p>
                                    
                            </div>
                        </div>
                        <Link to="/login" className="btn btn-primary">Book Now</Link>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <Video
                            videoSrcURL={placeholderVideo.wpMediaItem.mediaItemUrl}
                            videoTitle={"Revitalise Your Space"}
                            />
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FETURES CONTENT END --> */}
        {/* <!-- FETURES CONTENT 2nd Part START --> */}
        <div className="app_image pt-150">
            <div className="container">
                
            </div>
        </div>
        {/* <!-- FETURES CONTENT START 2nd Part --> */}
            
        </>
    )
}
