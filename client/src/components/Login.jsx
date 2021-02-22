import React from 'react';

const Login = props => (
  <div>
    <form>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" onChange={props.handleChange}></input>
      <label htmlFor="password"  name="password">Password: </label>
      <input type="text" name="password" onChange={props.handleChange}></input>
      <button>Log In</button>
    </form>
  </div>
);

export default Login;