import React from "react"

/** components */
import { Container, InfoContainer, Title, Image } from "./Styled"

const Block = ({ venue: { title, slug, mynd } }) => {
  return (
    <Container to={"/" + slug}>
      <InfoContainer>
        <Title>{title}</Title>
      </InfoContainer>
      <Image fluid={mynd.fluid} />
    </Container>
  )
}

export default Block
