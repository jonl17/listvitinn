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
      aboutEnglish: { aboutEnglish },
      aboutIcelandic: { aboutIcelandic },
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
            about_is={aboutIcelandic}
            about_en={aboutEnglish}
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
        aboutIcelandic
      }
      aboutEnglish {
        aboutEnglish
      }
    }
  }
`
