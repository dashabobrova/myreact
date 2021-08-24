import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { MessageForm } from "../../components/MessageForm/MessageForm";
import { MessageList } from "../../components/MessageList/MessageList";
import { useBotMessage } from "../../hooks/useBotMessage/useBotMessage";
import { useAddMessage } from "../../hooks/useAddMessage/useAddMessage";

export const Chat = ({chatList}) => {
    const userName = 'Me'; 
    const botName = 'bot';

    const [messageList, text, { setMessageList, setText, onSubmit } ]  = useAddMessage(userName);
    useBotMessage(messageList, setMessageList, botName, userName);
    
// !!!!!!!!!!!!!! изменить allChats на intermediateChatStorage
    const [allChats, setAllChats] = useState([]); // [{ id: '', message: [] }]
  
    const {chatId} = useParams();

    useEffect(() => {
        const searchById = (chat) => { // поиск есть ли в allChats отрытый чат
            setAllChats(allChats.filter(p => p.chatId !== chat.id))
        }
        
        if(!searchById) { // если нет, то создай и присвой в стор messageList пустой массив
            const newAllChat = { 
                id: chatId, 
                message: []
            } 
            setAllChats([...allChats, newAllChat])
            setMessageList([])
        } if (searchById) { //  если чат в allChats есть, то нужно достать его список сообщений и затем присвоить в стор messageList
            const chatMessageList = allChats.message;
            setMessageList([...messageList, chatMessageList])
        }

    }, [chatId]); 

    useEffect(() => {        
        const oldChatId = allChats.find( ({oldChat}) => oldChat.id === chatId);
        oldChatId =  allChats.messageList;
 
        setAllChats([...allChats, messageList])

        setMessageList([])
        
    }, [allChats]); 


    if(!{chatId}){ // корректное поведение при отсутствии искомого чата
        return <Redirect to='/chatpage'/>
    }

    return (
        <>
                <MessageForm onSubmit={onSubmit} text={text} setText={setText}/>
                <MessageList messageList={messageList}/>
            
        </>
    )
}
/* 
<p>
{currentChat.name}: {currentChat.id}
</p> */