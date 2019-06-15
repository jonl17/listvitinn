import React from "react"
import EventBlock from "../EventBlock"
import { calculateTime } from "../../helpers/index"
import { initExhibitions } from "../../state/actions"
import { connect } from "react-redux"

/* 
  this component will receive a list of events 
  containing: image, title,
  event duration, etc...
*/
class EventContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(initExhibitions(this.props.queriedExhibitions))
  }
  render() {
    const { exhibitions } = this.props
    return exhibitions.map((item, index) => (
      <EventBlock
        key={index}
        title={item.node.title}
        location={item.node.stadur.title}
        time={calculateTime(item.node.opnun, item.node.lokun)}
        image={item.node.mynd}
        slug={item.node.slug}
      />
    ))
  }
}

const mapStateToProps = state => ({
  exhibitions: state.reducers.exhibitions,
})

export default connect(mapStateToProps)(EventContainer)
