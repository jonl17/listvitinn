import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
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
        <div className="Footer-container">
          <ul className="footer-contents">
            <div className="footer-info">
              <li>
                <em>Listvitinn @ 2019</em>
              </li>
              <li>
                <em>{data.site.siteMetadata.email}</em>
              </li>
            </div>
            <Img
              className="footer-icon"
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </ul>
        </div>
      )}
    />
  )
}
