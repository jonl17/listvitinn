import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"

import ExhibitionContainer from "../components/ExhibitionContainer"
import VenueContainer from "../components/VenueContainer"
import Content from "../components/Content"
// import Menu from "../components/Menu"
import ExhibitionFilter from "../components/ExhibitionFilter"
import { category } from "../constants"

const index = ({ data }) => (
  <>
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
              ...GatsbyContentfulFluid_tracedSVG
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
                ...GatsbyContentfulFluid_tracedSVG
                aspectRatio
              }
            }
          }
          opnun
          lokun
          mynd {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
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
  exhibitions: state.reducer.exhibitions,
})

export default connect(mapStateToProps)(index)
