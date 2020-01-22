import React from "react"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { Container, List, Item } from "./Styled"

const Artists = ({
  data: {
    allContentfulArtist: { nodes },
  },
}) => {
  return (
    <Container>
      <List>
        {nodes.map(artist => (
          <Item>{artist.nafn}</Item>
        ))}
      </List>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allContentfulArtist(sort: { fields: nafn }) {
          nodes {
            nafn
            syningar {
              title
            }
          }
        }
      }
    `}
    render={data => <Artists data={data} {...props}></Artists>}
  ></StaticQuery>
)
