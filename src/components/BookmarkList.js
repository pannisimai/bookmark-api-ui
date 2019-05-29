import React, { Component } from "react";
import BookmarkItem from "./BookmarkItem";
import { Consumer } from "./Context";
import "../styles/BookmarkList.scss";
import AddBookmark from "./AddBookmark";

export default class BookmarkList extends Component {
  render() {
    return (
      <Consumer>
        {({
          showdetailsFunc,
          bookmarks,
          toggle,
          addBookmarkModal,
          createNewBookmark
        }) => {
          console.log(toggle);
          return (
            <div className="col-4 bookmarklist">
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
                <li className="add-bookmark-li" onClick={this.toggle}>
                  + Add Bookmark
                </li>
              </ul>
              <AddBookmark
                addBookmarkModal={addBookmarkModal}
                toggle={toggle}
                createNewBookmark={createNewBookmark}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
