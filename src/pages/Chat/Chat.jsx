import React from "react";
import { Redirect, useParams } from "react-router-dom";

export const Chat = ({chatList}) => {
    const {chatId} = useParams();

    const currentChat = chatList.find(({id}) => String(id) === chatId);
    // String(id) - преобразование числа в строку для корректного отображения url

    // корректное поведение при отсутствии искомого чата
    if(!currentChat){
        return <Redirect to='/chatpage'/>
    }

    return (
            <p>
                {/* Здесь выводить сообщения */}
                {currentChat.name}: {currentChat.id}
            </p>
    )
}
