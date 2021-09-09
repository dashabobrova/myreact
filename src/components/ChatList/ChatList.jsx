import React from "react";
import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import { /* useDispatch,  */useSelector } from 'react-redux';
/* import { createRemoveChat } from "../../store/chats"; */
import { chatsSelectors } from "../../store/chats";

export const ChatList = () => {
    
    /* const dispatch = useDispatch() */
    const chats = useSelector(chatsSelectors.getChats);
    
    return (
        <div>
            {
                chats.map(({title,id}) => <Link to={`/chatpage/${id}`} key={id}>
                        <div>{title}</div>
{/*                         <button onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            dispatch(createRemoveChat(id))
                        }}>x</button>      */}  
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
