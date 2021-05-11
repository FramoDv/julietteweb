module.exports = {
    siteMetadata: {
        title: `Juliette`,
        description: `Juliette, il tuo centro Estetico e del Benessere a Sora. Trattamenti corpo, nails, ciglia, viso, massaggi, solarium, sugar body.`,
        author: `FramoDv`,
        siteUrl: `https://juliettebenessere.it`,
        keywords: [`estetica`, `benessere`, `estetista`, `centro estetico sora`, `centro massaggi sora`, `massaggio`, `viso`, `solarium`,`sugar body`,`lampada`, `maschera viso`, `corpo`, `laser`, `ceretta`, `sopracciglia`, `ciglia`, `lashes`, `lash maker`, `nail art`, `estetista sora`, `estetista isola del liri`, `il meglio`],
    },
    plugins: [
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
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
                icon: `src/images/juliette-icon.svg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `montserrat\:400,500`,
                    `Nunito Sans\:700,900`,
                ],
                display: 'swap'
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
