require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `JavaScript Articles`,
    author: `Rolando`,
    about: `Welcome to my blog with JavaScript articles, CSS articles, and all the things web.`,
    description: `A blog with JavaScript articles, CSS articles, and all the things web.`,
    siteUrl: `https://javascriptarticles.com`,
  },
  plugins: [
    `gatsby-remark-reading-time`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-prismjs`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },

          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,//`ADD YOUR TRACKING ID HERE`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JavaScript Articles`,
        short_name: `JavaScript Articles`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#D10068`,
        display: `minimal-ui`,
        icon: [{
          src: `content/assets/maskable_icon.png`,
          purpose: `any maskable`
        }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/**/!(404).html'],
        debug: false,
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://javascriptarticles.com`,
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Poppins:300,400,500,600,700',
            'Fira Sans:100,300,400,500,600,700',
          ],
        },
      },
    },
  ],
};
