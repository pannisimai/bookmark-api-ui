import React, { Component } from "react";
import { Consumer } from "./Context";
import "../styles/BookmarkDisplay.scss";

export default class BookmarkDisplay extends Component {
  render() {
    return (
      <div className="col-8 bookmark-display">
        <Consumer>
          {({ selectedBookmark, deleteFunc }) => {
            if (selectedBookmark) {
              return (
                <div className="bookmark-display-container">
                  <div className="bookmark-display-text">
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
                  </div>
                  <div className="bookmark-display-button-container">
                    <button
                      onClick={() => deleteFunc(selectedBookmark._id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button type="button" className="btn btn-info">
                      Edit
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
