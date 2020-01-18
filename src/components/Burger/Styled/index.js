import styled, { css } from "styled-components"
import { burgerGlow, lineWave } from "../../../animations"

export const Burger = styled.div`
  height: 35px;
  width: 35px;
  position: fixed;
  top: 25px;
  right: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 1s ease-in-out;
  z-index: 10;
  &&:hover {
    cursor: pointer;
  }
`

export const Line = styled.span`
  height: 3px;
  width: 100%;
  background: white;
  margin-right: auto;
  transition: 0.3s ease-in-out;
`
export const LineOne = styled(Line)`
  ${props =>
    props.ex &&
    css`
      transform: rotate(-45deg);
    `}
  ${props =>
    !props.ex &&
    css`
      animation: ${lineWave} 0.7s ease 0s infinite alternate,
        ${burgerGlow} 3s ease-in-out 0s infinite alternate;
    `}
`
export const LineTwo = styled(Line)`
  ${props =>
    props.ex &&
    css`
      transform: translateY(-11px) rotate(45deg);
    `}
  ${props =>
    !props.ex &&
    css`
      animation: ${lineWave} 0.7s ease 0.5s infinite alternate,
        ${burgerGlow} 3s ease-in-out 0s infinite alternate;
    `}
`
export const LineThree = styled(Line)`
  ${props =>
    !props.ex &&
    css`
      animation: ${lineWave} 0.7s ease 0.7s infinite alternate,
        ${burgerGlow} 3s ease-in-out 0s infinite alternate;
    `}
`
