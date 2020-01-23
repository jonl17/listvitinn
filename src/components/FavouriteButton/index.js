import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  appendStarredExhibition,
  removeStarredExhibition,
} from "../../state/actions"

/** components */
import { Star, Container } from "./Styled"

// allows only unique elements in the exhibition array
Array.prototype.unique = function() {
  return this.filter(function(value, index, self) {
    return self.indexOf(value) === index
  })
}

const isSelected = (slug, list) => {
  return list.includes(slug)
}

const clickCallBack = (dispatch, exhibition, slugs) => {
  if (slugs.includes(exhibition.slug)) {
    dispatch(removeStarredExhibition(exhibition))
  } else {
    dispatch(appendStarredExhibition(exhibition))
  }
}

const FavouriteButton = ({ exhibition }) => {
  const dispatch = useDispatch()
  const starredExhibitionSlugs = useSelector(
    state => state.reducer.starredExhibitionSlugs
  )
  return (
    <Container>
      <Star
        selected={
          starredExhibitionSlugs !== null &&
          isSelected(exhibition.slug, starredExhibitionSlugs.unique())
        }
        onClick={() =>
          clickCallBack(dispatch, exhibition, starredExhibitionSlugs)
        }
      ></Star>
    </Container>
  )
}

export default FavouriteButton
