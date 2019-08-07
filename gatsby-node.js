const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
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
                fluid {
                  src
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
        allContentfulStadir {
          edges {
            node {
              id
              title
              slug
              mynd {
                fluid {
                  src
                }
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
      const venueTemplate = path.resolve("./src/templates/venue.js")

      // Then for each result we create a page.
      result.data.allContentfulExhibition.edges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: slash(exhibitionTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
      result.data.allContentfulStadir.edges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: slash(venueTemplate),
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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "house" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      house: `Gryffindor`,
    },
  })
}
