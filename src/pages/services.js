import * as React from "react"

import Layout1 from '../layouts/Layout1'
import AppSlider1 from '../components/Home1/AppSlider1'

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const ServicesPage = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(slug: { eq: "services" }) {
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
                <AppSlider1/>
            </Layout1>
        </>
    )
}

export default ServicesPage;