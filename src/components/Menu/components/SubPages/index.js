import React from "react"
import { useDispatch } from "react-redux"
import { triggerMenu } from "../../../../state/actions"

/** components */
import { Container, Text, Anchor } from "./Styled"

const SubPages = ({ pages }) => {
  const dispatch = useDispatch()
  return (
    <Container>
      {pages.map((page, index) => (
        <Text key={index}>
          <Anchor onClick={() => dispatch(triggerMenu())} to={page.slug}>
            {page.name}
          </Anchor>
        </Text>
      ))}
    </Container>
  )
}

export default SubPages
