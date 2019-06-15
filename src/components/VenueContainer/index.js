import React from "react"
import EventBlock from "../EventBlock"
import { initVenues } from "../../state/actions"
import { connect } from "react-redux"

/* 
  this component will receive a list of events 
  containing: image, title,
  event duration, etc...
*/
class VenueContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(initVenues(this.props.queriedVenues))
  }
  render() {
    const { venues } = this.props
    return venues.map((item, index) => (
      <EventBlock
        key={index}
        title={item.node.title}
        image={item.node.mynd}
        slug={item.node.slug}
        category={this.props.category}
      />
    ))
  }
}

const mapStateToProps = state => ({
  venues: state.reducers.venues,
})

export default connect(mapStateToProps)(VenueContainer)
