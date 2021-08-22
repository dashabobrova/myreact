import React from "react";
import TextField from "@material-ui/core/TextField";

export const MyInput = (props) => {
    return (
        <TextField color='primary'
            /* inputRef={input => input && input.focus()} */ //  автофокус при открытии стр и при любом событии на странице
                    /* настроить useEffect так, чтобы при изменении стейта сообщений 
                    и при перезагрузке страницы был автофокус, а не на любое событие на страница */
            /* autoFocus и autoFocus={true} не работает при отправке сообщения - только при открытии страницы*/
            autoFocus
            {...props}
        />
    )
} 