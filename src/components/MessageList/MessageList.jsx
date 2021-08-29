import React from "react";
import propTypes from 'prop-types'
import { messagesConnect } from "../../connects/messages/messagesConnect";

export const MessageListRender = ({messages, ...rest}) => {
    console.log(messages, rest)
    return (
    <div>
        {
            messages?.map (({content, id, author}) => <li key={id}>
                {author}:
                {content}
            </li>)
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