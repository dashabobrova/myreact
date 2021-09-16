import { useState } from "react";
import { useHistory } from "react-router";
import { userApi } from "../api/request/user";

export const useLoginState = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {push} = useHistory();

    const handleSubmit = async () => {
        setError(null);
    
        try {
          await userApi.login(email, password);
          push('/chatpage');
        } catch (e) {
          setError(e);
        }
    };

    return {
        email, 
        password, 
        error, 
        setError, 
        setPassword, 
        setEmail,
        handleSubmit
    }
}