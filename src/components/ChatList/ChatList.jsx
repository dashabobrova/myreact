import React from "react";
import { Link } from "react-router-dom";
import { chatsConnect } from "../../connects/chats/chatsConnect";
/* import {shape, string, number} from 'prop-types'; - включено в import propTypes from 'prop-types', начиная с react 15.5 */
import propTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { createRemoveChat } from "../../store/chats";

// chats и removeChat - в коннекторе 
/* добавляется Render, чтобы отметить, что это чистый компонент без хоков. 
Дальше Render передается в Connect и сохраняю в ChatList, который дальше будет использоваться в приложении */
export const ChatListRender = ({chats}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {
                chats.map(({title,id}) => <Link to={`/chatpage/${id}`} key={id}>
                        <div>{title}</div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            dispatch(createRemoveChat(id))
                        }}>x</button>       
                    </Link>
                )
            }
        </div>
    )
}

ChatListRender.propTypes = {
    chats: propTypes.arrayOf(propTypes.shape({
        // id: propTypes.number, 
        title: propTypes.string
    })),
    removeChat: propTypes.func,
}

export const ChatList = chatsConnect(ChatListRender)