import React from 'react';
import { Consumer } from './Context';
import '../styles/Auth.scss';

export default function Auth() {
  return (
    <Consumer>
      {value => {
        const {
          handleChange,
          handleLogin,
          handleRegister,
          user,
          password,
        } = value;
        return (
          <div className='container auth-container'>
            <form className='auth-form'>
              <label>
                <input
                  type='text'
                  name='user'
                  value={user}
                  placeholder='Username'
                  required
                  className='form-control'
                  onChange={handleChange}
                />
              </label>
              <label>
                <input
                  type='password'
                  name='password'
                  value={password}
                  placeholder='Password'
                  required
                  className='form-control'
                  onChange={handleChange}
                />
              </label>
              <div>
                <input
                  type='submit'
                  value='Login'
                  className='btn btn-dark login-btn'
                  onClick={handleLogin}
                />
                <input
                  type='submit'
                  value='Register'
                  className='btn btn-dark submit-btn'
                  onClick={handleRegister}
                />
              </div>
            </form>
          </div>
        );
      }}
    </Consumer>
  );
}
