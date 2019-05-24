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

  createNewBookmark = bookmarkDetails => {
    const {
      bookmarkTitle: title,
      bookmarkDescription: shortDescription,
      bookmarkUrl: url
    } = bookmarkDetails;
    const token = localStorage.getItem("userToken");
    const slicedToken = token.slice(1, token.length - 1);
    // API returns a token with double double quotes - that's why the slice - might change when we work out of local storage
    console.log(token.slice(1, token.length - 1));
    fetch("/api/bookmarks", {
      method: "POST",
      withCredentials: true,
      credentials: "include",
      body: JSON.stringify({ title, shortDescription, url }),
      headers: {
        "Content-Type": "application/json",

        token: slicedToken
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("saved bookmark", data);
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
                createNewBookmark={this.createNewBookmark}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
