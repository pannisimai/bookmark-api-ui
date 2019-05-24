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
                    {selectedBookmark.title && (
                      <p className="bookmark-detail">
                        <p className="red-details">Title</p>{" "}
                        {selectedBookmark.title}
                      </p>
                    )}
                    {selectedBookmark.shortDescription && (
                      <p className="bookmark-detail">
                        <p className="red-details">Description</p>{" "}
                        {selectedBookmark.shortDescription}
                      </p>
                    )}
                    {selectedBookmark.url && (
                      <a
                        href={selectedBookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bookmark-detail"
                      >
                        <p className="red-details">URL</p>{" "}
                        {selectedBookmark.url}
                      </a>
                    )}
                  </div>
                  <div className="bookmark-display-button-container">
                    <button
                      onClick={() => deleteFunc(selectedBookmark._id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button type="button" className="btn btn-dark">
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
