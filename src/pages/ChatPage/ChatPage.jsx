import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core';
import { ChatList } from "../../components/ChatList/ChatList";
import { Route } from "react-router";
import { Chat } from "../Chat/Chat";
import s from './ChatPage.module.scss';

import { CreateChatFormHOC } from "../../containers/CreateChatFormHOC/CreateChatFormHOC.jsx";

export const ChatPage = (props) => {
  const theme = createTheme({ //тема material UI
    palette: {
      primary: {
        main: '#ff0000'
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={s.chatpage_container}>
        <div className={s.chatpage_container_left}>
          <CreateChatFormHOC />
          <ChatList />
        </div>

        <div className={s.chatpage_container_right}>
          <Route path={'/chatpage/:chatId'}>
            <Chat />
          </Route>
        </div>
      </div>
    </ThemeProvider>
  )
}

