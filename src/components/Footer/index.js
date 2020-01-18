import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReykjavikSVG from "../../../static/svg/reykjavik.svg"

/** components */
import { Container, ImageContainer, Image, Title, Email, RVK } from "./Styled"

const Footer = ({
  data: {
    site: {
      siteMetadata: { title, email, url },
    },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image fluid={fluid} />
      </ImageContainer>
      <Title>{url}</Title>
      <Email target="_blank" href={"mailto:" + email}>
        {email}
      </Email>
      <RVK src={ReykjavikSVG}></RVK>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            email
            url
          }
        }
        file(name: { eq: "viti" }) {
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props}></Footer>}
  />
)
