import React, { Component } from "react";
import BookmarkItem from "./BookmarkItem";
import { Consumer } from "./Context";
import "../styles/BookmarkList.scss";

export default class BookmarkList extends Component {
  render() {
    return (
      <Consumer>
        {({ showdetailsFunc, bookmarks }) => {
          return (
            <div className="col-4 bookmark-list container">
              <h5>Your bookmarks:</h5>
              <ul>
                {bookmarks.map(bookmark => {
                  console.log(bookmark);
                  return (
                    <BookmarkItem
                      bookmark={bookmark}
                      showdetailsFunc={showdetailsFunc}
                      key={bookmark._id}
                    />
                  );
                })}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
