import { Redirect, useParams } from "react-router-dom";
import { CreateMessageForm } from "../../components/CreateMessageForm/CreateMessageForm";
import { MessageList } from "../../components/MessageList/MessageList";

export const Chat = (props) => {
    const {chatId} = useParams(); // id из url

    if(!{chatId}){ // корректное поведение при отсутствии искомого чата
        return <Redirect to='/chatpage'/>
    }

    return (
        <div>
            <CreateMessageForm chatId={chatId}/>
            <MessageList chatId={chatId}/>
        </div>
    )
}
