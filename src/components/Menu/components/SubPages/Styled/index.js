import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  height: 100%;
  width: auto;
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Text = styled.p``
export const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`
