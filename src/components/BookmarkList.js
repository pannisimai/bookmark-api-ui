import React, { Component } from 'react';
import BookmarkItem from "./BookmarkItem"
import { Consumer } from "./Context";

export default class BookmarkList extends Component {
  render() {
    return (
      <Consumer>
        {({ showdetailsFunc, bookmarks }) => {
          return (
            <div className="col-4 bookmarklist">
              <ul>
                {bookmarks.map((bookmark) => {
                  return <BookmarkItem
                    bookmark={bookmark}
                    showdetailsFunc={showdetailsFunc}
                    key={bookmark._id} />
                })}
              </ul>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
