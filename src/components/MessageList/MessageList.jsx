import React from "react";
import propTypes from 'prop-types'
import { messagesConnect } from "../../connects/messages/messagesConnect";
import { MessageItem } from "../MessageItem/MessageItem";

// messages достаем в mapStateToProps в коннекторе и передаем в пропсы
/* добавляется Render, чтобы отметить, что это чистый компонент без хоков. 
Дальше Render передается в Connect и сохраняю в MessageList, который дальше будет использоваться в приложении */
export const MessageListRender = ({messages}) => {
    return (
        <div>
            {
                messages?.map (({content, id, author}) => <MessageItem content={content} author={author} key={id}/>)
            }
        </div>
    )
}

MessageListRender.propTypes = {
    messages: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        chatId: propTypes.string,
        content: propTypes.string,
        author: propTypes.string,
    }))
}

export const MessageList = messagesConnect(MessageListRender)