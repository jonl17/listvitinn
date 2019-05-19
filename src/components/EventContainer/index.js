import React from "react"
import "./index.css"
import { graphql, StaticQuery } from "gatsby"
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
    let words = start
    let opnun = new Date(words)
    if (opnun.getTime() > now) {
      // not opened yet
      let diffTime = opnun - now
      let timeUntilOpnun = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      return "Opens in " + timeUntilOpnun + " days"
    }
    // get lokun date
    let words2 = end
    // console.log(words2)
    let lokun = new Date(words2)
    // calculate time until lokun if it has opnened
    let diffTime = lokun - now
    let timeToLokun = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return timeToLokun + " days remaining"
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    opnun
                    lokun
                    stadur
                    mynd
                    path
                  }
                }
              }
            }
          }
        `}
        render={data =>
          data.allMarkdownRemark.edges.map(item => (
            <EventBlock
              key={item.node.id}
              title={item.node.frontmatter.title}
              location={item.node.frontmatter.stadur}
              time={this.calculateTime(
                item.node.frontmatter.opnun,
                item.node.frontmatter.lokun
              )}
              image={item.node.frontmatter.mynd}
              path={item.node.frontmatter.path}
            />
          ))
        }
      />
    )
  }
}

export default EventContainer
