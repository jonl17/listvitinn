import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"
import {
  getPastExhibitions,
  getCurrentExhibitions,
} from "../../state/venueActions"
import PastExhibitions from "../PastExhibitions"
import CurrentExhibitions from "../CurrentExhibitions"

const findExpired = list => {
  var today = new Date()
  var newList = []
  for (var i = 0; i < list.length; i++) {
    var lokun = new Date(list[i].lokun)
    if (today > lokun) {
      newList.push(list[i])
    }
  }
  return newList
}
const findCurrent = list => {
  var today = new Date()
  var newList = []
  for (var i = 0; i < list.length; i++) {
    var lokun = new Date(list[i].lokun)
    if (lokun >= today) {
      newList.push(list[i])
    }
  }
  return newList
}
class VenueExhibitions extends React.Component {
  componentDidMount() {
    if (this.props.exhibitions !== undefined) {
      this.props.dispatch(getPastExhibitions(findExpired(this.props.exhibitions)))
      this.props.dispatch(
        getCurrentExhibitions(findCurrent(this.props.exhibitions))
      )
    }
  }
  render() {
    const { exhibitions } = this.props
    return exhibitions !== undefined ? (
      <Container>
        <CurrentExhibitions />
        <PastExhibitions />
      </Container>
    ) : (
      <></>
    )
  }
}

export default connect()(VenueExhibitions)
