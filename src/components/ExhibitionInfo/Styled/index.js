import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div``
export const Title = styled.h1``
export const Stadur = styled(Link)`
  text-decoration: none;
  color: inherit;
  &&:hover {
    color: yellow;
  }
  display: inline-block;
`
export const StadurText = styled.h2`
  margin: 0;
`
export const ExCounter = styled.h3`
  color: rgba(16, 16, 16, 0.8);
`

export const Description = styled.div`
  line-height: 140%;
`
