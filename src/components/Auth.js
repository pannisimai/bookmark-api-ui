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
              <input type="text" name="name" value={user} required onChange={(e) => handleChange('name', e)} />
          </label>
          <label>
            Password:
    <input type="password" name="password" value={password} required onChange={(e) => handleChange('password', e)} />
          </label>
          <input type="submit" value="Login" onClick={handleLogin} />
          <input type="submit" value="Register" onClick={handleRegister} />
        </form>)
      }
      }
    </Consumer>

  )
}
