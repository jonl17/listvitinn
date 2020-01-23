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
  exhibition: {
    slug,
    title,
    opnun,
    lokun,
    stadur: { title: stadurtitle },
    mynd,
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
