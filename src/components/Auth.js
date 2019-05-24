import React from 'react';
import { Consumer } from "./Context";


export default function Auth() {
  return (
    <Consumer>
      {value => {
        const { handleChange, handleLogin, handleRegister, user, password } = value;
        return (<form>
          <label>
            Username:
              <input type="text" name="user" value={user} required onChange={handleChange} />
          </label>
          <label>
            Password:
    <input type="password" name="password" value={password} required onChange={handleChange} />
          </label>
          <input type="submit" value="Login" onClick={handleLogin} />
          <input type="submit" value="Register" onClick={handleRegister} />
        </form>)
      }
      }
    </Consumer>

  )
}
