import React from "react"
import { connect } from "react-redux"
import {
  setDevice,
  triggerMenu,
  initStarredExhibitions,
} from "../state/actions"
import { GlobalStyle } from "../components/GlobalStyle"

/** components */
import { Container } from "./Styled"
import Haus from "../components/Haus"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Burger from "../components/Burger"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
    window.addEventListener("scroll", this.hideMenu)

    // update store with favourite exhibitions from local storage
    if (window !== `undefined`) {
      const savedStarredExhibitions = localStorage.getItem(`starredExhibitions`)
      if (savedStarredExhibitions) {
        this.props.dispatch(
          initStarredExhibitions(JSON.parse(savedStarredExhibitions))
        )
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }
  callBack() {
    const { dispatch } = this.props
    dispatch(setDevice(window.innerWidth))
  }
  hideMenu() {
    if (this.props.menu === `open`) {
      this.props.dispatch(triggerMenu())
    }
  }
  render() {
    return (
      <>
        {/* <SEO></SEO> */}
        <GlobalStyle></GlobalStyle>
        <Menu></Menu>
        <Haus></Haus>
        <Burger></Burger>
        <Container>{this.props.children}</Container>
        <Footer></Footer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  menu: state.reducer.menu,
  starredExhibitions: state.reducer.starredExhibitions,
})

export default connect(mapStateToProps)(Layout)
