import * as React from "react"
import Layout1 from "../layouts/Layout1";
import { Link } from 'gatsby';

const OrderConfirmed = () => {
    return(
        <Layout1>
            <div className='container pt-120'>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 mb-40 pr-120">
                        <span>Book Service / <b>Order Confirmed</b></span>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <img alt="Smile Cleaning" style={{width: "100%"}} src="/img/booking/confirm.png" />
                        <div className="pt-30 pb-50">
                            <h2>Your details are submited!</h2>
                            <p>Check your email for important updates.</p>
                            <Link to="/login" className="btn btn-primary" style={{width: "100%"}}>View Booking Details</Link>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            
        </Layout1>
    )
}

export default OrderConfirmed;