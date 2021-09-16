import React from "react";
import { Link } from "react-router-dom";
import { chatsApi } from "../../api/request/chats";


export const ChatItem = ({id, title}) => {
    return (
        <Link to={`/chatpage/${id}`} >
        {title}
        <button onClick = {(event) => {
            event.stopPropagation();
            event.preventDefault();
            chatsApi.delete(id);
        }}>х</button><br />
    </Link>
    )
}