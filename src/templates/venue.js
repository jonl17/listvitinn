import React from "react"
import { graphql } from "gatsby"
import "./venue.css"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import Wrapper from "../components/Wrapper"
import Img from "gatsby-image"

export default ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const {
    title,
    slug,
    mynd,
    id,
    aboutIcelandic,
    aboutEnglish,
  } = data.contentfulStadir
  return (
    <Wrapper>
      <Haus />
      <div className="Stadur-detail-container">
        <div className="Venue-detail-info">
          <h1>{title}</h1>
          <p>{aboutIcelandic.aboutIcelandic}</p>
          <Img fluid={mynd.fluid} />
        </div>
      </div>
      <Footer />
    </Wrapper>
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
