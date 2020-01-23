import React from "react"
import { calculateTime } from "../../helpers"
import { useSelector } from "react-redux"

/** components */
import { Container, ImageContainer, Image, Content } from "./Styled"
import LanguageButton from "../LanguageButton"
import Header from "./components/Header"

const ExhibitionDetailPage = ({ exhibition }) => {
  const language = useSelector(state => state.reducer.language)
  return (
    <Container>
      <Header exhibition={exhibition}></Header>
      <ImageContainer>
        <Image fluid={exhibition.mynd.fluid}></Image>
      </ImageContainer>
      <LanguageButton></LanguageButton>
      <Content
        dangerouslySetInnerHTML={{
          __html:
            language === `icelandic`
              ? exhibition.aboutIcelandic.childMarkdownRemark.html
              : exhibition.aboutEnglish.childMarkdownRemark.html,
        }}
      ></Content>
    </Container>
  )
}

export default ExhibitionDetailPage
