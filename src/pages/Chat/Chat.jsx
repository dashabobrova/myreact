import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { MessageForm } from "../../components/MessageForm/MessageForm";
import { MessageList } from "../../components/MessageList/MessageList";
import { useBotMessage } from "../../hooks/useBotMessage/useBotMessage";
import { useAddMessage } from "../../hooks/useAddMessage/useAddMessage";
import { usePrevState } from "../../hooks/usePrevState/usePrevState";

export const Chat = () => {
    const userName = 'Me'; 
    const botName = 'bot';

    const [messageList, text, { setMessageList, setText, onSubmit } ]  = useAddMessage(userName);
    useBotMessage(messageList, setMessageList, botName, userName);  

    const [chatСache, setChatСache] = useState([]); 
 /* структура кэша   
    [
        { 
            id: '', 
            message: [id:'', author:'', text:''] 
        }
    ]  
*/

    const {chatId} = useParams(); // id из url
    
    const prevChatId = usePrevState(chatId);

    const findChatById = (chatList, chatId) => {
        return chatList.find(({id}) => id === chatId)
    }

    const findChatIndexById = (chatList, chatId) => {
        return chatList.findIndex(({id}) => id === chatId)
    }

    useEffect(() => {
    // начало (логика записи предыдущего чата в кэш (чтобы при повторном переходе в этот чат сохранялись сообщения))
        // есть предыдущий чат в кэше? 
        if(prevChatId){ //Да
            const foundPrevChatIndexById = findChatIndexById(chatСache, prevChatId); // поиск индекса предыдущего чата в кэше
            //индекс предыдущего чата в кэше >= 0 ?
                if(foundPrevChatIndexById >= 0) { //Да
                    const сhatСacheItem = [...chatСache]; //копирование кэша в единицу кэша
                    сhatСacheItem[foundPrevChatIndexById].message = messageList; //запись сообщений найденной единицы кэша в массив сообщений
                    setChatСache(сhatСacheItem); // обновление кэша: теперь в нем хранится обновленный кэш
                }
        }
    // конец

    // начало (логика наполнения открытого элемента кэша)
        // есть открытый чат?
        if(!chatId){ // нет
            return  // дальше не идем
        }

        const foundCashChatById = findChatById(chatСache, chatId); // поиск открытого чата в кэше
        
        // открытый чат уже есть в кэше?
        if(foundCashChatById){ // да
            setMessageList(foundCashChatById.message) // запись в стэйт сообщений массива сообщений найденного элемента кэша
        } else { // нет
            const сhatСacheItem = { // создание нового эемента в кэше
                id: chatId, // id = актуальному id из url
                message:[] // массив сообщений пока пуст
            }

            setChatСache([...chatСache, сhatСacheItem]) // запись нового элемента (список сообщений еще пуст) в кэш
            setMessageList([]) // обновление списка сообщений (очищение)
        }
        //дальше заного проход по всему алгоритму (проверка, уже есть открытый чат в кэше?)
    //конец
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatId])
    

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