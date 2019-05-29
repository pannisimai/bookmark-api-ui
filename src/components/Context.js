import React, { Component } from "react";
export const { Provider, Consumer } = React.createContext();

export default class AppContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      selectedBookmark: null,
      addBookmarkModal: false,
      // set to true if you want to permanently be logged in
      isLoggedIn: false,
      user: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        loginData: {
          username: "panni2",
          password: "123456789"
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("resolved login promise:", data);
        localStorage.setItem("userToken", JSON.stringify(data.data.token));
        if (data.data.token) {
          console.log("works");
          this.setState(state => ({ isLoggedIn: true }));
          // alert("successful!"); //<33
          this.bookmarksFetch();
        }
      });
  }

  // handleLogin = e => {
  //   e.preventDefault();
  //   fetch("/auth/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       loginData: {
  //         username: this.state.user,
  //         password: this.state.password
  //       }
  //     }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("resolved login promise:", data);
  //       localStorage.setItem("userToken", JSON.stringify(data.data.token));
  //       if (data.data.token) {
  //         console.log("works");
  //         this.setState(state => ({ isLoggedIn: true }));
  //         alert("successful!"); //<33
  //         this.bookmarksFetch();
  //       }
  //     });
  // };

  handleRegister = e => {
    e.preventDefault();
    fetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({
        registerData: {
          username: this.state.user,
          password: this.state.password
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
    this.setState({ user: "", password: "" });
  };

  bookmarksFetch() {
    fetch("/api/bookmarks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("userToken"))
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.data.bookmark);
        this.setState({ bookmarks: data.data.bookmark });
      });
  }

  deleteFunc = id => {
    fetch(`/api/bookmarks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("userToken"))
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ selectedBookmark: null });
      });
  };

  showdetailsFunc = title => {
    const clickedBookmark = title;
    const filter = this.state.bookmarks.filter(
      bookmark => bookmark.title === clickedBookmark
    );
    this.setState({ selectedBookmark: filter[0] });
    console.log(this.state.selectedBookmark);
  };

  //CREATE NEW BOOKMARKS
  createNewBookmark = bookmarkDetails => {
    console.log("works?");
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
        console.log(data);
      });
  };

  toggle = () => {
    console.log("toggle function workssss");
    this.setState({
      addBookmarkModal: !this.state.addBookmarkModal
    });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleChange: this.handleChange,
          showdetailsFunc: this.showdetailsFunc,
          deleteFunc: this.deleteFunc,
          createNewBookmark: this.createNewBookmark,
          toggle: this.toggle
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
