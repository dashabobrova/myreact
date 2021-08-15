import './App.scss';
import React from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { MessageForm } from './components/MessageForm/MessageForm.jsx';
import { useAddMessage } from './hooks/useAddMessage/useAddMessage';
import { useBotMessage } from './hooks/useBotMessage/useBotMessage'

const App = () => {
  const userName = 'Mary'; 
  const botName = 'bot';

  const [messageList, text, { setMessageList, setText, onSubmit } ]  = useAddMessage(userName);
  useBotMessage(messageList, setMessageList, botName, userName);

  return (
    <div className="App">
      <MessageForm onSubmit={onSubmit} text={text} setText={setText}/>
      <MessageList messageList={messageList}/>
    </div>
  );
}

export default App;