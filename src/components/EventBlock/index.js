import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { EventBlock, InfoContainer, Title, Time, Location } from "./Styled"

export default ({ id, slug, title, time, location, image }) => (
  <Link key={id} to={"/exhibition/" + slug}>
    <EventBlock>
      <InfoContainer>
        <Title>{title}</Title>
        <Time>{time}</Time>
        <Location>{location}</Location>
      </InfoContainer>
      <Img style={{ height: `100%` }} fluid={image.fluid} />
    </EventBlock>
  </Link>
)
