import React, { Component } from 'react';
import { Consumer } from "./Context"

export default class BookmarkDisplay extends Component {
  render() {
    return (
      <div className="col-8 bookmarkdisplay">
        <div className="country-display-container">
          <Consumer>
            {({ selectedBookmark }) => {
              if (selectedBookmark) {
                return (< div className="country-disp-text">
                  <p>{selectedBookmark.title}</p>
                  <p>{selectedBookmark.shortDescription}</p>
                  <a href={selectedBookmark.url} target="_blank" rel="noopener noreferrer"> {selectedBookmark.url}</a>
                  <button type="button" className="btn btn-danger">Delete</button>
                  <button type="button" classname="btn btn-info">Edit</button>
                </div>)
              }
            }}
          </Consumer>

        </div>
      </div >
    )
  }
}
