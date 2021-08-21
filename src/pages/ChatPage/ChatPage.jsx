import React from "react";
import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { ChatList } from "../../components/ChatList/ChatList";
import { MessageForm } from "../../components/MessageForm/MessageForm";
import { MessageList } from "../../components/MessageList/MessageList";
import { useAddMessage } from "../../hooks/useAddMessage/useAddMessage";
import { useBotMessage } from "../../hooks/useBotMessage/useBotMessage";

export const ChatPage = (props) => {
    const userName = 'Mary'; 
    const botName = 'bot';

    const [messageList, text, { setMessageList, setText, onSubmit } ]  = useAddMessage(userName);
    useBotMessage(messageList, setMessageList, botName, userName);

    const theme = createTheme({ //тема material UI
        palette: {
          primary: {
            main: '#ff0000'
          },
        }
      })
    
    return (
        <ThemeProvider theme={theme}>
    <div className='app_container'>
      <Grid container spacing={3} className="App" >

        <Grid item xs={2}>
          <ChatList />
        </Grid>

        <Grid item xs={6}>
          <Grid item xs={6}>
            <MessageForm onSubmit={onSubmit} text={text} setText={setText}/>
          </Grid>
          <Grid item xs={6}>
            <MessageList messageList={messageList}/>
          </Grid>
        </Grid>

      </Grid>
      </div>
      </ThemeProvider>
    )
}