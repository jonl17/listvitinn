import React from "react"
import { graphql } from "gatsby"
import "./exhibition.css"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import Wrapper from "../components/Wrapper"

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
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.opnun}</h2>
          <h2>{frontmatter.lokun}</h2>
        </div>
        <div className="Ex-detail-image-container">
          <img className="featured-img" src={frontmatter.mynd} />
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
      }
    }
  }
`
