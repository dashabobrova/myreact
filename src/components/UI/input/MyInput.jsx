import React from "react";
import TextField from "@material-ui/core/TextField";

export const MyInput = (props) => {
    return (
        <TextField color='primary'
            inputRef={input => input && input.focus()} //  автофокус при открытии стр и после отправки сообщения
            /* autoFocus и autoFocus={true} не работает при отправке сообщения - только при открытии страницы*/
            {...props}
        />
    )
}