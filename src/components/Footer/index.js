import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, List, Info } from "./Styled"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              email
            }
          }
          allFile(filter: { name: { eq: "viti" } }) {
            edges {
              node {
                size
                childImageSharp {
                  fluid(maxWidth: 100, maxHeight: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Container>
          <List>
            <Info>
              <li>
                <em>{data.site.siteMetadata.title} @ 2019</em>
              </li>
              <li>
                <em>{data.site.siteMetadata.email}</em>
              </li>
            </Info>
            <Img
              style={{ padding: `10px`, height: 100, width: 100 }}
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </List>
        </Container>
      )}
    />
  )
}
