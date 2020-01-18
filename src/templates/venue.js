import React from "react"
import { graphql } from "gatsby"
import VenueInfo from "../components/VenueInfo"
import { Container, Image } from "./Styled"
import VenueExhibitions from "../components/VenueExhibitions"

export default ({
  data: {
    contentfulStadir: { title, mynd, aboutEnglish, exhibition },
  },
}) => {
  console.log(exhibition)
  return (
    <>
      <Container>
        <VenueInfo
          title={title}
          about={
            aboutEnglish !== null ? aboutEnglish.aboutEnglish : "vantar texta"
          }
        />
        <Image fluid={mynd.fluid} />
      </Container>
      <VenueExhibitions
        exhibitions={exhibition !== null ? exhibition : undefined}
      />
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String) {
    contentfulStadir(slug: { eq: $slug }) {
      title
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
      exhibition {
        title
        lokun
        slug
        mynd {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
