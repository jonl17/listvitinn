import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { graphql, StaticQuery } from "gatsby"
import { triggerMenu } from "../../state/actions"

/** components */
import { Container, Title, StyledLink, Sensor } from "./Styled"
import SubPages from "./components/SubPages"

const Menu = ({
  data: {
    site: {
      siteMetadata: { title, subpages },
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
        <SubPages pages={subpages}></SubPages>
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
            subpages {
              name
              slug
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props}></Menu>}
  ></StaticQuery>
)
