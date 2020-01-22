import React from "react"
import { useSelector } from "react-redux"

/** components */

const StarredExhibitions = () => {
  const starredExhibitions = useSelector(
    state => state.reducer.starredExhibitions
  )
  return starredExhibitions !== null ? (
    <>
      {starredExhibitions.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  ) : (
    <></>
  )
}

export default StarredExhibitions
