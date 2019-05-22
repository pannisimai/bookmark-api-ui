import React, { Component } from 'react'
export const { Provider, Consumer } = React.createContext();

export default class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      isLoggedIn: false
    }
  }

  render() {
    return (
      <Provider value={{
        ...this.state
      }} >
        {this.props.children}
      </Provider>
    )
  }
}
