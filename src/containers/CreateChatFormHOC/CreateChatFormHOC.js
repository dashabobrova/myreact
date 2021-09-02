import React, { useState } from "react";
import { chatsConnect } from "../../connects/chats/chatsConnect";

export const CreateChatFormHOCRender = (Component) => {

    return ({addChats, ...rest}) => {
        // eslint-disable-next-line 
        const [value, setValue] = useState({text:''});

        const onSubmit = (e) => {
            e.preventDefault();
            const newChat = {
                ...value, 
                id: Date.now(), title: value.text
            }
            addChats(newChat)
            setValue({text:''})
        }

        const onChange = (e) => {
            setValue({...value, text: e.target.value})
        }

        return <Component value={value} onChange={onChange} onSubmit={onSubmit} {...rest}/>
    }
}

export const CreateChatFormHOC = chatsConnect(CreateChatFormHOCRender);
