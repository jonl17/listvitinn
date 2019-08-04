import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Title, StyledLink } from "./Styled"

import Burger from "../Burger"

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
        <Container>
          <StyledLink to={"/"}>
            <Title>{data.site.siteMetadata.title}</Title>
          </StyledLink>
          <Burger />
        </Container>
      )}
    />
  )
}

export default () => {
  return spitItOut()
}
