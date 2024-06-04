import React from "react"
import Layout1 from "../layouts/Layout1"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


export default function BlogTemplate({ data }) {
  console.log(data)
  const { wpPost } = data
  const { title, content, date, author, featuredImage } = wpPost
  const image = getImage(
    featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
  )

  return (
    <>
      <>
        <Layout1>
          <section className="fix text-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="page__title-content pt-235">
                    <h2 className="page_title" style={{ color: "#eca869" }}>
                      {title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="blog-classic mt-80">
            <div className="container">
              <div className="blog-wrapper">
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12">
                    <div className="blog-box mb-150 text-justify">
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                      {image && <GatsbyImage image={image} alt={title} />}
                      <p>By: {author.node.name}</p>
                      <p>Date: {date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout1>
      </>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400,
                height: 350,
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`