import * as React from "react"

import Download1 from '../components/Home1/Download1'
import FeaturesContent from '../components/Home1/FeaturesContent'
import Testimonial1 from '../components/Home1/Testimonial1'
import AboutTestimonial from "../components/About/AboutTestimonial"
import ContactForm from '../components/Contact/ContactForm'
import Layout1 from '../layouts/Layout1'
import NewHeroSection from '../components/Home1/Hero'
import ExploreServices from '../components/Home1/ExploreServices'
import WhyChoose from "../components/Home1/WhyChoose"
import MegaSlider from "../components/Home1/MegaSlider"
import OurTeam from "../components/Team/OurTeam"

const IndexPage = () => {
    return(
        <>
            <Layout1>
                <NewHeroSection />
                <ExploreServices />
                <FeaturesContent/>
                <AboutTestimonial />
                <WhyChoose />
                <Download1/>
                <MegaSlider />
                <OurTeam/>
                <Testimonial1/>
                <ContactForm/>
            </Layout1>
        </>
    )
}

export default IndexPage;