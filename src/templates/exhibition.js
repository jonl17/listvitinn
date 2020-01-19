import React from "react"
import { graphql } from "gatsby"

/** components */
import ExhibitionDetailPage from "../components/ExhibitionDetailPage"

export default ({
  data: {
    contentfulExhibition: {
      slug,
      title,
      mynd,
      opnun,
      lokun,
      stadur,
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
    <ExhibitionDetailPage
      fluid={mynd.fluid}
      title={title}
      stadur={stadur}
      opnun={opnun}
      lokun={lokun}
      texti_en={texti_en}
      texti_is={texti_is}
      slug={slug}
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
