import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"

import "./index.css"
import Wrapper from "../components/Wrapper"
import Haus from "../components/Haus"
import EventContainer from "../components/EventContainer"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

import { removeExpired } from "../helpers"

const index = ({ data }) => (
  <Wrapper>
    <Haus />
    <Menu />
    <Content>
      <EventContainer
        /* filters the query in helper function */
        queriedExhibitions={removeExpired(data.allContentfulExhibition.edges)}
      />
    </Content>
    <Footer />
  </Wrapper>
)

export const query = graphql`
  query {
    allContentfulExhibition {
      edges {
        node {
          id
          title
          stadur {
            title
          }
          opnun
          lokun
          mynd {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          slug
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  exhibitions: state.reducers.exhibitions,
})

export default connect(mapStateToProps)(index)
