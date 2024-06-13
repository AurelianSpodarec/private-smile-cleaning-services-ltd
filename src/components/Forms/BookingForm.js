import React, { useEffect, useState } from 'react'
import { getBookingForm } from '../../utils/launch27-client'

export default function BookingForm() {
   
    const [bookingForm, setBookingForm] = useState([]);

    const _getBookingForm = () => {
        getBookingForm()
            .then((res) => {
                setBookingForm(res)
            })
    }

    useEffect(() => {
        _getBookingForm();
    }, []);


    return (
        <>
            {/* <!-- BOOKING FORM  --> */}
            <div className="app_slider app_slider_3 fix" style={{ "background": "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(237,229,240,1) 60%)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <h1>This is the booking form</h1>
                            {bookingForm.headings[0].label}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- BOOKING FORM end  --> */}
        </>
    )
}