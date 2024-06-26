import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Video from './Video'
import { Link } from "gatsby";

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
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="features wow fadeInLeft" data-wow-delay=".3s"
                            style={{"visibility":"visible","animationDelay":"0.2s","animationName":"fadeInLeft"}}>
                            <h2 className="section-title">Transform Your Home with Smile Cleaning</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 centered-text">
                        <span>
                        Smile Cleaning, your premier destination for expert cleaning solutions. Our meticulous team ensures every corner of your home shines with freshness and cleanliness. Say goodbye to stress and hello to serenity. Book your service today!
                        </span>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 service">
                        <Video
                            videoSrcURL={placeholderVideo.wpMediaItem.mediaItemUrl}
                            videoTitle={"Revitalise Your Space"}
                            className="video-2"
                        />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 text-center mb-50">
                        <Link to="/sign-up" className="btn btn-primary responsive-button" >Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FETURES CONTENT END --> */}
        </>
    )
}
