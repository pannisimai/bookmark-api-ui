import React, { Component } from "react";
import BookmarkItem from "./BookmarkItem";
import { Consumer } from "./Context";
import "../styles/BookmarkList.scss";
import AddBookmark from "./AddBookmark";

export default class BookmarkList extends Component {
  state = {
    addBookmarkModal: false
  };
  toggle = () => {
    console.log("toggle function workssss");
    this.setState({
      addBookmarkModal: !this.state.addBookmarkModal
    });
  };

  render() {
    return (
      <Consumer>
        {({ showdetailsFunc, bookmarks }) => {
          return (
            <div className="col-4 bookmark-list container">
              <ul>
                <h5 className="yourbookmarks-h5">Your bookmarks</h5>
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
                  + Add Bookmark{" "}
                </li>
              </ul>
              <AddBookmark
                addBookmarkModal={this.state.addBookmarkModal}
                toggle={this.toggle}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
