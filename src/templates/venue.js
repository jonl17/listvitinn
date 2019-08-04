import React from "react"
import { graphql } from "gatsby"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import VenueInfo from "../components/VenueInfo"
import { Container, Image } from "./Styled"

export default ({
  data: {
    contentfulStadir: { title, mynd, id, aboutIcelandic, aboutEnglish },
  },
}) => {
  return (
    <>
      <Haus />
      <Container>
        <VenueInfo
          title={title}
          about={
            aboutEnglish !== null ? aboutEnglish.aboutEnglish : "vantar texta"
          }
        />
        <Image fluid={mynd.fluid} />
      </Container>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String) {
    contentfulStadir(slug: { eq: $slug }) {
      title
      slug
      mynd {
        fluid {
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
