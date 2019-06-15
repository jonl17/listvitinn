module.exports = {
  siteMetadata: {
    title: `Listvitinn`,
    subtitle: `All the fine art exhibitions in Iceland that matter`,
    email: `listvitinn@listvitinn.art`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/pics/`,
        name: "pics",
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
        path: `${__dirname}/exhibitions/`,
        name: "exhibitions",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/stadur/`,
        name: "stadur",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "pics", // Must match the source name ^
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fm69pggybjik`,
        accessToken: `86ZP4e_5JYBXFr8CB44Yxje1SWnXJND-kkYobVhHzcU`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
