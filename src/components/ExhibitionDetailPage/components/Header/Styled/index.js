import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div``

export const GalleryLinkContainer = styled.p`
  display: flex;
  justify-content: center;
`
export const GalleryLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  &&:hover {
    color: gold;
  }
`
export const Time = styled.p`
  font-size: 18px;
  text-align: center;
  object-fit: 0.8;
  ${props =>
    props.countdown &&
    css`
      opacity: 0.7;
    `}
`
export const Title = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`
