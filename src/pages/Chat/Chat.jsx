import React from "react";
import { useParams } from "react-router-dom";

export const Chat = ({chatList}) => {
    const {chatId} = useParams();

    /* console.log(chatList); */

    const currentChat = chatList.find(({id}) => id === chatId);

    return (
        <div>
            {/* Chat: {chatId} */}
            <p>
                {currentChat.name}: {currentChat.id}
            </p>
        </div>
    )
}
