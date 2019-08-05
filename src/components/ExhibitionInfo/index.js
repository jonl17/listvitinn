import React from "react"
import { calculateTime } from "../../helpers/index"

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
      <div>
        <h1>{this.props.title}</h1>
        <h2>@ {this.props.stadur}</h2>
        <h3 className="Ex-counter">
          {calculateTime(this.props.opnun, this.props.lokun)}
        </h3>
        <button onClick={() => this.setLanguage()} className="language-btn">
          IS/EN
        </button>
        {temp.map((txt, index) => (
          <p key={index}>{txt}</p>
        ))}
      </div>
    )
  }
}

export default ExhibitionInfo
