module.exports = {
  siteMetadata: {
    title: `Listvitinn`,
    subTitle: `Myndlistarsýningar á Íslandi`,
    email: `listvitinn@listvitinn.art`,
  },
  plugins: [
    `gatsby-plugin-lodash`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Work Sans"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pics`,
        path: `${__dirname}/static/pics/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
