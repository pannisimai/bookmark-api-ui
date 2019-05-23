import React, { Component } from 'react'
export const { Provider, Consumer } = React.createContext();

export default class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      selectedBookmark: null,
      isLoggedIn: false,
      user: '',
      password: ''
    }
  }

  handleChange = (type, e) => {
    if (type === 'name') {
      this.setState({ user: e.target.value })
    } else if (type === 'password') {
      this.setState({ password: e.target.value })
    }
  }


  handleLogin = (e) => {
    e.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        "loginData": {
          "username": this.state.user,
          "password": this.state.password
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('resolved login promise:', data);
        localStorage.setItem('userToken', JSON.stringify(data.data.token));
        if (data.data.token) {
          console.log('works')
          this.setState(state => ({ isLoggedIn: true }))
          alert('successful!') //<33
          this.bookmarksFetch();
        }
      })
  }


  handleRegister = (e) => {
    e.preventDefault();
    fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        "registerData": {
          "username": this.state.user,
          "password": this.state.password
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
    this.setState({ user: '', password: '' })
  }

  bookmarksFetch() {
    fetch('/api/bookmarks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': JSON.parse(localStorage.getItem('userToken'))
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data.bookmark)
        this.setState({ bookmarks: data.data.bookmark })
      })
  }

  //DELETE BOOKMARK
  // deleteFunc = (e) => {
  //   fetch('/api/bookmarks/5ce401549f5cd095775478e0', {
  //     method: 'DELETE',
  //     body: JSON.stringify(
  //         {
  //             "shortDescription": "new bookmark - edited",
  //             "url": "http://theinternet.web"
  //         }
  //     ),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNlM2ZlZWY5ZjVjZDA5NTc3NTQ3OGRmIiwiaWF0IjoxNTU4NDQ2Mjg3LCJleHAiOjE1NTg0NDk4ODd9.vHUIgkPrMcgzgu55GJV3LgufAgpAnWbMHGjcWc_guMU'
  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  //       }


  showdetailsFunc = title => {
    const clickedBookmark = title;
    const filter = this.state.bookmarks.filter(
      bookmark => bookmark.title === clickedBookmark
    );
    this.setState({ selectedBookmark: filter[0] });
    console.log(this.state.selectedBookmark)
  }


  render() {
    return (
      <Provider value={{
        ...this.state,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleChange: this.handleChange,
        showdetailsFunc: this.showdetailsFunc
      }} >
        {this.props.children}
      </Provider>
    )
  }
}
