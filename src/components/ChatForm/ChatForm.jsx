import React, { useState } from "react";
import { ChatInput } from "../UI/ChatInput/ChatInput";
import { ChatButton } from "../UI/ChatButton/ChatButton";

export const ChatForm = ({create}) => {
    const [chat, setChat] = useState({chatTitle:''});

    const addNewChat = (e) => {
        e.preventDefault();
        /* setChatList([...chatList, {...chat, id: Date.now(), name: chat.chatTitle}]); */
        const newChat = {
            ...chat, id: Date.now(), name: chat.chatTitle
        }
        create(newChat)
        setChat({chatTitle:''})
    }

    return (
        <>
        <ChatInput 
          value={chat.chatTitle}
          onChange={e => setChat({...chat, chatTitle: e.target.value})}
          type='text' 
          placeholder='Название чата'
        />
        <ChatButton onClick={addNewChat}>Добавить чат</ChatButton>
      </>
    )
}