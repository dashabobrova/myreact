import React, { useState } from "react";
import { useHistory } from "react-router";
import { chatsApi } from "../../api/request/chats.js";
import { CreateChatForm } from '../../components/CreateChatForm/CreateChatForm.jsx'

export const CreateChatFormHOC= () => {
    const {push} = useHistory();

    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTitle('');

        try {
        await chatsApi.create(title)
        push('/chatpage')
        } catch (e){
        setError(e);
        }

    };
    
  
    return <CreateChatForm handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} title={title} error={error}/> 
  }