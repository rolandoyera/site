require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `JavaScript Articles`,
    siteTitleAlt: `JavaScript Articles`,
    siteHeadline: `JavaScript Articles`,
    siteUrl: `https://javascriptarticles.com`,
    siteDescription: `My personal site.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Rolando Yera`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Articles`,
            slug: `/blog`,
          },
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
        ],
        // externalLinks: [
        //   {
        //     name: `Twitter`,
        //     url: `https://twitter.com/lekoarts_de`,
        //   },
        //   {
        //     name: `Instagram`,
        //     url: `https://www.instagram.com/rolandoyera`,
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JavaScript Articles`,
        short_name: `JavaScript Articles`,
        description: `My personal blog site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
