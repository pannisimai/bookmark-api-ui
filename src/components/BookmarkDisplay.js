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
                    {selectedBookmark.title && (
                      <p>Title: {selectedBookmark.title}</p>
                    )}
                    {selectedBookmark.shortDescription && (
                      <p>Description: {selectedBookmark.shortDescription}</p>
                    )}
                    {selectedBookmark.url && (
                      <a
                        href={selectedBookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {selectedBookmark.url}
                      </a>
                    )}
                    <div>
                      <button type="button" className="btn btn-dark">
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </div>
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
