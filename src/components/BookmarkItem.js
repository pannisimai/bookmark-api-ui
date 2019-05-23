import React, { Component } from 'react'
import { Consumer } from "./Context"
import "../styles/BookmarkItem.scss";

export default class BookmarkItem extends Component {
  render() {
    const { showdetailsFunc, bookmark } = this.props;
    return (
      <React.Fragment>
        <li onClick={() => showdetailsFunc(bookmark.title)}>{bookmark.title}</li>
      </React.Fragment>
    )
  }
}
