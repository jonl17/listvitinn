import React from "react"
import "./index.css"
import { StaticQuery, graphql, Link } from "gatsby"

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
        <Link className="Home-anchor" exact to={"/"}>
          <h1 id="title">{data.site.siteMetadata.title}</h1>
        </Link>
        <div id="burger">
          <span className="line" id="line-one" />
          <span className="line" id="line-two" />
          <span className="line" id="line-three" />
        </div>
      </div>
    )}
  />
)
