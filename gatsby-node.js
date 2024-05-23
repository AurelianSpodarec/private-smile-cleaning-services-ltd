const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const posts = result.data.allWpPost.nodes;

  posts.forEach(post => {
    console.log(`Creating page: /page/${post.slug}`)
    createPage({
      path: `/page/${post.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.slug,
      },
    });
  });
};
