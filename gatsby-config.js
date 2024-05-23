/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://staging.smile.cleaning/wp/graphql`,
      },
      schema: {
        timeout: 30000,
      },
      develop: {
        hardCacheMediaFiles: true,
      },
      type: {
        MediaItem: {
          localFile: {
            requestConcurrency: 5, // Adjust concurrency settings as needed
          },
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
  ],
  siteMetadata: {
    title: "Smile Cleaning",
    Copyright: "Copyright 2024",
  },
}
