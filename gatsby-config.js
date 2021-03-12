module.exports = {
  siteMetadata: {
    title: "La Fiambrera"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sass",
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/episodes`,
        name: "episodes"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "portadas"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 930,
              backgroundColor: "transparent" // required to display blurred image first
            }
          }
        ]
      }
    },
  ]
};
