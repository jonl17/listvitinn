import React from "react"
import { initVenues } from "../../state/venueActions"
import { connect } from "react-redux"

/** components */
import Block from "./components/Block"

class VenueContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(initVenues(this.props.queriedVenues))
  }
  render() {
    const { venues } = this.props
    return venues.map((venue, index) => (
      <Block key={index} venue={venue.node} />
    ))
  }
}

const mapStateToProps = state => ({
  venues: state.venueReducer.venues,
})

export default connect(mapStateToProps)(VenueContainer)
