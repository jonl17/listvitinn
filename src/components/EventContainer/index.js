import React from "react"
import "./index.css"
import { graphql, StaticQuery } from "gatsby"
import EventBlock from "../EventBlock"
import { calculateTime } from "../../helpers/index"

/* 
  this component will receive a list of events 
  containing: image, title,
  event duration, etc...
*/

class EventContainer extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulExhibition {
              edges {
                node {
                  title
                  opnun
                  lokun
                  stadur {
                    title
                  }
                  slug
                  mynd {
                    fluid(quality: 75) {
                      ...GatsbyContentfulFluid
                    }
                  }
                  id
                }
              }
            }
          }
        `}
        render={data =>
          data.allContentfulExhibition.edges.map(item => (
            <EventBlock
              key={item.node.id}
              title={item.node.title}
              location={item.node.stadur.title}
              time={calculateTime(item.node.opnun, item.node.lokun)}
              image={item.node.mynd}
              slug={item.node.slug}
            />
          ))
        }
      />
    )
  }
}

export default EventContainer
