import React from "react"
import styled from "styled-components"
import { burgerGlow, lineWave } from "../../animations"

const Burger = styled.div`
  grid-area: burger;
  height: 75px;
  width: 75px;
  margin-top: 7px;
  background: transparent;
  line-height: 3;
  color: white;
  position: fixed;
  right: -15px;
  padding-right: 1%;
  z-index: 8;
  display: grid;
  transition: 1s ease-in-out;
  &&:hover {
    cursor: pointer;
  }
`

const Line = styled.span`
  height: 3px;
  width: 50%;
  background: white;
  margin-right: auto;
  border-radius: 20%;
  transition: 0.7s ease-in-out;
`
const LineOne = styled(Line)`
  margin-top: auto;
  margin-bottom: 2.5px;
  animation: ${lineWave} 0.7s ease 0s infinite alternate,
    ${burgerGlow} 3s ease-in-out 0s infinite alternate;
`
const LineTwo = styled(Line)`
  margin-top: 2.5px;
  margin-bottom: auto;
  animation: ${lineWave} 0.7s ease 0.5s infinite alternate,
    ${burgerGlow} 3s ease-in-out 0s infinite alternate;
`
const LineThree = styled(Line)`
  margin-top: -16px;
  animation: ${lineWave} 0.7s ease 0.7s infinite alternate,
    ${burgerGlow} 3s ease-in-out 0s infinite alternate;
`

export default () => {
  return (
    <Burger>
      <LineOne />
      <LineTwo />
      <LineThree />
    </Burger>
  )
}
