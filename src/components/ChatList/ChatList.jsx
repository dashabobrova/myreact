import React, { useState } from "react";
import { ChatItem } from "../ChatItem/ChatItem";
import { List } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Chat } from "../../pages/Chat/Chat";
import { Route } from "react-router-dom";

export const ChatList = () => {
    const [chatList] = useState([
        {id:'1', name:'Masha'},
        {id:'2', name:'Petya'},
        {id:'3', name:'Vanya'}
    ])

    return (
        <List>
        
        <Route path='/chatpage/:chatId'>
            <Chat chatList={chatList}/>
        </Route>

           { 
                chatList.map((chat) => 
                        <Link to={`/chatpage/${chat.id}`} key={chat.id}>
                            <ChatItem chat={chat}></ChatItem>
                        </Link>
                )
           }

        </List>
    )
}