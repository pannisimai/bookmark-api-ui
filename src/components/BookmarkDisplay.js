import React, { Component } from "react";
import { Consumer } from "./Context";
import "../styles/BookmarkDisplay.scss";

export default class BookmarkDisplay extends Component {
  render() {
    return (
      <div className="col-8 bookmark-display">
        <Consumer>
          {({ selectedBookmark }) => {
            if (selectedBookmark) {
              return (
                <div className="bookmark-display-container">
                  <div className="bookmark-disp-text">
                    <p>{selectedBookmark.title}</p>
                    <p>{selectedBookmark.shortDescription}</p>
                    <a
                      href={selectedBookmark.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {selectedBookmark.url}
                    </a>
                    <button type="button" className="btn btn-dark">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          }}
        </Consumer>
      </div>
    );
  }
}
