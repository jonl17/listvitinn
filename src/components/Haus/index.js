import React from "react"
import "./index.css"
import { StaticQuery, graphql } from "gatsby"

function handleBurgerClick() {}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="Haus-container">
        <h1 id="title">{data.site.siteMetadata.title}</h1>
        <div id="burger">
          <span className="line" id="line-one" />
          <span className="line" id="line-two" />
          <span className="line" id="line-three" />
        </div>
      </div>
    )}
  />
)
