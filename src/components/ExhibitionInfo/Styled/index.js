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
export const LanguageButton = styled.button`
  border-radius: 5px;
  border: 1px solid rgba(16, 16, 16, 0.8);
  background-color: white;
  color: rgba(16, 16, 16, 0.8);
  height: 25px;
  &&:hover {
    cursor: pointer;
    background-color: rgba(16, 16, 16, 0.8);
    border-color: white;
    color: white;
  }
`
export const Description = styled.p`
  color: rgba(16, 16, 16, 0.8);
`
