import React, { Component } from 'react'
export const { Provider, Consumer } = React.createContext();

export default class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
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
        alert('successful!')
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

  render() {
    return (
      <Provider value={{
        ...this.state,
        handleChange: this.handleChange,
        handleLogin: this.handleLogin,
        handleRegister: this.handleRegister
      }} >
        {this.props.children}
      </Provider>
    )
  }
}
