import { useState } from "react"

export const useAddRemoveChat = () => {
    const [chatList, setChatList] = useState([]) 

    const createChat = (newChat) => {
      setChatList([...chatList, newChat])
    }

    const removeChat = (chat) => {
      setChatList(chatList.filter(p => p.id !== chat.id))
    } 

    return [
      chatList,
      {
        createChat,
        removeChat,
        setChatList
      }
    ]
}