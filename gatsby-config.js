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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: false,
              offsetY: `100`,
              elements: [`h1`, `h2`, `h3`],

            },
          },
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
            options: { showLineNumbers: false, }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cache`,
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-reading-time`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Operator Mono, Merriweather, Fira Sans"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
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
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-5VRT4FFLS2"]
      },
      pluginConfig: {
        head: true,
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
        icon: `content/assets/maskable_icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        debug: false,
        workboxConfig: {
          globPatterns: ['*.html']
        },
      },
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
      resolve: 'gatsby-redirect-from',
      options: {
        query: 'allMdx'
      }
    },
    'gatsby-plugin-meta-redirect', // make sure this is always the last one
  ],
};
