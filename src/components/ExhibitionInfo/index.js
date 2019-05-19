import React from "react"

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
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.opnun}</h2>
        <h2>{this.props.lokun}</h2>
        <button onClick={() => this.setLanguage()} className="language-btn">
          IS/EN
        </button>
        <p>{this.state.about}</p>
      </div>
    )
  }
}

export default ExhibitionInfo
