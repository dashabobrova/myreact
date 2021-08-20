import { useEffect } from 'react';

export const useBotMessage = (messageList, setMessageList, botName, userName) => {

    useEffect(() => {
        if(messageList.length>0) {
          if(messageList[messageList.length-1].author === userName){
            const newMessage = {
              id: Date.now(),
              text: 'сообщение от бота',
              author: botName,
            } 
            setTimeout(() =>setMessageList([...messageList, newMessage]), 1500)
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [messageList])

}