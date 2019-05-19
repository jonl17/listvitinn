import React from "react"
import { graphql } from "gatsby"
import "./stadur.css"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import Wrapper from "../components/Wrapper"

export default function StadurTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark
  return (
    <Wrapper>
      <Haus />
      <div className="Stadur-detail-container">
        <div className="Stadur-detail-info">
          <h1>{frontmatter.title}</h1>
        </div>
        <div className="Stadur-detail-image-container">
          <img
            alt={frontmatter.title}
            className="Stadur-img"
            src={frontmatter.mynd}
          />
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

export const stadurQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        mynd
        about
        about_en
        stadur
        location
      }
    }
  }
`
