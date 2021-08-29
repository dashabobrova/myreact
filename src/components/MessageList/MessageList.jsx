import React from "react";
import propTypes from 'prop-types'
import { messagesConnect } from "../../connects/messages/messagesConnect";
import { MessageItem } from "../MessageItem/MessageItem";

export const MessageListRender = ({messages}) => {
    return (
    <div>
        {
            messages?.map (({content, id, author}) => <MessageItem content={content} id={id} author={author} key={id}/>)
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