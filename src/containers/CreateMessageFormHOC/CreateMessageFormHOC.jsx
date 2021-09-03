import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateMessageForm } from "../../components/CreateMessageForm/CreateMessageForm";
import { addBotMessageWithThunk } from "../../store/messages";


export const CreateMessageFormHOC = ({chatId}) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState({ text: '' });

    const userName = 'me';

    const onSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            ...value,
            chatId,
            id: Date.now().toString(),
            content: value.text,
            author: userName
        }

        dispatch(addBotMessageWithThunk(chatId, newMessage))
        setValue({ text: '' })
    };

    const onChange = (e) => {
        setValue({ ...value, text: e.target.value });
    }

    return <CreateMessageForm value={value} onChange={onChange} onSubmit={onSubmit} /> 
}