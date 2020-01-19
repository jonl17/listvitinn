import React from "react"
import { calculateTime } from "../../helpers"
import { useSelector } from "react-redux"

/** components */
import { Container, ImageContainer, Image, Content } from "./Styled"
import LanguageButton from "../LanguageButton"
import Header from "./components/Header"

const ExhibitionDetailPage = ({
  title,
  fluid,
  stadur,
  opnun,
  lokun,
  texti_is,
  texti_en,
  slug,
}) => {
  const language = useSelector(state => state.reducer.language)
  return (
    <Container>
      <Header
        title={title}
        stadur={stadur}
        opnun={opnun}
        lokun={lokun}
        slug={slug}
      ></Header>
      <ImageContainer>
        <Image fluid={fluid}></Image>
      </ImageContainer>
      <LanguageButton></LanguageButton>
      <Content
        dangerouslySetInnerHTML={{
          __html: language === `icelandic` ? texti_is : texti_en,
        }}
      ></Content>
    </Container>
  )
}

export default ExhibitionDetailPage
