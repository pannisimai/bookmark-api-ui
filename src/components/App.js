import React from "react";
import "../styles/App.scss";
import { Consumer } from "./Context";
import Auth from "./Auth";
import Main from "./Main"

function App() {
  return (
    <Consumer>
      {value => {
        const { isLoggedIn } = value;
        return (
          <div>
            {isLoggedIn ? <Main /> : <Auth />}
          </div>
        )
      }
      }
    </Consumer>
  );
}

export default App;