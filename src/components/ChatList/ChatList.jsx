import React from "react";
import { ChatItem } from "../ChatItem/ChatItem";
import { List } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Chat } from "../../pages/Chat/Chat";
import { Route } from "react-router-dom";

export const ChatList = ({chatList}, {setChatList}) => {
    return (
        <List>

           { 
                chatList.map((chat) => 
                        <Link to={`/chatpage/${chat.id}`} key={chat.id}>
                            <ChatItem chat={chat}></ChatItem>
                        </Link>
                )
           }

        <Route path='/chatpage/:chatId'>
            <Chat chatList={chatList}/>
        </Route>

        </List>
    )
}