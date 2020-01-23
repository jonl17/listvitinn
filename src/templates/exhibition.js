import React from "react"
import { graphql } from "gatsby"

/** components */
import ExhibitionDetailPage from "../components/ExhibitionDetailPage"

export default ({ data: { contentfulExhibition } }) => {
  return (
    <ExhibitionDetailPage
      exhibition={contentfulExhibition}
    ></ExhibitionDetailPage>
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
