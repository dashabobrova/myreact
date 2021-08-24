import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@material-ui/core';
import { ChatList } from "../../components/ChatList/ChatList";
import { ChatForm } from '../../components/ChatForm/ChatForm';
import { Route } from "react-router";
import { Chat } from "../Chat/Chat";
import s from './ChatPage.module.scss'

export const ChatPage = (props) => {
    const theme = createTheme({ //тема material UI
        palette: {
          primary: {
            main: '#ff0000'
          },
        }
      })

    const [chatList, setChatList] = useState([ //изначально сделать пустым
      {id:Date.now(), name:'Катя'},
    ])

    const createChat = (newChat) => {
      setChatList([...chatList, newChat])
    }

    const removeChat = (chat) => {
      setChatList(chatList.filter(p => p.id !== chat.id))
    }

    return (
      <ThemeProvider theme={theme}>

        <div className={s.chatpage_container}>

          <div className={s.chatpage_container_left}>
            <ChatForm create={createChat}/>
            <ChatList remove={removeChat} chatList={chatList} setChatList={setChatList}/>
          </div>

          <div className={s.chatpage_container_right}>
              <Route to={'/chats/:chatId'}>
                <Chat/>
              </Route>
          </div>

        </div>
      </ThemeProvider>
    )
}