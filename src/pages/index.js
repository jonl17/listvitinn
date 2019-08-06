import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"

import EventContainer from "../components/EventContainer"
import VenueContainer from "../components/VenueContainer"
import Content from "../components/Content"
// import Menu from "../components/Menu"
import Haus from "../components/Haus"
import Footer from "../components/Footer"

import { category } from "../constants"
import { removeExpired } from "../helpers"

const index = ({ data }) => (
  <>
    <Haus />
    <Content category={category.Exhibitions}>
      <EventContainer
        /* filters the query in helper function */
        queriedExhibitions={removeExpired(data.allContentfulExhibition.edges)}
      />
    </Content>
    <Content category={category.Venues}>
      <VenueContainer queriedVenues={data.allContentfulStadir.edges} />
    </Content>
    <Footer />
  </>
)

export const query = graphql`
  query {
    allContentfulStadir {
      edges {
        node {
          id
          title
          slug
          mynd {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulExhibition {
      edges {
        node {
          id
          title
          stadur {
            title
            mynd {
              fluid {
                ...GatsbyContentfulFluid
                aspectRatio
              }
            }
          }
          opnun
          lokun
          mynd {
            fluid {
              ...GatsbyContentfulFluid
              aspectRatio
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
