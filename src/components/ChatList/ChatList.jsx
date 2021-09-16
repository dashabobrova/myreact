import React from "react";
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { chatsSelectors } from "../../store/chats";
import { ChatItem } from "../ChatItem/ChatItem";

export const ChatList = () => {
    
    const chats = useSelector(chatsSelectors.getChats);
    
    return (
        <div>
            {
                chats.map(({title,id}) => <ChatItem title={title} id={id} key={id}/>
                )
            }
        </div>
    )
}

ChatList.propTypes = {
    chats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string, 
        title: propTypes.string
    })),
    removeChat: propTypes.func,
}
