import React, { Component } from "react";
import { Consumer } from "./Context";
import Header from "./Header";
import BookmarkDisplay from "./BookmarkDisplay";
import BookmarkList from "./BookmarkList";

export default class Main extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="container page-wrap">
              <div className="row">
                <Header />
              </div>
              <div className="row bookmark-container">
                <BookmarkList />
                <BookmarkDisplay />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
