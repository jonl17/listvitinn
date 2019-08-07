import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"

import ExhibitionContainer from "../components/ExhibitionContainer"
import VenueContainer from "../components/VenueContainer"
import Content from "../components/Content"
// import Menu from "../components/Menu"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import ExhibitionFilter from "../components/ExhibitionFilter"
import { category } from "../constants"

const index = ({ data }) => (
  <>
    <Haus />
    <ExhibitionFilter />
    <Content category={category.Exhibitions}>
      <ExhibitionContainer
        /* filters the query in helper function */
        queriedExhibitions={data.allContentfulExhibition.edges}
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
    allContentfulExhibition(sort: { fields: lokun }) {
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
