import * as React from "react"
import Layout1 from "../layouts/Layout1";
import LoginForm from "../components/Forms/LoginForm";

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const SingIn = () => {
    // Fetch the SEO data for the "home" page
    const data = useStaticQuery(graphql`
        query {
            wpPage(slug: { eq: "login" }) {
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
                <LoginForm/>
            </Layout1>
        </>
    )
}

export default SingIn;