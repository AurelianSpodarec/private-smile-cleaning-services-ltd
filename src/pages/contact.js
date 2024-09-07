import React from 'react'
import ContactContent from '../components/Contact/ContactContent'
import ContactTitle from '../components/Contact/ContactTitle'
import Layout1 from '../layouts/Layout1'

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const Contact = () => {
    // Fetch the SEO data for the "home" page
    const data = useStaticQuery(graphql`
        query {
            wpPage(slug: { eq: "contact" }) {
                seo {
                fullHead
                metaDesc
                title
                }
            }
        }
    `);

    const seo = data.wpPage.seo;

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.metaDesc} />
                <div dangerouslySetInnerHTML={{ __html: seo.fullHead }} />
            </Helmet>
            <Layout1>
                <ContactTitle/>
                <ContactContent/>
            </Layout1>
        </>
    )
}

export default Contact;