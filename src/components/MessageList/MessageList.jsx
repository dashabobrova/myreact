import React from "react";
import { MessageItem } from '../MessageItem/MessageItem';

export const MessageList = ({messageList}) => {
    return (
    <div>
        {messageList.map ( (message, index) => 
            <MessageItem /* number={index + 1} */ message={message} key={message.id}/>
        )}
    </div>
    )
}