import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  padding: 25px;
`
export const InfoContainer = styled.div`
  box-sizing: border-box;
  padding-right: 25px;
`
export const Image = styled(Img)`
  width: 100%;
  object-fit: contain;
`
export const ImageContainer = styled.div`
  box-sizing: border-box;
  padding: 25px;
  width: 100%;
`