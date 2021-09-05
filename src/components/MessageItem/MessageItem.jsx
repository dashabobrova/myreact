import React from "react";
import { messagesConnect } from "../../connects/messages/messagesConnect";
import propTypes from 'prop-types';
import s from './MessageItem.module.scss';

// content, author пропсами передаются из MessageList; это ключи массива messages объекта messages в store
/* добавляется Render, чтобы отметить, что это чистый компонент без хоков. 
Дальше Render передается в Connect и сохраняю в MessageList, который дальше будет использоваться в приложении */
export const MessageItemRender = ({content, author}) => {
    return (
        <div className={s.message}>
        <div className={s.message__content}>
            <strong>
                <span className={s.message__content__author}>{author}</span><br />
                    {content}
            </strong>
        </div>
        </div>
    )
}
    MessageItemRender.propTypes = {
        messages: propTypes.arrayOf(propTypes.shape({
            id: propTypes.string,
            chatId: propTypes.string,
            content: propTypes.string,
            author: propTypes.string,
        }))
    }


export const MessageItem = messagesConnect(MessageItemRender)