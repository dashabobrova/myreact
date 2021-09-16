import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { userApi } from '../../api/request/user';
import {Link} from "react-router-dom";

// РЕГИСТРАЦИЯ 

export const SignUp = () => {
  const {push} = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await userApi.registration(email, password);
      push('/logIn');
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      <h2>Registartion</h2>
      <form onSubmit={handleSubmit}>
        <p>Fill in the form below to register new account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p>{error.toString()}</p>}
          <button type="submit">Login</button>
        </div>
        <hr />
        <p>
          Already have an account? <Link to="/logIn">Log in</Link>
        </p> 
      </form>
    </div>
  );
};
