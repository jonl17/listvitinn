import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="Footer-container">
      <ul className="footer-contents">
        <li>
          <em>Listvitinn all rights reserved</em>
        </li>
        <li>
          <em>Contact listvitinn@gmail.is</em>
        </li>
        <StaticQuery
          query={graphql`
            query {
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
            <Img
              className="test"
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          )}
        />
      </ul>
    </div>
  )
}
