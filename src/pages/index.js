import React from "react"
import "./index.css"
import Wrapper from "../components/Wrapper"
import Haus from "../components/Haus"
import EventContainer from "../components/EventContainer"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

export default () => (
  <Wrapper>
    <Haus />
    <Menu />
    <Content>
      <EventContainer />
    </Content>
    <Footer />
  </Wrapper>
)
