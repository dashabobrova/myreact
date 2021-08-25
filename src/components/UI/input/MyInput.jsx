import React from "react";
import TextField from "@material-ui/core/TextField";

export const MyInput = (props) => {
    return (
        <TextField color='primary'
            inputRef={input => input && input.focus()} // автофокус при изменении стейта сообщений и при загрузке страницы
            {...props}
        />
    )
} 