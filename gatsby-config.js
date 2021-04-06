module.exports = {
  siteMetadata: {
    title: `Juliette`,
    description: `Juliette, il tuo centro Estetico e del Benessere a Sora. Trattamenti corpo, nails, ciglia, viso, massaggi, solarium, sugar body.`,
    author: `FramoDv`,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juliette estetica & benessere`,
        short_name: `Juliette`,
        start_url: `https://www.juliettebenessere.it/`,
        background_color: `#FF87A4`,
        theme_color: `#FF87A4`,
        display: `minimal-ui`,
        icon: `src/images/juliette-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:,400,500`,
          `Nunito Sans\:,700,900`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
