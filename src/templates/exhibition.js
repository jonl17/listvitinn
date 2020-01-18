import React from "react"
import { graphql } from "gatsby"
import ExhibitionInfo from "../components/ExhibitionInfo"

import { Container, InfoContainer, Image, ImageContainer } from "./Styled"

export default ({
  data: {
    contentfulExhibition: {
      title,
      mynd,
      opnun,
      lokun,
      stadur: { title: stadurTitle, slug: stadurSlug },
      aboutEnglish: {
        childMarkdownRemark: { html: texti_en },
      },
      aboutIcelandic: {
        childMarkdownRemark: { html: texti_is },
      },
    },
  },
}) => {
  return (
    <>
      <Container>
        <InfoContainer>
          <ExhibitionInfo
            title={title}
            opnun={opnun}
            lokun={lokun}
            stadur={stadurTitle}
            about_is={texti_is}
            about_en={texti_en}
            slug={stadurSlug}
          />
        </InfoContainer>
        <ImageContainer>
          <Image fluid={mynd.fluid} />
        </ImageContainer>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String) {
    contentfulExhibition(slug: { eq: $slug }) {
      title
      opnun
      lokun
      slug
      stadur {
        title
        slug
      }
      slug
      mynd {
        fluid(quality: 85) {
          ...GatsbyContentfulFluid
        }
      }
      id
      aboutIcelandic {
        childMarkdownRemark {
          html
        }
      }
      aboutEnglish {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
