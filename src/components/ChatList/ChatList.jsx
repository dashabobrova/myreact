import React from "react";
import { Link } from "react-router-dom";
import { chatsConnect } from "../../connects/chats/chatsConnect";
/* import {shape, string, number} from 'prop-types'; - включено в import propTypes from 'prop-types', начиная с react 15.5 */
import propTypes from 'prop-types'

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

// нужен ли <Link to={`/chatpage/${id}`} ? по идее да - так переходим к чату по индексу