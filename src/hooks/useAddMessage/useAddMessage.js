
import { useState } from 'react';

export const useAddMessage = (userName) => {
  const [messageList, setMessageList] = useState([]) //стейт сообщений, который у каждого чата должен быть свой

  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: Date.now(),
      text,
      author: userName
    }
    setMessageList([...messageList, newMessage])
    setText('')
  }

  return [
    messageList,
    text,
    {
      setMessageList,
      setText,
      onSubmit
    }
  ]
}