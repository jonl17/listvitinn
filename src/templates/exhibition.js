import React from "react"
import { graphql } from "gatsby"
import ExhibitionInfo from "../components/ExhibitionInfo"
import Haus from "../components/Haus"
import Footer from "../components/Footer"

import { Container, InfoContainer, Image } from "./Styled"

export default ({
  data: {
    contentfulExhibition: {
      title,
      mynd,
      opnun,
      lokun,
      stadur: { title: stadurTitle },
      aboutEnglish: { aboutEnglish },
      aboutIcelandic: { aboutIcelandic },
    },
  },
}) => {
  return (
    <>
      <Haus />
      <Container>
        <InfoContainer>
          <ExhibitionInfo
            title={title}
            opnun={opnun}
            lokun={lokun}
            stadur={stadurTitle}
            about_is={aboutIcelandic}
            about_en={aboutEnglish}
          />
        </InfoContainer>
        <Image
          fluid={mynd.fluid}
          imgStyle={{ padding: 50, height: "auto !important" }}
        />
      </Container>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String) {
    contentfulExhibition(slug: { eq: $slug }) {
      title
      opnun
      lokun
      stadur {
        title
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
