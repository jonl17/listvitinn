import React from "react"
import { graphql } from "gatsby"

export default ({
  data: {
    contentfulStadir: { title, mynd, aboutEnglish, exhibition },
  },
}) => {
  return (
    <>
      <p>venues</p>
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
