import React from "react";
import propTypes from 'prop-types';
import { useSelector } from "react-redux";
import { messagesSelectors } from "../../store/messages";
import { useParams } from "react-router";

export const MessageList = () => {
let {chatId} = useParams();
const messages = useSelector(state => messagesSelectors.getMessage(state, chatId));

    return (
        <div>
            {
                messages?.map (({content, id}) => 
                <div key={id}>
                        {content}
                </div >
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
