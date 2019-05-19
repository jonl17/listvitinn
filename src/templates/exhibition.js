import React from "react"
import { graphql } from "gatsby"
import "./exhibition.css"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import Wrapper from "../components/Wrapper"
import ExhibitionInfo from "../components/ExhibitionInfo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  return (
    <Wrapper>
      <Haus />
      <div className="Ex-detail-container">
        <div className="Ex-detail-info">
          <ExhibitionInfo
            title={frontmatter.title}
            opnun={frontmatter.opnun}
            lokun={frontmatter.lokun}
            about_is={frontmatter.about}
            about_en={frontmatter.about_en}
          />
        </div>
        <div className="Ex-detail-image-container">
          <img
            alt={frontmatter.title}
            className="featured-img"
            src={frontmatter.mynd}
          />
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        opnun(formatString: "MMMM DD, YYYY")
        path
        title
        mynd
        about
        about_en
      }
    }
  }
`
