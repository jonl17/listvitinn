import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { graphql } from "gatsby"
import { initStarredExhibitions } from "../state/actions"

/** components */
import Content from "../components/Content"
import StarredExhibitionsComponent from "../components/StarredExhibitions"

const filterExhibitions = (slugs, exhibitions) => {
  let starred = []
  for (var i = 0; i < exhibitions.length; i++) {
    if (slugs.includes(exhibitions[i].slug)) {
      starred.push(exhibitions[i])
    }
  }
  return starred
}

const StarredExhibitions = ({
  data: {
    allContentfulExhibition: { nodes: allExhibitions },
  },
}) => {
  const starredExhibitionSlugs = useSelector(
    state => state.reducer.starredExhibitionSlugs
  )
  const dispatch = useDispatch()
  dispatch(
    initStarredExhibitions(
      filterExhibitions(starredExhibitionSlugs, allExhibitions)
    )
  )
  return (
    <Content>
      <StarredExhibitionsComponent></StarredExhibitionsComponent>
    </Content>
  )
}

export const query = graphql`
  {
    allContentfulExhibition {
      nodes {
        title
        opnun
        lokun
        slug
        stadur {
          title
        }
        mynd {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default StarredExhibitions
