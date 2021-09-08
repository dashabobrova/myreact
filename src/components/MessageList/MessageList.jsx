import React from "react";
import propTypes from 'prop-types';
import { useSelector } from "react-redux";
import { messagesSelectors } from "../../store/messages";

export const MessageList = () => {
   

const messages = useSelector(messagesSelectors.getMessage)


    return (
        <div>
            {
                messages?.map (({content, id, author}) => 
                <div >
                        {author}:{content}
                </div>
                )
            }
        </div>
    )
}

MessageList.propTypes = {
    messages: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        chatId: propTypes.string,
        content: propTypes.string,
        author: propTypes.string,
    }))
}
