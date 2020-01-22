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

const clickCallBack = (dispatch, slug, list) => {
  if (list.includes(slug)) {
    dispatch(removeStarredExhibition(slug))
    // and update local storage
  } else {
    dispatch(appendStarredExhibition(slug))
    // and update local storage
  }
}

const FavouriteButton = ({ slug }) => {
  const dispatch = useDispatch()
  const starredExhibitions = useSelector(
    state => state.reducer.starredExhibitions
  )
  return (
    <Container>
      <Star
        selected={
          starredExhibitions !== null &&
          isSelected(slug, starredExhibitions.unique())
        }
        onClick={() => clickCallBack(dispatch, slug, starredExhibitions)}
      ></Star>
    </Container>
  )
}

export default FavouriteButton
