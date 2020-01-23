import React from "react"
import { calculateTime } from "../../../../helpers"

/** components */
import {
  Container,
  InfoContainer,
  Title,
  Time,
  Location,
  Image,
} from "./Styled"

const Block = ({
  event: {
    title,
    mynd,
    opnun,
    lokun,
    slug,
    stadur: { title: stadurtitle },
  },
}) => {
  const time = calculateTime(opnun, lokun)
  return (
    <Container to={"/" + slug}>
      <InfoContainer>
        <Title>{title}</Title>
        <Time>{time}</Time>
        <Location>{stadurtitle}</Location>
      </InfoContainer>
      <Image fluid={mynd.fluid} />
    </Container>
  )
}

export default Block
