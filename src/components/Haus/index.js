import React from "react"
import { StaticQuery, graphql } from "gatsby"

/** components */
import { Title, StyledLink } from "./Styled"

const spitItOut = () => {
  return (
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
        <Title>
          <StyledLink to={"/"}>{data.site.siteMetadata.title}</StyledLink>
        </Title>
      )}
    />
  )
}

export default () => {
  return spitItOut()
}
