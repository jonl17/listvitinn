import styled from "styled-components"
import { titleGlow } from "../../../animations"
import { Link } from "gatsby"

export const Title = styled.h1`
  grid-area: title;
  font-weight: normal;
  z-index: 10;
  color: white;
  height: 75px;
  margin: 0;
  animation: ${titleGlow} 3s ease-in-out 0s infinite alternate;
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 4;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-top: auto;
  margin-bottom: auto;
  display: inline-block;
`
