import React from "react";
import { Consumer } from "./Context";
import "../styles/Auth.scss";

export default function Auth() {
  return (
    <Consumer>
      {value => {
        const {
          handleChange,
          handleLogin,
          handleRegister,
          user,
          password
        } = value;
        return (
          <div className="auth-container">
            <form className="auth-form">
              <label>
                Username:
                <input
                  type="text"
                  name="name"
                  value={user}
                  placeholder="Username"
                  required
                  onChange={e => handleChange("name", e)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  required
                  onChange={e => handleChange("password", e)}
                />
              </label>
              <input type="submit" value="Login" onClick={handleLogin} />
              <input type="submit" value="Register" onClick={handleRegister} />
            </form>
          </div>
        );
      }}
    </Consumer>
  );
}
