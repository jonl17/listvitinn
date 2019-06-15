import React from "react"
import { Container, Wrap, Title } from "./Styled"

const Content = ({ children, category }) => {
  return (
    <Wrap>
      <Title>{category}:</Title>
      <Container>{children}</Container>
    </Wrap>
  )
}

export default Content
