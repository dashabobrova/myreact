import React from "react";
import propTypes from 'prop-types';
import { useSelector } from "react-redux";
import { messagesSelectors } from "../../store/messages";
import { useParams } from "react-router";
import s from './MessageItem.module.scss';

export const MessageList = () => {
let {chatId} = useParams();
const messages = useSelector(state => messagesSelectors.getMessage(state, chatId));

    return (
        <div>
            {
                messages?.map (({author, message, id}) => 
                    <div className={s.message}>
                    <div key={id} className={s.message__content}>
                        <strong>
                            <span className={s.message__content__author}>{author}</span><br />
                                {message}
                        </strong>
                    </div>
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
