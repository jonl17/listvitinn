import React from "react"
import { Container, Title, About } from "./Styled"

const VenueInfo = ({ title, about }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <About>{about}</About>
    </Container>
  )
}

export default VenueInfo
