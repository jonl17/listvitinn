import React from "react"
import { connect } from "react-redux"
import {
  Container,
  ExhibitonItem,
  ExhibitionLink,
  ExhibitionTitle,
  Title,
  Image,
} from "./Styled"

const PastExhibitions = ({ past }) => {
  return (
    <>
      <Title>Past exhibitions:</Title>
      <Container>
        {past.map((item, index) => (
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
  past: state.venueReducer.past,
})

export default connect(mapStateToProps)(PastExhibitions)
