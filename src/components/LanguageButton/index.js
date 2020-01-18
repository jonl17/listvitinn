import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "../../state/actions"

/** components */
import { Container, Text } from "./Styled"

const LanguageButton = () => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.reducer.language)
  return (
    <Container onClick={() => dispatch(changeLanguage())}>
      <Text selected={language === `icelandic`}>IS</Text>
      <Text selected={language === `english`}>EN</Text>
    </Container>
  )
}

export default LanguageButton
