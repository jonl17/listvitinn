import React from "react"
import { filterExhibitions } from "../../helpers/index"
import { initExhibitions } from "../../state/actions"
import { connect } from "react-redux"

/** components */
import Block from "./components/Block"

class ExhibitionContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      initExhibitions(this.props.queriedExhibitions, this.props.filter)
    )
  }
  render() {
    const { exhibitions, filter } = this.props
    return (
      <>
        {filterExhibitions(exhibitions, filter).map((item, index) => (
          <Block key={index} event={item.node} />
        ))}
      </>
    )
  }
}

const mapStateToProps = state => ({
  exhibitions: state.reducer.exhibitions,
  filter: state.reducer.exhibitionFilter,
})

export default connect(mapStateToProps)(ExhibitionContainer)
