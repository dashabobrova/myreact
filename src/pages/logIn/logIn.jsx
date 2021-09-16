import React from 'react';
import {Link} from "react-router-dom";

// АВТОРИЗАЦИЯ (презентационный) 

export const LogInIDs = {
  title: 'LogIn_title',
  paragraph1: 'LogIn_paragraph1',
  paragraph2: 'LogIn_paragraph2',
  button: 'LogIn_buttonName',

  logInField: 'LogIn-logInField',
  passwordField: 'LogIn-passwordField',
}

/* <form onSubmit={e => {
  e.preventDefault();
  props.addItem('test');
}> */

export const LogIn = ({email, password, error, handleSubmit, setEmail, setPassword}) => {
  return (
    <div>
    <h2 data-testid={LogInIDs.title}>Authorization</h2>
    <form onSubmit={e => 
      { e.preventDefault(); 
      handleSubmit()}} >
      <p data-testid={LogInIDs.paragraph1}>Fill in the form below to register new account.</p>
      <div>
      <input 
          placeholder="Email" 
          name="email" 
          type="email" 
          onChange={(e) => {  
            setEmail(e.target.value);  
          }} 
          value={email} 
          data-testid={LogInIDs.logInField} 
        />
      </div>
      <div>
        <input
          placeholder="Password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          data-testid={LogInIDs.passwordField}
        />
      </div>
      <div>
        {error && <p>{error.toString()}</p>}
        <button type="submit" data-testid={LogInIDs.button} >Login</button>
      </div>
      <hr />
      <p data-testid={LogInIDs.paragraph2}>
        No account yet? 
        <Link to="/signUp">Registration</Link>
      </p> 
    </form>
  </div>
  );
};