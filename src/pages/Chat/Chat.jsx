import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { CreateMessageForm } from "../../components/CreateMessageForm/CreateMessageForm";
import { MessageList } from "../../components/MessageList/MessageList";
import { initMessagesTracking } from "../../store/messages";

export const Chat = (props) => {
    const {chatId} = useParams(); // id из url
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(initMessagesTracking(chatId));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatId])

    if(!{chatId}){ // корректное поведение при отсутствии искомого чата
        return <Redirect to='/chatpage'/>
    }

    return (
        <div>
            <CreateMessageForm /> 
            <MessageList />
        </div>
    )
}
