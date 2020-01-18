import React from "react"
import { calculateTime } from "../../helpers/index"
import { useSelector } from "react-redux"

/** components */
import {
  Container,
  Title,
  Stadur,
  StadurText,
  ExCounter,
  Description,
} from "./Styled"
import LanguageButton from "../LanguageButton"

const ExhibitionInfo = ({
  title,
  opnun,
  lokun,
  stadur,
  about_is,
  about_en,
  slug,
}) => {
  const language = useSelector(state => state.reducer.language)
  return (
    <Container>
      <Title>{title}</Title>
      <Stadur to={"/" + slug}>
        <StadurText>@ {stadur}</StadurText>
      </Stadur>
      <ExCounter>{calculateTime(opnun, lokun)}</ExCounter>
      <LanguageButton></LanguageButton>
      <Description
        dangerouslySetInnerHTML={{
          __html: language === `icelandic` ? about_is : about_en,
        }}
      ></Description>
    </Container>
  )
}

export default ExhibitionInfo
