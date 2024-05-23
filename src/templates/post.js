import * as React from "react"
import { graphql } from 'gatsby'

import Layout1 from '../layouts/Layout1'
import StaticContentTitle from "../components/Content/StaticContentTitle"
import StaticContent from "../components/Content/StaticContent"

const ContentPage = ({ data }) => {
    const { wpPost } = data

    const title = wpPost.title
    const content = wpPost.content
    
    return(
        
        <Layout1>
            <StaticContentTitle title={title}/>
            <StaticContent content={content} />
        </Layout1>
    
    )
}

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      id
      content
      title
    }
  }
`

export default ContentPage