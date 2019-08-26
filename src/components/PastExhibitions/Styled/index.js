import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-gap: 15px;
`
export const Title = styled.h1``
export const ExhibitonItem = styled.div`
  height: 150px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`
export const ExhibitionLink = styled(Link)`
  position: absolute;
  z-index: 2;
  height: 150px;
  width: 150px;
  color: white;
  font-size: 20px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  display: grid;
`
export const ExhibitionTitle = styled.p`
  font-size: 75%;
  margin: auto;
  opacity: 0;
  &&:hover {
    opacity: 1;
  }
  background-color: rgba(16, 16, 16, 0.2);
  height: 100%;
  width: 100%;
`
export const Image = styled(Img)`
  position: absolute;
  height: 100%;
  width: 100%;
`
