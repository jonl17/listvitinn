const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulExhibition {
          edges {
            node {
              title
              opnun
              lokun
              stadur {
                title
              }
              slug
              mynd {
                fluid(quality: 100) {
                  sizes
                }
              }
              id
              aboutIcelandic {
                aboutIcelandic
              }
              aboutEnglish {
                aboutEnglish
              }
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      // Resolve the paths to our template
      const exhibitionTemplate = path.resolve("./src/templates/exhibition.js")

      // Then for each result we create a page.
      result.data.allContentfulExhibition.edges.forEach(edge => {
        createPage({
          path: `/exhibition/${edge.node.slug}/`,
          component: slash(exhibitionTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
