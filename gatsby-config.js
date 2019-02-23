module.exports = {
    siteMetadata: {
        title: `Frontend Azerbaijan`,
        description: `Frontend və Javascript dünyasından maraqlı resurslar`,
        author: 'Gasim Gasimzada'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/img`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content-images`,
                path: `${__dirname}/content/img`
            }
        },
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: `https://medium.com/feed/frontend-azerbaijan`,
                name: `MediumPub`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content/pages`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `courses`,
                path: `${__dirname}/content/courses`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `videos`,
                path: `${__dirname}/content/videos`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: []
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Frontend Azerbaijan`,
                short_name: `Frontend Azerbaijan`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#31c6e8`,
                display: `browser`,
                icon: `src/assets/favicon/favicon.svg`,
                include_favicon: true
            }
        },
        `gatsby-plugin-offline`
    ]
};
