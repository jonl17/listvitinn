import styled, { css } from "styled-components"
import StarSVG from "../../../../static/svg/star.svg"

export const Star = styled(StarSVG)`
  height: 25px;
  width: 30px;
  margin: auto;
  &&:hover {
    cursor: pointer;
    polygon {
      fill: gold;
    }
  }
  polygon {
    fill: white;
  }
  ${props =>
    props.selected &&
    css`
      polygon {
        fill: gold;
      }
    `}
`
export const Container = styled.div`
  display: flex;
  padding: 0 0 25px 0;
`
