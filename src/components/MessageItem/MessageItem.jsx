import React from "react";
import s from './MessageItem.module.scss';

export const MessageItem = ({author, message}) => {
    return (
        <div className={s.message}>
                    <div className={s.message__content}>
                        <strong >
                            <span className={s.message__content__author}>{author}</span><br />
                                {message}
                        </strong>
                    </div>
                    </div>
    )
}