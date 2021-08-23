import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
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
    /* как сохранить список сообщений текущего открытого чата в сторе где ты связываешь чат и его сообщения */
    
    useEffect(() => {
        const searchById = (chat) => { // делаешь поиск есть ли в allChats отрытый чат
            setAllChats(allChats.filter(p => p.chatId !== chat.id))
        }
        
        if(!searchById) { // если нет, то создай и присвой в стор messageList пустой массив
            setMessageList([])
        } if (searchById) { // если есть то присвой список сообщений чата в стор messageList 
            setMessageList([...messageList, allChats])
        }

        const newAllChat = { 
            id: chatId, 
            message: allChats.message
        } 

        setAllChats([...allChats, newAllChat])

    }, [chatId]); //при открытии чата

/* 
1. найти по id старого чата объект в allChats
2. присвой ему весь список сообщений этого чата
3. сбрось список сообщений в сторе messageList */

/*     useEffect(() => {        
        const oldChatId = allChats.find( ({oldChat}) => oldChat.id === chatId);
        oldChatId =  allChats.messageList;

        setMessageList([])
    }, [allChats]); // При изменении чата
 
 */

    const currentChat = chatList.find(({id}) => String(id) === chatId);
    // String(id) - преобразование числа в строку для корректного отображения url

    // корректное поведение при отсутствии искомого чата
    if(!currentChat){
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