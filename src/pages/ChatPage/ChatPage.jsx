import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core';
import { ChatList } from "../../components/ChatList/ChatList";
import { ChatForm } from '../../components/ChatForm/ChatForm';
import { Route } from "react-router";
import { Chat } from "../Chat/Chat";
import s from './ChatPage.module.scss'
import { useAddRemoveChat } from "../../hooks/useAddRemoveChat/useAddRemoveChat";

export const ChatPage = (props) => {
    const theme = createTheme({ //тема material UI
        palette: {
          primary: {
            main: '#ff0000'
          },
        }
      })

    const [chatList, { createChat, removeChat, setChatList }]= useAddRemoveChat();

    return (
      <ThemeProvider theme={theme}>
        <div className={s.chatpage_container}>
          <div className={s.chatpage_container_left}>
            <ChatForm create={createChat}/>
            <ChatList remove={removeChat} chatList={chatList} setChatList={setChatList} />
          </div>

          <div className={s.chatpage_container_right}>
              <Route path={'/chatpage/:chatId'}>
                <Chat/>
              </Route>
          </div>
        </div>
      </ThemeProvider>
    )
}