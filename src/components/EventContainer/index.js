import React from "react"
import "./index.css"
// import { graphql, StaticQuery } from "gatsby"
// import EventBlock from "../EventBlock"

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
      <h1>Add some later</h1>
      // <StaticQuery
      //   query={graphql`
      //     query {
      //       allWordpressAcfExhibition {
      //         edges {
      //           node {
      //             id
      //             acf {
      //               titill
      //               Opnun
      //               lokun
      //               stadur
      //               mynd {
      //                 localFile {
      //                   childImageSharp {
      //                     fluid {
      //                       ...GatsbyImageSharpFluid
      //                     }
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `}
      //   render={data =>
      //     data.allWordpressAcfExhibition.edges.map(({ node }) => (
      //       <EventBlock
      //         key={node.id}
      //         title={node.acf.titill}
      //         location={node.acf.stadur}
      //         time={this.calculateTime(node.acf.Opnun, node.acf.lokun)}
      //         image={node.acf.mynd.localFile.childImageSharp.fluid}
      //       />
      //     ))
      //   }
      // />
    )
  }
}

export default EventContainer
