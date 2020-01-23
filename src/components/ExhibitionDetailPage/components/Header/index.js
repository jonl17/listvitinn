import React from "react"
import { calculateTime } from "../../../../helpers"

/** components */
import { Title, GalleryLinkContainer, GalleryLink, Time } from "./Styled"
import FavouriteButton from "../../../FavouriteButton"

// returns date object in format: Saturday, January 19, 2019
const formatDate = date => {
  let d = new Date(date)
  let options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  return d.toLocaleDateString("en-US", options)
}

const Header = ({ exhibition }) => {
  return (
    <>
      <Title>{exhibition.title}</Title>
      <GalleryLinkContainer>
        <GalleryLink to={"/" + exhibition.stadur.slug}>
          @ {exhibition.stadur.title}
        </GalleryLink>
      </GalleryLinkContainer>
      <Time>
        {formatDate(exhibition.opnun) + " - " + formatDate(exhibition.lokun)}
      </Time>
      <Time countdown>{calculateTime(exhibition.opnun, exhibition.lokun)}</Time>
      <FavouriteButton exhibition={exhibition}></FavouriteButton>
    </>
  )
}

export default Header
