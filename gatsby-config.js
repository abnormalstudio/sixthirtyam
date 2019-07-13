module.exports = {
  siteMetadata: {
    title: "6:30 AM",
    siteUrl: "https://www.sixthirtyam.com"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        appName: "6:30 AM",
        appDescription: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56612129-4",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "xv2itdzun2nc",
        accessToken: "a_jHgo3ouFtVu8xSLNjsmsx6RfYVxxMlIJc7Yh90I9g"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-netlify`
  ]
};
