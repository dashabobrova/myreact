import React from "react";
import style from './MyInput.module.scss';

export const MyInput = (props) => {
    return (
        <input {...props} className={style.myInput}/>
    )
}