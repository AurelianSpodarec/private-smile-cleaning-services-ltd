import React from "react"
import { Link } from "gatsby"
import {  getImage } from "gatsby-plugin-image"
import Img from 'gatsby-image'

export default function BlogEntry({ data }) {

  if (!data || !data.allWpPost || !data.allWpPost.edges) {
    console.error("No posts found or data is undefined")
    return <div>No posts found</div>
  }

  const posts = data.allWpPost.edges.map(edge => edge.node)

  return (
    <>
      {posts.map(post => {
        const { slug, title, featuredImage, date, id } = post
        const image = featuredImage
          ? featuredImage.node.localFile.childImageSharp.fixed
          : null

        const altText = featuredImage
          ? featuredImage.node.altText
          : null

        return (
          <div className="col-xl-4 col-lg-4 col-md-4" key={id}>
            <div className="blog">
              <div className="blog__image">
                {image ? (
                  <Img
                    fixed={image}
                    alt={altText}
                    className="img-fluid"
                  />
                ) : (
                  <div
                    style={{
                      width: "290px",
                      height: "370px",
                      backgroundColor: "#e1e1e1",
                    }}
                  >
                    <p>No Image Available</p>
                  </div>
                )}
              </div>
              <div className="blog__meta">
                <span>{date}</span>
                <h3>{title}</h3>
                <Link to={`/posts/${slug}`} className="fea-link blog_link">
                  Read More<i className="fal fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
