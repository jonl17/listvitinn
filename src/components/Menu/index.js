import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { graphql, StaticQuery } from "gatsby"
import { triggerMenu } from "../../state/actions"

/** components */
import { Container, Title, StyledLink, Sensor } from "./Styled"

const Menu = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const menu = useSelector(state => state.reducer.menu)
  const dispatch = useDispatch()
  return (
    <>
      <Container width={menu === `open` ? "100%" : "0%"}>
        <Title>
          <StyledLink onClick={() => dispatch(triggerMenu())} to="/">
            {title}
          </StyledLink>
        </Title>
      </Container>
      {menu === `open` ? (
        <Sensor onClick={() => dispatch(triggerMenu())}></Sensor>
      ) : (
        <></>
      )}
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props}></Menu>}
  ></StaticQuery>
)
