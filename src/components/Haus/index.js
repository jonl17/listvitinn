import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Description, Title, StyledLink } from "./Styled"

import Burger from "../Burger"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
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
        <Description>{data.site.siteMetadata.subtitle}</Description>
      </Container>
    )}
  />
)
