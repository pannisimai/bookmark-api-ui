import React from "react";
import "../styles/App.scss";
import { Consumer } from "./Context";
import Auth from "./Auth";

function App() {
  return (
    <Consumer>
      {value => {
        return <Auth />
      }
      }
    </Consumer>
  );
}

export default App;