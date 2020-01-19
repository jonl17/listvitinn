import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  padding: 75px 0 75px 0;
  margin: auto;
  position: relative;
`

export const ImageContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 40px;
`
export const Image = styled(Img)`
  height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding-top: 25px;
  width: 100%;
  line-height: 140%;
  opacity: 0.8;
`
