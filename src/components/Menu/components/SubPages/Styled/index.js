import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  overflow: hidden;
`
export const Text = styled.p`
  padding-top: 9px;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 70px;
  &&:hover {
    color: lightgray;
  }
`
