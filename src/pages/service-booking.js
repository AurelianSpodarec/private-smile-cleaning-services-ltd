import * as React from "react"

import Layout1 from '../layouts/Layout1'
import BookingForm from '../components/Forms/BookingForm'

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const StartBookingPage = () => {
    // Fetch the SEO data for the "home" page
    const data = useStaticQuery(graphql`
        query {
        wpPage(slug: { eq: "service-bookings" }) {
            seo {
            fullHead
            metaDesc
            title
            }
        }
        }
    `);

    const seo = data.wpPage.seo;

    function handleFinish() {
        alert('Booking process completed!');
    }

    return(
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.metaDesc} />
                <div dangerouslySetInnerHTML={{ __html: seo.fullHead }} />
            </Helmet>
            <Layout1>
                <BookingForm onFinish={handleFinish} />
            </Layout1>
        </>
    )
}

export default StartBookingPage