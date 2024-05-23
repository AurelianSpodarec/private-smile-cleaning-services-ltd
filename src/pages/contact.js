import React from 'react'
import ContactContent from '../components/Contact/ContactContent'
import ContactTitle from '../components/Contact/ContactTitle'
import Layout1 from '../layouts/Layout1'

export default function contact() {
    return (
        <Layout1>
            <ContactTitle/>
            <ContactContent/>
        </Layout1>
    )
}
