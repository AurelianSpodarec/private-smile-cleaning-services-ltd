const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /**
   * PAGES
   */
  const result = await graphql(`
    query {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "pages" } } } }
        }
      ) {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    return
  }

  const pages = result.data.allWpPost.nodes

  pages.forEach(post => {
    console.log(`Creating page: /page/${post.slug}`)
    createPage({
      path: `/page/${post.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.slug,
      },
    })
  })

  //--------------------------------------------------------------------------------------

  const postsResult = await graphql(`
    query {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "Dev" } } } }
        }
      ) {
        edges {
          node {
            title
            slug
            id
            content
          }
        }
      }
    }
  `)

  if (postsResult.errors) {
    console.error(postsResult.errors)
    return
  }

  const blog = postsResult.data.allWpPost.edges

  blog.forEach(({ node }) => {
    // Desestructuración correcta
    console.log(`Creating blogPost: /posts/${node.slug}`)
    createPage({
      path: `/posts/${node.slug}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  const postsPerPage = 20;
  const totalPages = Math.ceil(blog.length / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    const thePath = i === 0 ? `/blog` : `/blog/${i}`
    console.log(`Creating blogPostList: ${thePath}`)
    createPage({
      path: thePath,
      component: path.resolve("./src/templates/blog-posts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages,
        currentPage: i,
      }
    })
  });
}