import React from "react";
import "../styles/App.scss";
import { Consumer } from "./Context";

function App() {
  return (
    <Consumer>
      {value => {
        return <h3>Hello from App</h3>
      }}
    </Consumer>
  );
}

export default App;