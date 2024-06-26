import * as React from "react"

import Layout1 from '../layouts/Layout1'
import BookingForm from '../components/Forms/BookingForm'

const StartBookingPage = () => {


    function handleFinish() {
        alert('Booking process completed!');
    }

    return(
        
        <Layout1>
            <BookingForm onFinish={handleFinish} />
        </Layout1>
    
    )
}

export default StartBookingPage