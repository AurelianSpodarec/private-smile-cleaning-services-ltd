import React from 'react'
import { Link } from 'gatsby'

export default function OurTeam() {
  return (
    <div className='container container-join pt-50 pb-20 '>
        <div className='row'>
            <div className=''>
                <hr style={{borderBottom: "1px solid #6c757d"}} />
            </div>
        </div>
        <div className='row mb-50'>
            <div className='col why-work'>
                <div className='row pb-20'>
                    <div className='col-11-ex display-join-w' style={{paddingLeft:"0px", color: "#ECA869"}}>
                        <b>Careers</b>
                    </div>
                </div>
                <div className='row joinWith pb-20'>
                    <div className='hola-team'>
                        <h1 className='center-team' style={{paddingLeft:"0px", color: "#2A2B2E"}}>Join Our team at Smile Cleaning</h1>
                    </div>
                </div>
                <div className='row-team'>
                    <div className='row pb-20'>
                        <div className='col-11 lyric-team' style={{paddingLeft:"0px"}}>
                            <b>Why Work with Us?</b><br></br>
                            At smile Cleaning, we foster a positive work enviroment where every
                            team member feels valued. Join our dynamic team and enjoy 
                            competitive wages, flexible Scheduling, and opportunitiesfor career
                            growt
                            
                            whether you're looking for part-time work or a full-time career, Smile 
                            Cleaning is the perfect place to archieve your goals. Apply today and
                            start your journey with us!
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 mb-50 mt-30 text-center">
                    <Link to="/services" className="btn btn-primary btn-explore">Explore Open Positions</Link>
                </div>
            </div>
            <div className='col image-team'>
                <div className='center-image-3'></div>
            </div>
        </div>
    </div>
  )
}
