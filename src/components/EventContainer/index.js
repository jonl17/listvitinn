import React from "react"
import "./index.css"
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
    for (var i = 0; i < this.props.queriedExhibitions.length; i++) {
      this.props.dispatch(initExhibitions(this.props.queriedExhibitions[i]))
    }
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
