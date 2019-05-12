import React from "react"

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <div>
        <h1>HELLO POST</h1>
      </div>
    )
  }
}

export default PostTemplate
