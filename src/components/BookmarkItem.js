import React, { Component } from 'react'
import { Consumer } from "./Context"

export default class BookmarkItem extends Component {
  render() {
    return (
      <React.Fragment>
        <Consumer>
          {value => (
            <li onClick={() => value.showdetailsFunc(this.props.data.title)}>{this.props.data.title}</li>
          )}
        </Consumer>
      </React.Fragment>
    )
  }
}
