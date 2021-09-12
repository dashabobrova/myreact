import React from "react";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { chatsSelectors } from "../../store/chats";
import { chatsApi } from "../../api/request/chats";

export const ChatList = () => {
    
    const chats = useSelector(chatsSelectors.getChats);
    
    return (
        <div>
            {
                chats.map(({title,id}) => <Link to={`/chatpage/${id}`} key={id}>
                        {title}
                        <button onClick = {(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                            chatsApi.delete(id);
                        }}>х</button><br />
                    </Link>
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
