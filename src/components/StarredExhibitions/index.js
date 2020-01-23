import React from "react"
import { useSelector } from "react-redux"

/** components */
import Block from "./components/Block"

const StarredExhibitions = () => {
  const starredExhibitions = useSelector(
    state => state.reducer.starredExhibitions
  )
  return starredExhibitions.map((exhibition, index) => (
    <Block key={index} exhibition={exhibition}></Block>
  ))
}

export default StarredExhibitions
