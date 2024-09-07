const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * PAGES
   */
  const result = await graphql(`
    query {
      allWpPost(filter: { categories: { nodes: { elemMatch: { name: { eq: "pages" } } } } }) {
        nodes {
          slug
          seo {
            fullHead
            metaDesc
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error("Failed to fetch pages.");
  }

  const pages = result.data.allWpPost.nodes;

  pages.forEach(post => {
    console.log(`Creating page: /page/${post.slug}`);
    createPage({
      path: `/page/${post.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.slug,
        seo: post.seo // Pass SEO data to the context
      },
    });
  });

  //--------------------------------------------------------------------------------------

  const postsResult = await graphql(`
    query {
      allWpPost(filter: { categories: { nodes: { elemMatch: { name: { eq: "Dev" } } } } }) {
        edges {
          node {
            title
            slug
            id
            content
            seo {
              fullHead
              metaDesc
              title
            }
          }
        }
      }
    }
  `);

  if (postsResult.errors) {
    console.error(postsResult.errors);
    throw new Error("Failed to fetch blog posts.");
  }

  const blog = postsResult.data.allWpPost.edges;

  blog.forEach(({ node }) => {
    console.log(`Creating blogPost: /posts/${node.slug}`);
    createPage({
      path: `/posts/${node.slug}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        slug: node.slug,
        seo: node.seo // Pass SEO data to the context
      },
    });
  });

  const postsPerPage = 20;
  const totalPages = Math.ceil(blog.length / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    const pathBase = i === 0 ? `/blog` : `/blog/${i + 1}`;
    console.log(`Creating blogPostList: ${pathBase}`);
    createPage({
      path: pathBase,
      component: path.resolve("./src/templates/blog-posts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages,
        currentPage: i + 1,
      }
    });
  });
};
