import React from "react";
import style from './MyButton.module.scss';

export const MyButton = ({children, ...props}) => {
    return (
    <button {...props} className={style.myBtn}>
        {children}
    </button>
    )
}