import React, { useState } from "react";
import { ChatItem } from "../ChatItem/ChatItem";
import { List } from "@material-ui/core";

export const ChatList = () => {
    const [chatList] = useState([
        // setChatList (сеттер) пока не пишу, т.к. список пока не несет никакой функциональности
        {id:1, name:'Masha'},
        {id:2, name:'Petya'},
        {id:3, name:'Vanya'}
    ])

 /*    Нужно использовать List !!!!!! */

    return (
        <List>
        
           { 
                chatList.map((chat) => 
                 
                        <ChatItem key={chat.id} chat={chat}></ChatItem>
                  
                )
           }
        
        </List>
    )
}