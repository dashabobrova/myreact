import React, { useState } from "react";
import { useParams } from "react-router";
import { messagesApi } from "../../api/request/messages";
import { CreateMessageForm } from "../../components/CreateMessageForm/CreateMessageForm";

export const CreateMessageFormHOC = () => {
    const {chatId} = useParams();
  
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
  
    const handleEmailChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const newMessage = {
        message: content,
        author: 'me',
        chatId,
      }
      
      try {
        await messagesApi.create(newMessage, chatId)
      } catch (e){
        setError(e);
      }
      setContent('');
      
    };

    return <CreateMessageForm content={content} error={error} handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} /> 
}