import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  appendFavouriteExhibition,
  removeFavouriteExhibition,
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
    dispatch(removeFavouriteExhibition(slug))
    // and update local storage
  } else {
    dispatch(appendFavouriteExhibition(slug))
    // and update local storage
  }
}

const FavouriteButton = ({ slug }) => {
  const dispatch = useDispatch()
  const favouriteExhibitions = useSelector(
    state => state.reducer.favouriteExhibitions
  )
  return (
    <Container>
      <Star
        selected={
          favouriteExhibitions !== null &&
          isSelected(slug, favouriteExhibitions.unique())
        }
        onClick={() => clickCallBack(dispatch, slug, favouriteExhibitions)}
      ></Star>
    </Container>
  )
}

export default FavouriteButton
