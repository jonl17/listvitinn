import React from "react"
import EventBlock from "../EventBlock"
import { calculateTime, filterExhibitions } from "../../helpers/index"
import { initExhibitions } from "../../state/actions"
import { connect } from "react-redux"

/* 
  this component will receive a list of events 
  containing: image, title,
  event duration, etc...
*/
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
          <EventBlock
            key={index}
            title={item.node.title}
            location={item.node.stadur.title}
            time={calculateTime(item.node.opnun, item.node.lokun)}
            image={item.node.mynd}
            slug={item.node.slug}
          />
        ))}
      </>
    )
  }
}

const mapStateToProps = state => ({
  exhibitions: state.reducers.exhibitions,
  filter: state.reducers.exhibitionFilter,
})

export default connect(mapStateToProps)(ExhibitionContainer)
