import React from "react";
import { ChatItem } from "../ChatItem/ChatItem";
import { List } from "@material-ui/core";

import { Chat } from "../../pages/Chat/Chat";
import { Route } from "react-router-dom";

export const ChatList = ({chatList, remove}, {setChatList}) => {
    return (
        <List>

           { 
                chatList.map((chat) => 
                    <>
                            <ChatItem remove={remove} chat={chat} key={chat.id}></ChatItem>
                           
                    </>
                )
           }

        <Route path='/chatpage/:chatId'>
            <Chat chatList={chatList}/>
        </Route>

        </List>
    )
}