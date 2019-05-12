import React from "react"
import "./index.css"
// import { graphql, StaticQuery } from "gatsby"
import EventBlock from "../EventBlock"

/* 
  this component will receive a list of events 
  containing: image, title,
  event duration, etc...
*/

class EventContainer extends React.Component {
  calculateTime(start, end) {
    // Today
    let now = new Date().getTime()
    // get opnun date
    let words = start.split("/")
    let opnun = new Date(words[2] + "-" + words[1] + "-" + words[0])
    if (opnun > now) {
      // not opened yet
      let diffTime = opnun - now
      let timeUntilOpnun = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      return "Opens in " + timeUntilOpnun + " days"
    }
    // get lokun date
    let words2 = end.split("/")
    let lokun = new Date(words2[2] + "-" + words2[1] + "-" + words2[0])
    // calculate time until lokun if it has opnened
    let diffTime = lokun - now
    let timeToLokun = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return timeToLokun + " days remaining"
  }
  render() {
    return (
      <EventBlock
        title="exhibition"
        location="location"
        time={this.calculateTime("25/05/2019", "01/06/2019")}
      />
    )
  }
}

export default EventContainer
