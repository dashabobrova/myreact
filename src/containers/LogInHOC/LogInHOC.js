import React from "react";
import { useLoginState } from "../../hooks/useLoginState.js";
import { LogIn } from "../../pages/logIn/logIn.jsx";

// АВТОРИЗАЦИЯ (контейнер) 
export const LogInHOC = () => {
  
    const {email, password, error, setPassword, setEmail, handleSubmit} = useLoginState();

    return <LogIn setEmail={setEmail} setPassword={setPassword} email={email} password={password} error={error} handleSubmit={handleSubmit}/> 
  }