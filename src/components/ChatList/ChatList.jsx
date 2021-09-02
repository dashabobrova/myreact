import React from "react";
import { Link } from "react-router-dom";
import { chatsConnect } from "../../connects/chats/chatsConnect";
/* import {shape, string, number} from 'prop-types'; - включено в import propTypes from 'prop-types', начиная с react 15.5 */
import propTypes from 'prop-types'

// chats и removeChat - в коннекторе 
/* добавляется Render, чтобы отметить, что это чистый компонент без хоков. 
Дальше Render передается в Connect и сохраняю в ChatList, который дальше будет использоваться в приложении */
export const ChatListRender = ({chats, removeChat}) => {
    return (
        <div>
            {
                chats.map(({title,id}) => <Link to={`/chatpage/${id}`} key={id}>
                        <div>{title}</div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            removeChat(id)
                        }}>x</button>       
                    </Link>
                )
            }
        </div>
    )
}

ChatListRender.propTypes = {
    chats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        title: propTypes.string
    })),
    removeChat: propTypes.func,
}

export const ChatList = chatsConnect(ChatListRender)