import React from 'react'
import BlogEntry from '../components/Blog/BlogEntry'
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout5 from '../layouts/Layout5'

export default function Blogposts({ data, pageContext }) {
    const { currentPage, totalPages } = pageContext;
    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === totalPages;
    const prevPagePath = currentPage === 1 ? "/blog" : `/blog/${currentPage}`;
    const nextPagePath = `/blog/${currentPage + 1}`;

    const getPageLinks = () => {
        const links = [];
        for (let i = 1; i <= totalPages; i++) {
            links.push(
                <li key={i}>
                    <Link to={(i - 1) === 0 ? "/blog" : `/blog/${(i - 1)}`} activeClassName="active">
                        {i}
                    </Link>
                </li>
            );
        }
        return links;
    };

    return (
        <>
        <Layout5>
            {/* <!-- BLOG AREA START --> */}
            <div className="BLOG mb-150 mt-100">
                <div className="section_title_wrapper mb-60 text-center">
                <h2 className="section-title team_title_h3">
                    Smile Cleaning Blog
                </h2>
                </div>
                <div className="container">
                <div className="row">
                    {/* <!-- FOR LOOP FROM POSTS --> */}
                    <BlogEntry data={data} pageContext={pageContext}/>
                    {/* <!-- END LOOP --> */}
                </div>
                <div className="paginati">
                    <ul>
                        {!isFirstPage && (
                            <li>
                                <Link to={prevPagePath}>&lt;</Link>
                            </li>
                        )}
                        {getPageLinks()}
                        {!isLastPage && (
                            <li>
                                <Link to={nextPagePath}>&gt;</Link>
                            </li>
                        )}
                    </ul>
                </div>
                </div>
            </div>
            {/* <!-- BLOG AREA END --> */}
        </Layout5>
            
        </>
    )
}

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allWpPost(
            filter: { categories: { nodes: { elemMatch: { name: { eq: "Dev" } } } } }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    title
                    slug
                    date(formatString: "MM-DD-YYYY")
                    featuredImage {
                        node {
                          altText
                          localFile {
                            childImageSharp {
                                fixed(height: 282, width: 400) {
                                    ...GatsbyImageSharpFixed_withWebp
                                }
                            }
                          }
                        }
                    }
                }
            }
        }
    }
`;
