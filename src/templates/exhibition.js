import React from "react"
import { graphql } from "gatsby"
import "./exhibition.css"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import Wrapper from "../components/Wrapper"
import ExhibitionInfo from "../components/ExhibitionInfo"
import Img from "gatsby-image/withIEPolyfill"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { title, mynd, opnun, lokun } = data.contentfulExhibition
  const { aboutIcelandic } = data.contentfulExhibition.aboutIcelandic
  const { aboutEnglish } = data.contentfulExhibition.aboutEnglish
  return (
    <Wrapper>
      <Haus />
      <div className="Ex-detail-container">
        <div className="Ex-detail-info">
          <ExhibitionInfo
            title={title}
            opnun={opnun}
            lokun={lokun}
            stadur={data.contentfulExhibition.stadur.title}
            about_is={aboutIcelandic}
            about_en={aboutEnglish}
          />
        </div>
        <Img
          objectPosition="50% 50%"
          objectFit="contain"
          className="Ex-detail-image"
          fixed={mynd.fixed}
        />
      </div>
      <Footer />
    </Wrapper>
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
        fixed(width: 600) {
          ...GatsbyContentfulFixed
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
