import React from "react"
import "./index.css"

export default props => (
  <div
    style={{ backgroundImage: `url(${props.image})` }}
    className="Event-block"
  >
    <div className="Event-info-container">
      <h1 className="Event-title">{props.title}</h1>
      <p className="Event-days">{props.time}</p>
      <em className="Event-location">@ {props.location}</em>
    </div>
  </div>
)
