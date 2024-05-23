import React from 'react'
import BlogArea from '../components/Blog/BlogArea'
import BlogPageTitle from '../components/Blog/BlogPageTitle'
import Layout5 from '../layouts/Layout5'

export default function blog() {
    return (
        <>
            <Layout5>
                <BlogPageTitle />
                <BlogArea />
            </Layout5>
        </>
    )
}
