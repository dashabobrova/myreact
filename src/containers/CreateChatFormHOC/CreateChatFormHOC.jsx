import React, { useState } from "react";
import { CreateChatForm } from "../../components/CreateChatForm/CreateChatForm.jsx";
import { useDispatch } from "react-redux";
import { createAddChat } from "../../store/chats/chatsActions";

// компонент высшего порядка возвращает компонент
export const CreateChatFormHOC= () => {

  // логика для формы добавления сообщения
  const [value, setValue] = useState({ text: '' });
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    const newChat = {
      ...value,
      id: Date.now().toString(),
      title: value.text
    }
    dispatch(createAddChat(newChat)) // вызов напрямую action'a - без коннектора
    setValue({ text: '' })
  }

  const onChange = (e) => {
    setValue({ ...value, text: e.target.value })
  }

  return <CreateChatForm value={value} onChange={onChange} onSubmit={onSubmit} /> 
}