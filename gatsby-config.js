module.exports = {
  siteMetadata: {
    title: "6:30 AM",
    siteUrl: "https://www.sixthirtyam.com"
  },
  plugins: [
    `gatsby-plugin-favicon`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
