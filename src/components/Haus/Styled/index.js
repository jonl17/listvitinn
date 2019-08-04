import styled from "styled-components"
import { titleGlow } from "../../../animations"
import { Link } from "gatsby"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 20px 0 5px;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 20px 150px auto 50px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "logo title ... burger"
    "descr descr descr descr";
  z-index: 10;
`

export const Description = styled.p`
  padding-top: 25px;
  grid-area: descr;
  padding: 25px;
  box-sizing: border-box;
`

export const Title = styled.h1`
  grid-area: title;
  font-weight: normal;
  animation: ${titleGlow} 3s ease-in-out 0s infinite alternate;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-emphasis-color: inherit;
  margin-left: 20px;
`
