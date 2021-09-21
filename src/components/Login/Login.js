import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [sso, setSSO] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      sso
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          <input placeholder="SSO" type="text" onChange={e => setSSO(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h3>Log In with SSO</h3>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};