import React from "react";
import { ChatItem } from "../ChatItem/ChatItem";
import { List } from "@material-ui/core";

export const ChatList = ({chatList, remove}/* , {setChatList} */) => {
    return (
        <List>

           { 
                chatList.map((chat) => 
                            <ChatItem remove={remove} chat={chat} key={chat.id}></ChatItem>
                )
           }

        </List>
    )
}