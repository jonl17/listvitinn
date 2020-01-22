import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  height: 100%;
  width: ${props => props.width};
  transition: 0.2s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  background: gold;
  z-index: 8;
  overflow: hidden;
`

export const Title = styled.h1`
  grid-area: title;
  font-weight: normal;
  z-index: 10;
  color: white;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 20px;
  left: 25px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-top: auto;
  margin-bottom: auto;
`
export const Sensor = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: transparent;
  z-index: 6;
`
