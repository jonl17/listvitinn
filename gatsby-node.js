// gatsby-node.js
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/exhibition.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___opnun] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              mynd
              opnun
              lokun
              about
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
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

// const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// exports.onCreateNode = ({ node }) => {
//   fmImagesToRelative(node)
// }
