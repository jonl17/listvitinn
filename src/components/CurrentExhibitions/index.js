import React from "react"
import { connect } from "react-redux"
import {
  Container,
  ExhibitonItem,
  ExhibitionTitle,
  ExhibitionLink,
  Title,
  Image,
} from "../PastExhibitions/Styled"

const CurrentExhibitions = ({ current }) => {
  return (
    <>
      <Title>Current exhibitions:</Title>
      <Container>
        {current.map((item, index) => (
          <ExhibitonItem key={index}>
            <ExhibitionLink to={"/" + item.slug}>
              <ExhibitionTitle>{item.title}</ExhibitionTitle>
            </ExhibitionLink>
            <Image fluid={item.mynd.fluid} />
          </ExhibitonItem>
        ))}
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  current: state.venueReducer.current,
})

export default connect(mapStateToProps)(CurrentExhibitions)
