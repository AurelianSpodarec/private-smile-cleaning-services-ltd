import * as React from "react"

import AppDetails1 from '../components/Home1/AppDetails1'
import Slider3 from '../components/Home3/Slider3'
import Download1 from '../components/Home1/Download1'
import Features1 from '../components/Home1/Features1'
import FeaturesContent from '../components/Home1/FeaturesContent'
import Team1 from '../components/Home1/Team1'
import Testimonial1 from '../components/Home1/Testimonial1'
import Try1 from '../components/Home1/Try1'
import Layout1 from '../layouts/Layout1'

const IndexPage = () => {
    return(
        <>
            <Layout1>
                <Slider3/>
                <Features1/>
                <FeaturesContent/>
                <AppDetails1/>
                <Download1/>
                <Testimonial1/>
                
            </Layout1>
        </>
    )
}

export default IndexPage;