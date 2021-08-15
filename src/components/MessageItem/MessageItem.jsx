import React from "react";
import style from './MessageItem.module.scss';

export const MessageItem = (props) => {
    return (
    <div className={style.message}>
        <div className={style.message__content}>
            <strong>
                <span className={style.message__content__author}>{props.message.author}</span><br />
                    {/* message number: {props.number}<br /> */}
                    {props.message.text}
            </strong>
        </div>
    </div>
    )
}