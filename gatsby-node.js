// gatsby-node.js

// const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// exports.onCreateNode = ({ node }) => {
//   fmImagesToRelative(node)
// }

const path = require("path")

// sýningar

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const exhibitionTemplate = path.resolve(`src/templates/exhibition.js`)
  const stadurTemplate = path.resolve(`src/templates/stadur.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              opnun
              lokun
              mynd
              about
              location
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path.includes("exhibition")) {
        createPage({
          path: node.frontmatter.path,
          component: exhibitionTemplate,
          context: {
            title: node.frontmatter.title,
          }, // additional data can be passed via context
        })
      } else if (node.frontmatter.path.includes("stadur")) {
        createPage({
          path: node.frontmatter.path,
          component: stadurTemplate,
          context: {
            title: node.frontmatter.title,
          }, // additional data can be passed via context
        })
      }
    })
  })
}
