import React from "react"
import { useSelector } from "react-redux"

const FavouriteExhibitions = () => {
  const favouriteExhibitions = useSelector(
    state => state.reducer.favouriteExhibitions
  )
  return favouriteExhibitions !== null ? (
    <div>
      {favouriteExhibitions.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  ) : (
    <></>
  )
}

export default FavouriteExhibitions
