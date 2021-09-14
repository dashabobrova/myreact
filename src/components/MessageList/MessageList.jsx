import React from "react";
import propTypes from 'prop-types';
import { useSelector } from "react-redux";
import { messagesSelectors } from "../../store/messages";
import { useParams } from "react-router";
import { MessageItem } from "../MessageItem/MessageItem";

export const MessageList = () => {
let {chatId} = useParams();
const messages = useSelector(state => messagesSelectors.getMessage(state, chatId));

    return (
        <div>
            {
                messages?.map (({author, message, id}) => 
                    <MessageItem author={author} message={message} id={id} />
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
