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

const Header = ({ title, stadur, opnun, lokun, slug }) => {
  return (
    <>
      <Title>{title}</Title>
      <GalleryLinkContainer>
        <GalleryLink to={"/" + stadur.slug}>@ {stadur.title}</GalleryLink>
      </GalleryLinkContainer>
      <Time>{formatDate(opnun) + " - " + formatDate(lokun)}</Time>
      <Time countdown>{calculateTime(opnun, lokun)}</Time>
      <FavouriteButton slug={slug}></FavouriteButton>
    </>
  )
}

export default Header
