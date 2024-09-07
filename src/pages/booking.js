import * as React from "react"

import Layout1 from '../layouts/Layout1'
import ServiceSelector from "../components/Service/ServiceSelector"

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const BookingPage = () => {
    // Fetch the SEO data for the "home" page
    const data = useStaticQuery(graphql`
        query {
        wpPage(slug: { eq: "select-services" }) {
            seo {
            fullHead
            metaDesc
            title
            }
        }
        }
    `);

    const seo = data.wpPage.seo;


    return(
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.metaDesc} />
                <div dangerouslySetInnerHTML={{ __html: seo.fullHead }} />
            </Helmet>
            <Layout1>
                <ServiceSelector/>
            </Layout1>
        </>
    )
}

export default BookingPage