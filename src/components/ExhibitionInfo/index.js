import React from "react"
import { calculateTime } from "../../helpers/index"
import {
  Container,
  Title,
  Stadur,
  StadurText,
  ExCounter,
  LanguageButton,
  Description,
} from "./Styled"

class ExhibitionInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      language: "IS",
      about_is: "",
      about_en: "",
      about: "",
    }
  }
  componentDidMount() {
    this.setState({
      about_is: this.props.about_is,
      about_en: this.props.about_en,
      /* setting default language to icelandic */
      about: this.props.about_is,
    })
  }
  setLanguage() {
    if (this.state.language === "IS") {
      this.setState({
        language: "EN",
        about: this.state.about_en,
      })
    }
    if (this.state.language === "EN") {
      this.setState({
        language: "IS",
        about: this.state.about_is,
      })
    }
  }
  render() {
    var temp = this.state.about.split("\n")
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Stadur to={"/" + this.props.slug}>
          <StadurText>@ {this.props.stadur}</StadurText>
        </Stadur>
        <ExCounter>
          {calculateTime(this.props.opnun, this.props.lokun)}
        </ExCounter>
        <LanguageButton onClick={() => this.setLanguage()}>
          IS/EN
        </LanguageButton>
        {temp.map((txt, index) => (
          <Description key={index}>{txt}</Description>
        ))}
      </Container>
    )
  }
}

export default ExhibitionInfo
