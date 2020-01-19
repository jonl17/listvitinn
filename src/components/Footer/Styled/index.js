import styled from "styled-components"
import Img from "gatsby-image"
import ReykjavikSVG from "../../../../static/svg/reykjavik.svg"

export const Container = styled.div`
  height: 250px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  bottom: -1px;
  overflow: hidden;
  background: black;
  color: white;
`
export const ImageContainer = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 0;
`
export const Image = styled(Img)`
  height: 100%;
  object-fit: contain;
`
export const Title = styled.p`
  position: absolute;
  left: 100px;
  bottom: 0;
  font-size: 20px;
  letter-spacing: 0.3em;
`
export const Email = styled.a`
  position: absolute;
  left: 100px;
  bottom: 50px;
  border: 1px solid;
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none;
  color: white;
  &&:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
`
export const RVK = styled(ReykjavikSVG)`
  width: 50px;
  position: absolute;
  right: 35px;
  bottom: 15px;
`
