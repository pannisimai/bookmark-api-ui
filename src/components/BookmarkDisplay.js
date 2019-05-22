import React, { Component } from 'react';
import { Consumer } from "./Context"

export default class BookmarkDisplay extends Component {
  render() {
    return (
      <div className="col-8 bookmarkdisplay">
        <div className="country-display-container">
          <Consumer>
            {value => (
              <div className="country-disp-text">
                <p>{value.selectedBookmark.title}</p>
              </div>
            )}
          </Consumer>

        </div>
      </div>
    )
  }
}
